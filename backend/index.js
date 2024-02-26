import express from "express";
// import { PORT, MONGODB_URI } from "./config.js";
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import {Book} from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());

//Middleware for handling CORS Policy
//option1: Allow all origins with Default of cors(*)
app.use(cors());

//option2: Allow only specific origins
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type"]
//     })

// )

app.get("/", (req, res) => {
    console.log("Request received for /");
    res.status(234).send("Welcome to Book Store App");
    
})

//Here we are using the booksRoute object that we have created in routes folder
app.use("/books", booksRoute);


mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
     })
    .catch((err) => {
        console.log(err);
    })




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
