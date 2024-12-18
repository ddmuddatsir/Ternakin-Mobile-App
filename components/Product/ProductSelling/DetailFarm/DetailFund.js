import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../../constants/style";
import FinancialReportChart from "../../../Chart/FinancialReportChart";
import {
  fundingRisk,
  introFundingRisk,
} from "../../../../database/assetData/funding-risk";
import Octicons from "@expo/vector-icons/Octicons";
import BottomTabButton from "../../../Button/BottomTabButton";
import Button from "../../../Button/Button";

const DetailFund = ({ fundComponent }) => {
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: GlobalStyles.colors.light,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: GlobalStyles.colors.primary100,
            fontWeight: "500",
            alignSelf: "center",
            paddingTop: 8,
          }}
        >
          {fundComponent.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            paddingVertical: 25,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 12,
                color: GlobalStyles.colors.text100,
                paddingBottom: 4,
              }}
            >
              Funding Goal
            </Text>
            <Text>
              Rp
              {fundComponent.fundingGoal}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 12,
                color: GlobalStyles.colors.text100,
                paddingBottom: 4,
              }}
            >
              Profit Sharing
            </Text>
            <Text
              style={{
                color: GlobalStyles.colors.success500,
                fontWeight: "500",
              }}
            >
              Rp
              {(fundComponent.fundingGoal / fundComponent.profitSharing) * 10}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 12,
                color: GlobalStyles.colors.text100,
                paddingBottom: 4,
              }}
            >
              Funding Tenor
            </Text>
            <Text>{fundComponent.duration} Month</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 20,
            backgroundColor: GlobalStyles.colors.background,
            paddingHorizontal: 12,
            marginBottom: 20,
          }}
        >
          <View style={{ gap: 6 }}>
            <Text
              style={{
                color: GlobalStyles.colors.text100,
              }}
            >
              Funding Status
            </Text>

            <Text
              style={{
                color: GlobalStyles.colors.text100,
              }}
            >
              Pendanaan Ke
            </Text>
            <Text
              style={{
                color: GlobalStyles.colors.text100,
              }}
            >
              Weekly Installment
            </Text>
            <Text
              style={{
                color: GlobalStyles.colors.text100,
              }}
            >
              Monthly Income
            </Text>
            <Text
              style={{
                color: GlobalStyles.colors.text100,
              }}
            >
              Pekerjaan
            </Text>
            <Text
              style={{
                color: GlobalStyles.colors.text100,
              }}
            >
              Sector
            </Text>
            <Text
              style={{
                color: GlobalStyles.colors.text100,
              }}
            >
              Agreement Contract
            </Text>
            <Text
              style={{
                color: GlobalStyles.colors.text100,
              }}
            >
              Risk Level
            </Text>
          </View>
          <View style={{ gap: 6, alignItems: "flex-end" }}>
            <Text>{fundComponent.status}</Text>

            <Text>Pendanaan Ke</Text>
            <Text>Rp{fundComponent.weeklyInstallment}</Text>
            <Text>Rp{fundComponent.monthlyIncome}</Text>
            <Text>Pekerjaan</Text>
            <Text>Sector</Text>
            <Text>{fundComponent.akad}</Text>
            <Text>{fundComponent.riskLevel}</Text>
          </View>
        </View>

        <FinancialReportChart />
        <Pressable
          style={{
            backgroundColor: GlobalStyles.colors.light,
            borderWidth: 2,
            borderColor: GlobalStyles.colors.primary100,
            padding: 14,
            marginVertical: 16,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
            flexDirection: "row",
            gap: 8,
          }}
        >
          <Text
            style={{
              color: GlobalStyles.colors.primary100,
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Download Financial Report Detail
          </Text>
          <Octicons
            name="download"
            size={16}
            color={GlobalStyles.colors.primary100}
          />
        </Pressable>
        <View
          style={{
            justifyContent: "space-between",
            borderTopWidth: 1,
            borderTopColor: GlobalStyles.colors.store_line,
            paddingTop: 15,
            paddingVertical: 25,
            gap: 8,
          }}
        >
          <Text
            style={{
              color: GlobalStyles.colors.text700,
            }}
          >
            Funding Risk
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: GlobalStyles.colors.text100,
            }}
          >
            {introFundingRisk}
          </Text>
          <View style={{ paddingLeft: 12 }}>
            {fundingRisk.map((item, index) => (
              <View key={index} style={{ paddingTop: 8 }}>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "600",
                    color: GlobalStyles.colors.text100,
                  }}
                >
                  {index + 1}. {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: GlobalStyles.colors.text100,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={{ paddingBottom: 84 }}>
        <BottomTabButton height={98}>
          <Button
            text="Make Funding"
            color="secondary"
            styles={{
              flex: 3,
            }}
          />
        </BottomTabButton>
      </View>
    </>
  );
};

export default DetailFund;

const styles = StyleSheet.create({});
