"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const api_1 = __importDefault(require("./api"));
dotenv_1.default.config();
const port = Number(process.env.API_PORT) || 3000;
api_1.default.listen(port, () => console.log(`Running on port ${port}`));
