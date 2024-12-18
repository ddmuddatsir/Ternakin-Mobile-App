//Perbaiki: data ketika di fetching tidak tervisualisasi atau null

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchCartCourse = createAsyncThunk(
  "cartCourse/fetchCartCourse",
  async () => {
    const response = await axiosInstance.get(`/cart-courses`);
    return response.data;
  }
);

export const addToCartCourse = createAsyncThunk(
  "cartCourse/addToCartCourse",
  async ({ productId }) => {
    const response = await axiosInstance.post(`/cart-courses`, {
      productId,
    });
    return response.data;
  }
);

export const removeFromCartCourse = createAsyncThunk(
  "cartCourse/removeFromCartCourse",
  async (productId) => {
    const response = await axiosInstance.delete(`/cart-courses/${productId}`);
    return response.data;
  }
);

export const clearCartCourse = createAsyncThunk(
  "cartCourse/clearCartCourse",
  async () => {
    const response = await axiosInstance.delete(`/cart-courses`);
    return response.data;
  }
);

export const CartCourseSlice = createSlice({
  name: "cartCourse",
  initialState: {
    cartCourse: [],
    status: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartCourse = action.payload;
      })
      .addCase(fetchCartCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addToCartCourse.fulfilled, (state, action) => {
        state.cartCourse = action.payload;
      })
      .addCase(removeFromCartCourse.fulfilled, (state, action) => {
        state.cartCourse = action.payload;
      })
      .addCase(clearCartCourse.fulfilled, (state) => {
        state.cartCourse = [];
      });
  },
});

export default CartCourseSlice.reducer;
