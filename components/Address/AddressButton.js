import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { useNavigation } from "@react-navigation/native";

const AddressButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("AddressList")}
      style={{ flexDirection: "row", gap: 4 }}
    >
      <Text style={{ color: GlobalStyles.colors.gray500 }}>Your Farm</Text>
      <Text style={{ color: GlobalStyles.colors.text700 }}>Ciawi, Bogor</Text>
    </Pressable>
  );
};

export default AddressButton;

const styles = StyleSheet.create({});
