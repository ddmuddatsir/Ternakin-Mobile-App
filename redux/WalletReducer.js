import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";
import { fetchData } from "../utils/fetchData";

// Create Wallet
export const createWallet = createAsyncThunk(
  "wallet/createWallet",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/wallet");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create wallet"
      );
    }
  }
);

// Fetch data wallet
export const fetchWalletData = createAsyncThunk(
  "wallet/fetchWallet",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchData("/wallet");
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch wallet"
      );
    }
  }
);

// Top-up wallet
export const topUpWallet = createAsyncThunk(
  "wallet/topUp",
  async ({ amount }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/wallet/top-up", { amount });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to top-up"
      );
    }
  }
);

// Pembayaran
export const makePayment = createAsyncThunk(
  "wallet/makePayment",
  async ({ amount, description }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/wallet/pay", {
        amount,
        description,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to process payment"
      );
    }
  }
);

// Wallet Slice
const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    wallet: null, // Menyimpan data wallet
    loading: false,
    error: null,
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch wallet data
    builder.addCase(fetchWalletData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchWalletData.fulfilled, (state, action) => {
      state.loading = false;
      state.wallet = action.payload;
    });
    builder.addCase(fetchWalletData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Top-up wallet
    builder.addCase(topUpWallet.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(topUpWallet.fulfilled, (state, action) => {
      state.loading = false;
      state.wallet = action.payload; // Update wallet setelah top-up
    });
    builder.addCase(topUpWallet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Make payment
    builder.addCase(makePayment.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(makePayment.fulfilled, (state, action) => {
      state.loading = false;
      state.wallet = action.payload.wallet; // Update wallet setelah pembayaran
    });
    builder.addCase(makePayment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createWallet.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createWallet.fulfilled, (state, action) => {
      state.loading = false;
      state.wallet = action.payload; // Update wallet setelah dibuat
    });
    builder.addCase(createWallet.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { resetError } = walletSlice.actions;
export default walletSlice.reducer;
