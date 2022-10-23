"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_route_1 = __importDefault(require("./routes/login.route"));
// import userRoutes from './routes/User.routes';
require("express-async-errors");
const errorMiddleware_1 = __importDefault(require("./utils/middleware/errorMiddleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/login', login_route_1.default);
app.use(errorMiddleware_1.default);
exports.default = app;
