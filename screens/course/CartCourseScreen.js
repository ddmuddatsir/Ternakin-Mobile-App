import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { GlobalStyles } from "../../constants/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartCourse,
  removeFromCartCourse,
  clearCartCourse,
} from "../../redux/Course/CartCourseReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../utils/axiosInstance";
import Button from "../../components/Button/Button";
import ProductSubcribe from "../../components/Product/ProductSubcribe/ProductSubcribe";
import EmptyCart from "../../components/Empty/EmptyCart";
import ProductSubcribeList from "../../components/Product/ProductSubcribe/ProductSubcribeList";
import TitleForList from "../../components/Title/TitleForList";
import { useState } from "react";
import CartSubcribeList from "../../components/Product/ProductSubcribe/CartSubcribe/CartSubcribeList";
import { getAuthToken } from "../../utils/getAuthToken";

const CartCourseScreen = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.cartCourse);
  const cartCourseItems = useSelector((state) => state.cartCourse.cartCourse);

  const [fetchError, setFetchError] = useState(null);

  const items = Array.isArray(cartCourseItems) ? cartCourseItems : [];

  useEffect(() => {
    fetchCartCourseWithToken();
  }, [dispatch]);

  const fetchCartCourseWithToken = async () => {
    try {
      const token = await getAuthToken();
      const response = await axiosInstance.get(`/cart-courses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      dispatch(fetchCartCourse(response.data));
    } catch (error) {
      console.error("Error fetching cart course product:", error);
      dispatch(fetchCartCourse([]));
    }
  };

  if (status === "loading") return <Text>Loading...</Text>;
  if (status === "failed" || fetchError)
    return <Text>{fetchError || `Error: ${error}`}</Text>;

  // if (!cartCourseItems || cartCourseItems.length === 0) {
  //   return <EmptyCart />;
  // }

  // console.log(cartCourse);

  // const hasProduct = cartCourseItems.productId.length > 0;

  const handleRemoveAllItems = () => {
    dispatch(clearCartCourse());
  };

  return (
    <ScrollView style={{ backgroundColor: GlobalStyles.colors.light }}>
      <View style={{ padding: 12 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            justifyContent: "space-between",
            paddingRight: 6,
            paddingBottom: 16,
          }}
        >
          <Pressable
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
          </Pressable>
          <Pressable onPress={handleRemoveAllItems}>
            <Text style={{ color: GlobalStyles.colors.gray100 }}>Delete</Text>
          </Pressable>
        </View>

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
          {cartCourseItems.length > 0 ? (
            cartCourseItems.map((item) => (
              <View key={item._id}>
                <CartSubcribeList key={item._id} product={item} />
                <ProductSubcribeList key={item._id} product={item} />
              </View>
            ))
          ) : (
            <Text>Wishlist</Text>
          )}
        </View>

        <View style={{ padding: 10 }}>
          <TitleForList text="Recommendations" />
          <ProductSubcribeList />
        </View>
      </View>
    </ScrollView>
  );
};

export default CartCourseScreen;

const styles = StyleSheet.create({});
