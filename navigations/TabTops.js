import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProductListScreen from "../screens/ProductListScreen";
import FarmListScreen from "../screens/FarmListScreen";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyles } from "../constants/style";

const TopTabs = createMaterialTopTabNavigator();

const TabTop = () => {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: GlobalStyles.colors.light,
          paddingBottom: -30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <HeaderBar searcBar active={true} text={"Duck Food"} />
        </View>
      </SafeAreaView>

      <TopTabs.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: {
            backgroundColor: GlobalStyles.colors.primary100,
          },
          tabBarStyle: { backgroundColor: GlobalStyles.colors.light },
        }}
      >
        <TopTabs.Screen name="Product" component={ProductListScreen} />
        <TopTabs.Screen name="Farm" component={FarmListScreen} />
      </TopTabs.Navigator>
    </>
  );
};

export default TabTop;
