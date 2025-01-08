import { SafeAreaView, ScrollView, Text, View } from "react-native";

import HeaderBar from "../components/HeaderBar/HeaderBar";
import PaymentBar from "../components/Payment/PaymentBar";
import FiturButtonService from "../components/Fitur/FiturButtonService";
import FiturButtonAnimal from "../components/Fitur/FiturButtonAnimal";
import { GlobalStyles } from "../constants/style";

import ProductSubcribeList from "../components/Product/ProductSubcribe/ProductSubcribeList";
import PromoBannerList from "../components/Banner/PromoBannerList";
import AdsBannerList from "../components/Banner/AdsBannerList";
import ProductCardSellingList from "../components/Product/ProductSelling/ProductCardSellingList";
import ProductCardFundList from "../components/Product/ProductFund/ProductCardFundList";
import TitleForList from "../components/Title/TitleForList";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D29852" }}>
      <HeaderBar searcBar active={false} text={"Red Cow"} />
      <ScrollView
        style={{ backgroundColor: GlobalStyles.colors.light, flex: 1 }}
      >
        <PaymentBar style={{ flex: 1 }} />
        <FiturButtonService />
        <View style={{ paddingHorizontal: 10, paddingVertical: 12 }}>
          <TitleForList text={"How To be a Farmer"} sizeText={"small"} />
          <FiturButtonAnimal />
        </View>
        <PromoBannerList />

        <View style={{ paddingHorizontal: 10, paddingVertical: 12 }}>
          <TitleForList
            text={"Farm Store Capital"}
            navigate={() => navigation.navigate("ListProductFund")}
            fontSize={"large"}
          />
          <ProductCardFundList />
        </View>
        <View style={{ paddingHorizontal: 10, paddingVertical: 12 }}>
          <TitleForList
            text={"Learning materials"}
            navigate={() => navigation.navigate("ListProductCourse")}
            fontSize={"large"}
          />
          <ProductSubcribeList />
        </View>
        <AdsBannerList />
        <View style={{ paddingHorizontal: 10, paddingVertical: 12 }}>
          <TitleForList
            text={"Recommendation Products"}
            navigate={() => navigation.navigate("TernakinScreen")}
            fontSize={"large"}
          />
          <ProductCardSellingList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
