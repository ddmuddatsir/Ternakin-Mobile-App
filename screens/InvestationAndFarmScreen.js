import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";

const InvestationAndFarmScreen = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.light,
      }}
    >
      <HeaderBar back active={true} text={"Nearby farm"} />
    </SafeAreaView>
  );
};

export default InvestationAndFarmScreen;

const styles = StyleSheet.create({});
