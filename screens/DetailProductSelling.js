import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import HeaderBar from "../components/HeaderBar/HeaderBar";
import { GlobalStyles } from "../constants/style";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import TitleForList from "../components/Title/TitleForList";
import ProductCardSellingList from "../components/Product/ProductSelling/ProductCardSellingList";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, addToCart } from "../redux/CartReducer";
import ShippingCardModal from "../components/Modal/ShippingCardModal";
import DetailProductSellingDescription from "../components/Description/DetailProductSellingDescription";
import BottomTabButton from "../components/Button/BottomTabButton";
import Button from "../components/Button/Button";
import axios from "axios";
import AddedValueCard from "../components/UI/AddedValueCard";
import FarmCard from "../components/UI/FarmCard";
import ConversationCard from "../components/UI/ConversationCard";
import ProductShare from "../components/UI/ProductShare";
import { useProductDetail } from "../hooks/useProductDetails";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../utils/axiosInstance";
import { addToWishlist, removeFromWishlist } from "../redux/WishlistReducer";

const DetailProductSelling = ({ route }) => {
  const { productId } = route.params;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.items);
  // const authToken = useSelector((state) => state.auth.token);
  const navigation = useNavigation();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const getAuthToken = async () => {
    try {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        return token;
      } else {
        // Token tidak ditemukan, mungkin user belum login
        throw new Error("Token not found");
      }
    } catch (err) {
      console.error("Error fetching token:", err);
      throw new Error("Error fetching token");
    }
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const token = await getAuthToken();
        const response = await axiosInstance.get(`/products/${productId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProduct(response.data);
        console.log(token);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchWishlistStatus = () => {
      // Pastikan wishlist selalu terdefinisi dan merupakan array
      const wishlistItems = wishlist || []; // Default ke array kosong jika wishlist undefined
      // const isInWishlist = wishlistItems.some((item) => item._id === productId);
      const isProductInWishlist = wishlistItems.some(
        (item) => item._id === productId
      );

      setIsInWishlist(isProductInWishlist);
    };

    fetchProductDetail();
    fetchWishlistStatus();
  }, [productId, wishlist]);

  if (!product) {
    return <Text>Product not found.</Text>;
  }

  const discountedPrice =
    product.price - (product.price * product.discPer) / 100;

  const addItemToCart = (product) => {
    setAddedToCart(true);
    dispatch(
      addToCart({
        ...product,
        quantity: selectedQuantity,
        totalAmount: discountedPrice * selectedQuantity,
      })
    );

    setTimeout(() => {
      setAddedToCart(false);
    }, 60000);
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist(productId));
    }
    setIsInWishlist(!isInWishlist);
  };

  // console.log(token);

  return (
    <>
      <SafeAreaView
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: GlobalStyles.colors.light,
        }}
      >
        <HeaderBar searcBar back active={true} text={"Look for Transaction"} />
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

                <Pressable
                  onPress={handleAddToWishlist}
                  style={{ flexDirection: "row", gap: 6 }}
                >
                  <Ionicons
                    name={isInWishlist ? "heart" : "heart-outline"}
                    size={24}
                    color={isInWishlist ? "red" : GlobalStyles.colors.gray500}
                  />

                  {/* <Ionicons
                    name={"heart-outline"}
                    size={24}
                    color={GlobalStyles.colors.gray500}
                  /> */}
                  <Ionicons
                    name="share-social-outline"
                    size={24}
                    color={GlobalStyles.colors.gray500}
                  />
                </Pressable>
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
                  <AddedValueCard
                    title="Product damage protection"
                    iconDefend
                  />
                  <AddedValueCard title="Verified farm" iconVerified />
                  <AddedValueCard title="Safe delivery" iconDelivery />
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
          <FarmCard
            img={{ uri: product.farmId.image }}
            name={product.farmId.name}
            location={product.farmId.name}
            rating={product.farmId.rating}
            workingHours={product.farmId.workingHours}
            followers={product.farmId.followers}
          />

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
          <ConversationCard />

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
          onPress={() => navigation.navigate("BuyNow", { product })}
          text="Buy Now"
          color="off"
          styles={{
            flex: 3,
          }}
        />

        <Button
          onPress={() => addItemToCart(product)}
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
