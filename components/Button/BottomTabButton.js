import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";

const BottomTabButton = ({ height, children }) => {
  return (
    <View style={{ width: "auto", height: height }}>
      <View
        style={{
          marginTop: 2,
          flex: 1,
          backgroundColor: GlobalStyles.colors.light,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 36,
          paddingTop: 12,
          paddingHorizontal: 12,
          gap: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </View>
    </View>
  );
};

export default BottomTabButton;

const styles = StyleSheet.create({});
