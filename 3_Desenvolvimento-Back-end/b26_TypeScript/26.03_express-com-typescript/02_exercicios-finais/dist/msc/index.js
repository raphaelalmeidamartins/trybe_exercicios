"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./models/connection"));
const User_model_1 = __importDefault(require("./models/User.model"));
const User_service_1 = __importDefault(require("../services/User.service"));
const User_controler_1 = __importDefault(require("./controlers/User.controler"));
const userModel = new User_model_1.default(connection_1.default);
const userService = new User_service_1.default(userModel);
const userControler = new User_controler_1.default(userService);
exports.default = userControler;
