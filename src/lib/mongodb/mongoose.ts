import mongoose from "mongoose";

export const connect = async () => {
  mongoose.set("strictQuery", true);

  // Only connect if not already connected
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI is not defined");

    await mongoose.connect(uri, {
      dbName: "next-auth-app",
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
