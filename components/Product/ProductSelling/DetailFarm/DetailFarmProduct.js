import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../../constants/style";
import ProductListScreen from "../../../../screens/ProductListScreen";

const DetailFarmProduct = ({ products }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: GlobalStyles.colors.light,
      }}
    >
      <Text
        style={{
          padding: 10,
        }}
      >
        Products for {products.name}
      </Text>
      {products.productId ? (
        products.productId.map((product) => (
          <ProductListScreen key={product._id} />
        ))
      ) : (
        <Text>No products available</Text>
      )}
    </ScrollView>
  );
};

export default DetailFarmProduct;

const styles = StyleSheet.create({});
