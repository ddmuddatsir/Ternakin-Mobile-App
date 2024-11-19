import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../constants/style";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import axios from "axios";
import { BASE_URL } from "../api/config/apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  addToWishlist,
  fetchWishlist,
  removeFromWishlist,
} from "../redux/WishlistReducer";
import { useDispatch, useSelector } from "react-redux";
import ProductCardSelling from "../components/Product/ProductSelling/ProductCardSelling";
import axiosInstance from "../utils/axiosInstance";

const MyWishlistScreeen = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const status = useSelector((state) => state.wishlist.status);

  const getAuthToken = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        return token;
      } else {
        // Token tidak ditemukan, mungkin user belum login
        throw new Error("Token not found");
      }
    } catch (err) {
      console.error("Error fetching token:", err);
      throw new Error("Error fetching token");
    }
  };

  const fetchWishlistWithToken = async () => {
    try {
      const token = await getAuthToken();
      const response = await axiosInstance.get(`/wishlist`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(fetchWishlist(response.data)); // Update wishlist in Redux
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      dispatch(fetchWishlist([]));
    }
  };

  useEffect(() => {
    fetchWishlistWithToken();
  }, [dispatch]);

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

  if (status === "error") {
    return <Text>Terjadi kesalahan saat memuat wishlist</Text>;
  }

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar back searcBar active={true} text={"Your Wishlist"} />
      </SafeAreaView>
      <ScrollView
        style={{
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <Text>Wishlist</Text>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
            paddingHorizontal: 10,
            paddingVertical: 12,
          }}
        >
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <View key={item._id}>
                <ProductCardSelling product={item} />
              </View>
            ))
          ) : (
            <Text>Wishlist</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default MyWishlistScreeen;

const styles = StyleSheet.create({});
