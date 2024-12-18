import { View } from "react-native";
import { GlobalStyles } from "../constants/style";
import ProductCardSellingList from "../components/Product/ProductSelling/ProductCardSellingList";

const ProductListScreen = () => {
  return (
    <>
      <View style={{ backgroundColor: GlobalStyles.colors.light, padding: 10 }}>
        <ProductCardSellingList filter />
      </View>
    </>
  );
};

export default ProductListScreen;
