import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  messageId: { type: String, required: true },
  senderId: { type: String, required: true },
  text: { type: String, required: true },
  timeStamp: { type: String, required: true },
});

const chatSchema = new Schema({
  chatId: { type: String, required: true },
  buyerId: { type: String, required: true },
  sellerId: { type: String, required: true },
  messages: [messageSchema],
  lastMessage: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
