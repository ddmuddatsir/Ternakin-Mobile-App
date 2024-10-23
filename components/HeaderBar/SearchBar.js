import { Pressable, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/style";

const SearchBar = ({ border, text }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 12,
        height: 42,
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: border
          ? GlobalStyles.colors.gray100
          : GlobalStyles.colors.light,
      }}
    >
      <Pressable
        style={{
          flex: 1,
          marginHorizontal: 7,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <AntDesign name="search1" size={20} color={"grey"} />
        <TextInput placeholder={text} />
      </Pressable>
      <Ionicons name="mic-outline" size={20} color="grey" />
    </View>
  );
};

export default SearchBar;
