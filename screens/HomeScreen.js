import { SafeAreaView, ScrollView, Text, View } from "react-native";

import HeaderBar from "../components/HeaderBar/HeaderBar";
import PaymentBar from "../components/Payment/PaymentBar";
import FiturButtonService from "../components/Fitur/FiturButtonService";
import FiturButtonAnimal from "../components/Fitur/FiturButtonAnimal";
import { GlobalStyles } from "../constants/style";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

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
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: GlobalStyles.colors.primary,
            }}
          >
            How To be a Farmer
          </Text>

          <FiturButtonAnimal />
        </View>
        <PromoBannerList />

        <View style={{ paddingHorizontal: 10, paddingVertical: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: GlobalStyles.colors.primary,
              }}
            >
              Farm Store Capital
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  justifyContent: "center",
                  color: GlobalStyles.colors.gray100,
                }}
              >
                See more
              </Text>
              <MaterialIcons
                style={{ justifyContent: "center" }}
                name="keyboard-arrow-right"
                size={20}
                color={GlobalStyles.colors.gray100}
              />
            </View>
          </View>
          <ProductCardFundList />
        </View>
        <View style={{ paddingHorizontal: 10, paddingVertical: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: GlobalStyles.colors.primary,
              }}
            >
              Learning materials
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  justifyContent: "center",
                  color: GlobalStyles.colors.gray100,
                }}
              >
                See more
              </Text>
              <MaterialIcons
                style={{ justifyContent: "center" }}
                name="keyboard-arrow-right"
                size={20}
                color={GlobalStyles.colors.gray100}
              />
            </View>
          </View>
          <ProductSubcribeList />
        </View>
        <AdsBannerList />
        <View style={{ paddingHorizontal: 10, paddingVertical: 12 }}>
          <TitleForList
            text={"Recommendation Products"}
            navigate={() => navigation.navigate("TernakinScreen")}
          />
          <ProductCardSellingList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
