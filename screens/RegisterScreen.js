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
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { GlobalStyles } from "../constants/style";
import MainLogo from "../assets/Logo.png";
import { BASE_URL } from "../api/config/apiConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
    };

    // send a request to the backend API
    try {
      const response = await axios.post(`${BASE_URL}/register`, user);

      const token = response.data.token;
      if (token) {
        await AsyncStorage.setItem("authToken", token);
        Alert.alert(
          "Registration Successful",
          "You have registered successfully"
        );
        navigation.navigate("Main");
      }

      Alert.alert("Registation Succesfully", "You have registered succesfully");
      setName("");
      setPassword("");
      setEmail("");
      navigation.navigate("LoginScreen");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response ? error.response.data : error.message
      );
      Alert.alert(
        "Registration Error",
        "An error occurred during registration: " +
          (error.response ? error.response.data.message : error.message)
      );
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
              color: GlobalStyles.colors.blue100,
            }}
          >
            Register to new Account
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
            <Ionicons
              style={{ marginLeft: 8 }}
              name="person"
              size={24}
              color={GlobalStyles.colors.gray100}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: GlobalStyles.colors.text700,
                marginVertical: 10,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholder="Enter your name"
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
                fontSize: password ? 16 : 16,
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
            onPress={handleRegister}
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
              Register
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("LoginScreen")}
            style={{ marginTop: 15 }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: GlobalStyles.colors.gray100,
              }}
            >
              Already have an account? Sign in
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
