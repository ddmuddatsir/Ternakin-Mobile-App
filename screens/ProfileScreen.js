import {
  ActivityIndicator,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "../UserContext";
import axios from "axios";

const ProfileScreen = () => {
  const { userId } = useContext(UserType);

  const navigation = useNavigation();

  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.6:8000/profile/${userId}`
        );
        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar text="My Profile" active={true} />
      </SafeAreaView>
      <ScrollView
        style={{
          backgroundColor: GlobalStyles.colors.light,
          paddingHorizontal: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            paddingBottom: 16,
            borderBottomWidth: 1,
            borderBottomColor: GlobalStyles.colors.store_line,
          }}
        >
          <Image
            style={{
              backgroundColor: "black",
              height: 54,
              width: 54,
              borderRadius: 32,
              flex: 1,
            }}
          />
          <View style={{ gap: 2, flex: 5, width: 250 }}>
            <Text
              style={{
                colors: GlobalStyles.colors.text700,
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              {user?.title}
            </Text>
            <Text
              style={{
                colors: GlobalStyles.colors.text700,
                fontSize: 13,
              }}
            >
              0895********
            </Text>
            <Text
              style={{
                colors: GlobalStyles.colors.text700,
                fontSize: 13,
              }}
            >
              {user?.name}
            </Text>
          </View>
          <Ionicons
            name="settings-outline"
            size={24}
            color={GlobalStyles.colors.gray100}
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          />
        </View>

        <View
          style={{
            gap: 12,
            paddingTop: 26,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 6,
            }}
          >
            <MaterialCommunityIcons
              name="wallet-outline"
              size={20}
              color={GlobalStyles.colors.text100}
            />
            <Text
              style={{
                color: GlobalStyles.colors.text100,
                fontSize: 16,
              }}
            >
              My Balance
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 52,
              width: 390,
              backgroundColor: GlobalStyles.colors.light,
              borderRadius: 12,
              shadowColor: GlobalStyles.colors.primary,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              borderColor: GlobalStyles.colors.primary,
              borderWidth: 0.25,
              padding: 18,
            }}
          >
            <View
              style={{ justifyContent: "center", alignItems: "center", gap: 4 }}
            >
              <Ionicons name="wallet-outline" size={24} color="brown" />
              <Text
                style={{
                  fontWeight: "300",
                  color: GlobalStyles.colors.text700,
                }}
              >
                Balance
              </Text>
              <Text
                style={{
                  fontWeight: "600",
                  color: GlobalStyles.colors.text700,
                }}
              >
                Rp300.000
              </Text>
            </View>
            <View
              style={{ justifyContent: "center", alignItems: "center", gap: 4 }}
            >
              <MaterialCommunityIcons
                name="star-four-points-outline"
                size={24}
                color="orange"
              />
              <Text
                style={{
                  fontWeight: "300",
                  color: GlobalStyles.colors.text700,
                }}
              >
                Point
              </Text>
              <Text
                style={{
                  fontWeight: "600",
                  color: GlobalStyles.colors.text700,
                }}
              >
                134.000
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            gap: 12,
            paddingTop: 16,
            paddingBottom: 12,
            borderBottomWidth: 1,
            borderBottomColor: GlobalStyles.colors.store_line,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 6,
              paddingBottom: 8,
              borderBottomWidth: 1,
              borderBottomColor: GlobalStyles.colors.store_line,
              alignItems: "center",
            }}
          >
            <FontAwesome
              name="handshake-o"
              size={15}
              color={GlobalStyles.colors.text100}
            />
            <Text
              style={{
                color: GlobalStyles.colors.text100,
                fontSize: 16,
              }}
            >
              My Order
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 32,
              paddingVertical: 12,
            }}
          >
            <View
              style={{ justifyContent: "center", alignItems: "center", gap: 4 }}
            >
              <FontAwesome
                name="money"
                size={20}
                color={GlobalStyles.colors.error500}
              />
              <Text
                style={{
                  fontWeight: "300",
                  color: GlobalStyles.colors.text700,
                }}
              >
                Not yet Paid
              </Text>
            </View>
            <View
              style={{ justifyContent: "center", alignItems: "center", gap: 4 }}
            >
              <MaterialCommunityIcons
                name="package-variant-closed"
                size={24}
                color={GlobalStyles.colors.blue300}
              />
              <Text
                style={{
                  fontWeight: "300",
                  color: GlobalStyles.colors.text700,
                }}
              >
                Packed
              </Text>
            </View>
            <View
              style={{ justifyContent: "center", alignItems: "center", gap: 4 }}
            >
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={22}
                color={GlobalStyles.colors.success500}
              />
              <Text
                style={{
                  fontWeight: "300",
                  color: GlobalStyles.colors.text700,
                }}
              >
                Sending
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            gap: 12,
            paddingTop: 16,
            paddingBottom: 12,
            borderBottomWidth: 1,
            borderBottomColor: GlobalStyles.colors.store_line,
          }}
        >
          <View
            style={{
              paddingBottom: 8,
              borderBottomWidth: 1,
              borderBottomColor: GlobalStyles.colors.store_line,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <MaterialIcons
                name="ondemand-video"
                size={18}
                color={GlobalStyles.colors.text100}
              />
              <Text
                style={{
                  color: GlobalStyles.colors.text100,
                  fontSize: 16,
                }}
              >
                My Learning
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: GlobalStyles.colors.gray100,
                  fontSize: 11,
                }}
              >
                See More
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color={GlobalStyles.colors.gray100}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 8,
              borderBottomWidth: 1,
              borderBottomColor: GlobalStyles.colors.store_line,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <MaterialIcons
                name="auto-graph"
                size={20}
                color={GlobalStyles.colors.text100}
              />
              <Text
                style={{
                  color: GlobalStyles.colors.text100,
                  fontSize: 16,
                }}
              >
                My Investment
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ color: GlobalStyles.colors.gray100, fontSize: 11 }}
              >
                See More
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color={GlobalStyles.colors.gray100}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 8,
              borderBottomWidth: 1,
              borderBottomColor: GlobalStyles.colors.store_line,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              onPress={() => navigation.navigate("Wishlist")}
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <Ionicons
                name="heart-outline"
                size={20}
                color={GlobalStyles.colors.text100}
              />
              <Text
                style={{
                  color: GlobalStyles.colors.text100,
                  fontSize: 16,
                }}
              >
                My Wishlist
              </Text>
            </Pressable>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{ color: GlobalStyles.colors.gray100, fontSize: 11 }}
              >
                See More
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color={GlobalStyles.colors.gray100}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 8,
              borderBottomWidth: 1,
              borderBottomColor: GlobalStyles.colors.store_line,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <MaterialCommunityIcons
                name="account-settings-outline"
                size={21.5}
                color={GlobalStyles.colors.text100}
              />
              <Text
                style={{
                  color: GlobalStyles.colors.text100,
                  fontSize: 16,
                }}
              >
                Account Setting
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color={GlobalStyles.colors.gray100}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 8,
              borderBottomWidth: 1,
              borderBottomColor: GlobalStyles.colors.store_line,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <AntDesign
                name="questioncircleo"
                size={20}
                color={GlobalStyles.colors.text100}
              />
              <Text
                style={{
                  color: GlobalStyles.colors.text100,
                  fontSize: 16,
                }}
              >
                Help Center
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={18}
                color={GlobalStyles.colors.gray100}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
