import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

// Mendapatkan wishlist dari server
export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const response = await axiosInstance.get("/wishlist");
    console.log(response.data);
    return response.data;
  }
);

// Menambahkan produk ke wishlist
export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (productId) => {
    const response = await axiosInstance.post("/wishlist", { productId });
    return response.data;
  }
);

// Menghapus produk dari wishlist
export const removeFromWishlist = createAsyncThunk(
  "wishlist/removeFromWishlist",
  async (productId) => {
    const response = await axiosInstance.delete("/wishlist", {
      data: { productId },
    });
    return response.data;
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    status: null,
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
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items = action.payload.products;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = action.payload.products;
      });
  },
});

export default wishlistSlice.reducer;
