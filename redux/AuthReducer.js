import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    userName: null,
    userEmail: null,
    isLoggedIn: false,
  },
  reducers: {
    login(state, action) {
      const { token, userId, userName, userEmail, isLoggedIn } = action.payload;
      state.token = token;
      state.userId = userId;
      state.userName = userName;
      state.isLoggedIn = true;
    },
    logout(state, action) {
      state.token = null;
      state.userId = null;
      state.userName = null;
      state.isLoggedIn = false;
    },
    refreshToken(state, action) {
      state.token = action.payload.token;
    },
  },
});

export const { login, logout, refreshToken } = AuthSlice.actions;
export default AuthSlice.reducer;
