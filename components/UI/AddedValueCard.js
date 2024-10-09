import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const AddedValueCard = ({ title, iconDefend, iconVerified, iconDelivery }) => {
  const backgroundColor = iconDefend
    ? GlobalStyles.colors.success50
    : iconVerified
    ? "#f5f1ee"
    : iconDelivery
    ? "#e0ffff"
    : null;

  const borderColor = iconDefend
    ? GlobalStyles.colors.success500
    : iconVerified
    ? GlobalStyles.colors.gray500
    : iconDelivery
    ? GlobalStyles.colors.blue300
    : null;

  const icon = iconDefend ? (
    <Ionicons
      name="shield-checkmark-outline"
      size={16}
      color={GlobalStyles.colors.success500}
    />
  ) : iconVerified ? (
    <MaterialCommunityIcons
      name="check-decagram-outline"
      size={16}
      color={GlobalStyles.colors.primary100}
    />
  ) : iconDelivery ? (
    <MaterialCommunityIcons
      name="truck-check-outline"
      size={16}
      color={GlobalStyles.colors.blue300}
    />
  ) : null;

  return (
    <View style={[styles.container, { backgroundColor, borderColor }]}>
      {icon}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default AddedValueCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    gap: 4,
    alignItems: "center",
    flexDirection: "row",
    padding: 6,
    borderRadius: 12,
    borderWidth: 1.5,
    marginRight: 6,
  },
  text: {
    fontWeight: "600",
    fontSize: 12,
    color: GlobalStyles.colors.gray500,
  },
});
