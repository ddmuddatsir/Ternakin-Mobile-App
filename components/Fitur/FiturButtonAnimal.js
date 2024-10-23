import { View } from "react-native";
import ButtonAnimalItem from "./ButtonAnimalItem";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { GlobalStyles } from "../../constants/style";

const Animal = [
  {
    text: "See All",
    icon: "hat-cowboy",
    iconType: "FontAwesome5",
    color: "brown",
  },
  {
    text: "Cow",
    icon: "cow",
    iconType: "MaterialCommunityIcons",
    color: GlobalStyles.colors.text700,
  },
  {
    text: "Goat",
    icon: "goat",
    iconType: "MaterialIcons",
    color: GlobalStyles.colors.success500,
  },

  {
    text: "Duck",
    icon: "duck",
    iconType: "MaterialCommunityIcons",
    color: "grey",
  },
  {
    text: "Chicken",
    icon: "kiwi-bird",
    iconType: "FontAwesome5",
    color: GlobalStyles.colors.yellow,
  },
  {
    text: "Shrimp",
    icon: "shrimp",
    iconType: "FontAwesome6",
    color: "orange",
  },
];

const iconMapping = {
  MaterialCommunityIcons: MaterialCommunityIcons,
  MaterialIcons: MaterialIcons,
  FontAwesome5: FontAwesome5,
  FontAwesome6: FontAwesome6,
};

const FiturButtonAnimal = () => {
  return (
    <View style={{ flexDirection: "row", gap: 18, paddingTop: 6 }}>
      {Animal.map((item, index) => {
        const IconComponent = iconMapping[item.iconType] || MaterialIcons;

        return (
          <ButtonAnimalItem key={index} text={item.text}>
            <IconComponent name={item.icon} size={24} color={item.color} />
          </ButtonAnimalItem>
        );
      })}
    </View>
  );
};

export default FiturButtonAnimal;
