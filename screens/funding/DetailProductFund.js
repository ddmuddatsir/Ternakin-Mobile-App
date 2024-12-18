import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../utils/axiosInstance";
import { GlobalStyles } from "../../constants/style";
import { getAuthToken } from "../../utils/getAuthToken";

const DetailProductFund = ({ route }) => {
  //   const { productId } = route.params;

  //   const [productFund, setProductFund] = useState(null);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const fetchedProductFundDetail = async () => {
  //       try {
  //         const token = await getAuthToken();
  //         const response = await axiosInstance.get(
  //           `/product-funds/${productId}`,
  //           {
  //             headers: { Authorization: `Bearer ${token}` },
  //           }
  //         );

  //         setProductFund(response.data);
  //       } catch (error) {
  //         console.error("Error fetching product fund details:", error);
  //         setError("Failed to lead product details.");
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
  //     fetchedProductFundDetail();
  //   }, [productId]);

  //   if (loading)
  //     return (
  //       <Text style={{ justifyContent: "center", alignItems: "center" }}>
  //         Loading...
  //       </Text>
  //     );

  //   if (error)
  //     return (
  //       <Text style={{ justifyContent: "center", alignItems: "center" }}>
  //         {error}
  //       </Text>
  //     );

  return (
    <>
      <SafeAreaView style={{ backgroundColor: GlobalStyles.colors.light }}>
        <HeaderBar back searcBar active />
      </SafeAreaView>
      <ScrollView
        style={{ backgroundColor: GlobalStyles.colors.light }}
      ></ScrollView>
    </>
  );
};

export default DetailProductFund;

const styles = StyleSheet.create({});
