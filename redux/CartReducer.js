// import { createSlice } from "@reduxjs/toolkit";

// const calculateTotal = (cart) => {
//   const totalBeforeDiscount = cart.reduce(
//     (total, product) =>
//       total +
//       product.quantity *
//         (product.price - (product.price * product.discPer) / 100),
//     0
//   );

//   return totalBeforeDiscount;
// };

// const calculateDiscount = (cart) => {
//   const totalDiscount = cart.reduce(
//     (discount, product) =>
//       discount + (product.quantity * (product.price * product.discPer)) / 100,
//     0
//   );
//   return totalDiscount;
// };

// export const CartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//     total: 0,
//     discount: 0,
//   },

//   reducers: {
//     // addToCart: (state, action) => {
//     //   const productPresent = state.cart.find(
//     //     (product) => product.id === action.payload.id
//     //   );
//     //   if (productPresent) {
//     //     productPresent.quantity++;
//     //   } else {
//     //     state.cart.push({
//     //       ...action.payload,
//     //       quantity: 1,
//     //     });
//     //   }
//     //   state.total = calculateTotal(state.cart);
//     //   state.discount = calculateDiscount(state.cart);
//     // },

//     addToCart(state, action) {
//       const product = action.payload;
//       const existingProduct = state.cart.find(
//         (item) => item._id === product._id
//       );

//       if (existingProduct) {
//         existingProduct.quantity += product.quantity; // Adjust as needed
//       } else {
//         state.cart.push({ ...product, quantity: product.quantity });
//       }
//     },
//     removeFromCart: (state, action) => {
//       const removeproduct = state.cart.filter(
//         (product) => product.id !== action.payload.id
//       );
//       state.cart = removeproduct;
//     },
//     incrementQuantity: (state, action) => {
//       const productPresent = state.cart.find(
//         (product) => product.id === action.payload.id
//       );
//       productPresent.quantity++;
//       state.total = calculateTotal(state.cart, state.discount);
//       state.discount = calculateDiscount(state.cart);
//     },
//     decrementQuantity: (state, action) => {
//       const productPresent = state.cart.find(
//         (product) => product.id === action.payload.id
//       );
//       if (productPresent) {
//         if (productPresent.quantity === 1) {
//           const removeproduct = state.cart.filter(
//             (product) => product.id !== action.payload.id
//           );
//           state.cart = removeproduct;
//         } else {
//           productPresent.quantity--;
//         }
//         state.total = calculateTotal(state.cart, state.discount);
//         state.discount = calculateDiscount(state.cart);
//       }
//     },
//     cleanCart: (state) => {
//       state.cart = [];
//       state.total = 0;
//       state.discount = 0;
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   incrementQuantity,
//   decrementQuantity,
//   cleanCart,
// } = CartSlice.actions;

// export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

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
  },

  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existingProduct = state.cart.find(
        (item) => item._id === product._id
      );

      if (existingProduct) {
        existingProduct.quantity += product.quantity; // Adjust as needed
      } else {
        state.cart.push({ ...product, quantity: product.quantity });
      }
      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);
    },
    removeFromCart: (state, action) => {
      const removeProduct = state.cart.filter(
        (product) => product._id !== action.payload._id // Changed to use _id
      );
      state.cart = removeProduct;
      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);
    },
    incrementQuantity: (state, action) => {
      const productPresent = state.cart.find(
        (product) => product._id === action.payload._id // Changed to use _id
      );
      if (productPresent) {
        productPresent.quantity++;
      }
      state.total = calculateTotal(state.cart);
      state.discount = calculateDiscount(state.cart);
    },
    decrementQuantity: (state, action) => {
      const productPresent = state.cart.find(
        (product) => product._id === action.payload._id // Changed to use _id
      );
      if (productPresent) {
        if (productPresent.quantity === 1) {
          const removeProduct = state.cart.filter(
            (product) => product._id !== action.payload._id // Changed to use _id
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
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  cleanCart,
} = CartSlice.actions;

export default CartSlice.reducer;
