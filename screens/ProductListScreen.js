import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import TagFilter from "../components/TagFIlter/TagFilter";
import { GlobalStyles } from "../constants/style";
import FilterProductSelling from "../components/FilterProduct/FilterProductSelling";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { Picker } from "@react-native-picker/picker";

const ProductListScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: GlobalStyles.colors.light,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          paddingVertical: 5,
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          position: "absolute",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        {/* <TagFilter
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        /> */}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: 62,
        }}
      >
        <View style={{ flex: 1, paddingBottom: 68 }}>
          <FilterProductSelling />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductListScreen;
