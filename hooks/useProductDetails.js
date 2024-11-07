// import { useState, useEffect } from "react";
// import axios from "axios";
// import { BASE_URL } from "../api/config/apiConfig";

// export const useProductDetail = (productId, token) => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   useEffect(() => {
//     const fetchProductDetail = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/product/${productId}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProductDetail();
//   }, [productId]);

//   const toggleWishlist = async () => {
//     try {
//       const url = isWishlisted
//         ? `${BASE_URL}/wishlist/remove`
//         : `${BASE_URL}/wishlist/add`;
//       const response = await axios.post(url, { productId, token });
//       setIsWishlisted(!isWishlisted);
//     } catch (error) {
//       console.error("Failed to toggle wishlist:", error);
//     }
//   };

//   return { product, loading, isWishlisted, toggleWishlist };
// };
