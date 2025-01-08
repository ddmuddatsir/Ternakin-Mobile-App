import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Utility functions
const calculateTotal = (cart) => {
  return cart.reduce(
    (total, product) =>
      total +
      product.quantity *
        (product.price - (product.price * product.discPer) / 100),
    0
  );
};

const calculateDiscount = (cart) => {
  return cart.reduce(
    (discount, product) =>
      discount + (product.quantity * (product.price * product.discPer)) / 100,
    0
  );
};

const saveCartToStorage = async (cart) => {
  try {
    await AsyncStorage.setItem("@cart_data", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart data:", error);
  }
};

// Async thunk to load cart from AsyncStorage
export const loadCart = createAsyncThunk("cart/loadCart", async () => {
  try {
    const storedCart = await AsyncStorage.getItem("@cart_data");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error loading cart data:", error);
    return [];
  }
});

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    discount: 0,
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

      saveCartToStorage(state.cart);
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);

      saveCartToStorage(state.cart);
    },
    incrementQuantity(state, action) {
      const product = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (product) {
        product.quantity++;
      }

      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);

      saveCartToStorage(state.cart);
    },
    decrementQuantity(state, action) {
      const product = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (product) {
        if (product.quantity > 1) {
          product.quantity--;
        } else {
          state.cart = state.cart.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }

      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);

      saveCartToStorage(state.cart);
    },
    cleanCart(state) {
      state.cart = [];
      state.total = 0;
      state.discount = 0;

      saveCartToStorage(state.cart);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);
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
