import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import TabTop from "./TabTops";
import HomeScreen from "../screens/HomeScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import TransactionScreen from "../screens/TransactionScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { GlobalStyles } from "../constants/style";

const BottomTabs = createBottomTabNavigator();

const TabBottom = () => (
  <BottomTabs.Navigator>
    <BottomTabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: "Home",
        tabBarLabelStyle: { color: GlobalStyles.colors.primary100 },
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) =>
          focused ? (
            <Ionicons
              name="home-sharp"
              size={size}
              color={GlobalStyles.colors.primary100}
            />
          ) : (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
      }}
    />
    <BottomTabs.Screen
      name="PortfolioScreen"
      component={PortfolioScreen}
      options={{
        tabBarLabel: "Portfolio",
        tabBarLabelStyle: { color: GlobalStyles.colors.primary100 },
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) =>
          focused ? (
            <Ionicons
              name="calendar-clear-sharp"
              size={size}
              color={GlobalStyles.colors.primary100}
            />
          ) : (
            <Ionicons name="calendar-clear-outline" size={size} color={color} />
          ),
      }}
    />
    <BottomTabs.Screen
      name="TernakinScreen"
      component={TabTop}
      options={{
        tabBarLabel: "Ternakin",
        tabBarLabelStyle: { color: GlobalStyles.colors.primary100 },
        tabBarIcon: ({ color, size, focused }) =>
          focused ? (
            <MaterialCommunityIcons
              name="account-cowboy-hat"
              size={size}
              color={GlobalStyles.colors.primary100}
            />
          ) : (
            <MaterialCommunityIcons
              name="account-cowboy-hat-outline"
              size={size}
              color={color}
            />
          ),
        headerShown: false,
      }}
    />
    <BottomTabs.Screen
      name="TransactionScreen"
      component={TransactionScreen}
      options={{
        tabBarLabel: "Transaction",
        tabBarLabelStyle: { color: GlobalStyles.colors.primary100 },
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) =>
          focused ? (
            <Ionicons
              name="receipt-sharp"
              size={size}
              color={GlobalStyles.colors.primary100}
            />
          ) : (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
      }}
    />
    <BottomTabs.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarLabelStyle: { color: GlobalStyles.colors.primary100 },
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) =>
          focused ? (
            <Ionicons
              name="person-sharp"
              size={size}
              color={GlobalStyles.colors.primary100}
            />
          ) : (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
      }}
    />
  </BottomTabs.Navigator>
);

export default TabBottom;
