import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { GlobalStyles } from "../../../../constants/style";
import { currencyFormat } from "../../../../utils/currencyFormat";

const CartItemSubcribe = ({
  productCourse,
  onDecrement,
  onIncrement,
  onCheckProduct,
  checked,
}) => {
  return (
    <View
      style={{
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
        <Pressable>
          <MaterialCommunityIcons
            name={`checkbox-blank-outline`}
            size={26}
            color={GlobalStyles.colors.gray100}
          />
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            gap: 8,
          }}
        >
          <Image
            source={{ uri: productCourse.thumbnail }}
            style={{
              height: 72,
              width: 72,
              borderRadius: 12,
            }}
          />
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
            <Text
              style={{
                color: GlobalStyles.colors.text700,
                paddingTop: 6,
              }}
            >
              Category: Raise {productCourse.category}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: GlobalStyles.colors.text700,
                paddingTop: 6,
              }}
            >
              Rp{currencyFormat(productCourse.price)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItemSubcribe;

const styles = StyleSheet.create({});
