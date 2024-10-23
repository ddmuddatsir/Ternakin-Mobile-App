import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useState, useEffect, useCallback } from "react";

import HeaderBar from "../components/HeaderBar/HeaderBar";
import PaymentBar from "../components/Payment/PaymentBar";
import FiturButtonService from "../components/Fitur/FiturButtonService";
import FiturButtonAnimal from "../components/Fitur/FiturButtonAnimal";
import { GlobalStyles } from "../constants/style";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ProductCardServiceList from "../components/Product/ProductService/ProductCardServiceList";
import ProductSubcribeList from "../components/Product/ProductSubcribe/ProductSubcribeList";
import PromoBannerList from "../components/Banner/PromoBannerList";
import AdsBannerList from "../components/Banner/AdsBannerList";
import axios from "axios";
import DummySellingProduct from "../components/Product/ProductSelling/DummySellingProduct";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import ProductCardSellingList from "../components/Product/ProductSelling/ProductCardSellingList";
import { useSelector } from "react-redux";
import TitleForList from "../components/Title/TitleForList";
import ProductCardSelling from "../components/Product/ProductSelling/ProductCardSelling";

const HomeScreen = () => {
  // const [product, setProduct] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [category, setCategory] = useState("jewelery");
  // const [items, setItems] = useState([
  //   { label: "Men's clothing", value: "men's clothing" },
  //   { label: "jewelery", value: "jewelery" },
  //   { label: "electronics", value: "electronics" },
  //   { label: "women's clothing", value: "women's clothing" },
  // ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://fakestoreapi.com/products");
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.log("error message", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // console.log("products", products);

  // const onGenderOpen = useCallback(() => {
  //   setCompanyOpen(false);
  // }, []);

  // const cart = useSelector((state) => state.cart.cart);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D29852" }}>
      <HeaderBar searcBar active={false} text={"Red Cow"} />
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
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
          <ProductCardServiceList />
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
                fontSize: 18,
                color: GlobalStyles.colors.primary,
              }}
            >
              Recommendation Products
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

          <ProductCardSellingList />
        </View>

        {/* <View>
          <Text
            style={{
              height: 50,
              backgroundColor: GlobalStyles.colors.success50,
            }}
          >
            Example
          </Text>
          <DropDownPicker
            style={{
              borderColor: "#B7B7B7",
              height: 30,
              marginBottom: open ? 120 : 15,
            }}
            open={open}
            value={category} //genderValue
            items={items}
            setOpen={setOpen}
            setValue={setCategory}
            setItems={setItems}
            placeholder="choose category"
            // placeholderStyle={styles.placeholderStyles}
            onOpen={onGenderOpen}
            // onChangeValue={onChange}
            zIndex={3000}
            zIndexInverse={1000}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {products
              ?.filter((item) => item.category === category)
              .map((item, index) => (
                <DummySellingProduct item={item} key={index} />
              ))}
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
