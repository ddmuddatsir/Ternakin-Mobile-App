import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { fetchData } from "../../utils/fetchData";
import { GlobalStyles } from "../../constants/style";
import { useDispatch, useSelector } from "react-redux";
import { addMessages, setMessages } from "../../redux/Chat/ChatReducer";
import { useState } from "react";
import { useEffect } from "react";

const ChatWindowScreen = (route) => {
  const chatId = route?.params?.chatId;
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  if (!chatId) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Chat ID tidak ditemukan.</Text>
      </View>
    );
  }

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await fetchData(`/chats/${chatId}/messages`);

        dispatch(setMessages(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
    socket.emit("join_chat", chatId);

    socket.on("new_message", (message) => {
      dispatch(addMessages(message));
    });

    return () => {
      socket.off("new_message");
    };
  }, [chatId]);

  const sendMessage = () => {
    const newMessage = {
      messageId: Date.now().toString(),
      senderId: "123", // User ID
      text,
    };

    socket.emit("send_message", { chatId, ...newMessage });
    setText("");
  };

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

      <View style={styles.container}>
        <ScrollView style={styles.messagesContainer}>
          {messages.map((message) => (
            <View key={message.messageId} style={styles.message}>
              <Text>{message.text}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Type a message"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ChatWindowScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  messagesContainer: { flex: 1, padding: 10 },
  message: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    marginBottom: 5,
    borderRadius: 5,
  },
  inputContainer: { flexDirection: "row", padding: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  sendButtonText: { color: "#fff" },
});
