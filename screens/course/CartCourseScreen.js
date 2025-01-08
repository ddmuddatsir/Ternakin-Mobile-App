// Perbaiki: belum selesai

import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { GlobalStyles } from "../../constants/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanCartCourse,
  loadCartCourse,
  removeFromCartCourse,
} from "../../redux/Course/CartCourseReducer";
import ProductSubcribeList from "../../components/Product/ProductSubcribe/ProductSubcribeList";
import TitleForList from "../../components/Title/TitleForList";
import CartSubcribeList from "../../components/Product/ProductSubcribe/CartSubcribe/CartSubcribeList";
import { useNavigation } from "@react-navigation/native";
import EmptyCart from "../../components/Empty/EmptyCart";
import Feather from "@expo/vector-icons/Feather";

const CartCourseScreen = () => {
  const navigation = useNavigation();
  const cartCourse = useSelector((state) => state.cartCourse.cartCourse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCartCourse());
  }, [dispatch]);

  // const handleRemoveItem = (productCourse) => {
  //   dispatch(removeFromCartCourse(productCourse));
  // };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCartCourse({ _id: productId }));
  };

  const handleRemoveAllItems = () => {
    dispatch(cleanCartCourse());
  };

  const hasProduct = cartCourse.length > 0;

  const handleConfirm = () => {
    if (cartCourse.length > 0) {
      navigation.navigate("");
    }
  };

  console.log(cartCourse);

  return (
    <ScrollView style={{ backgroundColor: GlobalStyles.colors.light }}>
      <View style={{ padding: 12 }}>
        {/* <View
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
        </View> */}

        {/* Contoh */}
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
              {/* Button Checklist all */}
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

              {/* Button delete all */}
              <Pressable
                onPress={() => dispatch(cleanCart(handleRemoveAllItems))}
                // onPress={() => handleRemoveAllItems}
              >
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
          {cartCourse.map((productCourse) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CartSubcribeList
                key={productCourse._id}
                productCourse={productCourse}
              />
              <Pressable onPress={() => handleRemoveItem(productCourse._id)}>
                <Feather
                  name="trash-2"
                  size={24}
                  color="red"
                  style={{ padding: 10, opacity: 0.5 }}
                />
              </Pressable>
            </View>
          ))}
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
