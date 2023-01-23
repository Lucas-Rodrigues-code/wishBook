import connection from "../database/db.js";
import { Request, Response } from "express";
import { book, isId } from "../protocols/books.js";
import { bookSchema } from "../models/bookSchema.js";

export async function getAllBooks(req: Request, res: Response) {
    try {
        const books = await connection.query(`SELECT * FROM books;`)
        res.send(books.rows)
    } catch (err) {
        res.sendStatus(500);
    }
}

export async function addNewBook(req: Request, res: Response) {

    const { error } = bookSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    const { book, imgBook } = req.body as book;
    try {
        const bookAlreadyExist = await connection.query(`SELECT book FROM books WHERE book=$1;`, [book])
        if (bookAlreadyExist.rowCount <= 0) {
            await connection.query(`INSERT INTO books (book,"isRead","imgBook") VALUES ($1,$2,$3);`, [book, false, imgBook])
            return res.status(201).send({ message: "Livro criado." });

        }
        res.status(409).send({ message: "Esse livro já existe." });

    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
}

export async function isRead(req: Request, res: Response) {
    const { id } = req.params as isId

    try {
        const bookAlreadyRead = await connection.query(`SELECT * FROM books WHERE id=$1;`, [id])
        if (bookAlreadyRead.rowCount <= 0) {
            return res.status(409).send({ message: "Esse livro não existe." });
        }
        else if (bookAlreadyRead.rows[0].isRead === false) {
            await connection.query(`UPDATE books SET "isRead" = $1 WHERE id=$2;`, [true, id])
            res.sendStatus(201)
            return
        } else {
            await connection.query(`UPDATE books SET "isRead" = $1 WHERE id=$2;`, [false, id])
            res.sendStatus(201)
            return
        }
    } catch (err) {
        console.log(err)
        res.sendStatus(500);
    }
}

export async function deleteBook(req: Request, res: Response) {
    const { id } = req.params as isId
    try {
        const bookAlreadyExist = await connection.query(`SELECT * FROM books WHERE id=$1;`, [id]);
        if (bookAlreadyExist.rowCount === 0) {
            res.status(409).send({ message: "Esse livro não existe." });
            return
        }
        await connection.query(`DELETE FROM books WHERE id=$1;`, [id]);
        res.status(200).send({ message: "livro deletado." });
    } catch (err) {
        res.sendStatus(500);
    }
}



