import { StyleSheet, View } from "react-native";
import CartItemSubcribe from "./CartItemSubcribe";

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
