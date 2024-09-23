import { Image, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { GlobalStyles } from "../../../constants/style";

const ProductSubcribe = () => {
  return (
    <View
      style={{
        height: 200,
        width: 146,
        backgroundColor: GlobalStyles.colors.light,
        borderRadius: 12,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        borderColor: GlobalStyles.colors.store_line,
        borderWidth: 0.25,
      }}
    >
      <View
        style={{
          width: 146,
          height: 90,
          backgroundColor: "black",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          marginBottom: 8,
        }}
      >
        <Image />
      </View>
      <View
        style={{
          width: 126,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            gap: 8,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: GlobalStyles.colors.text700,
            }}
          >
            Treating calves with stomach pain
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="signal-cellular-1"
                size={14}
                color={GlobalStyles.colors.text100}
              />
              <Text
                style={{ fontSize: 11, color: GlobalStyles.colors.text100 }}
              >
                Beginner
              </Text>
            </View>
            <View
              style={{
                width: 55,
                height: 20,
                backgroundColor: GlobalStyles.colors.bluelight,
                padding: 3,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: GlobalStyles.colors.blue100,
                  fontWeight: "bold",
                }}
              >
                12 Video
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              color: GlobalStyles.colors.success500,
            }}
          >
            Free
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductSubcribe;
