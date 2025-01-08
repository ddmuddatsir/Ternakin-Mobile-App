//Perbaiki: UI card

import React from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { GlobalStyles } from "../../../../constants/style";
import { useNavigation } from "@react-navigation/native";
import { currencyFormat } from "../../../../utils/currencyFormat";

const DetailFarmProduct = ({ products }) => {
  const navigation = useNavigation();

  const handleProductPress = (productId) => {
    navigation.navigate("ProductDetailSelling", {
      productId: productId,
    });
  };

  return (
    <ScrollView style={{ backgroundColor: GlobalStyles.colors.light }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 16,
          padding: 16,
        }}
      >
        {products.productId.map((product) => (
          <Pressable
            key={product._id}
            style={{
              width: "48%",
              backgroundColor: GlobalStyles.colors.light,
              borderRadius: 12,
              overflow: "hidden",
              shadowColor: GlobalStyles.colors.gray500,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              marginBottom: 16,
            }}
            onPress={() => handleProductPress(product._id)}
          >
            <Image
              source={{ uri: product.image }}
              style={{ width: "100%", height: 120, resizeMode: "cover" }}
            />
            <View style={{ padding: 8 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: GlobalStyles.colors.text700,
                  marginBottom: 4,
                }}
              >
                {product.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: GlobalStyles.colors.primary100,
                }}
              >
                Rp{" "}
                {currencyFormat(
                  product.price - (product.price * product.discPer) / 100
                )}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default DetailFarmProduct;
