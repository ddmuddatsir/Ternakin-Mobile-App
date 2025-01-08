import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const WalletButton = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: GlobalStyles.colors.light,
        flexDirection: "row",

        borderRadius: 12,
        padding: 12,
        marginHorizontal: 20,
        shadowColor: GlobalStyles.colors.primary100,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Top up */}
      <Pressable
        onPress={() => navigation.navigate("TopUpScreen")}
        style={{
          padding: 12,
          backgroundColor: GlobalStyles.colors.light,
          alignItems: "center",
          gap: 6,
        }}
      >
        <MaterialCommunityIcons
          name="wallet-plus"
          size={30}
          color={GlobalStyles.colors.primary}
        />
        <Text>Top Up</Text>
      </Pressable>

      {/* Scan QR */}
      <View
        style={{
          padding: 12,
          backgroundColor: GlobalStyles.colors.light,
          alignItems: "center",
          gap: 7,
        }}
      >
        <MaterialCommunityIcons
          name="qrcode"
          size={30}
          color={GlobalStyles.colors.gray100}
        />
        <Text>Scan QR</Text>
      </View>

      {/* Transfer */}
      <View
        style={{
          padding: 12,
          backgroundColor: GlobalStyles.colors.light,
          alignItems: "center",
          gap: 5,
        }}
      >
        <MaterialCommunityIcons
          name="transfer-up"
          size={32}
          color={GlobalStyles.colors.gray100}
        />

        <Text>Transfer</Text>
      </View>

      {/* Bank Transfer */}
      <View
        style={{
          padding: 12,
          backgroundColor: GlobalStyles.colors.light,
          alignItems: "center",
          gap: 2,
        }}
      >
        <MaterialCommunityIcons
          name="bank-transfer"
          size={36}
          color={GlobalStyles.colors.gray100}
        />
        <Text>Bank Transfer</Text>
      </View>
    </View>
  );
};

export default WalletButton;

const styles = StyleSheet.create({});
