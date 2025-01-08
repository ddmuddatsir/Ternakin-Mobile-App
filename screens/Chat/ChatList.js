import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setChats } from "../../redux/Chat/ChatReducer";
import { fetchData } from "../../utils/fetchData";

const ChatList = ({ navigation }) => {
  const chats = useSelector((state) => state.chat.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const data = await fetchData("/chats");
        dispatch(setChats(data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchChats();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {chats.map((chat) => (
        <TouchableOpacity
          key={chat.chatId}
          style={styles.chatItem}
          onPress={() =>
            navigation.navigate("ChatScreen", { chatId: chat.chatId })
          }
        >
          <Text>{chat.lastMessage}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  chatItem: { padding: 15, borderBottomWidth: 1, borderColor: "#ddd" },
});

export default ChatList;
