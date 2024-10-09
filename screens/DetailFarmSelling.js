// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const DetailFarmSelling = () => {
//   return (
//     <View>
//       <Text>DetailFarmSelling</Text>
//     </View>
//   );
// };

// export default DetailFarmSelling;

// const styles = StyleSheet.create({});

import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { products } from "../dummy-data";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";

const DetailFarmSelling = ({ route, item }) => {
  const { farmId, farmProducts } = route.params;

  const getProductById = (id) => {
    return products.find((product) => product.farm.id === id);
  };
  const product = getProductById(farmId);

  return (
    <View style={styles.container}>
      {/* Farm Name and ID */}
      {product.farm.id}
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar searcBar back active={true} text={"Look for Transaction"} />
      </SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.farmName}>{farmId}</Text>
      </View>

      {/* List of Products */}
      <FlatList
        data={farmProducts}
        renderItem={product}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    marginBottom: 16,
    alignItems: "center",
  },
  farmName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productList: {
    paddingBottom: 16,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 12,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
});

export default DetailFarmSelling;
