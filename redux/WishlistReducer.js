import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const WISHLIST_KEY = "wishlist";

const saveWishlistToStorage = async (wishlist) => {
  try {
    await AsyncStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  } catch (error) {
    console.error("Failed to save wishlist to AsyncStorage");
  }
};

const loadWishlistFromStorage = async () => {
  try {
    const storedWishlist = await AsyncStorage.getItem(WISHLIST_KEY);
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  } catch (error) {
    console.error("Failed to load wishlist from AsyncStorage");
    return [];
  }
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const itemExists = state.wishlist.find(
        (item) => item._id === action.payload._id
      );
      if (!itemExists) {
        state.wishlist.push(action.payload);
        saveWishlistToStorage(state.wishlist);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item._id !== action.payload._id
      );
      saveWishlistToStorage(state.wishlist);
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
    },
    clearWishlist: (state) => {
      state.wishlist = [];
      saveWishlistToStorage(state.wishlist); // Mengosongkan wishlist di AsyncStorage
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist, clearWishlist } =
  wishlistSlice.actions;

export const initializeWishlist = () => async (dispatch) => {
  const loadedWishlist = await loadWishlistFromStorage();
  dispatch(setWishlist(loadedWishlist));
};

export default wishlistSlice.reducer;
