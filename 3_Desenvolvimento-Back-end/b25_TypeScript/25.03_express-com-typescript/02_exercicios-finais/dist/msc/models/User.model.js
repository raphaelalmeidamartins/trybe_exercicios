"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class UserModel {
    constructor(_connection) {
        this._connection = _connection;
        this._connection = _connection;
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `
      SELECT *
      FROM ${process.env.DB_NAME}.Users
      WHERE id = ?
    `;
            const result = yield this._connection.query(sql, [id]);
            const [rows] = result;
            const [user] = rows;
            return user;
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `
      SELECT *
      FROM ${process.env.DB_NAME}.Users
      WHERE email = ?
    `;
            const result = yield this._connection.query(sql, [email]);
            const [rows] = result;
            const [user] = rows;
            return user;
        });
    }
}
exports.default = UserModel;
