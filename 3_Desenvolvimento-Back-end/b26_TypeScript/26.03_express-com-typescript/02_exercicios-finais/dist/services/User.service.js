"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const jwt = __importStar(require("jsonwebtoken"));
const restify_errors_1 = require("restify-errors");
dotenv_1.default.config();
class UserService {
    constructor(_model) {
        this._model = _model;
        this.validate = {
            id: (id) => __awaiter(this, void 0, void 0, function* () {
                const user = yield this._model.getById(id);
                if (!user)
                    throw new restify_errors_1.NotFoundError('User not found');
                return user;
            }),
            email: (email) => __awaiter(this, void 0, void 0, function* () {
                const user = yield this._model.getByEmail(email);
                if (!user)
                    throw new restify_errors_1.NotFoundError('User not found');
                return user;
            }),
            password: (user, password) => __awaiter(this, void 0, void 0, function* () {
                if (user.password !== password)
                    throw new restify_errors_1.UnauthorizedError('Ivalid email or password');
            })
        };
        this.token = {
            generate: (email) => __awaiter(this, void 0, void 0, function* () {
                const token = jwt.sign(email, String(process.env.JWT_SECRET), {
                    expiresIn: '1d',
                });
                return token;
            }),
            validate: (authorization) => __awaiter(this, void 0, void 0, function* () {
                const email = jwt.verify(authorization, String(process.env.JWT_SECRET));
                return email;
            })
        };
        this._model = _model;
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.validate.email(email);
            yield this.validate.password(user, password);
            const token = yield this.token.generate(email);
            return token;
        });
    }
}
exports.default = UserService;
