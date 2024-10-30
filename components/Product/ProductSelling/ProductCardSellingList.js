import { Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import ProductCardSelling from "./ProductCardSelling";
import axios from "axios";
import { BASE_URL } from "../../../api/config/apiConfig";

const ProductCardSellingList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products`);
        // console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product", error);
        setLoading(false);
      }
    };

    fetchProduct();
    // console.log(product);
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        {product.map((item) => (
          <ProductCardSelling key={item._id} product={item} />
        ))}
      </View>
    </>
  );
};

export default ProductCardSellingList;
