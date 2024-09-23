import { Button, Image, Pressable, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/style";

const TransactiionCardItem = ({ product }) => {
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
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text
              style={{
                color: GlobalStyles.colors.text700,
                fontSize: 12,
                fontWeight: "600",
              }}
            >
              {product.feature}
            </Text>
            <Text
              style={{
                color: GlobalStyles.colors.text100,
                fontSize: 12,
                fontWeight: "400",
              }}
            >
              {product.date}
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
                  fontWeight: 500,
                }}
              >
                {product.status}
              </Text>
            </View>
            <Text
              style={{
                color: GlobalStyles.colors.text700,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Rp{product.price}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 12 }}>
          <Image style={{ height: 32, width: 32, backgroundColor: "black" }} />
          <View>
            <View style={{ gap: 4 }}>
              <Text
                style={{
                  color: GlobalStyles.colors.text700,
                  fontSize: 14,
                  fontWeight: "500",
                }}
              >
                {product.title}
              </Text>
              <View>
                <Text
                  style={{
                    color: GlobalStyles.colors.text700,
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                  s
                >
                  {product.quantity}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Pressable
          onPress={() => buyAgainHandler(item)}
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
              fontWeight: 600,
              fontSize: 12,
            }}
          >
            Buy Again
          </Text>
        </Pressable>

        {/* <Button
          style={{ fontSize: 20, color: "green" }}
          styleDisabled={{ color: "red" }}
          onPress={() => this._handlePress()}
          title="Buy again"
        >
          Buy again
        </Button> */}
      </View>
    </View>
  );
};

export default TransactiionCardItem;
