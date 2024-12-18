import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../constants/style";
import HeaderBar from "../components/HeaderBar/HeaderBar";

import { fetchWishlist } from "../redux/WishlistReducer";
import { useDispatch, useSelector } from "react-redux";
import ProductCardSelling from "../components/Product/ProductSelling/ProductCardSelling";
import { fetchData } from "../utils/fetchData";

const MyWishlistScreen = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const status = useSelector((state) => state.wishlist.status);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataWishlist();
  }, [dispatch]);

  const fetchDataWishlist = async () => {
    setLoading(true);
    const data = await fetchData(`/wishlist`);

    if (data) {
      dispatch(fetchWishlist(data));
    } else {
      console.error("Failed to load Wishlist data");
      dispatch(fetchWishlist([]));
    }
  };

  if (status === "loading" || loading) {
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

export default MyWishlistScreen;

const styles = StyleSheet.create({});
