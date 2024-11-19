import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import TagFilter from "../components/TagFIlter/TagFilter";
import { GlobalStyles } from "../constants/style";
import FilterProductSelling from "../components/FilterProduct/FilterProductSelling";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../api/config/apiConfig";
import ProductCardSelling from "../components/Product/ProductSelling/ProductCardSelling";
import ButtonFilterProductSelling from "../components/FilterProduct/ButtonFilterProductSelling";
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
