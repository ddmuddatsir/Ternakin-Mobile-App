import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";

const ChatScreen = () => {
  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar searcBar back active={true} text={"Look for Transaction"} />
      </SafeAreaView>
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
