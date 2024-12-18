import { ScrollView, Text, View } from "react-native";
import ProductSubcribe from "./ProductSubcribe";
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
      const fetchedProductCourses = data;

      const shuffledCourses = [...fetchedProductCourses].sort(
        () => Math.random() - 0.5
      );

      setProductCourse(fetchedProductCourses);
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
              <ProductSubcribe
                key={item._id}
                recommendation={true}
                productCourse={item}
              />
            ))}
        </View>
      )}
    </View>
  );
};

export default ProductSubcribeList;
