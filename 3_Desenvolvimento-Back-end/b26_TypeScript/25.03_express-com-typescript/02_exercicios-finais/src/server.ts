import dotenv from 'dotenv';
import app from './api';

dotenv.config();

const port: number = Number(process.env.API_PORT) || 3000;

app.listen(port, () => console.log(`Running on port ${port}`));
