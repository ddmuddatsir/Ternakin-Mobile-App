import { Text, View } from "react-native";
import SearchBar from "./SearchBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/style";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../Button/BackButton";
import { useSelector } from "react-redux";
import Button from "../Button/Button";

const HeaderBar = ({
  active,
  text,
  back,
  searcBar,
  withouttIcon,
  wishlist,
}) => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);

  const handleOnPressCart = () => {
    navigation.navigate("Cart");
  };

  const handleOnPressChat = () => {
    navigation.navigate("Chat");
  };

  const getTotalQuantity = () => {
    return cart.reduce(
      (totalQuantity, product) => totalQuantity + product.quantity,
      0
    );
  };

  const totalQuantity = getTotalQuantity();

  let cartPosition;

  if (totalQuantity < 10) {
    cartPosition = 17;
  } else if (totalQuantity >= 10) {
    cartPosition = 12;
  } else if (totalQuantity > 99) {
    cartPosition = 10;
  }

  return (
    <>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {back && <BackButton />}

        {searcBar ? (
          <SearchBar border={active} text={text} />
        ) : (
          <View
            style={{
              height: 34,
              flex: 1,
              justifyContent: "center",
              width: "auto",
            }}
          >
            <Text
              style={{
                paddingHorizontal: 6,
                backgroundColor: "white",
                borderColor: GlobalStyles.colors.light,
                fontWeight: 600,
                fontSize: 18,
                color: GlobalStyles.colors.primary100,
              }}
            >
              {text}
            </Text>
          </View>
        )}

        {!withouttIcon ? (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 8,
              gap: 8,
            }}
          >
            <Button
              onPress={handleOnPressCart}
              style={{ paddingHorizontal: 3 }}
            >
              <Ionicons
                name="cart-outline"
                size={24}
                color={
                  active
                    ? GlobalStyles.colors.gray100
                    : GlobalStyles.colors.light
                }
              />

              {cart.length <= 0 ? (
                <View></View>
              ) : (
                <View
                  style={{
                    left: cartPosition,
                    bottom: 14,
                    position: "absolute",
                    paddingHorizontal: 3,
                    paddingVertical: 1.6,
                    borderRadius: 8,
                    backgroundColor: active
                      ? GlobalStyles.colors.primary
                      : GlobalStyles.colors.light,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 9,
                      fontWeight: "500",
                      color: active
                        ? GlobalStyles.colors.light
                        : GlobalStyles.colors.primary,
                    }}
                  >
                    {totalQuantity}
                  </Text>
                </View>
              )}
            </Button>

            <Button onPress={handleOnPressChat}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={22}
                color={
                  active
                    ? GlobalStyles.colors.gray100
                    : GlobalStyles.colors.light
                }
              />
              {/* <View
              style={{
                left: chatPosition,
                bottom: 14,
                position: "absolute",
                paddingHorizontal: 3,
                paddingVertical: 1.6,
                borderRadius: 8,
                backgroundColor: active
                  ? GlobalStyles.colors.primary
                  : GlobalStyles.colors.light,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 9,
                  fontWeight: "500",
                  color: active
                    ? GlobalStyles.colors.light
                    : GlobalStyles.colors.primary,
                }}
              >
                50
              </Text>
            </View> */}
            </Button>
          </View>
        ) : null}

        {wishlist && (
          <View>
            <Button>
              <Ionicons
                name="heart-outline"
                size={22}
                color={
                  active
                    ? GlobalStyles.colors.gray100
                    : GlobalStyles.colors.light
                }
              />
              {/* <View
              style={{
                left: wishListPosition,
                bottom: 14,
                position: "absolute",
                paddingHorizontal: 3,
                paddingVertical: 1.6,
                borderRadius: 8,
                backgroundColor: active
                  ? GlobalStyles.colors.primary
                  : GlobalStyles.colors.light,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 9,
                  fontWeight: "500",
                  color: active
                    ? GlobalStyles.colors.light
                    : GlobalStyles.colors.primary,
                }}
              >
                50
              </Text>
            </View> */}
            </Button>
          </View>
        )}
      </View>
    </>
  );
};

export default HeaderBar;
