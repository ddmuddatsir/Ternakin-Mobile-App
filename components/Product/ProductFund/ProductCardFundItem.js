import { Image, Pressable, Text, View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import { GlobalStyles } from "../../../constants/style";
import { useNavigation } from "@react-navigation/native";
import { currencyFormat } from "../../../utils/currencyFormat";

const ProductCardFundItem = ({ productFund }) => {
  const navigation = useNavigation();

  const fundingGoal = productFund.fundingGoal;
  const profitSharing =
    (productFund.fundingGoal / productFund.profitSharing) * 10;

  const productFundHandlePressNavigation = () => {
    navigation.navigate("", { productId: productFund._id });
  };

  return (
    <>
      <Pressable
        onPress={productFundHandlePressNavigation}
        style={{
          height: 210,
          width: 200,
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
        <View style={{ justifyContent: "center" }}>
          <View
            style={{
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              marginBottom: 8,
            }}
          >
            <Image
              source={{ uri: productFund.images[0] }}
              style={{
                width: 200,
                height: 72,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            />
          </View>
          <View
            style={{
              width: 180,
              height: 110,
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                width: 180,
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Image
                source={{ uri: productFund.farmId.image }}
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: "black",
                  borderRadius: 24,
                }}
              />

              <View style={{ gap: 4 }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: GlobalStyles.colors.text700,
                  }}
                >
                  {productFund.farmId.name}
                </Text>
                <Text
                  style={{ fontSize: 10, color: GlobalStyles.colors.text100 }}
                >
                  {productFund.farmId.location}
                </Text>
              </View>
            </View>
            <View style={{ gap: 4, width: 180 }}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: "bold",
                  color: GlobalStyles.colors.gray500,
                }}
              >
                Livestock trading capital
              </Text>
              <View style={{ flexDirection: "row", gap: 4 }}>
                <Octicons
                  name="star-fill"
                  size={12}
                  color={GlobalStyles.colors.yellow}
                />
                <Text
                  style={{ fontSize: 11, color: GlobalStyles.colors.text100 }}
                >
                  {productFund.farmId.rating} Trust
                </Text>
                <Text
                  style={{ fontSize: 11, color: GlobalStyles.colors.text700 }}
                >
                  | {productFund.farmId.followers} Followers
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: 180,
              }}
            >
              <View style={{ gap: 4, width: 100 }}>
                <Text
                  style={{ fontSize: 10, color: GlobalStyles.colors.text700 }}
                >
                  Credit ceiling
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    color: GlobalStyles.colors.primary,
                  }}
                >
                  Rp{currencyFormat(fundingGoal)}
                </Text>
              </View>
              <View style={{ gap: 4, width: 100 }}>
                <Text
                  style={{ fontSize: 10, color: GlobalStyles.colors.text700 }}
                >
                  Sharing Profit
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "bold",
                    color: GlobalStyles.colors.primary,
                  }}
                >
                  Rp
                  {currencyFormat(profitSharing)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default ProductCardFundItem;
