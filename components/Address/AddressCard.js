import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import Ionicons from "@expo/vector-icons/Ionicons";

const AddressCard = () => {
  return (
    <Pressable
      style={{
        backgroundColor: GlobalStyles.colors.light,
        borderRadius: 16,
        borderWidth: 1,
        padding: 16,
        marginVertical: 5,
        flexDirection: "row",
        borderColor: GlobalStyles.colors.gray100,
        gap: 4,
      }}
    >
      <Ionicons
        name="location-sharp"
        size={20}
        color={GlobalStyles.colors.primary100}
      />
      <View style={{ width: "95%", gap: 4 }}>
        <Text style={{ color: GlobalStyles.colors.text700 }}>Mr. Handoko</Text>
        <Text style={{ color: GlobalStyles.colors.text700 }}>086347635276</Text>
        <Text style={{ color: GlobalStyles.colors.text700 }}>
          Jl. Soekarnohata, Rt 03/06 Kp. Hijau raya, Desa bogor selatan, Kec.
          Jambi kulon, KAB. SURABAYA JAWA TIMUR, ID 24852
        </Text>
      </View>
    </Pressable>
  );
};

export default AddressCard;

const styles = StyleSheet.create({});
