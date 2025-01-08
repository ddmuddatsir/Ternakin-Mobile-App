import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Alert,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchWalletData,
  topUpWallet,
  makePayment,
  createWallet,
} from "../redux/WalletReducer";

const PointScreen = () => {
  const dispatch = useDispatch();
  const { wallet, loading, error } = useSelector((state) => state.wallet);
  const [topUpAmount, setTopUpAmount] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentDescription, setPaymentDescription] = useState("");

  useEffect(() => {
    // Fetch wallet data when the screen loads
    dispatch(fetchWalletData());
  }, [dispatch]);

  useEffect(() => {
    // Jika wallet belum ada, buat wallet baru secara otomatis
    if (!wallet && !loading && !error) {
      dispatch(createWallet()); // Membuat wallet baru
    }
  }, [wallet, loading, error, dispatch]);

  const handleTopUp = () => {
    if (!topUpAmount || isNaN(topUpAmount) || topUpAmount <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid amount to top-up.");
      return;
    }
    dispatch(topUpWallet({ amount: parseFloat(topUpAmount) }));
  };

  const handlePayment = () => {
    if (!paymentAmount || isNaN(paymentAmount) || paymentAmount <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid payment amount.");
      return;
    }
    if (!paymentDescription) {
      Alert.alert(
        "Description Required",
        "Please enter a payment description."
      );
      return;
    }
    dispatch(
      makePayment({
        amount: parseFloat(paymentAmount),
        description: paymentDescription,
      })
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}

      <Text style={styles.title}>
        Wallet Balance: {wallet ? wallet.balance : "Loading..."}
      </Text>

      {wallet ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Top-up Amount"
            keyboardType="numeric"
            value={topUpAmount}
            onChangeText={setTopUpAmount}
          />
          <Button title="Top Up" onPress={handleTopUp} />

          <TextInput
            style={styles.input}
            placeholder="Payment Amount"
            keyboardType="numeric"
            value={paymentAmount}
            onChangeText={setPaymentAmount}
          />
          <TextInput
            style={styles.input}
            placeholder="Payment Description"
            value={paymentDescription}
            onChangeText={setPaymentDescription}
          />
          <Button title="Make Payment" onPress={handlePayment} />
        </>
      ) : (
        <Text>Creating your wallet...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
export default PointScreen;
