import app from './api';
import dotenv from 'dotenv';

dotenv.config();

const port = Number(process.env.APP_PORT) || 3000;

app.listen(() => console.log(`App is running on ${port}`));
