import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/style";

const EmptyCart = () => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", padding: 22 }}
    >
      <Ionicons
        name="cart-outline"
        size={100}
        color={GlobalStyles.colors.store_line}
      />
      <Text
        style={{
          fontWeight: 700,
          fontSize: 22,
          color: GlobalStyles.colors.store_line,
        }}
      >
        Your Cart is Empty
      </Text>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({});
