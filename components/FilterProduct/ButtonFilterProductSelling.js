import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../constants/style";

const ButtonFilterProductSelling = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(false);

  const handleFilterPress = (filterType) => {
    const newFilter = selectedFilter === filterType ? null : filterType;
    setSelectedFilter(newFilter);
    onFilterChange(newFilter);
  };

  return (
    <View style={{ flexDirection: "row", paddingBottom: 8 }}>
      <TouchableOpacity
        onPress={() => handleFilterPress("filter")}
        style={{
          padding: 6,
          margin: 2,
          backgroundColor:
            selectedFilter === "filter"
              ? GlobalStyles.colors.primary
              : GlobalStyles.colors.light,
          borderRadius: 6,
          borderColor:
            selectedFilter === "filter"
              ? GlobalStyles.colors.light
              : GlobalStyles.colors.store_line,
          borderWidth: 2,
        }}
      >
        <Text
          style={{
            color:
              selectedFilter === "filter"
                ? GlobalStyles.colors.light
                : GlobalStyles.colors.text100,
            fontWeight: 400,
            fontSize: 13,
          }}
        >
          filter
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleFilterPress("priceLowToHigh")}
        style={{
          padding: 6,
          margin: 2,
          backgroundColor:
            selectedFilter === "priceLowToHigh"
              ? GlobalStyles.colors.primary
              : GlobalStyles.colors.light,
          borderRadius: 6,
          borderColor:
            selectedFilter === "priceLowToHigh"
              ? GlobalStyles.colors.light
              : GlobalStyles.colors.store_line,
          borderWidth: 2,
        }}
      >
        <Text
          style={{
            color:
              selectedFilter === "priceLowToHigh"
                ? GlobalStyles.colors.light
                : GlobalStyles.colors.text100,
            fontWeight: 400,
            fontSize: 13,
          }}
        >
          Cheaper
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleFilterPress("rateHighToLow")}
        style={{
          padding: 6,
          margin: 2,
          backgroundColor:
            selectedFilter === "rateHighToLow"
              ? GlobalStyles.colors.primary
              : GlobalStyles.colors.light,
          borderRadius: 6,
          borderColor:
            selectedFilter === "rateHighToLow"
              ? GlobalStyles.colors.light
              : GlobalStyles.colors.store_line,
          borderWidth: 2,
        }}
      >
        <Text
          style={{
            color:
              selectedFilter === "rateHighToLow"
                ? GlobalStyles.colors.light
                : GlobalStyles.colors.text100,
            fontWeight: 400,
            fontSize: 13,
          }}
        >
          Good Rate
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleFilterPress("promo")}
        style={{
          padding: 6,
          margin: 2,
          backgroundColor:
            selectedFilter === "promo"
              ? GlobalStyles.colors.primary
              : GlobalStyles.colors.light,
          borderRadius: 6,
          borderColor:
            selectedFilter === "promo"
              ? GlobalStyles.colors.light
              : GlobalStyles.colors.store_line,
          borderWidth: 2,
        }}
      >
        <Text
          style={{
            color:
              selectedFilter === "promo"
                ? GlobalStyles.colors.light
                : GlobalStyles.colors.text100,
            fontWeight: 400,
            fontSize: 13,
          }}
        >
          Promo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonFilterProductSelling;

const styles = StyleSheet.create({});
