import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { logout, refreshToken } from "../redux/AuthReducer";
import { BASE_URL } from "../api/config/apiConfig";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosForRefreshToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;

//       try {
//         const oldToken = await AsyncStorage.getItem("authToken");
//         const response = await axios.post(`${BASE_URL}/refresh-token`, {
//           token: oldToken,
//         });
//         const { newAccessToken } = response.data;

//         //save new token in Asyncstorage
//         await AsyncStorage.setItem("authToken", newAccessToken);
//         store.dispatch(refreshToken({ token: newAccessToken }));

//         //Set new header and re-request for failed request
//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return axiosInstance(originalRequest);
//       } catch (error) {
//         // if refresh token is failed, logout and move to loginscreen
//         await AsyncStorage.clear();
//         store.dispatch(logout());
//       }
//     }
//     return Promise.reject(error);
//   }
// );

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      console.error("Error attaching token:", error);
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const oldToken = await AsyncStorage.getItem("authToken");

        // Gunakan instance khusus untuk refresh token
        const response = await axiosForRefreshToken.post("/refresh-token", {
          token: oldToken,
        });

        const { newAccessToken } = response.data;

        // Simpan token baru
        await AsyncStorage.setItem("authToken", newAccessToken);
        store.dispatch(refreshToken({ token: newAccessToken }));

        // Perbarui header dan ulangi permintaan
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);

        // Logout jika refresh token gagal
        await AsyncStorage.clear();
        store.dispatch(logout());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
