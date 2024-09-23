import { Pressable, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

const ButtonAnimalItem = ({ text, children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: GlobalStyles.colors.light,
          borderRadius: 12,
          shadowColor: GlobalStyles.colors.gray500,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {children}
      </View>
      <Text
        style={{
          paddingTop: 4,
          fontSize: 12,
          color: GlobalStyles.colors.text700,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default ButtonAnimalItem;
