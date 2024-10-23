// import React from "react";
// import { Image, Text, View } from "react-native";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import { GlobalStyles } from "../../constants/style";
// import BabyAnimal from "../../assets/FiturServiceIcon/BabyAnimal.png";
// import Feed from "../../assets/FiturServiceIcon/Feed.png";
// import Community from "../../assets/FiturServiceIcon/Community.png";
// import Investing from "../../assets/FiturServiceIcon/Investing.png";

// const FiturButtonService = () => {
//   return (
//     <>
//       <View
//         style={{
//           height: 148,
//           backgroundColor: GlobalStyles.colors.light,
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 10,
//           color: GlobalStyles.colors.text700,
//         }}
//       >
//         <View
//           style={{
//             flexDirection: "row",
//             gap: 10,
//           }}
//         >
//           <View
//             style={{
//               height: 50,
//               width: 190,
//               backgroundColor: GlobalStyles.colors.light,
//               borderRadius: 12,
//               shadowColor: GlobalStyles.colors.g,
//               shadowOffset: { width: 0, height: 1 },
//               shadowOpacity: 0.2,
//               shadowRadius: 4,
//               alignItems: "center",
//               justifyContent: "center",
//               flexDirection: "row",
//             }}
//           >
//             <Image
//               source={BabyAnimal}
//               style={{ height: 24, width: 28, marginRight: 8 }}
//             />
//             <Text>Baby Animal Market</Text>
//           </View>
//           <View
//             style={{
//               height: 50,
//               width: 190,
//               backgroundColor: GlobalStyles.colors.light,
//               borderRadius: 12,
//               shadowColor: GlobalStyles.colors.gray500,
//               shadowOffset: { width: 0, height: 1 },
//               shadowOpacity: 0.2,
//               shadowRadius: 4,
//               alignItems: "center",
//               justifyContent: "center",
//               flexDirection: "row",
//             }}
//           >
//             <Image
//               source={Feed}
//               style={{ height: 24, width: 24, marginRight: 8 }}
//             />
//             <Text>Baby Feed Market</Text>
//           </View>
//         </View>
//         <View
//           style={{
//             flexDirection: "row",
//             gap: 10,
//           }}
//         >
//           <View
//             style={{
//               height: 50,
//               width: 190,
//               backgroundColor: GlobalStyles.colors.light,
//               borderRadius: 12,
//               shadowColor: GlobalStyles.colors.gray500,
//               shadowOffset: { width: 0, height: 1 },
//               shadowOpacity: 0.2,
//               shadowRadius: 4,
//               alignItems: "center",
//               justifyContent: "center",
//               flexDirection: "row",
//             }}
//           >
//             <Image
//               source={Community}
//               style={{ height: 24, width: 28, marginRight: 8 }}
//             />
//             <Text>Comunity & Consult</Text>
//           </View>
//           <View
//             style={{
//               height: 50,
//               width: 190,
//               backgroundColor: GlobalStyles.colors.light,
//               borderRadius: 12,
//               shadowColor: GlobalStyles.colors.gray500,
//               shadowOffset: { width: 0, height: 1 },
//               shadowOpacity: 0.2,
//               shadowRadius: 4,
//               alignItems: "center",
//               justifyContent: "center",
//               flexDirection: "row",
//             }}
//           >
//             <Image
//               source={Investing}
//               style={{ height: 24, width: 28, marginRight: 8 }}
//             />
//             <Text>Investation & Farm</Text>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// };

// export default FiturButtonService;

import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";
import BabyAnimal from "../../assets/FiturServiceIcon/BabyAnimal.png";
import Feed from "../../assets/FiturServiceIcon/Feed.png";
import Community from "../../assets/FiturServiceIcon/Community.png";
import Investing from "../../assets/FiturServiceIcon/Investing.png";
import { useNavigation } from "@react-navigation/native";

const serviceItems = [
  {
    icon: BabyAnimal,
    text: "Baby Animal Market",
    routeName: "TernakinScreen",
  },
  { icon: Feed, text: "Baby Feed Market", routeName: "TernakinScreen" },
  {
    icon: Community,
    text: "Comunity & Consult",
    routeName: "CommunityAndConsultScreen",
  },
  {
    icon: Investing,
    text: "Investation & Farm",
    routeName: "InvestationAndFarmScreen",
  },
];

const FiturButtonService = () => {
  return (
    <View
      style={{
        height: 130,
        backgroundColor: GlobalStyles.colors.light,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        {serviceItems.slice(0, 2).map((item, index) => (
          <ServiceItem
            key={index}
            icon={item.icon}
            text={item.text}
            routeName={item.routeName}
          />
        ))}
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        {serviceItems.slice(2).map((item, index) => (
          <ServiceItem
            key={index + 2}
            icon={item.icon}
            text={item.text}
            routeName={item.routeName}
          />
        ))}
      </View>
    </View>
  );
};

const ServiceItem = ({ icon, text, routeName }) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate(routeName);
  };

  return (
    <Pressable
      onPress={onPressHandler}
      style={{
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          height: 50,
          width: 190,
          backgroundColor: GlobalStyles.colors.light,
          borderRadius: 12,
          shadowColor: GlobalStyles.colors.gray500,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Image
          source={icon}
          style={{ height: 24, width: 28, marginRight: 8 }}
        />
        <Text>{text}</Text>
      </View>
    </Pressable>
  );
};

export default FiturButtonService;
