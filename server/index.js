import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

import { connectToMongoDB } from "./Database/connection.js"
import { MongoClient, ObjectId } from "mongodb"

const app = express()
const port = process.env.PORT || 5000
const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

//middle ware
app.use(cors());
app.use(express.json());

//databse connection
connectToMongoDB()
    .then(() => {
        console.log("Connected Successfully :)");

        const uri =  `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@localhost:27017/admin?directConnection=true`;
        const client = new MongoClient(uri);

        client.connect()
            .then(() => {
                const bookCollection = client.db("BookInvetory").collection("books")

                //insert books
                app.post('/upload', async (req, res) => {
                    const data = req.body
                    const result = await bookCollection.insertOne(data)
                    res.send(result);

                })

                //get all books
                app.get("/all-books", async (req, res) => {
                    const books = bookCollection.find();
                    const result = await books.toArray();
                    res.send(result);
                })

                //update books data
                app.patch("/books/:id", async (req, res) => {
                    const id = req.params.id;
                    const updateBookData = req.body;
                    const filter = { _id: new ObjectId(id) };

                    const updateDoc = {
                        $set: {
                            ...updateBookData
                        }
                    }

                    const options = { upsert: true };
                    const result = await bookCollection.updateOne(filter, updateDoc, options);
                    res.send(result);
                })

                //delete book
                app.delete("/books/:id", async (req, res) => {
                    const id = req.params.id;
                    const filter = { _id: new ObjectId(id) };
                    const result = await bookCollection.deleteOne(filter);
                    res.send(result)
                })

                //filter by category
                app.get("/all-books", async (req, res) => {
                    let query = {};
                    if (req.query?.category) {
                        query = { category: req.query.category }
                    }
                    const books = bookCollection.find(query);
                    const result = await books.toArray();
                    res.send(result);;
                })

                //single
                app.get("/book/:id", async (req, res) => {
                    const id = req.params.id;
                    const filter = { _id: new ObjectId(id) };
                    const result = await bookCollection.findOne(filter)
                    res.send(result)
                })

                app.get('/', (req, res) => {
                    res.send("Hello world :)")
                })


            })

    })

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
})