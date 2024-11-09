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

const MyWishlistScreeen = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const status = useSelector((state) => state.wishlist.status);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  if (status === "loading") {
    return <Text>Loading...</Text>;
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
      <ScrollView>
        <View>
          <Text>Wishlist</Text>
          {wishlist.map((item) => (
            <View key={item._id}>
              <Text>Wishlist ID: {item._id}</Text>
              <Text>Wishlist ID: {item.title}</Text>
              <Text>Wishlist ID: {item.productId}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default MyWishlistScreeen;

const styles = StyleSheet.create({});
