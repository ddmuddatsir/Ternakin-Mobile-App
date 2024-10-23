import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/CartReducer";
import checkoutReducer from "./redux/checkoutSlice";

export default configureStore({
  reducer: {
    cart: CartReducer,
    checkout: checkoutReducer,
  },
});
