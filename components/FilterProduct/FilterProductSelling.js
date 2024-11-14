import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../utils/axiosInstance";
import ProductCardSelling from "../Product/ProductSelling/ProductCardSelling";
import { Picker } from "@react-native-picker/picker";
import { GlobalStyles } from "../../constants/style";

const FilterProductSelling = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const getAuthToken = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      return token ? token : null;
    } catch (err) {
      console.error("Error fetching token:", err);
      return null;
    }
  };

  const fetchProducts = async () => {
    try {
      const token = await getAuthToken();
      const response = await axiosInstance.get("/products", {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          category: category || "",
          minPrice: minPrice || "",
          maxPrice: maxPrice || "",
          minRating: minRating || "",
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFilterPress = (filterType) => {
    setSelectedFilter(filterType);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 8,
        }}
      >
        Filter Produk
      </Text>

      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <TouchableOpacity
          onPress={() => handleFilterPress("promo")}
          style={{
            padding: 10,
            margin: 4,
            backgroundColor:
              selectedFilter === "promo"
                ? GlobalStyles.colors.primary
                : GlobalStyles.colors.light,
            borderRadius: 8,
          }}
        >
          <Text
            style={{ color: selectedFilter === "promo" ? "white" : "black" }}
          >
            Promo Bebas Ongkir
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleFilterPress("cheapest")}
          style={{
            padding: 10,
            margin: 4,
            backgroundColor:
              selectedFilter === "cheapest"
                ? GlobalStyles.colors.primary
                : GlobalStyles.colors.light,
            borderRadius: 8,
          }}
        >
          <Text
            style={{ color: selectedFilter === "cheapest" ? "white" : "black" }}
          >
            Harga Termurah
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Harga Maksimum"
        keyboardType="numeric"
        value={maxPrice}
        onChangeText={setMaxPrice}
      />
      <TextInput
        placeholder="Rating Minimum"
        keyboardType="numeric"
        value={minRating}
        onChangeText={setMinRating}
      />

      <Button title="Terapkan Filter" onPress={fetchProducts} />

      <View
        style={{
          marginTop: 16,
        }}
      >
        {products.length > 0 ? (
          products.map((item, index) => (
            <ProductCardSelling key={index} product={item} />
          ))
        ) : (
          <Text>Produk tidak ditemukan dengan filter yang dipilih.</Text>
        )}
      </View>
    </View>
  );
};

export default FilterProductSelling;
