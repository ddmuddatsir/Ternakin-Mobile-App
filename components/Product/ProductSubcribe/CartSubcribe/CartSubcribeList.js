import { Pressable, StyleSheet, Text, View } from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CartItemSubcribe from "./CartItemSubcribe";
import { GlobalStyles } from "../../../../constants/style";

const CartSubcribeList = ({ productCourse }) => {
  return (
    <View style={{ gap: 8 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <CartItemSubcribe
          key={productCourse._id}
          productCourse={productCourse}
        />
      </View>
    </View>
  );
};

export default CartSubcribeList;

const styles = StyleSheet.create({});
