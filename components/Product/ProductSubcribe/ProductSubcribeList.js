import { ScrollView, View } from "react-native";
import ProductSubcribe from "./ProductSubcribe";

const ProductSubcribeList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{ gap: 10, flexDirection: "row" }}>
        <ProductSubcribe />
        <ProductSubcribe />
        <ProductSubcribe />
      </View>
    </ScrollView>
  );
};

export default ProductSubcribeList;
