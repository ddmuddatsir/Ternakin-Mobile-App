//Perbaiki: Cara mengganti status pembelian

import { Text, View, ActivityIndicator } from "react-native";
import TransactiionCardItem from "./TransactiionCardItem";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";

const TransactionCardList = () => {
  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrderData();
  }, []);

  const fetchOrderData = async () => {
    try {
      setIsLoading(true); // Menunjukkan proses loading dimulai
      setError(null); // Reset error sebelum fetch

      const data = await fetchData("/orders");
      console.log("Data received:", data);

      if (data && Array.isArray(data.orders)) {
        // Sorting berdasarkan orderDate terbaru
        const sortedOrders = data.orders.sort((a, b) => {
          const dateA = new Date(a.orderDate);
          const dateB = new Date(b.orderDate);
          return dateB - dateA; // Urutkan descending (terbaru di atas)
        });

        setOrderData(sortedOrders); // Simpan data yang telah diurutkan
      } else {
        throw new Error("Invalid data format received"); // Lempar error jika format tidak valid
      }
    } catch (error) {
      console.error("Failed to fetch order data:", error.message);
      setError(error.message); // Simpan pesan error ke state
    } finally {
      setIsLoading(false); // Menunjukkan proses loading selesai
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading orders...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red", textAlign: "center" }}>
          Error: {error}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, flexWrap: "wrap", gap: 10 }}>
      {orderData.length > 0 ? (
        orderData.map((item) => (
          <TransactiionCardItem key={item._id} product={item} />
        ))
      ) : (
        <Text>No orders available</Text> // Menangani kondisi jika data kosong
      )}
    </View>
  );
};

export default TransactionCardList;
