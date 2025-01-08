// config/database.js
import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dedemudasir:dedemudasir@productcard.ahdtnni.mongodb.net/register"
      // "mongodb://dedemudasir:dedemudasir@ac-6zskjgj-shard-00-00.ahdtnni.mongodb.net:27017,ac-6zskjgj-shard-00-01.ahdtnni.mongodb.net:27017,ac-6zskjgj-shard-00-02.ahdtnni.mongodb.net:27017/?ssl=true&replicaSet=atlas-2zanpn-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ProductCard"
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
