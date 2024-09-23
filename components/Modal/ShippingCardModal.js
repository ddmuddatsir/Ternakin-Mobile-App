import { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GlobalStyles } from "../../constants/style";

const ShippingCardModal = ({
  shippingMethod,
  shippingEstimateTime,
  shippingEstimatePeriod,
  shippingCost,
  shippingLocation,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        backgroundColor: GlobalStyles.colors.light,
        flex: 1,
        gap: 8,
        marginBottom: 8,
        justifyContent: "center",
        padding: 14,
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          onPress={() => setModalVisible(false)}
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Pressable
            onPress={() => setModalVisible(true)}
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
            }}
          >
            <Text style={{ marginBottom: 15, textAlign: "center" }}>
              Hello World!
            </Text>
            <Pressable
              style={[
                { borderRadius: 20, padding: 10, elevation: 2 },
                {
                  backgroundColor: "#2196F3",
                },
              ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Hide Modal
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>

      <Pressable
        onPress={() => setModalVisible(true)}
        style={{ justifyContent: "center" }}
      >
        <Text
          style={{
            fontSize: 16,
            color: GlobalStyles.colors.text700,
            fontWeight: 500,
            paddingBottom: 10,
          }}
        >
          Shipping Method
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: 6 }}>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <MaterialCommunityIcons
                name="truck-cargo-container"
                size={16}
                color={GlobalStyles.colors.gray500}
              />
              <Text
                style={{
                  color: GlobalStyles.colors.gray500,
                  fontSize: 14,
                }}
              >
                Sent to
              </Text>
              <Text
                style={{ color: GlobalStyles.colors.text700, fontSize: 14 }}
              >
                {shippingLocation}
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <MaterialCommunityIcons
                name="clock-fast"
                size={16}
                color={GlobalStyles.colors.gray500}
              />
              <Text
                style={{
                  color: GlobalStyles.colors.gray500,
                  fontSize: 14,
                }}
              >
                Estimate
              </Text>
              <Text
                style={{ color: GlobalStyles.colors.text700, fontSize: 14 }}
              >
                ({shippingEstimateTime} {shippingEstimatePeriod})
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                fontWeight: 600,
                fontSize: 14,
                color: GlobalStyles.colors.text700,
              }}
            >
              {shippingMethod} Rp
              {shippingCost}
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color="black"
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ShippingCardModal;
