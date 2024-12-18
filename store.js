import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/CartReducer";
import checkoutReducer from "./redux/checkoutSlice";
import AuthReducer from "./redux/AuthReducer";
import WishlistReducer from "./redux/WishlistReducer";
import OrderReducer from "./redux/OrderReducer";

import CartCourseReducer from "./redux/Course/CartCourseReducer";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    checkout: checkoutReducer,
    auth: AuthReducer,
    wishlist: WishlistReducer,
    order: OrderReducer,

    //course redux
    cartCourse: CartCourseReducer,
  },
});
