import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");

    if (token) {
      return token;
    }
  } catch (error) {
    console.error("Error fetching token:", error);
  }
  return null;
};
