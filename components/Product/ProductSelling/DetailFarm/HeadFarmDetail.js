import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../../../constants/style";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HeadFarmDetail = ({ details }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ width: 54, height: 54, paddingRight: 60 }}>
          <Image
            source={{ uri: details.image }}
            style={{
              width: 54,
              height: 54,
              borderRadius: 32,
            }}
          />
        </View>
        <View style={{ gap: 8 }}>
          <Text
            style={{
              fontWeight: "600",
              color: GlobalStyles.colors.text700,
            }}
          >
            {details.name}
          </Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text style={{ color: GlobalStyles.colors.gray500, fontSize: 13 }}>
              {details.rating}
            </Text>
            <FontAwesome
              name="star"
              size={13}
              color={GlobalStyles.colors.yellow}
            />
            <View
              style={{
                borderWidth: 0.9,
                borderColor: GlobalStyles.colors.gray100,
              }}
            ></View>
            <Text
              style={{
                color: GlobalStyles.colors.gray500,
                fontSize: 13,
              }}
            >
              {details.followers} Followers
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          style={{
            backgroundColor: GlobalStyles.colors.primary100,
            borderWidth: 2,
            borderColor: GlobalStyles.colors.primary100,
            paddingVertical: 8,
            paddingHorizontal: 18,
            marginVertical: 4,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: GlobalStyles.colors.light,
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            Follow +
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: GlobalStyles.colors.light,
            borderWidth: 1.5,
            borderColor: GlobalStyles.colors.primary,
            paddingVertical: 8,
            paddingHorizontal: 18,
            marginVertical: 4,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              color: GlobalStyles.colors.primary,
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            Chat{" "}
          </Text>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={14}
            color={GlobalStyles.colors.primary}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default HeadFarmDetail;

const styles = StyleSheet.create({});
