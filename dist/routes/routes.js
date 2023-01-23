import { Router } from "express";
import { getAllBooks, addNewBook, isRead, deleteBook } from "../controllers/book.controller.js";
var router = Router();
router.get("/books", getAllBooks);
router.post("/newbooks", addNewBook);
router.put("/isread/:id", isRead);
router["delete"]("/deletebook/:id", deleteBook);
export default router;
