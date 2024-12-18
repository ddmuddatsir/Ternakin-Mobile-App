import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../../constants/style";
import { fetchData } from "../../utils/fetchData";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import ProductCardFundItem from "../../components/Product/ProductFund/ProductCardFundItem";
import ProductCardSelling from "../../components/Product/ProductSelling/ProductCardSelling";
import ProductSubcribe from "../../components/Product/ProductSubcribe/ProductSubcribe";

const ResultProductSearchScreen = ({ route }) => {
  const { category } = route.params;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        const productData = await fetchData("/products");
        const fundData = await fetchData("/product-funds");
        const courseData = await fetchData("/product-courses");

        const allData = [
          ...productData.map((item) => ({ ...item, type: "product" })),
          ...fundData.map((item) => ({ ...item, type: "fund" })),
          ...courseData.map((item) => ({ ...item, type: "course" })),
        ];

        // Filter item berdasarkan kategori
        const filteredItems = allData.filter(
          (item) => item.category === category
        );

        setItems(filteredItems);
      } catch (error) {
        console.error("Error fetching category items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryItems();
  }, [category]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const renderCard = (item) => {
    switch (item.type) {
      case "course":
        return <ProductSubcribe productCourse={item} />;
      case "product":
        return <ProductCardSelling product={item} />;
      case "fund":
        return <ProductCardFundItem productFund={item} />;

      default:
        return null;
    }
  };

  const groupedItems = {
    course: items.filter((item) => item.type === "course"),
    fund: items.filter((item) => item.type === "fund"),
    product: items.filter((item) => item.type === "product"),
  };

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
        {/* Render Course Items */}
        {groupedItems.course.length > 0 && (
          <View style={{ paddingBottom: 12 }}>
            <Text
              style={{
                paddingBottom: 8,
                fontWeight: 500,
                color: GlobalStyles.colors.text700,
              }}
            >
              Courses
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ flexDirection: "row" }}
            >
              {groupedItems.course.map((item, index) => (
                <View
                  key={`course-${index}`}
                  style={{
                    flexDirection: "row",
                  }}
                >
                  {renderCard(item)}
                </View>
              ))}
            </ScrollView>
          </View>
        )}

        {/* Render Fund Items */}
        {groupedItems.fund.length > 0 && (
          <View style={{ paddingBottom: 12 }}>
            <Text
              style={{
                paddingBottom: 8,
                fontWeight: 500,
                color: GlobalStyles.colors.text700,
              }}
            >
              Funds
            </Text>
            {groupedItems.fund.map((item, index) => (
              <View key={`fund-${index}`}>{renderCard(item)}</View>
            ))}
          </View>
        )}

        {/* Render Product Items */}
        {groupedItems.product.length > 0 && (
          <View style={{ paddingBottom: 12 }}>
            <Text
              style={{
                paddingBottom: 8,
                fontWeight: 500,
                color: GlobalStyles.colors.text700,
              }}
            >
              Products
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {groupedItems.product.map((item, index) => (
                <View key={`product-${index}`}>{renderCard(item)}</View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default ResultProductSearchScreen;
