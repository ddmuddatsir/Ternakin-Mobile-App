import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";

const CommunityAndConsultScreen = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: GlobalStyles.colors.light,
      }}
    >
      <HeaderBar back active={true} text={"Find Chat"} />
    </SafeAreaView>
  );
};

export default CommunityAndConsultScreen;

const styles = StyleSheet.create({});
