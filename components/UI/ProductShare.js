// ProductShare.js
import React from "react";
import { View, Text, Share, StyleSheet } from "react-native";
import { Pressable } from "react-native-gesture-handler";

const ProductShare = ({ productName, productDescription, productLink }) => {
  const onShare = async () => {
    try {
      await Share.share({
        message: `${productName}\n${productDescription}\n${productLink}`,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Pressable onPress={onShare} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Share Product</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },
  button: {
    backgroundColor: "#D29852", // Ganti dengan warna sesuai tema aplikasi Anda
    borderRadius: 5,
    padding: 12,
    elevation: 3, // Efek bayangan untuk Android
    shadowColor: "#000", // Efek bayangan untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProductShare;
