import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../../constants/style";
import { useDispatch, useSelector } from "react-redux";
import { topUpWallet } from "../../redux/WalletReducer";
import { useNavigation } from "@react-navigation/native";

const TopUpScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { wallet, loading, error } = useSelector((state) => state.wallet);
  const [topUpAmount, setTopUpAmount] = useState("");

  const handleConfirmTopUp = () => {
    // Validasi jumlah top-up
    if (!topUpAmount || isNaN(topUpAmount) || topUpAmount <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid amount to top-up");
      return;
    }

    // Konfirmasi sebelum top-up
    Alert.alert(
      "Confirm Top-Up",
      `Are you sure you want to top-up Rp${topUpAmount}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: handleTopUp, // Lanjutkan top-up jika pengguna menekan Yes
        },
      ]
    );
  };

  const handleTopUp = () => {
    // Dispatch aksi top-up
    dispatch(
      topUpWallet({
        amount: parseFloat(topUpAmount),
      })
    );

    // Tampilkan alert sukses
    Alert.alert(
      "Top-Up Success",
      `You have successfully topped up Rp${topUpAmount}`,
      [
        {
          text: "OK",
          onPress: () => {
            // Reset input, lalu navigasi ke halaman utama
            setTopUpAmount("");
            navigation.navigate("Home");
          },
        },
      ]
    );
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: GlobalStyles.colors.light }}>
        <HeaderBar back text={"Top Up"} />
      </SafeAreaView>
      <ScrollView style={{ backgroundColor: GlobalStyles.colors.light }}>
        <TextInput
          placeholder="Top-up Balance"
          keyboardType="numeric"
          value={topUpAmount}
          onChangeText={setTopUpAmount}
          style={{
            height: 40,
            borderColor: "#ccc",
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 5,
            margin: 40,
          }}
        />
        <Button title="Top up" onPress={handleConfirmTopUp} />
      </ScrollView>
    </>
  );
};

export default TopUpScreen;

const styles = StyleSheet.create({});
