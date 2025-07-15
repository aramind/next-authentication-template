import mongoose from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined");
    }
    await mongoose.connect(uri, {
      dbName: "next-auth-app",
    });
    console.log("MongoDB connected");
    initialized = true;
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
