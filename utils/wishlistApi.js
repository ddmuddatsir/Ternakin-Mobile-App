// import axiosInstance from "./axiosInstance";
// import { store } from "../store";
// import {
//   addToWishlist,
//   removeFromWishlist,
//   setWishlist,
// } from "../redux/WishlistReducer";
// import { BASE_URL } from "../api/config/apiConfig";

// export const fetchWishlist = async () => {
//   try {
//     const response = await axiosInstance.get(`/wishlist`);
//     store.dispatch(setWishlist(response.data));
//   } catch (error) {
//     console.error("Failed to fetch wishlist:", error);
//   }
// };

// export const addWishlist = async (productId) => {
//   try {
//     const response = await axiosInstance.post(`/wishlist`, {
//       productId,
//     });
//     store.dispatch(addToWishlist(response.data));
//   } catch (error) {
//     console.error("Failed to add item to wishlist:", error);
//   }
// };

// export const deleteWishlist = async (productId) => {
//   try {
//     const response = await axiosInstance.delete(`/wishlist/${productId}`);
//     store.dispatch(removeFromWishlist({ id: productId }));
//   } catch (error) {
//     console.error("Failed to delete item from wishlist:", error);
//   }
// };
