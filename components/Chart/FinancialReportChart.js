import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { GlobalStyles } from "../../constants/style";

const FinancialReportChart = () => {
  const months = ["Jan", "Apr", "Jul", "Okt", "Des"];

  const generateRandomData = () => {
    return Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 1000 + 500)
    );
  };

  const financialData = generateRandomData();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: GlobalStyles.colors.light,
        padding: 6,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: GlobalStyles.colors.text100,
          marginBottom: 12,
          fontWeight: 600,
        }}
      >
        Sales Graph 2024
      </Text>

      <View
        style={{
          backgroundColor: GlobalStyles.colors.light,
          borderRadius: 10,
          elevation: 3,
          padding: 10,
          shadowColor: GlobalStyles.colors.text700,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        }}
      >
        <LineChart
          data={{
            labels: months,
            datasets: [
              {
                data: financialData,
                // color: (opacity = 1) =>
                //   GlobalStyles.colors.blue100.replace(", 1)", `, ${opacity})`),
              },
            ],
          }}
          width={Dimensions.get("window").width - 68}
          height={200}
          yAxisLabel=" "
          yAxisSuffix=" "
          yAxisInterval={5}
          chartConfig={{
            backgroundColor: GlobalStyles.colors.light,
            backgroundGradientFrom: GlobalStyles.colors.light,
            backgroundGradientTo: GlobalStyles.colors.light,
            decimalPlaces: 0,
            color: (opacity = 1) =>
              GlobalStyles.colors.bluelight.replace(", 1)", `, ${opacity})`),
            labelColor: (opacity = 1) =>
              GlobalStyles.colors.text700.replace(", 1)", `, ${opacity})`),
            propsForDots: {
              r: "3",
              strokeWidth: "1",
              stroke: GlobalStyles.colors.blue300,
            },
            propsForBackgroundLines: {
              stroke: "#e3e3e3",
            },
          }}
          bezier
          style={{
            marginVertical: 10,
            borderRadius: 10,
          }}
        />
      </View>

      {/* <View
        style={{
          marginTop: 20,
          backgroundColor: "#fff",
          borderRadius: 10,
          padding: 15,
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#4CAF50",
            marginBottom: 10,
          }}
        >
          Rincian Bulanan
        </Text>
        {months.map((month, index) => (
          <View
            key={month}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#555",
              }}
            >
              {month}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                color: "#333",
              }}
            >
              Rp {financialData[index].toLocaleString("id-ID")}
            </Text>
          </View>
        ))}
      </View> */}
    </ScrollView>
  );
};

export default FinancialReportChart;
