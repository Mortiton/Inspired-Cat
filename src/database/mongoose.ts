import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Missing environment variable: MONGODB_URI");
}

export function connectToDatabase() {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((err) => {
      console.error("Connection error", err);
      process.exit(1);
    });
}
