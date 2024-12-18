import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { GlobalStyles } from "../constants/style";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import BottomTabButton from "../components/Button/BottomTabButton";
import Button from "../components/Button/Button";
import ShippingCardModal from "../components/Modal/ShippingCardModal";
import AddressCard from "../components/Address/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Cart from "../api/models/cartlist";
import axiosInstance from "../utils/axiosInstance";
import { BASE_URL } from "../api/config/apiConfig";
import { currencyFormat } from "../utils/currencyFormat";

const protectionPrice = 50000;
const serviceFee = 3000;
const handleFee = 5000;

const BuyNowScreen = ({ route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const discountPrice = product.price - (product.price * product.discPer) / 100;

  const totalPayment =
    discountPrice +
    product.shippingMethodId.cost +
    protectionPrice +
    handleFee +
    serviceFee;

  if (!product.quantity) {
    product.quantity = 1;
  }

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const userId = await AsyncStorage.getItem("userId");
      const orderData = {
        userId,
        products: [
          { productId: product._id, quantity: 1, price: product.price },
        ],
        totalAmount: totalPayment,
      };

      await axiosInstance.post(`${BASE_URL}/orders`, orderData);

      Alert.alert("Success", "Your order has been placed!");
      navigation.navigate("TransactionScreen");
    } catch (error) {
      console.error("Checkout Error:", error.message);
      Alert.alert("Error", "Failed to place order. Please try again.");
    } finally {
      setLoading(false);
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
                <View
                  key={product._id}
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
                      source={{ uri: product.image }}
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
                        {product.title}
                      </Text>
                      <Text
                        style={{
                          color: GlobalStyles.colors.text700,
                          fontWeight: "600",
                        }}
                      >
                        Rp
                        {currencyFormat(discountPrice)}
                      </Text>
                      <Text
                        style={{
                          color: GlobalStyles.colors.text700,
                          alignSelf: "flex-end",
                        }}
                      >
                        {product.quantity}x
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
                      Rp{currencyFormat(protectionPrice)}
                    </Text>
                  </View>
                  <ShippingCardModal
                    shippingCost={product.shippingMethodId.cost}
                    shippingEstimateTime={
                      product.shippingMethodId.estimate[0].timeArrive
                    }
                    shippingEstimatePeriod={
                      product.shippingMethodId.estimate[0].periodArrive
                    }
                    shippingLocation={product.shippingMethodId.location}
                    shippingMethod={product.shippingMethodId.method}
                  />
                </View>
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
                  Totals Order ({product.quantity} Product)
                </Text>
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    color: GlobalStyles.colors.primary100,
                  }}
                >
                  Rp
                  {currencyFormat(discountPrice)}
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
                    Rp{currencyFormat(discountPrice)}
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp{product.shippingMethodId.cost}
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp{currencyFormat(protectionPrice)}
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

export default BuyNowScreen;
