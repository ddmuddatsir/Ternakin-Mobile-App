import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "../constants/style";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import BottomTabButton from "../components/Button/BottomTabButton";
import Button from "../components/Button/Button";
import ShippingCardModal from "../components/Modal/ShippingCardModal";
import AddressCard from "../components/Address/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { cleanCart, saveOrderToBackend } from "../redux/CartReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../api/config/apiConfig";
import { createOrder } from "../redux/OrderReducer";
import axiosInstance from "../utils/axiosInstance";
import { useNavigation } from "@react-navigation/native";

const protectionPrice = 50000;
const serviceFee = 3000;
const handleFee = 5000;

const BuyConfirmationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);
  const discount = useSelector((state) => state.cart.discount);
  const status = useSelector((state) => state.cart.status);

  const [shippingAddress, setShippingAddress] = useState("");
  const [shippingMethodId, setShippingMethodId] = useState("");

  useEffect(() => {
    if (status === "succeeded") {
      sendEmail();
      Alert.alert("Orders Successfully", "Your orders on process");
      dispatch(resetStatus());
    } else if (status === "failed") {
      Alert.alert(
        "Error",
        "Terjadi kesalahan saat memproses pesanan. Silakan coba lagi."
      );
    }
  }, [status]);

  const getTotalQuantity = () => {
    return cart.reduce(
      (totalQuantity, product) => totalQuantity + product.quantity,
      0
    );
  };

  const shippingSubTotalsPrice = cart.reduce(
    (sum, item) => sum + item.shippingMethodId.cost,
    0
  );

  const totalProtectionPrice = cart.reduce(
    (sum, item) => sum + protectionPrice,
    0
  );

  const totalPayment =
    total +
    shippingSubTotalsPrice +
    totalProtectionPrice +
    handleFee +
    serviceFee;

  const handleCheckout = async () => {
    if (cart.length === 0) {
      Alert.alert("Error", "Your cart is empty");
      return;
    }

    const userId = await AsyncStorage.getItem("userId");
    const orderData = {
      products: cart.map((item) => ({
        userId,
        productId: item.productId || item._id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount: totalPayment,
    };

    console.log(
      "Order Data Sent to Backend:",
      JSON.stringify(orderData, null, 2)
    ); // Log data order

    dispatch(createOrder(orderData))
      .unwrap()
      .then(() => {
        dispatch(cleanCart());
        navigation.navigate("TransactionScreen");
      })
      .catch((error) => console.log(error));
    console.log(orderData);
  };

  const sendEmail = async () => {
    const userEmail = await AsyncStorage.getItem("userEmail");
    const orderDetails = cart
      .map((item) => `${item.name} - ${item.quantity} x ${item.price}`)
      .join("\n");

    try {
      await axiosInstance.post(`${BASE_URL}/send-email`, {
        email: userEmail, // Ambil email dari storage
        orderDetails,
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.error(
        "Error sending email:",
        error.response ? error.response.data : error.message
      );
      Alert.alert(
        "Error",
        "Terjadi kesalahan saat mengirim email. Silakan coba lagi."
      );
    }
  };

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar withouttIcon back text={"Checkout"} />
      </SafeAreaView>
      <ScrollView
        style={{
          backgroundColor: GlobalStyles.colors.light,
          paddingHorizontal: 14,
        }}
      >
        <View>
          <Text
            style={{
              paddingHorizontal: 4,

              fontSize: 14,
              fontWeight: "600",
              color: GlobalStyles.colors.text700,
            }}
          >
            Address
          </Text>
          <View>
            <AddressCard />

            <View
              style={{
                borderBottomWidth: 6,
                borderBottomColor: GlobalStyles.colors.background,
              }}
            >
              <View style={{ paddingBottom: 10 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: GlobalStyles.colors.text700,
                  }}
                >
                  Buy immediately
                </Text>
              </View>
              <View style={{ gap: 10 }}>
                {cart.map((item) => (
                  <View
                    key={item._id}
                    style={{
                      borderBottomColor: GlobalStyles.colors.primary100,
                      borderBottomWidth: 1,
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        marginVertical: 4,
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          backgroundColor: "black",
                          height: 86,
                          width: 86,
                          borderRadius: 12,
                        }}
                      />
                      <View style={{ gap: 8, width: 290 }}>
                        <Text
                          style={{
                            color: GlobalStyles.colors.text700,
                            fontSize: 16,
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            color: GlobalStyles.colors.text700,
                            fontWeight: "600",
                          }}
                        >
                          Rp{item.price - (item.price * item.discPer) / 100}
                        </Text>
                        <Text
                          style={{
                            color: GlobalStyles.colors.text700,
                            alignSelf: "flex-end",
                          }}
                        >
                          {item.quantity}x
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        paddingVertical: 12,
                        gap: 6,
                        marginVertical: 6,
                        borderBottomColor: GlobalStyles.colors.background,
                        borderBottomWidth: 2,
                        borderTopColor: GlobalStyles.colors.background,
                        borderTopWidth: 2,
                      }}
                    >
                      <FontAwesome5
                        style={{
                          paddingTop: 5,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        name="check-double"
                        size={20}
                        color={GlobalStyles.colors.success500}
                      />
                      <View
                        style={{
                          width: 280,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 13,
                            color: GlobalStyles.colors.text700,
                            fontWeight: "500",
                          }}
                        >
                          Include crash protection
                        </Text>

                        <Text
                          style={{
                            fontSize: 11,
                            color: GlobalStyles.colors.text700,
                          }}
                        >
                          Protect the product from damage to the destination
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: GlobalStyles.colors.text700,
                          justifyContent: "flex-end",
                          fontWeight: "500",
                        }}
                      >
                        Rp{protectionPrice}
                      </Text>
                    </View>
                    <ShippingCardModal
                      shippingCost={item.shippingMethodId.cost}
                      shippingEstimateTime={
                        item.shippingMethodId.estimate[0].timeArrive
                      }
                      shippingEstimatePeriod={
                        item.shippingMethodId.estimate[0].periodArrive
                      }
                      shippingLocation={item.shippingMethodId.location}
                      shippingMethod={item.shippingMethodId.method}
                    />
                  </View>
                ))}
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 12,
                }}
              >
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 14,
                    color: GlobalStyles.colors.text700,
                  }}
                >
                  Totals Order ({getTotalQuantity()} Product)
                </Text>
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    color: GlobalStyles.colors.primary100,
                  }}
                >
                  Rp{total}
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingVertical: 16,
                gap: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: GlobalStyles.colors.text700,
                  paddingBottom: 4,
                }}
              >
                Payment Methode
              </Text>
              <View style={{ flexDirection: "row", gap: 32 }}>
                <View style={{ gap: 6 }}>
                  <Text style={{ color: GlobalStyles.colors.gray100 }}>
                    Balance
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.gray500,
                      fontWeight: "500",
                    }}
                  >
                    Rp. 300.000
                  </Text>
                </View>
                <View style={{ gap: 6 }}>
                  <Text style={{ color: GlobalStyles.colors.gray100 }}>
                    Point
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.gray500,
                      fontWeight: "500",
                    }}
                  >
                    134.000
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", gap: 10, paddingTop: 4 }}>
                <Text style={{ color: GlobalStyles.colors.error500 }}>
                  Your balance is not enough
                </Text>
                <Pressable>
                  <Text
                    style={{
                      color: GlobalStyles.colors.success500,
                      fontWeight: 600,
                    }}
                  >
                    Top Up
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={{ gap: 6 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: GlobalStyles.colors.text700,
                  paddingBottom: 4,
                }}
              >
                Payment Details
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottomWidth: 2,
                  borderBottomColor: GlobalStyles.colors.gray100,
                  paddingBottom: 12,
                  marginBottom: 8,
                }}
              >
                <View style={{ gap: 6 }}>
                  <Text style={{ color: GlobalStyles.colors.text100 }}>
                    Product subtotals
                  </Text>
                  <Text style={{ color: GlobalStyles.colors.text100 }}>
                    Shipping subtotals
                  </Text>
                  <Text style={{ color: GlobalStyles.colors.text100 }}>
                    Total handling protection
                  </Text>
                  <Text style={{ color: GlobalStyles.colors.text100 }}>
                    Service fee
                  </Text>
                  <Text style={{ color: GlobalStyles.colors.text100 }}>
                    Handling fee
                  </Text>
                </View>
                <View style={{ alignItems: "flex-end", gap: 6 }}>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp{total}
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp{shippingSubTotalsPrice}
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp{totalProtectionPrice}
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp{serviceFee}
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp{handleFee}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: GlobalStyles.colors.text700,
                    fontWeight: "600",
                  }}
                >
                  Total payment
                </Text>
                <Text
                  style={{
                    color: GlobalStyles.colors.primary100,
                    fontWeight: "600",
                    fontSize: 16,
                  }}
                >
                  Rp{totalPayment}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomTabButton height={98}>
        <Pressable
          style={{
            flex: 0.7,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 12,
          }}
        >
          <View
            style={{
              gap: 4,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 12, color: GlobalStyles.colors.text700 }}>
              Total Payment
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: GlobalStyles.colors.primary100,
              }}
            >
              Rp{totalPayment}
            </Text>
          </View>
        </Pressable>

        <Button
          onPress={handleCheckout}
          text="Pay Out"
          color="secondary"
          styles={{
            flex: 2,
          }}
        />
      </BottomTabButton>
    </>
  );
};

export default BuyConfirmationScreen;
