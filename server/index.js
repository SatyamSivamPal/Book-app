import express from "express"
import cors from "cors"
import { connectToMongoDB } from "./Database/connection.js"
import { MongoClient, ObjectId } from "mongodb"

const app = express()
const port = process.env.PORT || 5000

//middle ware
app.use(cors());
app.use(express.json());

//databse connection
connectToMongoDB()
const uri = "mongodb://127.0.0.1:27017/books?directConnection=true";

const client = new MongoClient(uri);

const bookCollection = client.db("BookInvetory").collection("books")

//insert books
app.post('/upload', async(req,res) => {
    const data = req.body
    const result = await bookCollection.insertOne(data)
    res.send(result);

})

//get all books
app.get("/all-books", async(req, res) => {
    const books = bookCollection.find();
    const result = await books.toArray();
    res.send(result);
})

//update books data
app.patch("/books/:id", async(req, res) => {
    const id = req.params.id;
    const updateBookData = req.body;
    const filter = {_id: new ObjectId(id)};
    const options = {upsert: true};

    const updateDoc = {
        
    }
})

app.get('/', (req, res) => {
    res.send("Hello world :)")
})

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`);
})