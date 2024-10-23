import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";

const PortfolioScreen = () => {
  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar searcBar active={true} text={"Farm"} />
      </SafeAreaView>
      <ScrollView
        style={{
          padding: 20,
          paddingTop: 100,
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 12 }}
        >
          <FontAwesome
            name="gears"
            size={120}
            color={GlobalStyles.colors.store_line}
          />
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
              color: GlobalStyles.colors.store_line,
            }}
          >
            This Feature is Develop
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default PortfolioScreen;
