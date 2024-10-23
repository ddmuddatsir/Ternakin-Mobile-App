import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { GlobalStyles } from "../../constants/style";

const DetailProductSellingDescription = ({
  descriptionStock,
  descriptionCondition,
  descriptionMinOrder,
  descriptionShedPen,
  descriptionAdvantages,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <View
      style={{
        backgroundColor: GlobalStyles.colors.light,
        flex: 1,
        gap: 8,
        marginBottom: 8,
        padding: 14,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: GlobalStyles.colors.text700,
          fontWeight: 500,
          paddingBottom: 4,
        }}
      >
        Detail Product
      </Text>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <View style={{ gap: 6 }}>
          <Text style={{ color: GlobalStyles.colors.text100, fontSize: 14 }}>
            Stock
          </Text>
          <Text style={{ color: GlobalStyles.colors.text100, fontSize: 14 }}>
            Condition
          </Text>
          <Text style={{ color: GlobalStyles.colors.text100, fontSize: 14 }}>
            Min. Order
          </Text>
          <Text style={{ color: GlobalStyles.colors.text100, fontSize: 14 }}>
            Shed/pen
          </Text>
        </View>
        <View style={{ gap: 6 }}>
          <Text style={{ color: GlobalStyles.colors.text700, fontSize: 14 }}>
            : {descriptionStock}
          </Text>
          <Text style={{ color: GlobalStyles.colors.text700, fontSize: 14 }}>
            : {descriptionCondition}
          </Text>
          <Text style={{ color: GlobalStyles.colors.text700, fontSize: 14 }}>
            : {descriptionMinOrder}
          </Text>
          <Text style={{ color: GlobalStyles.colors.text700, fontSize: 14 }}>
            : {descriptionShedPen}
          </Text>
        </View>
      </View>

      <Text style={{ color: GlobalStyles.colors.text700, fontSize: 14 }}>
        {descriptionAdvantages}
      </Text>
      <Pressable>
        <Text
          style={{
            color: GlobalStyles.colors.success500,
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          Read More
        </Text>
      </Pressable>
    </View>
  );
};

export default DetailProductSellingDescription;

const styles = StyleSheet.create({});
