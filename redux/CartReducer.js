import { createSlice } from "@reduxjs/toolkit";
import { setOrderDetails, setCheckoutSuccess } from "./checkoutSlice";

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

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
    discount: 0,
    orders: [],
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
        state.cart.push({ ...product, quantity: 1 });
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
    //     addOrder: (state, action) => {
    //       const { orderDetails } = action.payload;
    //       state.orders.push({
    //         id: new Date().toISOString(),
    //         products: state.cart,
    //         total: state.total,
    //         discount: state.discount,
    //         ...orderDetails,
    //       });
    //       state.cart = [];
    //       state.total = 0;
    //       state.discount = 0;
    //     },
    //   },
    // });

    addOrder: (state, action) => {
      const { orderDetails } = action.payload;
      const newOrder = {
        id: new Date().toISOString(),
        products: state.cart,
        total: state.total,
        discount: state.discount,
        ...orderDetails,
      };
      state.orders.push(newOrder);
      // Reset cart after adding order
      state.cart = [];
      state.total = 0;
      state.discount = 0;

      // Dispatch actions to set order details in checkout slice
      setOrderDetails(newOrder); // Set order details in checkout
      setCheckoutSuccess(); // Mark checkout as successful
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  cleanCart,
  addOrder,
} = CartSlice.actions;

export default CartSlice.reducer;
