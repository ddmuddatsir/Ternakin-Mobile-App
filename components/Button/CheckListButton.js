import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GlobalStyles } from "../../constants/style";

const CheckListButton = ({ onChange, value }) => {
  const handlePress = () => {
    onChange(!value);
  };

  return (
    <Pressable onPress={handlePress}>
      <MaterialCommunityIcons
        name={value ? "checkbox-blank" : "checkbox-blank-outline"}
        size={26}
        color={
          value ? GlobalStyles.colors.primary : GlobalStyles.colors.gray100
        }
      />
    </Pressable>
  );
};

export default CheckListButton;

const styles = StyleSheet.create({});
