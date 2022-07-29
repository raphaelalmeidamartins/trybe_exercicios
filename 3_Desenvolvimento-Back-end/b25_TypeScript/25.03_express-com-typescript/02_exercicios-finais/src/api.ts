import express from 'express';
import { Express } from 'express';

const app: Express = express();
app.use(express.json());

export default app;
