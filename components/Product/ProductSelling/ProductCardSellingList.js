import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import ProductCardSelling from "./ProductCardSelling";
import { BASE_URL } from "../../../api/config/apiConfig";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonFilterProductSelling from "../../FilterProduct/ButtonFilterProductSelling";

const ProductCardSellingList = ({ filter }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");

  const getAuthToken = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        return token;
      }
    } catch (err) {
      console.error("Error fetching token:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (filterType) => {
    try {
      setLoading(true);
      // setError(null);
      const queryParams = {};

      const token = await getAuthToken();
      const response = token
        ? await axiosInstance.get(`/products`, {
            headers: { Authorization: `Bearer ${token}` },
            params: queryParams,
          })
        : await axiosInstance.get(`/products`, {
            params: queryParams,
          });

      let fetchedProducts = response.data;

      if (filterType === "priceLowToHigh") {
        fetchedProducts = fetchedProducts.sort(
          (cheap, expensive) => cheap.price - expensive.price
        );
      }

      if (filterType === "rateHighToLow") {
        fetchedProducts = fetchedProducts.sort(
          (bad, good) => good.rate - bad.rate
        );
      }

      if (filterType === "promo") {
        fetchedProducts = fetchedProducts.sort(
          (low, high) => high.disPer - low.disPer
        );
      }

      setProduct(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      // setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  // if (error) {
  //   return <Text>{error}</Text>;
  // }

  return (
    <>
      {filter && (
        <SafeAreaView>
          <ButtonFilterProductSelling onFilterChange={fetchProducts} />
        </SafeAreaView>
      )}
      {loading ? (
        <ActivityIndicator
          size="large"
          color={GlobalStyles.colors.primary}
          style={{ flex: 1, justifyContent: "center" }}
        />
      ) : product.length > 0 ? (
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 12,
              // padding: 10,
            }}
          >
            {product.map((item) => (
              <ProductCardSelling key={item._id} product={item} />
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          Tidak ada produk tersedia
        </Text>
      )}
    </>
  );
};

export default ProductCardSellingList;
