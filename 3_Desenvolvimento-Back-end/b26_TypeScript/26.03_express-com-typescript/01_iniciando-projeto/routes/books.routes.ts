// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const booksController = new BooksController();

const router = Router();

router.get('/', booksController.getAll);
router.get('/:id', booksController.getById);
router.post('/', validationBook, booksController.create);
router.put('/:id', validationBook, booksController.update);
router.delete('/:id', booksController.remove);

export default router;
