import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/style";

const BackButton = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  return (
    <Pressable style={{ paddingRight: 6 }} onPress={handleGoBack}>
      <MaterialIcons
        name="keyboard-arrow-left"
        size={24}
        color={GlobalStyles.colors.text700}
      />
    </Pressable>
  );
};

export default BackButton;
