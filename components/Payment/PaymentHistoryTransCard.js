import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { GlobalStyles } from "../../constants/style";
import { currencyFormat } from "../../utils/currencyFormat";
import { dateFormat, timeFormat } from "../../utils/dateFormat";

const PaymentHistoryTransCard = ({ payment }) => {
  return (
    <Pressable
      style={{
        paddingBottom: 4,
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.store_line,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          color: GlobalStyles.colors.text100,
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        {dateFormat(payment.date)}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome6
            name="money-bills"
            size={18}
            color={GlobalStyles.colors.text100}
          />
          <View style={{ paddingLeft: 10 }}>
            <Text
              style={{
                paddingBottom: 6,
                color: GlobalStyles.colors.text700,
                fontWeight: 600,
              }}
            >
              Payment
            </Text>
            <Text style={{ color: GlobalStyles.colors.gray500 }}>
              {timeFormat(payment.date)}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              paddingBottom: 6,
              fontWeight: 500,
              color:
                payment.type === "topup"
                  ? GlobalStyles.colors.success500
                  : GlobalStyles.colors.error500,
            }}
          >
            Rp{currencyFormat(payment.amount)}
          </Text>
          <Text style={{ color: GlobalStyles.colors.text100 }}>Balance</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PaymentHistoryTransCard;

const styles = StyleSheet.create({});
