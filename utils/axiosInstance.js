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
        const response = await axios.post(`${BASE_URL}/refresh-token`, {
          token: oldToken,
        });
        const { newAccessToken } = response.data;

        //save new token in Asyncstorage
        await AsyncStorage.setItem("authToken", newAccessToken);
        store.dispatch(refreshToken({ token: newAccessToken }));

        //Set new header and re-request for failed request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        // if refresh token is failed, logout and move to loginscreen
        await AsyncStorage.clear();
        store.dispatch(logout());
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
