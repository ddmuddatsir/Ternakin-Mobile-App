import { ScrollView, View } from "react-native";
import Promo1 from "../../assets/BannerPromo/promo1.png";
import Promo2 from "../../assets/BannerPromo/promo2.png";
import BannerItem from "./BannerItem";

const PromoBannerList = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
    >
      <BannerItem image={Promo1} />
      <BannerItem image={Promo2} />
    </ScrollView>
  );
};

export default PromoBannerList;
