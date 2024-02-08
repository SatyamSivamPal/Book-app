import { MongoClient } from 'mongodb';
import dotenv from "dotenv"

dotenv.config()

const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

const uri = `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@localhost:27017/admin?directConnection=true`;

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
