import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/wishlist");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/wishlist", { productId });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete("/wishlist", {
        data: { productId },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addToWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items = action.payload.products;
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeFromWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || "Failed to remove product from wishlist.";
      });
  },
});

export default wishlistSlice.reducer;
