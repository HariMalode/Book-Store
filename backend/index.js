import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import path from "path";




const app = express();
app.use(express.json());




//Middleware for handling CORS Policy
//option1: Allow all origins with Default of cors(*)
app.use(cors());

// option2: Allow only specific origins
// app.use(
//     cors({
//         origin: "https://hari-book-store.onrender.com",
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         allowedHeaders: ["Content-Type"]
//     })
// )



//Here we are using the booksRoute object that we have created in routes folder
app.use("/", booksRoute);

//for deployment
const __dirname = path.resolve();
console.log(__dirname);
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
     })
    .catch((err) => {
        console.log(err);
    })




app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
