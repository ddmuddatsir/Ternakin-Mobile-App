import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GlobalStyles } from "../../constants/style";

const PaymentBar = () => {
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
      <View
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
          <Text>Rp. 300.000</Text>
          <Ionicons name="wallet-outline" size={18} color="brown" />
        </View>
      </View>

      <View
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
      </View>

      <View
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
      </View>
    </View>
  );
};

export default PaymentBar;
