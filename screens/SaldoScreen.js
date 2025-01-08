import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchWalletData,
  topUpWallet,
  makePayment,
  resetError,
  createWallet,
} from "../redux/WalletReducer";

import axiosInstance from "../utils/axiosInstance";
import { getAuthToken } from "../utils/getAuthToken";
import { fetchData } from "../utils/fetchData";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TitleForList from "../components/Title/TitleForList";
import PaymentHistoryTransCard from "../components/Payment/PaymentHistoryTransCard";
import WalletButton from "../components/Button/WalletButton";

const SaldoScreen = () => {
  const [amount, setAmount] = useState("");
  const [descript, setDescript] = useState("");
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  // const { wallet, transactions, loading, error } = useSelector(
  //   (state) => state.payment
  // );

  useEffect(() => {
    fetchWallet();
  }, [dispatch]);

  const createWallet = async () => {
    try {
      const token = await getAuthToken();

      const response = await axiosInstance.post(
        "/wallet",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setWallet(response.data);
      Alert.alert("Success", "Wallet has been created successfully.");
    } catch (error) {
      console.error(
        "Error creating wallet:",
        error.response?.data || error.message
      );
      Alert.alert(
        "Error",
        error.response?.data?.message || "Failed to create wallet."
      );
    }
  };

  const fetchWallet = async () => {
    try {
      setLoading(true);
      const data = await fetchData("/wallet");
      setWallet(data);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to fetch wallet data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        backgroundColor: GlobalStyles.colors.light,
      }}
    >
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : wallet ? (
        <>
          <SafeAreaView style={{ backgroundColor: GlobalStyles.colors.light }}>
            <HeaderBar back text={"Your Saldo"} />
          </SafeAreaView>

          {/* Transaction List */}
          <ScrollView
            style={{
              marginTop: 20,
              backgroundColor: GlobalStyles.colors.light,
            }}
          >
            {/* Balance and point */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                padding: 20,
                gap: 120,
              }}
            >
              <View>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>Balance</Text>
                <Text style={{ fontSize: 20, marginBottom: 20 }}>
                  Rp {wallet.balance.toLocaleString("id-ID")}
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>Point</Text>
                <Text style={{ fontSize: 20, marginBottom: 20 }}>
                  {/* {wallet.balance.toLocaleString("id-ID")} */} 0
                </Text>
              </View>
            </View>

            {/* Button */}
            <WalletButton />
            <View
              style={{
                padding: 12,
                marginTop: 12,
                backgroundColor: GlobalStyles.colors.light,
              }}
            >
              <TitleForList text={"Transaction History"} />
            </View>
            {wallet.transactions.length > 0 ? (
              wallet.transactions.map((item, index) => (
                <View
                  key={index}
                  style={{
                    padding: 12,
                  }}
                >
                  <PaymentHistoryTransCard payment={item} />
                </View>
              ))
            ) : (
              <Text style={{ textAlign: "center", marginTop: 20 }}>
                No transactions available.
              </Text>
            )}
          </ScrollView>
        </>
      ) : (
        <Text
          style={{
            backgroundColor: GlobalStyles.colors.light,
          }}
        >
          No wallet data available.
        </Text>
      )}
    </View>
  );
};

export default SaldoScreen;
