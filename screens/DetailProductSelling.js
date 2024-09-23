import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TitleForList from "../components/Title/TitleForList";
import ProductCardSellingList from "../components/Product/ProductSelling/ProductCardSellingList";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartReducer";
import ShippingCardModal from "../components/Modal/ShippingCardModal";
import DetailProductSellingDescription from "../components/Description/DetailProductSellingDescription";
import BottomTabButton from "../components/Button/BottomTabButton";
import Button from "../components/Button/Button";
import axios from "axios";
import { BASE_URL } from "../api/models/apiConfig";

const DetailProductSelling = ({ route }) => {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [productId]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!product) {
    return <Text>Product not found.</Text>;
  }

  const discountedPrice =
    product.price - (product.price * product.discPer) / 100;

  const addItemToCart = (product) => {
    setAddedToCart(true);
    dispatch(addToCart({ ...product, quantity: 2 }));
    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };

  console.log(cart);

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <View
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HeaderBar
            searcBar
            back
            active={true}
            text={"Look for Transaction"}
          />
        </View>
      </SafeAreaView>
      <ScrollView style={{ backgroundColor: GlobalStyles.colors.background }}>
        <View
          style={{
            position: "relative",
            width: "100%",
            height: 340,
          }}
        >
          <Image
            source={{ uri: product.image }}
            style={{ width: "100%", height: 340 }}
          />
          <View
            style={{
              position: "absolute",
              bottom: 20,
              right: 20,
              padding: 6,
              borderRadius: 20,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <Text
              style={{
                color: GlobalStyles.colors.light,
                fontWeight: 500,
                position: "abcolute",
              }}
            >
              1/6
            </Text>
          </View>
        </View>
        <View>
          <View>
            <View
              style={{
                backgroundColor: GlobalStyles.colors.light,
                flex: 1,
                gap: 8,
                marginBottom: 8,
                padding: 14,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  color: GlobalStyles.colors.text700,
                }}
              >
                {product.title}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: GlobalStyles.colors.text700,
                }}
              >
                Rp{discountedPrice}
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <View
                  style={{
                    backgroundColor: GlobalStyles.colors.error50,
                    padding: 4,
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      color: GlobalStyles.colors.error500,
                      fontSize: 10,
                      fontWeight: 600,
                    }}
                  >
                    {product.discPer}%
                  </Text>
                </View>
                <Text
                  style={{
                    color: GlobalStyles.colors.gray100,
                    fontWeight: 400,
                    fontSize: 12,
                    textDecorationLine: "line-through",
                  }}
                >
                  Rp{product.price}
                </Text>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <View style={{ flexDirection: "row", gap: 4 }}>
                  <Octicons
                    name="star-fill"
                    size={14}
                    color={GlobalStyles.colors.yellow}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: GlobalStyles.colors.text100,
                      fontWeight: 500,
                    }}
                  >
                    {product.rate}
                  </Text>
                  <Text
                    style={{ fontSize: 12, color: GlobalStyles.colors.text100 }}
                  >
                    | Sold {product.sold}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", gap: 6 }}>
                  <Ionicons
                    name="heart-outline"
                    size={24}
                    color={GlobalStyles.colors.gray500}
                  />
                  <Ionicons
                    name="share-social-outline"
                    size={24}
                    color={GlobalStyles.colors.gray500}
                  />
                </View>
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ flexDirection: "row", paddingVertical: 4 }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      gap: 4,
                      alignItems: "center",
                      flexDirection: "row",
                      padding: 6,
                      backgroundColor: GlobalStyles.colors.success50,
                      borderRadius: 12,
                      borderWidth: 1.5,
                      borderColor: GlobalStyles.colors.success500,
                      marginRight: 6,
                    }}
                  >
                    <Ionicons
                      name="shield-checkmark-outline"
                      size={16}
                      color={GlobalStyles.colors.success500}
                    />
                    <Text
                      style={{
                        fontWeight: 600,
                        fontSize: 12,
                        color: GlobalStyles.colors.gray500,
                      }}
                    >
                      Product damage protection
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      gap: 4,
                      alignItems: "center",
                      flexDirection: "row",
                      padding: 6,
                      backgroundColor: "#f5f1ee",
                      borderRadius: 12,
                      borderWidth: 1.5,
                      borderColor: GlobalStyles.colors.primary100,
                      marginRight: 6,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="check-decagram-outline"
                      size={16}
                      color={GlobalStyles.colors.primary100}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: GlobalStyles.colors.gray500,
                      }}
                    >
                      Verified farm
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      gap: 4,
                      alignItems: "center",
                      flexDirection: "row",
                      padding: 6,
                      backgroundColor: "#e0ffff",
                      borderRadius: 12,
                      borderWidth: 1.5,
                      borderColor: GlobalStyles.colors.blue300,
                      marginRight: 6,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="truck-check-outline"
                      size={16}
                      color={GlobalStyles.colors.blue300}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: GlobalStyles.colors.gray500,
                      }}
                    >
                      Safe delivery
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
          <ShippingCardModal
            shippingCost={product.shippingMethodId.cost}
            shippingEstimateTime={
              product.shippingMethodId.estimate[0].timeArrive
            }
            shippingEstimatePeriod={
              product.shippingMethodId.estimate[0].periodArrive
            }
            shippingLocation={product.shippingMethodId.location}
            shippingMethodId={product.shippingMethodId.method}
          />

          <View
            style={{
              backgroundColor: GlobalStyles.colors.light,
              flex: 1,
              gap: 8,
              marginBottom: 8,
              padding: 14,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable style={{ marginVertical: 12, gap: 6 }}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 8,
                }}
              >
                <Image
                  source={{ uri: product.farmId.image }}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 32,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <View style={{}}>
                  <Text
                    style={{
                      paddingBottom: 4,
                      fontSize: 16,
                      fontWeight: 600,
                      color: GlobalStyles.colors.text700,
                    }}
                  >
                    {product.farmId.name}
                  </Text>
                  <Text
                    style={{
                      paddingBottom: 4,
                      fontSize: 14,
                      fontWeight: 400,
                      color: GlobalStyles.colors.text100,
                    }}
                  >
                    {product.farmId.location}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 4,
                  width: 220,
                }}
              >
                <Octicons
                  name="star-fill"
                  size={12}
                  color={GlobalStyles.colors.yellow}
                />
                <Text
                  style={{ color: GlobalStyles.colors.text100, fontSize: 12 }}
                >
                  {product.farmId.rating}
                </Text>
                <Text
                  style={{ color: GlobalStyles.colors.text100, fontSize: 12 }}
                >
                  | {product.farmId.followers} Followers
                </Text>
                <Text
                  style={{ color: GlobalStyles.colors.text100, fontSize: 12 }}
                >
                  | {product.farmId.workingHours}
                </Text>
              </View>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: GlobalStyles.colors.primary100,
                justifyContent: "center",
                alignItems: "center",
                padding: 8,
                width: 100,
                height: 38,
                borderRadius: 8,
              }}
            >
              <Text
                style={{ color: GlobalStyles.colors.light, fontWeight: 500 }}
              >
                Follow
              </Text>
            </Pressable>
          </View>
          <DetailProductSellingDescription
            descriptionStock={product.stock}
            descriptionShedPen={product.shedPen}
            descriptionMinOrder={product.minOrder}
            descriptionCondition={product.condition}
            descriptionAdvantages={product.advantages}
          />

          <View
            style={{
              backgroundColor: GlobalStyles.colors.light,
              flex: 1,
              gap: 8,
              marginBottom: 8,
              padding: 14,
            }}
          >
            <TitleForList text="More products in this farm" navigate />
            {/* farmproductlist */}
          </View>
          <View
            style={{
              backgroundColor: GlobalStyles.colors.light,
              flex: 1,
              gap: 8,
              marginBottom: 8,
              padding: 14,
            }}
          >
            <TitleForList text="Relevant products" navigate />
            {/* farmproductlist */}
          </View>
          <View
            style={{
              backgroundColor: GlobalStyles.colors.light,
              flex: 1,
              gap: 8,
              marginBottom: 8,
              padding: 14,
            }}
          >
            <TitleForList text="Conversation" navigate />
            <View
              style={{
                borderWidth: 1,
                borderRadius: 18,
                padding: 18,
                shadowColor: GlobalStyles.colors.gray500,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                borderColor: GlobalStyles.colors.store_line,
                borderWidth: 0.25,
              }}
            >
              <View style={{ gap: 8, paddingBottom: 18 }}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                  }}
                >
                  <Image
                    // source={{uri: product.}}
                    style={{
                      height: 32,
                      width: 32,
                      backgroundColor: "black",
                      borderRadius: 32,
                    }}
                  />
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: GlobalStyles.colors.text700,
                      }}
                    >
                      Fatimah
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: GlobalStyles.colors.gray100,
                      }}
                    >
                      {" "}
                      • 29 Aug
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: GlobalStyles.colors.text700,
                  }}
                >
                  Is the cow ready?
                </Text>
              </View>
              <View style={{ gap: 8, paddingBottom: 18 }}>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 6,
                    alignItems: "center",
                    marginLeft: 30,
                  }}
                >
                  <Image
                    style={{
                      height: 32,
                      width: 32,
                      backgroundColor: "black",
                      borderRadius: 32,
                    }}
                  />
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: GlobalStyles.colors.text700,
                      }}
                    >
                      UG Farm
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: GlobalStyles.colors.gray100,
                      }}
                    >
                      {" "}
                      • 29 Aug
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: GlobalStyles.colors.text700,
                    marginLeft: 30,
                  }}
                >
                  Yes animals ready, please order?
                </Text>
              </View>

              <Pressable style={{ alignItems: "flex-end" }}>
                <Text style={{ color: GlobalStyles.colors.success500 }}>
                  See All
                </Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              backgroundColor: GlobalStyles.colors.light,
              flex: 1,
              gap: 8,
              marginBottom: 8,
              padding: 14,
            }}
          >
            <TitleForList text="Buyer Reviews" navigate />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                width: 220,
              }}
            >
              <Octicons
                name="star-fill"
                size={14}
                color={GlobalStyles.colors.yellow}
              />
              <Text
                style={{ color: GlobalStyles.colors.text700, fontSize: 14 }}
              >
                5.0 Trust
              </Text>
              <Text
                style={{ color: GlobalStyles.colors.text100, fontSize: 14 }}
              >
                {" "}
                • 27 Review
              </Text>
            </View>
            <View>
              {/* <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10 }}>
                {product.buyerReviews[0].photoReview &&
                  product.buyerReviews[0].photoReview.map((photo, index) => (
                    <Image
                      key={index}
                      source={{ uri: photo }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 8,
                        marginBottom: 10,
                      }}
                    />
                  ))}
              </View> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <Image
                  // source={{ uri: product.buyerReviews[0].image }}
                  style={{
                    height: 32,
                    width: 32,
                    borderRadius: 32,
                  }}
                />
                <Text
                  style={{
                    color: GlobalStyles.colors.text700,
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {/* {product.buyerReviews[0].name} */}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 4,
                  width: 220,
                }}
              >
                <Octicons
                  name="star-fill"
                  size={14}
                  color={GlobalStyles.colors.yellow}
                />
                <Text
                  style={{ color: GlobalStyles.colors.text100, fontSize: 14 }}
                >
                  5 Today
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: GlobalStyles.colors.light,
              flex: 1,
              gap: 8,
              marginBottom: 8,
              padding: 10,
            }}
          >
            <TitleForList text="Other Products" navigate />
            <ProductCardSellingList />
          </View>
        </View>
      </ScrollView>

      <BottomTabButton height={98}>
        <Button
          color="off"
          styles={{
            flex: 1,
          }}
        >
          <Ionicons
            name="chatbubble-ellipses-sharp"
            size={24}
            color={GlobalStyles.colors.primary100}
          />
        </Button>

        <Button
          text="Buy Now"
          color="off"
          styles={{
            flex: 3,
          }}
        />

        <Button
          onPress={() => addItemToCart(product)}
          // onPress={addItemToCart}
          text="Add to Cart"
          color="secondary"
          styles={{
            flex: 3,
          }}
        />
      </BottomTabButton>
    </>
  );
};

export default DetailProductSelling;
