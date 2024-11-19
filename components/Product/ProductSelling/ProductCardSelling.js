import { Image, Pressable, Text, View } from "react-native";
import { GlobalStyles } from "../../../constants/style";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";

const ProductCardSelling = ({ product, productFarmList }) => {
  const navigation = useNavigation();

  const productSellingHandlePressNavigation = () => {
    navigation.navigate("ProductDetailSelling", { productId: product._id });
  };

  const discountedPrice =
    product.price - (product.price * product.discPer) / 100;

  let arrive;
  if (product.shippingMethodId) {
    const estimate = product.shippingMethodId.estimate[0];
    if (estimate.periodArrive === "Hour") {
      arrive = <Text>Arrived Today</Text>;
    } else if (estimate.periodArrive === "Days" && estimate.timeArrive === 1) {
      arrive = <Text>Arrived Tomorrow</Text>;
    } else {
      arrive = <Text>Arrived in {estimate.timeArrive} Days</Text>;
    }
  }

  return (
    <>
      {!productFarmList ? (
        <Pressable
          onPress={productSellingHandlePressNavigation}
          style={{
            borderRadius: 16,
            backgroundColor: GlobalStyles.colors.light,
            borderRadius: 12,
            shadowColor: GlobalStyles.colors.gray500,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            borderColor: GlobalStyles.colors.store_line,
            borderWidth: 0.25,
          }}
        >
          <View style={{ height: 300, width: 190, justifyContent: "center" }}>
            <Image
              source={{ uri: product.image }}
              style={{
                width: 190,
                height: 172,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            />
            <View
              style={{
                width: 175,
                height: 130,
                justifyContent: "center",
                gap: 8,
                marginHorizontal: 10,
              }}
            >
              <Text style={{ colors: GlobalStyles.colors.text100 }}>
                {product.title}
              </Text>
              <View
                style={{
                  gap: 6,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "bold",
                    }}
                  >
                    Rp{discountedPrice}
                  </Text>

                  <View
                    style={{
                      backgroundColor: GlobalStyles.colors.error50,
                      padding: 4,
                      borderRadius: 4,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11,
                        color: GlobalStyles.colors.error500,
                        textDecorationLine: "line-through",
                      }}
                    >
                      Rp{product.price}
                    </Text>
                  </View>
                </View>
              </View>
              {product.farmId && (
                <Text
                  style={{ fontSize: 11, color: GlobalStyles.colors.text100 }}
                >
                  {product.farmId.location}
                </Text>
              )}
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Octicons
                  name="star-fill"
                  size={12}
                  color={GlobalStyles.colors.yellow}
                />
                <Text
                  style={{ fontSize: 11, color: GlobalStyles.colors.text100 }}
                >
                  {product.rate}
                </Text>
                <Text
                  style={{ fontSize: 11, color: GlobalStyles.colors.text700 }}
                >
                  | Sold {product.sold}
                </Text>
              </View>
              <Text
                style={{ fontSize: 11, color: GlobalStyles.colors.text100 }}
              >
                {arrive}
              </Text>
            </View>
          </View>
        </Pressable>
      ) : (
        <Pressable
          onPress={productSellingHandlePressNavigation}
          style={{ gap: 4, marginBottom: 4 }}
        >
          <Image
            source={{ uri: product.image }}
            style={{
              width: 102,
              height: 102,
              borderRadius: 12,
            }}
          />
          <View style={{ margin: 6 }}>
            <Text
              style={{
                color: GlobalStyles.colors.text700,
                fontWeight: "bold",
              }}
            >
              Rp{discountedPrice}
            </Text>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default ProductCardSelling;
