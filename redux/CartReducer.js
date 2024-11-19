import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setOrderDetails, setCheckoutSuccess } from "./checkoutSlice";
import axios from "axios";
import { BASE_URL } from "../api/config/apiConfig";

const calculateTotal = (cart) => {
  const totalBeforeDiscount = cart.reduce(
    (total, product) =>
      total +
      product.quantity *
        (product.price - (product.price * product.discPer) / 100),
    0
  );

  return totalBeforeDiscount;
};

const calculateDiscount = (cart) => {
  const totalDiscount = cart.reduce(
    (discount, product) =>
      discount + (product.quantity * (product.price * product.discPer)) / 100,
    0
  );
  return totalDiscount;
};

export const saveOrderToBackend = createAsyncThunk(
  "cart/saveOrderToBackend",
  async (orderData) => {
    const response = await axios.post(`${BASE_URL}/orders`, orderData);
    return response.data;
  }
);

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    discount: 0,
    orders: [],
    status: null,
  },

  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.cart.find(
        (item) => item._id === product._id
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, productId: product._id, quantity: 1 });
      }
      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);
    },
    removeFromCart: (state, action) => {
      const removeProduct = state.cart.filter(
        (product) => product._id !== action.payload._id
      );
      state.cart = removeProduct;
      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);
    },
    incrementQuantity: (state, action) => {
      const productPresent = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (productPresent) {
        productPresent.quantity++;
      }
      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);
    },
    decrementQuantity: (state, action) => {
      const productPresent = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (productPresent) {
        if (productPresent.quantity === 1) {
          const removeProduct = state.cart.filter(
            (product) => product._id !== action.payload._id
          );
          state.cart = removeProduct;
        } else {
          productPresent.quantity--;
        }
      }
      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);
    },
    cleanCart: (state) => {
      state.cart = [];
      state.total = 0;
      state.discount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveOrderToBackend.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveOrderToBackend.fulfilled, (state, action) => {
        const newOrder = action.payload;

        state.orders.push(newOrder); //save order to redux
        state.status = "succeeded";

        //clean cart after orders saved
        state.cart = [];
        state.total = 0;
        state.discount = 0;

        //success checkout order
        setOrderDetails(newOrder);
        setCheckoutSuccess();
      })
      .addCase(saveOrderToBackend.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  cleanCart,
} = CartSlice.actions;

export default CartSlice.reducer;
