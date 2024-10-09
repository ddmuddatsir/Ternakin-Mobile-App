import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import Octicons from "@expo/vector-icons/Octicons";

const FarmCard = ({ img, name, location, rating, workingHours, followers }) => {
  return (
    <View
      style={{
        backgroundColor: GlobalStyles.colors.light,
        flex: 1,
        gap: 8,
        marginBottom: 8,
        padding: 14,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Pressable style={{ marginVertical: 12, gap: 6 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
          }}
        >
          <Image
            source={img}
            style={{
              height: 40,
              width: 40,
              borderRadius: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <View style={{}}>
            <Text
              style={{
                paddingBottom: 4,
                fontSize: 16,
                fontWeight: 600,
                color: GlobalStyles.colors.text700,
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                paddingBottom: 4,
                fontSize: 14,
                fontWeight: 400,
                color: GlobalStyles.colors.text100,
              }}
            >
              {location}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
            width: 220,
          }}
        >
          <Octicons
            name="star-fill"
            size={12}
            color={GlobalStyles.colors.yellow}
          />
          <Text style={{ color: GlobalStyles.colors.text100, fontSize: 12 }}>
            {rating}
          </Text>
          <Text style={{ color: GlobalStyles.colors.text100, fontSize: 12 }}>
            | {followers} Followers
          </Text>
          <Text style={{ color: GlobalStyles.colors.text100, fontSize: 12 }}>
            | {workingHours}
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: GlobalStyles.colors.primary100,
          justifyContent: "center",
          alignItems: "center",
          padding: 8,
          width: 100,
          height: 38,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: GlobalStyles.colors.light, fontWeight: 500 }}>
          Follow
        </Text>
      </Pressable>
    </View>
  );
};

export default FarmCard;

const styles = StyleSheet.create({});
