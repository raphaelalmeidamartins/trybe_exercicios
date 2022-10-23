"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const msc_1 = __importDefault(require("../msc"));
require("express-async-errors");
const loginRoutes = (0, express_1.Router)();
loginRoutes.post('/', msc_1.default.login);
exports.default = loginRoutes;
