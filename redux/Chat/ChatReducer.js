import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    chats: [],
    messages: [],
  },
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    addMessages: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setChats, setMessages, addMessages } = ChatSlice.actions;

export default ChatSlice.reducer;
