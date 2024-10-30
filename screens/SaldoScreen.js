import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";
import axios from "axios";
import { BASE_URL } from "../api/config/apiConfig";

const SaldoScreen = ({ route }) => {
  const { userId } = route.params;
  const [saldo, setSaldo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/wallet/${userId}`);
        setSaldo(response.data.balance);
      } catch (error) {
        Alert.alert("Error", "Failed to collect balance. Please try again.");
        console.error("Error fetching wallet", error);
      } finally {
        setLoading(false);
      }
    };

    console.log(userId);
    fetchSaldo();
  }, [userId]);

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar
          withouttIcon
          wishlist
          back
          active={true}
          text={"Your Wallet"}
        />
      </SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>Saldo Dompet</Text>
            <Text style={styles.saldo}>
              Rp {saldo?.toLocaleString("id-ID")}
            </Text>
            <Button
              title="Refresh"
              onPress={() => setLoading(true)} // Refresh saldo dengan fetch ulang
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SaldoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  saldo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: 30,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
