import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const WISHLIST_COURSE_KEY = "wishlistcourse";

const saveWishlistCourseToStorage = async (wishlistCourse) => {
  try {
    await AsyncStorage.setItem(
      WISHLIST_COURSE_KEY,
      JSON.stringify(wishlistCourse)
    );
  } catch (error) {
    console.error("Failed to save wishlist to AsyncStorage");
  }
};

const loadWishlistCourseFromStorage = async () => {
  try {
    const storedWishlistCourse = await AsyncStorage.getItem(
      WISHLIST_COURSE_KEY
    );
    return storedWishlistCourse ? JSON.parse(storedWishlistCourse) : [];
  } catch (error) {
    console.error("Failed to load wishlist course from AsyncStorage");
    return [];
  }
};

const wishlistCourseSlice = createSlice({
  name: "wishlistCourse",
  initialState: {
    wishlistCourse: [],
  },
  reducers: {
    addToWishlistCourse: (state, action) => {
      const itemExists = state.wishlistCourse.find(
        (item) => item._id === action.payload._id
      );
      if (!itemExists) {
        state.wishlistCourse.push(action.payload);
        saveWishlistCourseToStorage(state.wishlistCourse);
      }
    },
    removeFromWishlistCourse: (state, action) => {
      state.wishlistCourse = state.wishlistCourse.filter(
        (item) => item._id !== action.payload._id
      );
      saveWishlistCourseToStorage(state.wishlistCourse);
    },
    setWishlistCourse: (state, action) => {
      state.wishlistCourse = action.payload;
    },
  },
});

export const {
  addToWishlistCourse,
  removeFromWishlistCourse,
  setWishlistCourse,
} = wishlistCourseSlice.actions;

export const initializeWishlistCourse = () => async (dispatch) => {
  const loadedWishlistCourse = await loadWishlistCourseFromStorage();
  dispatch(setWishlistCourse(loadedWishlistCourse));
};

export default wishlistCourseSlice.reducer;
