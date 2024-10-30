import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { GlobalStyles } from "../constants/style";

import MainLogo from "../assets/Logo.png";
import { UserType } from "../UserContext";
import { BASE_URL } from "../api/config/apiConfig";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, [navigation]);

  // const handleLogin = () => {
  //   const user = {
  //     email: email,
  //     password: password,
  //   };

  //   axios
  //     .post(`${BASE_URL}/login`, user)
  //     .then(async (response) => {
  //       const { token, userId } = response.data;

  //       console.log("Login Response:", response.data);

  //       if (userId) {
  //         try {
  //           await AsyncStorage.setItem("authToken", token);
  //           await AsyncStorage.setItem("userId", userId);

  //           // Verifikasi penyimpanan berhasil
  //           console.log("UserId stored successfully:", userId);

  //           navigation.replace("Main");
  //         } catch (error) {
  //           console.log("Error storing userId or token:", err);
  //         }
  //       } else {
  //         Alert.alert("Login Error", "User ID not found in the response");
  //       }
  //       // await AsyncStorage.setItem("authToken", token);
  //       // await AsyncStorage.setItem("userId", userId);

  //       // navigation.replace("Main");
  //     })
  //     .catch((error) => {
  //       Alert.alert("Login Error", "Invalid Email");
  //       console.log(error);
  //     });
  // };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan Password harus diisi.");
      return;
    }

    const loginCredentials = { email, password };

    try {
      const response = await axios.post(`${BASE_URL}/login`, loginCredentials);
      const { token, userId, name, email } = response.data; // Pastikan Anda mendapatkan nama dan email dari respons

      if (token && userId) {
        await AsyncStorage.setItem("authToken", token);
        await AsyncStorage.setItem("userId", userId);
        await AsyncStorage.setItem("userName", name); // Menyimpan nama pengguna
        await AsyncStorage.setItem("userEmail", email); // Menyimpan email pengguna

        navigation.replace("Main");
      } else {
        Alert.alert(
          "Login Error",
          "User ID or Token not found in the response"
        );
      }
    } catch (error) {
      Alert.alert("Login Error", "Invalid Email or Password");
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: GlobalStyles.colors.light,
        alignItems: "center",
      }}
    >
      <View>
        <Image style={{ width: 185, height: 95 }} source={MainLogo} />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: GlobalStyles.colors.blue300,
            }}
          >
            Login in to your Account
          </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: GlobalStyles.colors.background,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color={GlobalStyles.colors.gray100}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: GlobalStyles.colors.text700,
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter your email"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: GlobalStyles.colors.background,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              style={{ marginLeft: 8 }}
              name="lock1"
              size={24}
              color={GlobalStyles.colors.gray100}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: GlobalStyles.colors.text700,

                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholder="Enter your password"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: GlobalStyles.colors.text100 }}>
            Keep me logged in
          </Text>
          <Text
            style={{ color: GlobalStyles.colors.blue100, fontWeight: "500" }}
          >
            Forget Password
          </Text>
        </View>

        <View style={{ margin: 80 }}>
          <Pressable
            onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: GlobalStyles.colors.primary,
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: GlobalStyles.colors.light,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("RegisterScreen")}
            style={{ marginTop: 15 }}
          >
            <Text
              style={{
                textAlign: "center",
                color: GlobalStyles.colors.gray100,
                fontSize: 16,
              }}
            >
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
