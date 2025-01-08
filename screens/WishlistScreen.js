import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GlobalStyles } from "../constants/style";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { useDispatch, useSelector } from "react-redux";
import ProductCardSelling from "../components/Product/ProductSelling/ProductCardSelling";

const WishlistScreen = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar back searcBar active={true} text={"Your Wishlist"} />
      </SafeAreaView>
      <ScrollView
        style={{
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
            paddingHorizontal: 10,
            paddingVertical: 12,
          }}
        >
          {wishlist.length > 0 ? (
            wishlist.map((item, index) => (
              <View key={index}>
                <ProductCardSelling key={item._id} product={item} />
              </View>
            ))
          ) : (
            <Text>Wishlist</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({});
