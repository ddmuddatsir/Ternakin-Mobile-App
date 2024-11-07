import {
  createSlice,
  // createAsyncThunk
} from "@reduxjs/toolkit";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { BASE_URL } from "../api/config/apiConfig";
// import axiosInstance from "../utils/axiosInstance";

// export const login = createAsyncThunk("auth/login", async (credentials) => {
//   const response = await axiosInstance.post(`${BASE_URL}/login`, credentials);
//   return response.data;
// });

// export const refreshToken = createAsyncThunk(
//   "authSlice/refreshToken",
//   async (refreshToken) => {
//     const response = await axios.post(`${BASE_URL}/refresh-token`, {
//       refreshToken,
//     });
//     return response.data;
//   }
// );

// export const loadToken = createAsyncThunk("auth/loadToken", async () => {
//   const token = await AsyncStorage.getItem("authToken");
//   const refreshToken = await AsyncStorage.getItem("refreshToken");
//   return { token, refreshToken };
// });

// export const AuthSlice = createSlice({
//   name: "auth",
//   initialState: {
//     token: null,
//     refreshToken: null,
//     userId: null,
//     userName: null,
//     userEmail: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.refreshToken = null;
//       state.userId = null;
//       state.userName = null;
//       state.userEmail = null;

//       AsyncStorage.removeItem("authToken");
//       AsyncStorage.removeItem("refreshToken");
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(login.fulfilled, async (state, action) => {
//         const { token, refreshToken, userId, name, email } = action.payload;
//         state.loading = false;
//         state.token = token;
//         state.refreshToken = refreshToken;
//         state.userId = userId;
//         state.userName = name;
//         state.userEmail = email;

//         await AsyncStorage.setItem("authToken", token);
//         await AsyncStorage.setItem("refreshToken", refreshToken);
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(refreshToken.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(refreshToken.fulfilled, async (state, action) => {
//         const { token, refreshToken } = action.payload;
//         state.loading = false;
//         state.token = token;
//         state.refreshToken = refreshToken;

//         await AsyncStorage.setItem("authToken", token);
//         await AsyncStorage.setItem("refreshToken", refreshToken);
//       })
//       .addCase(refreshToken.rejected, (state) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(loadToken.fulfilled, (state, action) => {
//         state.token = action.payload.token;
//         state.refreshToken = action.payload.refreshToken;
//       });
//   },
// });

// export const { logout } = AuthSlice.actions;
// export default AuthSlice.reducer;

export const authSlice = createSlice({
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

export const { login, logout, refreshToken } = authSlice.actions;
export default authSlice.reducer;
