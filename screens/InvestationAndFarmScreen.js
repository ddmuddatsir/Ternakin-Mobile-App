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
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeaderBar back active={true} text={"Nearby farm"} />
      </View>
    </SafeAreaView>
  );
};

export default InvestationAndFarmScreen;

const styles = StyleSheet.create({});
