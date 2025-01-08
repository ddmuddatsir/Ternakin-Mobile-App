import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Fungsi untuk menyimpan data cart ke AsyncStorage
const saveCartCourseToStorage = async (cartCourse) => {
  try {
    await AsyncStorage.setItem("@cartCourse_data", JSON.stringify(cartCourse));
  } catch (error) {
    console.error("Error saving cart course data:", error);
  }
};

// Fungsi untuk memuat data cart dari AsyncStorage
export const loadCartCourse = createAsyncThunk(
  "cartCourse/loadCartCourse",
  async () => {
    try {
      const storedCartCourse = await AsyncStorage.getItem("@cartCourse_data");
      return storedCartCourse ? JSON.parse(storedCartCourse) : [];
    } catch (error) {
      console.error("Error loading cart data:", error);
      return [];
    }
  }
);

// Slice Redux untuk cart course
export const CartCourseSlice = createSlice({
  name: "cartCourse",
  initialState: {
    cartCourse: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addToCartCourse(state, action) {
      const product = action.payload;
      const existingProduct = state.cartCourse.find(
        (item) => item._id === product._id
      );

      if (!existingProduct) {
        state.cartCourse.push(product);
      }
    },
    removeFromCartCourse(state, action) {
      const product = action.payload;
      state.cartCourse = state.cartCourse.filter(
        (item) => item._id !== product._id
      );
    },

    cleanCartCourse(state) {
      state.cartCourse = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCartCourse.fulfilled, (state, action) => {
        state.cartCourse = action.payload;
      })
      .addMatcher(
        (action) =>
          action.type.endsWith("Course/addToCartCourse") ||
          action.type.endsWith("Course/removeFromCartCourse") ||
          action.type.endsWith("Course/cleanCartCourse"),
        (state, action) => {
          saveCartCourseToStorage(state.cartCourse);
        }
      );
  },
});

export const { addToCartCourse, removeFromCartCourse, cleanCartCourse } =
  CartCourseSlice.actions;

export default CartCourseSlice.reducer;
