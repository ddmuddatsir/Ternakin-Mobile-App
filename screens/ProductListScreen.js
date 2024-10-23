import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import TagFilter from "../components/TagFIlter/TagFilter";
import { GlobalStyles } from "../constants/style";
import ProductCardSellingList from "../components/Product/ProductSelling/ProductCardSellingList";

const ProductListScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState([]);

  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: GlobalStyles.colors.light,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingVertical: 5,
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          position: "absolute",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <TagFilter
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: 62,
        }}
      >
        <View style={{ flex: 1, paddingBottom: 68 }}>
          <ProductCardSellingList />
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
            }}
          >
            Filter yang dipilih: {selectedFilter.join(", ") || "Tidak ada"}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductListScreen;