import { SafeAreaView, ScrollView, View } from "react-native";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";
import TagFilter from "../components/TagFIlter/TagFilter";
import { useState } from "react";
import PaymentStepBar from "../components/PaymentStep/PaymentStepBar";
import TransactionCardList from "../components/TransactionCard/TransactionCardList";

const TransactionScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState([]);

  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
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
        <HeaderBar searcBar active={true} text={"Look for Transaction"} />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            right: 0,
            left: 0,
            backgroundColor: GlobalStyles.colors.light,
          }}
        >
          <View
            style={{
              height: 52,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <TagFilter
              selectedFilter={selectedFilter}
              onFilterChange={handleFilterChange}
            />
          </View>
        </View>
      </SafeAreaView>

      <ScrollView
        style={{
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <View style={{ paddingHorizontal: 10, gap: 10 }}>
          <PaymentStepBar />
          <TransactionCardList />
        </View>
      </ScrollView>
    </>
  );
};

export default TransactionScreen;
