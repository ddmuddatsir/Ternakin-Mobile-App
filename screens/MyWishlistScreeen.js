import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../constants/style";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import axios from "axios";
import { BASE_URL } from "../api/config/apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyWishlistScreeen = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        const response = await axios.get(`${BASE_URL}/wishlist/${token}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWishlist(response.data);
      }
      setWishlist(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to load wishlist");
      setLoading(false);
    }
  };

  const addToWishlit = async (productId) => {
    const token = await AsyncStorage.getItem("authToken");

    try {
      const response = await axios.post(
        `${BASE_URL}/wishlist/add`,
        {
          productId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setWishlist((prevWishlist) => [...prevWishlist, response.data]);
      Alert.alert("Success", response.data.message);
      fetchWishlist();
    } catch (error) {
      Alert.alert("Error", "Failed to add product to wishlist");
      console.error(error);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/wishlist/remove`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { productId },
      });
      Alert.alert("Success", response.data.message);
      fetchWishlist();
    } catch (error) {
      Alert.alert("Error", "Failed to remove product from wishlist");
      console.error(error);
    }
  };

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
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Your Wishlist</Text>
        {loading ? (
          <Text style={{ fontSize: 18 }}>Loading...</Text>
        ) : wishlist.length > 0 ? (
          wishlist.map((item) => (
            <View key={item.id} style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
              <Button
                title="Remove from Wishlist"
                onPress={() => removeFromWishlist(item.id)}
              />
            </View>
          ))
        ) : (
          <Text style={{ fontSize: 18 }}>Your wishlist is empty.</Text>
        )}
      </ScrollView>
    </>
  );
};

export default MyWishlistScreeen;

const styles = StyleSheet.create({});
