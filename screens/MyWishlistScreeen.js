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
      <HeaderBar back searcBar active={true} text={"Look for Transaction"} />
    </SafeAreaView>
  );
};

export default MyWishlistScreeen;

const styles = StyleSheet.create({});
