import { Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import ProductCardSelling from "./ProductCardSelling";
import { BASE_URL } from "../../../api/config/apiConfig";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductCardSellingList = () => {
  const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const dispatch = useDispatch();

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
      // else {
      //   throw new Error("Token not found");
      // }
    } catch (err) {
      console.error("Error fetching token:", err);
      // throw new Error("Error fetching token");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // setLoading(true);
        // setError(null);

        const token = await getAuthToken();
        const response = token
          ? await axiosInstance.get(`/products`, {
              headers: { Authorization: `Bearer ${token}` },
              params: {
                category: category || "", // Pastikan category diteruskan, jika kosong juga diteruskan
                minPrice: minPrice || "", // Pastikan minPrice diteruskan, jika kosong juga diteruskan
                maxPrice: maxPrice || "", // Pastikan maxPrice diteruskan, jika kosong juga diteruskan
                minRating: minRating || "", // Pastikan minRating diteruskan, jika kosong juga diteruskan
              },
            })
          : await axiosInstance.get(`/products`, {
              params: {
                category: category || "", // Pastikan category diteruskan, jika kosong juga diteruskan
                minPrice: minPrice || "", // Pastikan minPrice diteruskan, jika kosong juga diteruskan
                maxPrice: maxPrice || "", // Pastikan maxPrice diteruskan, jika kosong juga diteruskan
                minRating: minRating || "", // Pastikan minRating diteruskan, jika kosong juga diteruskan
              },
            });

        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // setError("Failed to load products. Please try again later.");
      }
      // finally {
      //   setLoading(false);
      // }
    };

    fetchProducts();
  }, []);

  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }

  // if (error) {
  //   return <Text>{error}</Text>;
  // }

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
