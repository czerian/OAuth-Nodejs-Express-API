import mongoose from "mongoose";
import config from "config";

async function DBConnect() {
  const dbUri = config.get<string>("DBUri");

  try {
    await mongoose.connect(dbUri);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log("connection to MongoDB Failed");
    process.exit(1);
  }
}

export default DBConnect;
