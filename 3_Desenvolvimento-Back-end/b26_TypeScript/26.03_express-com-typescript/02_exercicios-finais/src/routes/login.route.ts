import { Request, Response, Router } from 'express';
import userControler from '../msc';
import 'express-async-errors';

const loginRoutes = Router();

loginRoutes.post('/', userControler.login);

export default loginRoutes;
