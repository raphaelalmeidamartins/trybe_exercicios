import dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { NotFoundError, UnauthorizedError } from "restify-errors";
import UserModel from "../models/User.model";
import User from '../interfaces/User.interface';

dotenv.config();

export default class UserService {
  constructor(private _model: UserModel) {
    this._model = _model;
  }

  public validate = {
    id: async (id: number): Promise<User> => {
      const user: User | undefined = await this._model.getById(id);
      if (!user) throw new NotFoundError('User not found');
      return user;
    },
    email: async (email: string): Promise<User> => {
      const user: User | undefined = await this._model.getByEmail(email);
      if (!user) throw new NotFoundError('User not found');
      return user;
    },
    password: async (user: User, password: string): Promise<void> => {
      if (user.password !== password)
        throw new UnauthorizedError('Ivalid email or password');
    }
  }

  public token = {
    generate: async (email: string): Promise<string> => {
      const token = jwt.sign({ email }, String(process.env.JWT_SECRET), {
        expiresIn: '1d',
      });
      return token;
    },
    validate: async (authorization: string): Promise<string | jwt.JwtPayload> => {
      const payload = jwt.verify(authorization, String(process.env.JWT_SECRET));
      return payload;
    }
  }

  public async login(email: string, password: string): Promise<string> {
    const user = await this.validate.email(email);
    await this.validate.password(user, password);
    const token = await this.token.generate(email);

    return token;
  }
}
