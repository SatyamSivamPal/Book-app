import { MongoClient } from 'mongodb';

const uri = "mongodb://127.0.0.1:27017/books?directConnection=true";

async function connectToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client;
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw err;
  }
}

export { connectToMongoDB };
