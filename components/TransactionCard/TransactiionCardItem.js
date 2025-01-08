import { Button, Image, Pressable, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";
import { currencyFormat } from "../../utils/currencyFormat";
import { dateFormat } from "../../utils/dateFormat";

const TransactiionCardItem = ({ product }) => {
  const buyAgainHandler = (item) => {
    console.log("Buy again clicked for:", item);
  };

  return (
    <View
      style={{
        height: 164,
        width: 394,
        backgroundColor: GlobalStyles.colors.light,
        borderRadius: 12,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderColor: GlobalStyles.colors.store_line,
        borderWidth: 0.25,
        padding: 18,
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "column", flex: 1, gap: 8 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "column", gap: 8 }}>
            <Text
              style={{
                color: GlobalStyles.colors.text700,
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              {product.feature || "Product"}
            </Text>
            <Text
              style={{
                color: GlobalStyles.colors.text100,
                fontSize: 12,
                fontWeight: "400",
              }}
            >
              {dateFormat(product.orderDate) || "No Date"}
            </Text>
          </View>
          <View style={{ gap: 4 }}>
            <View
              style={{
                padding: 4,
                backgroundColor: GlobalStyles.colors.success50,
                borderRadius: 4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: GlobalStyles.colors.success500,
                  fontWeight: "500",
                }}
              >
                {product.status || "No Status"}
              </Text>
            </View>

            <Text
              style={{
                color: GlobalStyles.colors.text700,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Rp
              {currencyFormat(product.totalAmount || 0)}
            </Text>
          </View>
        </View>
        {Array.isArray(product.products) &&
          product.products.map((product, index) => (
            <View key={index} style={{ flexDirection: "row", gap: 12 }}>
              <Image
                style={{ height: 32, width: 32, backgroundColor: "black" }}
                source={{
                  uri: product.productId?.image || "default_image_url",
                }}
              />
              <View>
                <View style={{ gap: 4 }}>
                  <Text
                    style={{
                      color: GlobalStyles.colors.text700,
                      fontSize: 14,
                      fontWeight: "500",
                    }}
                  >
                    {product.productId?.title || "No Title"}
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: GlobalStyles.colors.text700,
                        fontSize: 12,
                        fontWeight: "400",
                      }}
                    >
                      Quantity : {product.quantity || "0"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}

        <Pressable
          onPress={() => buyAgainHandler(product)}
          style={{
            backgroundColor: GlobalStyles.colors.primary100,
            padding: 8,
            marginVertical: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: GlobalStyles.colors.light,
              fontWeight: "600",
              fontSize: 12,
            }}
          >
            Buy Again
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TransactiionCardItem;
