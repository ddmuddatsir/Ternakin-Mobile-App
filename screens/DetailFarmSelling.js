import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";

import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import DetailFund from "../components/Product/ProductSelling/DetailFarm/DetailFund";
import DetailFarmProduct from "../components/Product/ProductSelling/DetailFarm/DetailFarmProduct";
import HeadFarmDetail from "../components/Product/ProductSelling/DetailFarm/HeadFarmDetail";
import { fetchData } from "../utils/fetchData";

const TopTabs = createMaterialTopTabNavigator();

const DetailFarmSelling = ({ route }) => {
  const { farmId, initialTab, productFundId } = route.params;

  const [farm, setFarm] = useState(null);
  const [productFund, setProductFund] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataDetails = async () => {
      setLoading(true);

      try {
        // Fetch farm data
        const farmData = await fetchData(`/farm/${farmId}`);
        // Fetch product fund data using the farmId
        const fundData = await fetchData(`/product-funds/${productFundId}`);

        if (farmData) setFarm(farmData);
        if (fundData) setProductFund(fundData);
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataDetails();
  }, [farmId, productFundId]);

  if (loading) {
    return <Text>loading...</Text>;
  }

  return (
    <>
      <SafeAreaView
        style={{
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar searcBar back active={true} text={"Look for Transaction"} />
        <View style={{ padding: 10 }}>
          <HeadFarmDetail details={farm} />
          <TopTabs.Navigator
            initialRouteName={
              initialTab === "Product" || initialTab === "Detail Funding"
                ? initialTab
                : "Product"
            }
            screenOptions={{
              tabBarLabelStyle: { fontSize: 12 },
              tabBarIndicatorStyle: {
                backgroundColor: GlobalStyles.colors.primary100,
              },
              tabBarStyle: { backgroundColor: GlobalStyles.colors.light },
            }}
          >
            <TopTabs.Screen
              name="Product"
              children={() => <DetailFarmProduct products={farm} />}
            />

            <TopTabs.Screen
              name="Detail Funding"
              children={() => <DetailFund fundComponent={productFund} />}
            />
          </TopTabs.Navigator>
        </View>
      </SafeAreaView>
    </>
  );
};

export default DetailFarmSelling;
