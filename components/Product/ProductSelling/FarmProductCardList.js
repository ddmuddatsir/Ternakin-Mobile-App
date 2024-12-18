import { ScrollView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import FarmProductCardItem from "./FarmProductCardItem";
import { fetchData } from "../../../utils/fetchData";

const FarmProductCardList = () => {
  const [farm, setFarm] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFarmData();
  }, [farm._id]);

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
    <ScrollView showsVerticalScrollIndicator={false}>
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
  );
};

export default FarmProductCardList;
