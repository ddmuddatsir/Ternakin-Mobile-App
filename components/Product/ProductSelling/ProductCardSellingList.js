import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import ProductCardSelling from "./ProductCardSelling";
import ButtonFilterProductSelling from "../../FilterProduct/ButtonFilterProductSelling";
import { fetchData } from "../../../utils/fetchData";

const ProductCardSellingList = ({ filter }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataProducts();
  }, []);

  const fetchDataProducts = async (filterType) => {
    setLoading(true);
    const data = await fetchData(`/products`);

    if (data) {
      let fetchedProducts = data;

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
    } else {
      console.error("Failed to load products data", error);
    }
    setLoading(false);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      {filter && (
        <SafeAreaView>
          <ButtonFilterProductSelling onFilterChange={fetchDataProducts} />
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
