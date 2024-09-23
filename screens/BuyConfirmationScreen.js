import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import BottomTabButton from "../components/Button/BottomTabButton";
import Button from "../components/Button/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { products } from "../dummy-data";
import ShippingCardModal from "../components/Modal/ShippingCardModal";
import AddressCard from "../components/Address/AddressCard";

const BuyConfirmationScreen = () => {
  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HeaderBar withouttIcon back text={"Checkout"} />
        </View>
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
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Image
                  style={{
                    backgroundColor: "black",
                    height: 86,
                    width: 86,
                    borderRadius: 12,
                  }}
                />
                <View style={{ gap: 8, width: 290 }}>
                  <Text
                    style={{ color: GlobalStyles.colors.text700, fontSize: 16 }}
                  >
                    Bali Calves 6 Month
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "600",
                    }}
                  >
                    Rp74345
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      alignSelf: "flex-end",
                    }}
                  >
                    1x
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 12,
                  gap: 6,
                }}
              >
                <MaterialCommunityIcons
                  name="checkbox-blank-outline"
                  size={26}
                  color={GlobalStyles.colors.gray100}
                />
                <View style={{ width: 280 }}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Add crash protection
                  </Text>
                  <Text
                    style={{ fontSize: 11, color: GlobalStyles.colors.text700 }}
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
                  Rp50.000
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    color: GlobalStyles.colors.text700,
                  }}
                >
                  Shipping Method
                </Text>
                {/* <ShippingCardModal
                  shippingCost={products.shippingMethod.cost}
                  shippingEstimateTime={
                    products.shippingMethod.estimate[0].timeArrive
                  }
                  shippingEstimatePeriod={
                    products.shippingMethod.estimate[0].periodArrive
                  }
                  shippingLocation={products.shippingMethod.location}
                  shippingMethod={products.shippingMethod.method}
                /> */}
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
                  Totals Order (1 Product)
                </Text>
                <Text
                  style={{
                    fontWeight: 600,
                    fontSize: 16,
                    color: GlobalStyles.colors.primary100,
                  }}
                >
                  Rp6.400.000
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
                    Rp6.300.000
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp7327634
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp98000
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp0395
                  </Text>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontWeight: "500",
                    }}
                  >
                    Rp9453
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
                  Rp6.412.000
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
              Rp60000
            </Text>
          </View>
        </Pressable>

        <Button
          // onPress={() => addItemToCart(route?.params?.product)}
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

const styles = StyleSheet.create({});
