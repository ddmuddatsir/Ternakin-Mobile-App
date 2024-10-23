import { ScrollView, View } from "react-native";
import ProductCardService from "./ProductCardService";

const ProductCardServiceList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ gap: 10, flexDirection: "row" }}>
        <ProductCardService />
        <ProductCardService />
        <ProductCardService />
      </View>
    </ScrollView>
  );
};

export default ProductCardServiceList;
