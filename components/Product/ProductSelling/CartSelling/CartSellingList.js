import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../../constants/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CartItemSellingItem from "./CartItemSelling";
import { useState } from "react";

const CartSellingList = ({ product, onIncrement, onDecrement }) => {
  const [checkedFarms, setCheckedFarms] = useState(new Set());
  const [checkedProducts, setCheckedProducts] = useState({});

  const toggleFarmCheck = (farmId) => {
    const updatedSet = new Set(checkedFarms);
    if (updatedSet.has(farmId)) {
      updatedSet.delete(farmId);
    } else {
      updatedSet.add(farmId);
    }
    setCheckedFarms(updatedSet);
  };

  const toggleProductCheck = (productId) => {
    setCheckedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  return (
    <View style={{ gap: 8 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Pressable onPress={() => toggleFarmCheck(product.farmId._id)}>
          <MaterialCommunityIcons
            name={`checkbox-blank${
              checkedFarms.has(product.farmId._id) ? "" : "-outline"
            }`}
            size={26}
            color={
              checkedFarms.has(product.farmId._id)
                ? GlobalStyles.colors.primary
                : GlobalStyles.colors.gray100
            }
          />
        </Pressable>

        <Text
          style={{
            color: GlobalStyles.colors.text700,
            fontWeight: 600,
          }}
        >
          {product.farmId.name}
        </Text>
      </View>
      <CartItemSellingItem
        key={product._id}
        product={product}
        onIncrement={() => onIncrement(product)}
        onDecrement={() => onDecrement(product, product.quantity)}
        onCheckProduct={toggleProductCheck}
        checked={checkedProducts[product._id]}
      />
    </View>
  );
};

export default CartSellingList;

const styles = StyleSheet.create({});
