import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";
import HeaderBar from "../../components/HeaderBar/HeaderBar";

import { ProductCardFundLarge } from "../../components/Product/ProductFund/ProductCardFundItem";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";

const ListFundScreen = ({ route }) => {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFuds = async () => {
      if (route.params?.data) {
        setFunds(route.params.data);
      } else {
        try {
          const fundData = await fetchData("/product-funds");
          setFunds(fundData);
        } catch (error) {
          console.error("Error fetching fund data:", error);
        }
      }
      setLoading(false);
    };
    loadFuds();
  }, [route.params]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar searcBar={true} active={true} back />
      </SafeAreaView>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: GlobalStyles.colors.light,
          padding: 12,
        }}
      >
        {funds.length > 0 ? (
          funds.map((fund, index) => (
            <View key={`fund-${index}`} style={{ marginBottom: 12 }}>
              <ProductCardFundLarge productFund={fund} />
            </View>
          ))
        ) : (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Tidak ada data pendanaan yang tersedia.
          </Text>
        )}
      </ScrollView>
    </>
  );
};

export default ListFundScreen;
