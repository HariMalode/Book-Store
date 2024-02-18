import express from "express";
const router = express.Router();
import { Book } from "../models/bookModel.js";


//route for adding a book
router.post("/", async(req, res) => {
    try{
        if(!req.body.title ||!req.body.author ||!req.body.publishYear){
            return res.status(400).send("Please provide all the required fields");
        }
        const newBook ={
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await Book.create(newBook);

        return res.status(201).send(book);

    } catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
})

//Route to get all books
router.get("/", async(req, res) => {
    try{
        const books = await Book.find();
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
})

//Route to get a single book
router.get("/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book){
            return res.status(404).send("Book not found");
        }
        return res.status(200).json(book)
    } catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
})

//Route to update a book
router.put("/:id", async(req, res) => {
    try{
        if(!req.body.title ||!req.body.author ||!req.body.publishYear){
            return res.status(400).send("Please provide all the required fields");
        }
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body)
        
        if(!updatedBook){
            return res.status(404).send("Book not found");
        }

        return res.status(200).send("Book Updated "+updatedBook);

    } catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
})

//Route to delete a book
router.delete("/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            return res.status(404).send("Book not found");
        }
        return res.status(200).send("Book Deleted "+deletedBook);
    } catch(error){
        console.log(error.message);
        res.status(500).send(error.message);
    }
})

export default router;