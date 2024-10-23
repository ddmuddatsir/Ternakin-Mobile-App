import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { GlobalStyles } from "../../../../constants/style";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CartItemSelling = ({
  product,
  onDecrement,
  onIncrement,
  onCheckProduct,
  checked,
}) => {
  const discountPrice = product.price - (product.price * product.discPer) / 100;

  return (
    <View
      style={{
        borderBottomWidth: 8,
        borderBottomColor: GlobalStyles.colors.background,
        paddingBottom: 18,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Pressable onPress={() => onCheckProduct(product._id)}>
          <MaterialCommunityIcons
            name={`checkbox-blank${checked ? "" : "-outline"}`}
            size={26}
            color={
              checked
                ? GlobalStyles.colors.primary
                : GlobalStyles.colors.gray100
            }
          />
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            gap: 8,
          }}
        >
          <Image
            source={{ uri: product.image }}
            style={{
              height: 86,
              width: 86,
              borderRadius: 12,
            }}
          />
          <View style={{ flexDirection: "column", gap: 8 }}>
            <Text
              style={{
                fontWeight: 400,
                color: GlobalStyles.colors.text100,
              }}
            >
              {product.title}
            </Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <View
                style={{
                  padding: 4,
                  backgroundColor: GlobalStyles.colors.background,
                  borderRadius: 4,
                  flexDirection: "row",
                }}
              >
                <Text style={{ color: GlobalStyles.colors.gray500 }}>
                  Variant
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={18}
                  color={GlobalStyles.colors.gray500}
                />
              </View>
              <Text
                style={{
                  color: GlobalStyles.colors.text700,
                  fontWeight: 500,
                  fontSize: 12,
                }}
              >
                Stock {product.stock}
              </Text>
            </Pressable>
            <View
              style={{
                flexDirection: "row",
                gap: 4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: GlobalStyles.colors.text700,
                }}
              >
                Rp{discountPrice}
              </Text>

              <Text
                style={{
                  fontSize: 11,
                  color: GlobalStyles.colors.gray100,
                }}
              >
                Rp{product.price}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={onDecrement}
                style={{
                  height: 28,
                  width: 28,
                  borderWidth: 1,
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: GlobalStyles.colors.gray100,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: GlobalStyles.colors.text700,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Text
                style={{
                  width: 12,
                  fontSize: 16,
                  fontWeight: 500,
                  color: GlobalStyles.colors.text700,
                }}
              >
                {product.quantity}
                {console.log(`${product.quantity}`)}
              </Text>

              <Pressable
                onPress={onIncrement}
                style={{
                  height: 28,
                  width: 28,
                  borderWidth: 1,
                  borderRadius: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: GlobalStyles.colors.gray100,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: GlobalStyles.colors.text700,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItemSelling;

const styles = StyleSheet.create({});
