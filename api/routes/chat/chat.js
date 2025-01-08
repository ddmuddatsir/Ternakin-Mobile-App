import express, { query } from "express";
import Chat from "../../models/chat/chat.js";
import { authenticate } from "../../middleware/authenticate.js";

const router = express.Router();

//Get All chat for a user
router.get("/chats", authenticate, async (req, res) => {
  const { userId } = req.user;
  try {
    const chats = await Chat.find({
      $or: [{ buyerId: userId }, { sellerId: farmId }],
    }).sort({ sort: -1 });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get message for specific chat
router.get("/chats/:chatId/messages", authenticate, async (req, res) => {
  const { chatId } = req.params;
  try {
    const chat = await Chat.findOne({ chatId });
    if (!chat) return res.status(404).json("Chat not found");

    res.status(200).json(chat.message);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Create new chat
router.post("/chats", authenticate, async (req, res) => {
  const { chatId, sellerId, buyerId } = req.body;
  try {
    const newChat = new Chat({ chatId, buyerId, sellerId, messages: [] });
    await newChat.save();

    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/chats/:chatId/messages", authenticate, async (req, res) => {
  const { chatId } = req.params;
  const { messageId, senderId, text } = req.body;
  try {
    const chat = await Chat.findOne({ chatId });
    if (!chat) return res.status(404).json("Chat not found");

    const newMessage = { messageId, senderId, text, timeStamp: new Date() };
    chat.messages.push(newMessage);
    chat.lastMessage = text;
    chat.updatedAt = new Date();
    await chat.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
