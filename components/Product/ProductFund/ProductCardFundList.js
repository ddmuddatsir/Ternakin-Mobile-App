import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import ProductCardFundItem from "./ProductCardFundItem";
import { fetchData } from "../../../utils/fetchData";

const ProductCardFundList = () => {
  const [productFunds, setProductFunds] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetch product funding data on database
  const fetchDataProductFarm = async () => {
    setLoading(true);
    const data = await fetchData(`/product-funds`);

    if (data) {
      setProductFunds(data);
    } else {
      console.error("Failed to load Product Farm data");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchDataProductFarm();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ gap: 10, flexDirection: "row" }}>
          {productFunds.map((product) => (
            <View key={product._id}>
              <ProductCardFundItem productFund={product} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductCardFundList;
