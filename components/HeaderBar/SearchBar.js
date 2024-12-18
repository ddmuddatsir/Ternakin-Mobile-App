import { Pressable, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/style";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { useNavigation } from "@react-navigation/native";

const SearchBar = ({ border, text, ref, edit }) => {
  const navigation = useNavigation();
  // const [productSearch, setProductSearch] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchDataForSeacrh();
  // }, []);

  // const fetchDataForSeacrh = async () => {
  //   setLoading(true);
  //   const data = await fetchData("/products");

  //   if (data) {
  //     setProductSearch(data);
  //   } else {
  //     console.error("Failed to load Product data");
  //   }
  // };

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
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={{
          flex: 1,
          marginHorizontal: 7,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <AntDesign name="search1" size={20} color={"grey"} />
        <TextInput
          ref={ref}
          placeholder={text}
          editable={edit ? true : false}
        />
      </TouchableOpacity>
      <Ionicons name="mic-outline" size={20} color="grey" />
    </View>
  );
};

export default SearchBar;
