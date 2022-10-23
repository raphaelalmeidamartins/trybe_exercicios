import dotenv from 'dotenv';
import { Pool } from 'mysql2/promise';
import User from '../interfaces/User.interface';

dotenv.config();

export default class UserModel {
  constructor(private _connection: Pool) {
    this._connection = _connection;    
  }

  public async getById(id: number): Promise<User | undefined> {
    const sql = `
      SELECT *
      FROM ${process.env.DB_NAME}.Users
      WHERE id = ?
    `
    const result = await this._connection.query(sql, [id]);
    const [rows] = result;
    const [user] = rows as User[] | [];
    return user;
  }

  public async getByEmail(email: string): Promise<User | undefined> {
    const sql = `
      SELECT *
      FROM ${process.env.DB_NAME}.Users
      WHERE email = ?
    `
    const result = await this._connection.query(sql, [email]);
    const [rows] = result;
    const [user] = rows as User[] | [];
    return user;
  }
}
