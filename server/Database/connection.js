import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_STRING, USE_DB_AUTH } = process.env;

const uri = MONGODB_STRING;

async function connectToMongoDB() {

  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const useDBAuth = USE_DB_AUTH || false;
    if (useDBAuth) {
      connectionParams.auth = {
        username: MONGODB_USERNAME,
        password: MONGODB_PASSWORD
      };
    }

    await mongoose.connect(uri, connectionParams);
    console.log("Connected to the database.");
  } catch (error) {
    console.error("Could not connect to the database:", error);
  }
}

export { connectToMongoDB };
