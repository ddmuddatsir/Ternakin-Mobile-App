import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";
import HeaderBar from "../components/HeaderBar/HeaderBar";

const MyWishlistScreeen = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.light,
      }}
    >
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeaderBar back searcBar active={true} text={"Look for Transaction"} />
      </View>
    </SafeAreaView>
  );
};

export default MyWishlistScreeen;

const styles = StyleSheet.create({});
