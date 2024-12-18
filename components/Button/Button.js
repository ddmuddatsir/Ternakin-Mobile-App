import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";

const Button = ({ text, color, styles, children, onPress }) => {
  let backgroundColorFill;

  if (color === "primary") {
    backgroundColorFill = GlobalStyles.colors.primary;
  } else if (color === "secondary") {
    backgroundColorFill = GlobalStyles.colors.primary100;
  } else if (color === "success") {
    backgroundColorFill = GlobalStyles.colors.success500;
  } else if (color === "error") {
    backgroundColorFill = GlobalStyles.colors.error500;
  } else if (color === "off") {
    backgroundColorFill = GlobalStyles.colors.light;
  }

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          backgroundColor: backgroundColorFill,
          borderRadius: 12,
          borderWidth: color === "off" ? 1.6 : "",
          borderColor: color === "off" ? GlobalStyles.colors.primary100 : "",
          justifyContent: "center",
          alignItems: "center",
        },
        { ...styles },
      ]}
    >
      {text ? (
        <Text
          style={{
            color:
              color === "off"
                ? GlobalStyles.colors.primary100
                : GlobalStyles.colors.light,
            fontWeight: 600,
          }}
        >
          {text}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
