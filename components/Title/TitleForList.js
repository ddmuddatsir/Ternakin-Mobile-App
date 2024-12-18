import { Pressable, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { GlobalStyles } from "../../constants/style";

const TitleForList = ({ text, navigate }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 10,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          color: GlobalStyles.colors.primary,
        }}
      >
        {text}
      </Text>
      {navigate && (
        <Pressable
          onPress={navigate}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              justifyContent: "center",
              color: GlobalStyles.colors.gray100,
            }}
          >
            See more
          </Text>

          <MaterialIcons
            style={{ justifyContent: "center" }}
            name="keyboard-arrow-right"
            size={20}
            color={GlobalStyles.colors.gray100}
          />
        </Pressable>
      )}
    </View>
  );
};

export default TitleForList;
