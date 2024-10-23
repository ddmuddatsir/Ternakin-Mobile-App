// config/database.js
import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dedemudasir:dedemudasir@productcard.ahdtnni.mongodb.net/register"
    );
    console.log("Connected to MongoDB");

    // Cek koleksi
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log(
      "Collections:",
      collections.map((col) => col.name)
    );
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};
