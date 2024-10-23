import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    orderDetails: {},
    isCheckoutSuccessful: false,
  },

  reducers: {
    setOrderDetails(state, action) {
      state.orderDetails = action.payload;
    },
    clearOrderDetails(state) {
      state.orderDetails = {};
      state.isCheckoutSuccessful = false;
    },
    setCheckoutSuccess(state) {
      state.isCheckoutSuccessful = true;
    },
  },
});

export const { setOrderDetails, clearOrderDetails, setCheckoutSuccess } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
