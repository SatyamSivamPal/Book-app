import { MongoClient } from 'mongodb';
import dotenv from "dotenv"

dotenv.config()

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_STRING } = process.env;

const uri = MONGODB_STRING;

async function connectToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    return client;
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
}

export { connectToMongoDB };
