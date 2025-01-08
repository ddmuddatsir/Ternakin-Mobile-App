import "react-native-get-random-values";
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

import BuyConfirmationScreen from "./screens/BuyConfirmationScreen";
import DetailFarmSelling from "./screens/DetailFarmSelling";

import { UserContext } from "./UserContext";
import AddressListScreen from "./screens/AddressListScreen";
import AddAddressScreen from "./screens/AddAddressScreen";
import BuyNowScreen from "./screens/BuyNowScreen";
import SaldoScreen from "./screens/SaldoScreen";
import DetailProductCourse from "./screens/course/DetailProductCourse";
import TabTopCart from "./navigations/TabTopCart";
import CartCourseScreen from "./screens/course/CartCourseScreen";
import DetailProductFund from "./screens/funding/DetailProductFund";
import SearchProductScreen from "./screens/search/SearchProductScreen";
import ResultProductSearchScreen from "./screens/search/ResultProductSearchScreen";
import ListFundScreen from "./screens/funding/ListFundScreen";
import ListCourseScreen from "./screens/course/ListCourseScreen";
import PointScreen from "./screens/PointScreen";
import TopUpScreen from "./screens/wallet/TopUpScreen";
import { useEffect } from "react";
import { initializeWishlistCourse } from "./redux/Course/WishlistCourseReducer";
import WishlistCourseScreen from "./screens/course/WishlistCourseScreen";
import { initializeWishlist } from "./redux/WishlistReducer";
import WishlistScreen from "./screens/WishlistScreen";
import ChatWindowScreen from "./screens/Chat/ChatWindowScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    store.dispatch(initializeWishlistCourse());
    store.dispatch(initializeWishlist());
  }, []);
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
              <Stack.Screen name="Cart" component={TabTopCart} />

              <Stack.Screen name="CartProduct" component={CartScreen} />
              <Stack.Screen
                name="BuyConfirmation"
                component={BuyConfirmationScreen}
              />
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
              <Stack.Screen name="Wishlist" component={WishlistScreen} />
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

              <Stack.Screen name="AddressList" component={AddressListScreen} />
              <Stack.Screen name="AddAddress" component={AddAddressScreen} />
              <Stack.Screen name="PointScreen" component={PointScreen} />

              <Stack.Screen
                name="InvestationAndFarmScreen"
                component={InvestationAndFarmScreen}
                options={{
                  headerShown: false,
                }}
              />

              {/* Screen Course feature */}
              <Stack.Screen
                name="ProductDetailCourse"
                component={DetailProductCourse}
              />
              <Stack.Screen name="CartCourse" component={CartCourseScreen} />
              <Stack.Screen
                name="WishlistCourse"
                component={WishlistCourseScreen}
              />

              {/* Screen fund feature */}
              <Stack.Screen
                name="ProductDetailFund"
                component={DetailProductFund}
              />
              <Stack.Screen name="ListProductFund" component={ListFundScreen} />
              <Stack.Screen
                name="ListProductCourse"
                component={ListCourseScreen}
              />

              {/* Screen for search feature */}
              <Stack.Screen name="Search" component={SearchProductScreen} />
              <Stack.Screen
                name="ResultSearch"
                component={ResultProductSearchScreen}
              />

              {/* Screen for wallet feature */}
              <Stack.Screen name="TopUpScreen" component={TopUpScreen} />

              {/* Screen for chat feature */}
              <Stack.Screen name="ChatWindow" component={ChatWindowScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </UserContext>
      </Provider>
    </>
  );
}
