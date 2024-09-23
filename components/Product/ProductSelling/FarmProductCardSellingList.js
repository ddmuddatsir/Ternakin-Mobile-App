import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import ProductCardSelling from "./ProductCardSelling"; // Make sure to import ProductCardSelling
import { products } from "../../../dummy-data";
import { groupProductsByFarm } from "../../../constants/groupByFarm";
import { GlobalStyles } from "../../../constants/style";
import Button from "../../Button/Button";
import { useNavigation } from "@react-navigation/native";

const FarmProductCardSellingList = () => {
  const navigation = useNavigation();
  const groupedProducts = groupProductsByFarm(products);

  // const productFarmSellingHandlePressNavigation = (product) => {
  //   navigation.navigate("FarmDetailSelling", {
  //     id: products.farm.id,
  //     product: products,
  //   });
  // };

  const productFarmSellingHandlePressNavigation = (farmId, farmProducts) => {
    navigation.navigate("FarmDetailSelling", {
      id: farmId,
      products: farmProducts,
    });
  };

  return (
    <View>
      {Object.keys(groupedProducts).map((farmId) => {
        const { farm, products: farmProducts } = groupedProducts[farmId];

        return (
          <Pressable
            onPress={productFarmSellingHandlePressNavigation}
            key={farmId}
            style={{
              height: 224,
              width: 380,
              borderRadius: 12,
              backgroundColor: GlobalStyles.colors.light,
              shadowColor: GlobalStyles.colors.gray500,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              borderColor: GlobalStyles.colors.store_line,
              borderWidth: 0.25,
              padding: 14,
              gap: 20,
              marginBottom: 14,
            }}
          >
            <View
              style={{
                backgroundColor: GlobalStyles.colors.light,
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Image
                style={{
                  height: 38,
                  width: 38,
                  borderRadius: 32,
                  backgroundColor: "black",
                }}
                source={{ uri: farm.image }}
              />
              <View style={{ flex: 1, gap: 4 }}>
                <Text
                  style={{
                    fontWeight: "600",
                    color: GlobalStyles.colors.text700,
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
              <Button
                text="View Farm"
                color="off"
                styles={{
                  flex: 0.5,
                  height: 32,
                }}
              />
            </View>
            <View style={{ flexDirection: "row", gap: 6 }}>
              {farmProducts.slice(0, 3).map((product) => (
                <ProductCardSelling
                  key={product.id}
                  product={product}
                  productFarmList
                />
              ))}
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default FarmProductCardSellingList;
