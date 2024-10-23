import { ScrollView } from "react-native";
import Webinar1 from "../../assets/BannerAds/webinar1.png";
import Webinar2 from "../../assets/BannerAds/webinar2.png";
import BannerItem from "./BannerItem";

const AdsBannerList = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
    >
      <BannerItem image={Webinar1} />
      <BannerItem image={Webinar2} />
    </ScrollView>
  );
};

export default AdsBannerList;
