import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../../../constants/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CartItemSellingItem from "./CartItemSelling";
import { useState } from "react";

const CartSellingList = ({ product, onIncrement, onDecrement }) => {
  const [checkFarmProduct, setCheckFarmProduct] = useState(false);
  const [checkProduct, setCheckProduct] = useState({});

  const handleCheckProduct = (product) => {
    setCheckProduct((prevState) => ({
      ...prevState,
      [product]: !prevState[product],
    }));
  };

  const handleCheckFarmProduct = (product) => {
    setCheckFarmProduct((prevState) => !prevState);

    setCheckProduct((prevState) => ({
      ...prevState,
      [product]: !prevState[product],
    }));
  };

  const farmName = product.farmId.name;
  const showFarmName = !renderedFarms.has(farmName);

  // Add farm name to the Set if not already present
  if (showFarmName) {
    renderedFarms.add(farmName);
  }

  return (
    <View style={{ gap: 8 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Pressable onPress={handleCheckFarmProduct}>
          <MaterialCommunityIcons
            name={`checkbox-blank${checkFarmProduct ? "" : "-outline"}`}
            size={26}
            color={
              checkFarmProduct
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
          {farmName}
        </Text>
      </View>
      <CartItemSellingItem
        key={product.id}
        product={product}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onCheckProduct={handleCheckProduct}
        checked={checkProduct[product]}
      />
    </View>
  );
};

export default CartSellingList;

const styles = StyleSheet.create({});
