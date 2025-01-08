import { ScrollView, Text, View } from "react-native";
import {
  ProductSubcribe,
  ProductSubcribeRecommendation,
} from "./ProductSubcribe";
import { useEffect, useState } from "react";
import { fetchData } from "../../../utils/fetchData";

const ProductSubcribeList = ({ recommendation, productId }) => {
  const [productCourse, setProductCourse] = useState([]);
  const [randomizedProductCourse, setRandomizedProductCourse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataSubcribeProduct();
  }, [productId]);

  const fetchDataSubcribeProduct = async () => {
    setLoading(true);
    const data = await fetchData(`/product-courses`);

    if (data) {
      const shuffledCourses = [...data].sort(() => Math.random() - 0.5);

      setProductCourse(data);
      setRandomizedProductCourse(shuffledCourses);
    } else {
      console.error("failed to load data course product:", error);
    }

    setLoading(false);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {!recommendation ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row" }}
        >
          {productCourse
            .filter((item) => item._id !== productId)
            .map((item) => (
              <ProductSubcribe key={item._id} productCourse={item} />
            ))}
        </ScrollView>
      ) : (
        <View>
          {randomizedProductCourse
            .filter((item) => String(item._id) !== String(productId))
            // .sort(() => Math.random() - 0.5)
            .slice(0, 4)
            .map((item) => (
              <ProductSubcribeRecommendation
                key={item._id}
                productCourse={item}
              />
            ))}
        </View>
      )}
    </View>
  );
};

export default ProductSubcribeList;
