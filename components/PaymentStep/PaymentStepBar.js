import { Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { GlobalStyles } from "../../constants/style";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const PaymentStepBar = () => {
  return (
    <View
      style={{
        borderRadius: 12,
        shadowColor: GlobalStyles.colors.light,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        borderColor: GlobalStyles.colors.store_line,
        borderWidth: 0.25,
      }}
    >
      <View
        style={{
          height: 50,
          width: 394,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 4,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <FontAwesome5 name="money-bill-alt" size={24} color="orange" />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: GlobalStyles.colors.text100,
            }}
          >
            Menunggu Pembayaran
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: GlobalStyles.colors.error500,
              padding: 4,
              borderRadius: 4,
              marginRight: 10,
            }}
          >
            <Text style={{ color: GlobalStyles.colors.light }}>1</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={14} color="black" />
        </View>
      </View>
    </View>
  );
};

export default PaymentStepBar;
