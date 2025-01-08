import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/CartReducer";
import checkoutReducer from "./redux/checkoutSlice";
import AuthReducer from "./redux/AuthReducer";
import WishlistReducer from "./redux/WishlistReducer";
import OrderReducer from "./redux/OrderReducer";
import WalletReducer from "./redux/WalletReducer";
import ChatReducer from "./redux/Chat/ChatReducer";

import CartCourseReducer from "./redux/Course/CartCourseReducer";
import WishlistCourseReducer from "./redux/Course/WishlistCourseReducer";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    checkout: checkoutReducer,
    auth: AuthReducer,
    wishlist: WishlistReducer,
    order: OrderReducer,

    //course redux
    cartCourse: CartCourseReducer,
    wishlistCourse: WishlistCourseReducer,

    //payment redux
    wallet: WalletReducer,

    //chat redux
    chat: ChatReducer,
  },
});
