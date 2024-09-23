import React from "react";
import { Image, ScrollView, View } from "react-native";

const BannerItem = ({ image }) => {
  return (
    <View
      style={{
        marginRight: 10,
      }}
    >
      <Image
        source={image}
        style={{
          width: 276,
          height: 120,
        }}
      />
    </View>
  );
};

export default BannerItem;
