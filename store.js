import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/CartReducer";
import checkoutReducer from "./redux/checkoutSlice";
import AuthReducer from "./redux/AuthReducer";
import WishlistReducer from "./redux/WishlistReducer";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    checkout: checkoutReducer,
    auth: AuthReducer,
    wishlist: WishlistReducer,
  },
});
