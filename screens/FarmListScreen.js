import { View } from "react-native";
import { GlobalStyles } from "../constants/style";
import FarmProductCardList from "../components/Product/ProductSelling/FarmProductCardList";

const FarmListScreen = () => {
  return (
    <View style={{ backgroundColor: GlobalStyles.colors.light, padding: 10 }}>
      <FarmProductCardList />
    </View>
  );
};

export default FarmListScreen;
