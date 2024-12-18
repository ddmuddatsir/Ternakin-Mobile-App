//Perbaiki: Course Compponent
//Perbaiki: Logika
//Perbaiki: Review Belum ada

import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../../constants/style";
import BottomTabButton from "../../components/Button/BottomTabButton";

import Foundation from "@expo/vector-icons/Foundation";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "../../components/Button/Button";
import ProductSubcribeList from "../../components/Product/ProductSubcribe/ProductSubcribeList";
import { useDispatch } from "react-redux";
import { addToCartCourse } from "../../redux/Course/CartCourseReducer";
import { currencyFormat } from "../../utils/currencyFormat";
import { fetchData } from "../../utils/fetchData";

const DetailProductCourse = ({ route }) => {
  const dispatch = useDispatch();
  const { productId } = route.params;

  const [productCourse, setProductCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [playCourse, setPlayCourse] = useState(null);

  useEffect(() => {
    fetchDataProductCorseDetail();
  }, []);

  const fetchDataProductCorseDetail = async () => {
    setLoading(true);
    const data = await fetchData(`/product-courses/${productId}`);

    if (data) {
      setProductCourse(data);
    } else {
      console.error("Failed to load Product course detail data");
    }

    setLoading(false);
  };

  const handlePlayCourseToggle = (index) => {
    setPlayCourse((prevIndex) => (prevIndex === index ? null : index));
  };

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>{error}</Text>;

  const handleAddToCartCourse = () => {
    dispatch(addToCartCourse({ productId: productCourse._id }));
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: GlobalStyles.colors.light }}>
        <HeaderBar back text={productCourse.title} />
      </SafeAreaView>
      <ScrollView style={{ backgroundColor: GlobalStyles.colors.light }}>
        <View
          style={{
            width: "full",
            height: 260,
            flex: 1,
          }}
        >
          <Image
            source={{ uri: productCourse.thumbnail }}
            style={{ height: "100%", width: "80%", alignSelf: "center" }}
          />
          <FontAwesome
            name="play"
            size={72}
            color={GlobalStyles.colors.text700}
            style={{
              opacity: 0.8,
              position: "relative",
              top: -160,
              left: 180,
            }}
          />
        </View>
        <View style={{ padding: 10, gap: 12, flex: 1 }}>
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                paddingBottom: 8,
                fontWeight: 700,
                color: GlobalStyles.colors.text700,
              }}
            >
              {productCourse.title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: GlobalStyles.colors.text100,
              }}
            >
              {productCourse.description}
            </Text>
            <View style={{ flex: 1, paddingTop: 6, gap: 4 }}>
              <View
                style={{
                  flex: 3,
                  padding: 5,
                  backgroundColor: GlobalStyles.colors.success50,
                  width: 75,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: GlobalStyles.colors.gray500,
                  }}
                >
                  Bestseller
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text
                  style={{
                    color: GlobalStyles.colors.primary100,
                    fontSize: 12,
                  }}
                >
                  {productCourse.rating}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Ionicons
                    name="star"
                    size={13}
                    color={GlobalStyles.colors.yellow}
                  />
                  <Ionicons
                    name="star"
                    size={13}
                    color={GlobalStyles.colors.yellow}
                  />
                  <Ionicons
                    name="star"
                    size={13}
                    color={GlobalStyles.colors.yellow}
                  />
                  <Ionicons
                    name="star"
                    size={13}
                    color={GlobalStyles.colors.yellow}
                  />
                  <Ionicons
                    name="star-half"
                    size={13}
                    color={GlobalStyles.colors.yellow}
                  />
                </View>
              </View>
              <Text style={{ color: GlobalStyles.colors.text100 }}>
                {productCourse.totalEnrollments} Enrollments
              </Text>
            </View>
          </View>
          <View style={{ gap: 4 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontWeight: 500, color: GlobalStyles.colors.text100 }}
              >
                Create By
              </Text>

              <Text
                style={{ fontWeight: 500, color: GlobalStyles.colors.primary }}
              >
                {" "}
                {productCourse.author.name}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                gap: 8,
              }}
            >
              <MaterialIcons
                name="update"
                size={15}
                color={GlobalStyles.colors.text100}
              />
              <Text
                style={{
                  alignContent: "center",
                  color: GlobalStyles.colors.text100,
                }}
              >
                Last Updated {productCourse.lastUpdated}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
              <FontAwesome6
                name="globe"
                size={12}
                color={GlobalStyles.colors.text100}
              />
              <Text style={{ color: GlobalStyles.colors.text100 }}>
                {productCourse.language}
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
              <FontAwesome
                name="cc"
                size={12}
                color={GlobalStyles.colors.text100}
              />
              <Text style={{ color: GlobalStyles.colors.text100 }}>
                {productCourse.carbonCopy}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: GlobalStyles.colors.primary100,
                fontWeight: 800,
                fontSize: 26,
              }}
            >
              Rp{currencyFormat(productCourse.price)}
            </Text>
          </View>
          <View>
            {/* Button CTA in screen */}
            <Pressable
              style={{
                backgroundColor: GlobalStyles.colors.light,
                borderWidth: 2,
                borderColor: GlobalStyles.colors.primary100,
                padding: 14,
                marginVertical: 4,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  color: GlobalStyles.colors.primary100,
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Add to Wishlist
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: GlobalStyles.colors.primary100,
                padding: 14,
                marginVertical: 4,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  color: GlobalStyles.colors.light,
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Buy Now
              </Text>
            </Pressable>
          </View>

          {/* apa saja yang akan di pelajari */}
          {productCourse.whatYouWillLearn ? (
            <View
              style={{
                backgroundColor: "#f4f4f4",
                opacity: 200,
                padding: 10,
              }}
            >
              <Text
                style={{
                  color: GlobalStyles.colors.text700,
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                What You Will Learning
              </Text>
              {productCourse.whatYouWillLearn.map((item) => (
                <View
                  key={item}
                  style={{
                    flexDirection: "row",
                    padding: 5,
                  }}
                >
                  <Entypo
                    name="check"
                    size={16}
                    color={GlobalStyles.colors.text100}
                    style={{ paddingRight: 4 }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: GlobalStyles.colors.text100,
                    }}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          ) : null}

          {/* daftar video */}
          <View>
            <Text
              style={{
                fontWeight: 600,
                color: GlobalStyles.colors.text100,
                fontSize: 16,
              }}
            >
              Curriculum
            </Text>
            <Text
              style={{ color: GlobalStyles.colors.text100, paddingVertical: 2 }}
            >
              {productCourse.videoContent.length} Video Materials,{" "}
              {productCourse.videoContent.reduce(
                (sum, video) => sum + video.duration,
                0
              )}{" "}
              Total Duration
            </Text>
            <View style={{ padding: 10 }}>
              {productCourse.videoContent.map((item, index) => (
                <View key={index}>
                  <Pressable
                    onPress={() => handlePlayCourseToggle(index)}
                    style={{
                      padding: 8,

                      flexDirection: "row",
                      borderBottomWidth: 1,
                      borderColor: "#c4c4c4",
                      backgroundColor:
                        playCourse === index
                          ? GlobalStyles.colors.success50
                          : "",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        // justifyContent: "space-between",
                        width: 330,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 18,
                          paddingVertical: 2,
                          color: GlobalStyles.colors.text700,
                        }}
                      >
                        {index + 1}.{" "}
                      </Text>

                      <View style={{}}>
                        <Text
                          style={{
                            fontSize: 18,
                            paddingVertical: 2,
                            color: GlobalStyles.colors.text700,
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            color: GlobalStyles.colors.text100,
                          }}
                        >
                          Video durations {item.duration}
                        </Text>
                      </View>
                    </View>

                    {playCourse === index ? (
                      <AntDesign
                        style={{ alignSelf: "center" }}
                        name="pausecircle"
                        size={20}
                        color={GlobalStyles.colors.text700}
                      />
                    ) : (
                      <AntDesign
                        style={{ alignSelf: "center" }}
                        name="playcircleo"
                        size={20}
                        color={GlobalStyles.colors.gray100}
                      />
                    )}
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
          {/* Requirement sebelum mempelajari */}
          <View
            style={{
              paddingBottom: 8,
            }}
          >
            <Text
              style={{
                fontWeight: 600,
                color: GlobalStyles.colors.text100,
                fontSize: 16,
                paddingBottom: 4,
              }}
            >
              Requirement
            </Text>
            <View>
              {productCourse.requirements.map((item) => (
                <View key={item}>
                  <View style={{ flexDirection: "row", paddingHorizontal: 5 }}>
                    <Entypo
                      name="dot-single"
                      size={24}
                      color={GlobalStyles.colors.text100}
                      style={{
                        paddingRight: 2,
                      }}
                    />

                    <Text
                      style={{
                        fontSize: 16,
                        color: GlobalStyles.colors.text100,
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Recommendation course */}
          <Text
            style={{
              fontWeight: 600,
              color: GlobalStyles.colors.text100,
              fontSize: 16,
            }}
          >
            Recommendation
          </Text>
          <ProductSubcribeList recommendation productId={productId} />

          {/* data mengenai total video */}
          <View
            style={{
              opacity: 200,
              paddingVertical: 8,
            }}
          >
            <Text
              style={{
                color: GlobalStyles.colors.text700,
                fontSize: 16,
                fontWeight: 600,
                paddingBottom: 6,
              }}
            >
              This Course Covers
            </Text>

            <View style={{ flexDirection: "row", padding: 5 }}>
              <Foundation
                name="play-video"
                size={22}
                color={GlobalStyles.colors.text700}
                style={{ paddingRight: 4 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: GlobalStyles.colors.text100,
                }}
              >
                Total Course Videos
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 5 }}>
              <Ionicons
                name="infinite"
                size={22}
                color={GlobalStyles.colors.text700}
                style={{ paddingRight: 4 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: GlobalStyles.colors.text100,
                }}
              >
                Lifetime Guarantee
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 5 }}>
              <MaterialIcons
                name="smartphone"
                size={20}
                color={GlobalStyles.colors.text700}
                style={{ paddingRight: 4 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: GlobalStyles.colors.text100,
                }}
              >
                Access on Mobile, Desktop and TV devices
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 5 }}>
              <FontAwesome
                name="certificate"
                size={20}
                color={GlobalStyles.colors.text700}
                style={{ paddingRight: 4 }}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: GlobalStyles.colors.text100,
                }}
              >
                Completion certificate
              </Text>
            </View>
          </View>

          {/* Creator Profile */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ paddingRight: 12 }}>
              <Image
                source={{ uri: productCourse.author.profilePicture }}
                style={{ width: 62, height: 62, borderRadius: 32 }}
              />
            </View>
            <View style={{ gap: 6 }}>
              <Text
                style={{
                  color: GlobalStyles.colors.text700,
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                Creator {productCourse.author.name}
              </Text>
              <Text
                style={{
                  color: GlobalStyles.colors.text700,
                  width: 300,
                  // height: 80,
                }}
              >
                {productCourse.author.bio}
              </Text>
            </View>
          </View>

          {/* Review */}
        </View>
      </ScrollView>
      <BottomTabButton height={98}>
        <Pressable
          style={{
            flex: 0.7,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 12,
          }}
        >
          <View
            style={{
              gap: 4,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ fontSize: 12, color: GlobalStyles.colors.text700 }}>
              Total Payment
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontWeight: 600,
                color: GlobalStyles.colors.primary100,
              }}
            >
              Rp{currencyFormat(productCourse.price)}
            </Text>
          </View>
        </Pressable>
        <Button
          onPress={handleAddToCartCourse}
          text="Add to Cart"
          color="off"
          styles={{
            flex: 1,
          }}
        />

        <Button
          text="Buy Now"
          color="secondary"
          styles={{
            flex: 1,
          }}
        />
      </BottomTabButton>
    </>
  );
};

export default DetailProductCourse;
