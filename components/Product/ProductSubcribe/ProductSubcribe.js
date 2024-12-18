import { Image, Pressable, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GlobalStyles } from "../../../constants/style";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { currencyFormat } from "../../../utils/currencyFormat";

const ProductSubcribe = ({ productCourse, recommendation }) => {
  const navigation = useNavigation();

  const productSubcribeHandlePressNavigation = () => {
    navigation.navigate("ProductDetailCourse", {
      productId: productCourse._id,
    });
  };

  let levelIcon;
  let priceColor;

  if (productCourse.level === "Beginner") {
    levelIcon = "signal-cellular-1";
  } else if (productCourse.level === "Intermediate") {
    levelIcon = "signal-cellular-2";
  } else {
    levelIcon = "signal-cellular-3";
  }

  let priceDisplay;

  if (productCourse.price === "Free") {
    priceColor = GlobalStyles.colors.success500;
    priceDisplay = "Free";
  } else {
    priceColor = GlobalStyles.colors.primary100;
    priceDisplay = `Rp${currencyFormat(productCourse.price)}`;
  }

  return (
    <>
      {!recommendation ? (
        <Pressable
          onPress={productSubcribeHandlePressNavigation}
          style={{
            height: 200,
            width: 152,
            backgroundColor: GlobalStyles.colors.light,
            borderRadius: 12,
            shadowColor: GlobalStyles.colors.gray500,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            borderColor: GlobalStyles.colors.store_line,
            borderWidth: 0.25,
            marginRight: 10,
          }}
        >
          <View
            style={{
              width: 151,
              height: 90,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              marginBottom: 6,
            }}
          >
            <Image
              source={{ uri: productCourse.thumbnail }}
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            />
          </View>
          <View
            style={{
              // width: 126,
              // height: 80,
              // justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 12,
                  color: GlobalStyles.colors.text700,
                  paddingTop: 6,
                }}
              >
                {productCourse.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 8,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: 6,
                    gap: 2,
                  }}
                >
                  <MaterialCommunityIcons
                    name={levelIcon}
                    size={12}
                    color={GlobalStyles.colors.text100}
                  />
                  <Text
                    style={{ fontSize: 10, color: GlobalStyles.colors.text100 }}
                  >
                    {productCourse.level}
                  </Text>
                </View>
                <View
                  style={{
                    width: 55,
                    height: 20,
                    backgroundColor: GlobalStyles.colors.bluelight,
                    padding: 3.6,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: GlobalStyles.colors.blue100,
                      fontWeight: "bold",
                    }}
                  >
                    {productCourse.videoContent?.length} Video
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontWeight: "bold",
                  color: priceColor,
                  paddingTop: 6,
                }}
              >
                {priceDisplay}
              </Text>
            </View>
          </View>
        </Pressable>
      ) : (
        <Pressable
          onPress={productSubcribeHandlePressNavigation}
          style={{ flexDirection: "row", paddingBottom: 8, marginRight: 10 }}
        >
          <Image
            style={{ width: 72, height: 72, marginRight: 10, borderRadius: 12 }}
            source={{ uri: productCourse.thumbnail }}
          />
          <View style={{ gap: 4 }}>
            <Text
              style={{
                fontSize: 14,
                color: GlobalStyles.colors.text700,
                fontWeight: 500,
              }}
            >
              {productCourse.title}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: GlobalStyles.colors.primary100,
                  paddingRight: 4,
                }}
              >
                {productCourse.rating}
              </Text>

              <View style={{ flexDirection: "row", paddingRight: 4 }}>
                <Ionicons
                  name="star"
                  size={13}
                  color={GlobalStyles.colors.yellow}
                />
                <Ionicons
                  name="star"
                  size={13}
                  color={GlobalStyles.colors.yellow}
                />
                <Ionicons
                  name="star"
                  size={13}
                  color={GlobalStyles.colors.yellow}
                />
                <Ionicons
                  name="star"
                  size={13}
                  color={GlobalStyles.colors.yellow}
                />
                <Ionicons
                  name="star-half"
                  size={13}
                  color={GlobalStyles.colors.yellow}
                />
              </View>
              <Text
                style={{ color: GlobalStyles.colors.text100, fontSize: 11 }}
              >{`(${productCourse.totalEnrollments})`}</Text>
            </View>
            <View
              style={{
                flex: 3,
                padding: 5,
                backgroundColor: GlobalStyles.colors.success50,
                width: 75,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: GlobalStyles.colors.gray500,
                }}
              >
                Bestseller
              </Text>
            </View>
            <Text style={{ fontSize: 12, color: GlobalStyles.colors.text100 }}>
              {productCourse?.author?.name || "Unknown Author"}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: GlobalStyles.colors.text700,
                fontWeight: 600,
              }}
            >
              {priceDisplay}
            </Text>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default ProductSubcribe;
