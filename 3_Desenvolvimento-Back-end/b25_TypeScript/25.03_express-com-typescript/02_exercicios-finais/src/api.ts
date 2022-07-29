import express, { Express } from 'express';
import loginRoutes from './routes/login.route';
import 'express-async-errors';
import errorMiddleware from './utils/middleware/errorMiddleware';

const app: Express = express();
app.use(express.json());

app.use('/login', loginRoutes);

app.use(errorMiddleware);

export default app;
