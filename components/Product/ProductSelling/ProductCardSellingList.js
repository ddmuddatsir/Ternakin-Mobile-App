import { Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import ProductCardSelling from "./ProductCardSelling";
import { BASE_URL } from "../../../api/config/apiConfig";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";

const ProductCardSellingList = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = authToken
          ? await axiosInstance.get(`/products`, {
              headers: { Authorization: `Bearer ${authToken}` },
            })
          : await axiosInstance.get(`/products`);

        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [authToken]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
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
