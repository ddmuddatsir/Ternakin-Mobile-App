import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";
import { BASE_URL } from "../api/config/apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, thunkAPI) => {
    try {
      // Ambil token dari AsyncStorage
      const token = await AsyncStorage.getItem("authToken");
      if (!token) {
        return thunkAPI.rejectWithValue({ message: "Token not found" });
      }

      // Lakukan permintaan ke endpoint orders
      const response = await axiosInstance.get(`${BASE_URL}/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data; // Data berhasil diambil
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data
          : error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData, thunkAPI) => {
    try {
      // Ambil token dari AsyncStorage
      const token = await AsyncStorage.getItem("authToken");
      if (!token) {
        return thunkAPI.rejectWithValue({ message: "Token not found" });
      }

      // Kirim permintaan untuk membuat pesanan baru
      const response = await axiosInstance.post(
        `${BASE_URL}/orders`,
        orderData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return response.data; // Data berhasil dibuat
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data
          : error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "successed";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "loading";
        state.error = action.payload;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      });
  },
});

export default orderSlice.reducer;
