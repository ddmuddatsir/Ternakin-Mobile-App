import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../constants/style";
import CartCourseScreen from "../screens/course/CartCourseScreen";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import CartScreen from "../screens/CartScreen";

const TopTabs = createMaterialTopTabNavigator();

const TabTopCart = () => {
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
          <HeaderBar withouttIcon wishlist back active={true} text={"Cart"} />
        </View>
      </SafeAreaView>
      <TopTabs.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: {
            backgroundColor: GlobalStyles.colors.primary100,
          },
        }}
      >
        <TopTabs.Screen name="CartPorduct" component={CartScreen} />
        <TopTabs.Screen name="CartCourse" component={CartCourseScreen} />
      </TopTabs.Navigator>
    </>
  );
};

export default TabTopCart;

const styles = StyleSheet.create({});
