import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { GlobalStyles } from "../constants/style";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CartSellingList from "../components/Product/ProductSelling/CartSelling/CartSellingList";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  cleanCart,
  removeFromCart,
} from "../redux/CartReducer";
import BottomTabButton from "../components/Button/BottomTabButton";
import Button from "../components/Button/Button";
import EmptyCart from "../components/Empty/EmptyCart";
import ProductCardSellingList from "../components/Product/ProductSelling/ProductCardSellingList";
import TitleForList from "../components/Title/TitleForList";
import { useNavigation } from "@react-navigation/native";
import AddressButton from "../components/Address/AddressButton";

const CartScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const discount = useSelector((state) => state.cart.discount);
  const dispatch = useDispatch();

  const handleIncrementQuantity = (product) => {
    dispatch(incrementQuantity({ _id: product._id }));
  };

  const handleDecrementQuantity = (product, quantity) => {
    if (quantity === 1) {
      dispatch(removeFromCart({ _id: product._id }));
    } else {
      dispatch(decrementQuantity({ _id: product._id }));
    }
  };

  const hasProduct = cart.length > 0;

  const handlerConfirm = () => {
    if (cart.length > 0) {
      navigation.navigate("BuyConfirmation");
    }
  };

  const getTotalQuantity = () => {
    return cart.reduce(
      (totalQuantity, product) => totalQuantity + product.quantity,
      0
    );
  };

  // console.log(cart);

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar withouttIcon wishlist back active={true} text={"Cart"} />
      </SafeAreaView>
      <ScrollView style={{ backgroundColor: GlobalStyles.colors.light }}>
        <View style={{ padding: 10, gap: 16 }}>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 2,
              flex: 1,
              gap: 4,
            }}
          >
            <Ionicons
              name="location-outline"
              size={16}
              color={GlobalStyles.colors.gray500}
            />
            <AddressButton />
            <MaterialIcons
              name="keyboard-arrow-down"
              size={18}
              color={GlobalStyles.colors.gray500}
            />
          </View>
          <View style={{ flex: 1, gap: 12, justifyContent: "center" }}>
            {hasProduct ? (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  justifyContent: "space-between",
                  paddingRight: 6,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    size={26}
                    color={GlobalStyles.colors.gray100}
                  />

                  <Text style={{ color: GlobalStyles.colors.text700 }}>
                    Check All
                  </Text>
                </View>

                <Pressable onPress={() => dispatch(cleanCart())}>
                  <Text
                    style={{
                      color: GlobalStyles.colors.gray100,
                    }}
                  >
                    Delete
                  </Text>
                </Pressable>
              </View>
            ) : (
              <EmptyCart />
            )}
            {cart.map((product) => (
              <CartSellingList
                key={product._id}
                product={product}
                onIncrement={handleIncrementQuantity}
                onDecrement={handleDecrementQuantity}
              />
            ))}
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <TitleForList text="Recommendations" />
          <ProductCardSellingList />
        </View>
      </ScrollView>

      <BottomTabButton height={98} style={{ justifyContent: "space-between" }}>
        <View
          style={{
            width: 200,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flex: 1,
            gap: 6,
          }}
        >
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            size={26}
            color={GlobalStyles.colors.gray100}
          />

          <Text style={{ color: GlobalStyles.colors.text700 }}>Check All</Text>
        </View>

        <Pressable>
          <View
            style={{
              flex: 1,
              gap: 4,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12, color: GlobalStyles.colors.text700 }}>
              Total
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: GlobalStyles.colors.primary100,
              }}
            >
              Rp{total}
            </Text>
          </View>
          {
            <View
              style={{
                flex: 1,
                gap: 4,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 12, color: GlobalStyles.colors.text700 }}
              >
                Discount
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: GlobalStyles.colors.primary100,
                }}
              >
                Rp{discount}
              </Text>
            </View>
          }
        </Pressable>

        <Button
          onPress={handlerConfirm}
          text={`Checkout (${getTotalQuantity()})`}
          color="secondary"
          styles={{
            flex: 1.6,
          }}
        />
      </BottomTabButton>
    </>
  );
};

export default CartScreen;
