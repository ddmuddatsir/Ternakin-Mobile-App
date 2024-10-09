import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";
import AddressCard from "../components/Address/AddressCard";
import { useNavigation } from "@react-navigation/native";

const AddressListScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar back text={"Address List"} />
        <Pressable
          onPress={() => navigation.navigate("AddAddress")}
          style={{ marginRight: 12 }}
        >
          <Text
            style={{
              color: GlobalStyles.colors.success500,
              fontWeight: "600",
            }}
          >
            Add Address
          </Text>
        </Pressable>
      </SafeAreaView>
      <ScrollView
        style={{
          paddingHorizontal: 10,
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </ScrollView>
    </>
  );
};

export default AddressListScreen;

const styles = StyleSheet.create({});
