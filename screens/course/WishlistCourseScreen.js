import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../../constants/style";
import { ProductSubcribeLarge } from "../../components/Product/ProductSubcribe/ProductSubcribe";

const WishlistCourseScreen = () => {
  const wishlistCourse = useSelector(
    (state) => state.wishlistCourse.wishlistCourse
  );

  return (
    <>
      <SafeAreaView style={{ backgroundColor: GlobalStyles.colors.light }}>
        <HeaderBar back text={"Wishlist Course"} />
      </SafeAreaView>
      <ScrollView
        style={{ backgroundColor: GlobalStyles.colors.light, padding: 10 }}
      >
        {wishlistCourse.length > 0 ? (
          wishlistCourse.map((course, index) => (
            <View key={`course-${index}`} style={{ marginBottom: 12 }}>
              <ProductSubcribeLarge productCourse={course} />
            </View>
          ))
        ) : (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Tidak ada data Course yang tersedia.
          </Text>
        )}
      </ScrollView>
    </>
  );
};

export default WishlistCourseScreen;

const styles = StyleSheet.create({});
