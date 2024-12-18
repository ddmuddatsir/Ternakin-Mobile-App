import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../../constants/style";
import { currencyFormat } from "../../../utils/currencyFormat";

const FarmProductCardItem = ({ farm }) => {
  const navigation = useNavigation();

  const productSellingHandlePressNavigation = () => {
    navigation.navigate("ProductDetailSelling", {
      productId: farm.productId[0]._id,
    });
  };

  const productFarmSellingHandlePressNavigation = () => {
    navigation.navigate("FarmDetailSelling", {
      farmId: farm._id,
    });
  };

  return (
    <>
      <Pressable
        onPress={productFarmSellingHandlePressNavigation}
        style={{
          borderRadius: 16,
          backgroundColor: GlobalStyles.colors.light,

          shadowColor: GlobalStyles.colors.gray500,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
          borderColor: GlobalStyles.colors.store_line,
          borderWidth: 0.25,
          padding: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: 42, height: 42, marginRight: 10 }}>
              <Image
                source={{ uri: farm.image }}
                style={{ width: 42, height: 42, borderRadius: 24 }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: GlobalStyles.colors.text700,
                  paddingBottom: 4,
                }}
              >
                {farm.name}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: GlobalStyles.colors.gray500,
                }}
              >
                {farm.location}
              </Text>
            </View>
          </View>

          <View style={{ justifyContent: "center" }}>
            <Pressable
              style={{
                backgroundColor: GlobalStyles.colors.primary100,
                borderWidth: 2,
                borderColor: GlobalStyles.colors.light,
                padding: 10,
                marginVertical: 4,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: GlobalStyles.colors.light,
                  fontWeight: 500,
                  fontSize: 12,
                }}
              >
                Look Store
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            marginBottom: 10,
            marginTop: 2,
            borderColor: GlobalStyles.colors.background,
          }}
        ></View>

        <View>
          <View style={{ flexDirection: "row", gap: 9 }}>
            {farm.productId.map((product) => (
              <Pressable
                onPress={() => productSellingHandlePressNavigation(product.id)}
                key={product._id}
              >
                <View
                  style={{
                    width: 117,
                    height: 117,
                    borderRadius: 12,
                    marginBottom: 6,
                  }}
                >
                  <Image
                    source={{ uri: product.image }}
                    style={{ width: 117, height: 117, borderRadius: 12 }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      paddingBottom: 2,
                      color: GlobalStyles.colors.text700,
                    }}
                  >
                    {product.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: GlobalStyles.colors.text700,
                      fontWeight: 600,
                    }}
                  >
                    Rp
                    {currencyFormat(
                      product.price - (product.price * product.discPer) / 100
                    )}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default FarmProductCardItem;
