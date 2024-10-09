import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import TitleForList from "../Title/TitleForList";

const ConversationCard = () => {
  return (
    <View
      style={{
        backgroundColor: GlobalStyles.colors.light,
        flex: 1,
        gap: 8,
        marginBottom: 8,
        padding: 14,
      }}
    >
      <TitleForList text="Conversation" navigate />
      <View
        style={{
          borderWidth: 1,
          borderRadius: 18,
          padding: 18,
          shadowColor: GlobalStyles.colors.gray500,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          borderColor: GlobalStyles.colors.store_line,
          borderWidth: 0.25,
        }}
      >
        <View style={{ gap: 8, paddingBottom: 18 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
            }}
          >
            <Image
              // source={{uri: product.}}
              style={{
                height: 32,
                width: 32,
                backgroundColor: "black",
                borderRadius: 32,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 14,
                  color: GlobalStyles.colors.text700,
                }}
              >
                Fatimah
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: GlobalStyles.colors.gray100,
                }}
              >
                {" "}
                • 29 Aug
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: GlobalStyles.colors.text700,
            }}
          >
            Is the cow ready?
          </Text>
        </View>
        <View style={{ gap: 8, paddingBottom: 18 }}>
          <View
            style={{
              flexDirection: "row",
              gap: 6,
              alignItems: "center",
              marginLeft: 30,
            }}
          >
            <Image
              style={{
                height: 32,
                width: 32,
                backgroundColor: "black",
                borderRadius: 32,
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 14,
                  color: GlobalStyles.colors.text700,
                }}
              >
                UG Farm
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: GlobalStyles.colors.gray100,
                }}
              >
                {" "}
                • 29 Aug
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: GlobalStyles.colors.text700,
              marginLeft: 30,
            }}
          >
            Yes animals ready, please order?
          </Text>
        </View>

        <Pressable style={{ alignItems: "flex-end" }}>
          <Text style={{ color: GlobalStyles.colors.success500 }}>See All</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ConversationCard;

const styles = StyleSheet.create({});
