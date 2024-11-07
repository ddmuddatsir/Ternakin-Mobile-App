import { Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import ProductCardSelling from "./ProductCardSelling";
import { BASE_URL } from "../../../api/config/apiConfig";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";

const ProductCardSellingList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const headers = authToken
          ? { Authorization: `Bearer ${authToken}` }
          : {};
        const response = await axiosInstance.get(`${BASE_URL}/products`);
        setProduct(response.data);
        setLoading(false);
        // Proses data produk
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();

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
