var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import connection from "../database/db.js";
import { bookSchema } from "../models/bookSchema.js";
export function getAllBooks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var books, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query("SELECT * FROM books;")];
                case 1:
                    books = _a.sent();
                    res.send(books.rows);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    res.sendStatus(500);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export function addNewBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var error, errors, _a, book, imgBook, bookAlreadyExist, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    error = bookSchema.validate(req.body, { abortEarly: false }).error;
                    if (error) {
                        errors = error.details.map(function (detail) { return detail.message; });
                        return [2 /*return*/, res.status(422).send(errors)];
                    }
                    _a = req.body, book = _a.book, imgBook = _a.imgBook;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, connection.query("SELECT book FROM books WHERE book=$1;", [book])];
                case 2:
                    bookAlreadyExist = _b.sent();
                    if (!(bookAlreadyExist.rowCount <= 0)) return [3 /*break*/, 4];
                    return [4 /*yield*/, connection.query("INSERT INTO books (book,\"isRead\",\"imgBook\") VALUES ($1,$2,$3);", [book, false, imgBook])];
                case 3:
                    _b.sent();
                    return [2 /*return*/, res.status(201).send({ message: "Livro criado." })];
                case 4:
                    res.status(409).send({ message: "Esse livro já existe." });
                    return [3 /*break*/, 6];
                case 5:
                    err_2 = _b.sent();
                    console.log(err_2);
                    res.sendStatus(500);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
export function isRead(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, bookAlreadyRead, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 9]);
                    return [4 /*yield*/, connection.query("SELECT * FROM books WHERE id=$1;", [id])];
                case 2:
                    bookAlreadyRead = _a.sent();
                    if (!(bookAlreadyRead.rowCount <= 0)) return [3 /*break*/, 3];
                    return [2 /*return*/, res.status(409).send({ message: "Esse livro não existe." })];
                case 3:
                    if (!(bookAlreadyRead.rows[0].isRead === false)) return [3 /*break*/, 5];
                    return [4 /*yield*/, connection.query("UPDATE books SET \"isRead\" = $1 WHERE id=$2;", [true, id])];
                case 4:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
                case 5: return [4 /*yield*/, connection.query("UPDATE books SET \"isRead\" = $1 WHERE id=$2;", [false, id])];
                case 6:
                    _a.sent();
                    res.sendStatus(201);
                    return [2 /*return*/];
                case 7: return [3 /*break*/, 9];
                case 8:
                    err_3 = _a.sent();
                    console.log(err_3);
                    res.sendStatus(500);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
export function deleteBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, bookAlreadyExist, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, connection.query("SELECT * FROM books WHERE id=$1;", [id])];
                case 2:
                    bookAlreadyExist = _a.sent();
                    if (bookAlreadyExist.rowCount === 0) {
                        res.status(409).send({ message: "Esse livro não existe." });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, connection.query("DELETE FROM books WHERE id=$1;", [id])];
                case 3:
                    _a.sent();
                    res.status(200).send({ message: "livro deletado." });
                    return [3 /*break*/, 5];
                case 4:
                    err_4 = _a.sent();
                    res.sendStatus(500);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
