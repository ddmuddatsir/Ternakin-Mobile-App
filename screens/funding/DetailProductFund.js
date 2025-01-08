import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import HeaderBar from "../../components/HeaderBar/HeaderBar";

import { GlobalStyles } from "../../constants/style";

const DetailProductFund = ({ route }) => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: GlobalStyles.colors.light }}>
        <HeaderBar back searcBar active />
      </SafeAreaView>
      <ScrollView
        style={{ backgroundColor: GlobalStyles.colors.light }}
      ></ScrollView>
    </>
  );
};

export default DetailProductFund;

const styles = StyleSheet.create({});
