"use strict";
// ./routes/books.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const books_middleware_1 = __importDefault(require("../middlewares/books.middleware"));
const booksController = new books_controller_1.default();
const router = (0, express_1.Router)();
router.get('/', booksController.getAll);
router.get('/:id', booksController.getById);
router.post('/', books_middleware_1.default, booksController.create);
exports.default = router;
