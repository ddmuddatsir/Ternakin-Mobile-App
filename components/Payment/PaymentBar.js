import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GlobalStyles } from "../../constants/style";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createWallet, fetchWalletData } from "../../redux/WalletReducer";
import { currencyFormat } from "../../utils/currencyFormat";

const PaymentBar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { wallet, loading, error } = useSelector((state) => state.wallet);

  useEffect(() => {
    dispatch(fetchWalletData());
  }, [dispatch]);

  useEffect(() => {
    // Jika wallet belum ada, buat wallet baru secara otomatis
    if (!wallet && !loading && !error) {
      dispatch(createWallet()); // Membuat wallet baru
    }
  }, [wallet, loading, error, dispatch]);

  // const walletBalance = wallet ? currencyFormat(wallet.balance) : "0";

  const walletBalance = wallet
    ? wallet.balance >= 1_000_000
      ? `${Math.floor(wallet.balance / 1_000_000)}Jt` // Hanya tampilkan angka bulat
      : currencyFormat(wallet.balance) // Format biasa untuk <1 juta
    : "0";

  return (
    <View
      style={{
        height: 92,
        backgroundColor: GlobalStyles.colors.primary,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Pressable
        onPress={() => navigation.navigate("SaldoScreen")}
        style={{
          backgroundColor: GlobalStyles.colors.light,
          height: 58,
          width: 125,
          borderRadius: 12,
          padding: 12,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: GlobalStyles.colors.gray500, fontSize: 12 }}>
          Balance
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          <Text>Rp{walletBalance}</Text>
          <Ionicons name="wallet-outline" size={18} color="brown" />
        </View>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("PointScreen")}
        style={{
          backgroundColor: GlobalStyles.colors.light,
          height: 58,
          width: 125,
          borderRadius: 12,
          padding: 12,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: GlobalStyles.colors.gray500, fontSize: 12 }}>
          Point
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          <Text>134.000</Text>
          <MaterialCommunityIcons
            name="star-four-points-outline"
            size={18}
            color="orange"
          />
        </View>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("TopUpScreen")}
        style={{
          backgroundColor: GlobalStyles.colors.light,
          height: 58,
          width: 125,
          borderRadius: 12,
          padding: 12,
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: GlobalStyles.colors.gray500, fontSize: 12 }}>
          Top up
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          <Text>Wallet</Text>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={18}
            color="green"
          />
        </View>
      </Pressable>
    </View>
  );
};

export default PaymentBar;
