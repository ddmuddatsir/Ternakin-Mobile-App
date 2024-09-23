import { Image, Text, View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import { GlobalStyles } from "../../../constants/style";

const ProductCardService = () => {
  return (
    <>
      <View
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
              width: 200,
              height: 72,
              backgroundColor: "black",
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              marginBottom: 8,
            }}
          >
            <Image />
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
                  UG Farm
                </Text>
                <Text
                  style={{ fontSize: 10, color: GlobalStyles.colors.text100 }}
                >
                  Cigombong, Kab. Bogor
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
                  5.0 Trust
                </Text>
                <Text
                  style={{ fontSize: 11, color: GlobalStyles.colors.text700 }}
                >
                  | 42K Followers
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
                  Rp 12.000.000
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
                  Rp 5.000.000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProductCardService;
