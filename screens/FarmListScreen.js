import { ScrollView, Text, View } from "react-native";
import { GlobalStyles } from "../constants/style";
import { fetchData } from "../utils/fetchData";
import { useEffect, useState } from "react";
import FarmProductCardItem from "../components/Product/ProductSelling/FarmProductCardItem";

const FarmListScreen = () => {
  const [farm, setFarm] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFarmData();
  }, []);

  const fetchFarmData = async () => {
    setLoading(true);
    const data = await fetchData("/farm");

    if (data) {
      setFarm(data);
    } else {
      console.error("Failed to load farm data.");
    }
    setLoading(false);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: GlobalStyles.colors.light, padding: 10 }}
      >
        <View
          style={{
            flex: 1,
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          {farm.map((item) => (
            <FarmProductCardItem key={item._id} farm={item} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default FarmListScreen;
