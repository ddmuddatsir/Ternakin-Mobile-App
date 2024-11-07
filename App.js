import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import TabBottom from "./navigations/TabBottoms";
import DetailProductSelling from "./screens/DetailProductSelling";
import InvestationAndFarmScreen from "./screens/InvestationAndFarmScreen";
import CommunityAndConsultScreen from "./screens/CommunityAndConsultScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import CartScreen from "./screens/CartScreen";
import ChatScreen from "./screens/ChatScreen";
import BuyConfirmationScreen from "./screens/BuyConfirmationScreen";
import DetailFarmSelling from "./screens/DetailFarmSelling";
import MyWishlistScreeen from "./screens/MyWishlistScreeen";
import { UserContext } from "./UserContext";
import AddressListScreen from "./screens/AddressListScreen";
import AddAddressScreen from "./screens/AddAddressScreen";
import BuyNowScreen from "./screens/BuyNowScreen";
import SaldoScreen from "./screens/SaldoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <UserContext>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Main" component={TabBottom} />
              <Stack.Screen name="Cart" component={CartScreen} />
              <Stack.Screen
                name="BuyConfirmation"
                component={BuyConfirmationScreen}
              />
              <Stack.Screen name="Chat" component={ChatScreen} />
              <Stack.Screen
                name="ProductDetailSelling"
                component={DetailProductSelling}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="FarmDetailSelling"
                component={DetailFarmSelling}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="BuyNow" component={BuyNowScreen} />
              <Stack.Screen
                name="SaldoScreen"
                component={SaldoScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="CommunityAndConsultScreen"
                component={CommunityAndConsultScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="Wishlist" component={MyWishlistScreeen} />
              <Stack.Screen name="AddressList" component={AddressListScreen} />
              <Stack.Screen name="AddAddress" component={AddAddressScreen} />

              <Stack.Screen
                name="InvestationAndFarmScreen"
                component={InvestationAndFarmScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </UserContext>
      </Provider>
    </>
  );
}
