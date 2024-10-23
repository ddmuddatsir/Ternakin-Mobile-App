import { View } from "react-native";
import TransactiionCardItem from "./TransactiionCardItem";

const payment = [
  {
    id: 1,
    feature: "Shopping",
    title: "Palm powder for animal feed 1kg",
    quantity: "Amount : 6kg",
    date: "01 Nov 2022",
    status: "Succeed",
    price: 35000,
  },
  {
    id: 2,
    feature: "Shopping",
    title: "Palm powder for animal feed 1kg",
    quantity: "Amount : 6kg",
    date: "01 Nov 2022",
    status: "Succeed",
    price: 35000,
  },
  {
    id: 3,
    feature: "Shopping",
    title: "Palm powder for animal feed 1kg",
    quantity: "Amount : 6kg",
    date: "01 Nov 2022",
    status: "Succeed",
    price: 35000,
  },
  {
    id: 4,
    feature: "Shopping",
    title: "Palm powder for animal feed 1kg",
    quantity: "Amount : 6kg",
    date: "01 Nov 2022",
    status: "Succeed",
    price: 35000,
  },
];

const TransactionCardList = () => {
  return (
    <View
      style={{
        flex: 1,
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      {payment.map((item) => (
        <View key={item.id}>
          <TransactiionCardItem product={item} />
        </View>
      ))}
    </View>
  );
};

export default TransactionCardList;
