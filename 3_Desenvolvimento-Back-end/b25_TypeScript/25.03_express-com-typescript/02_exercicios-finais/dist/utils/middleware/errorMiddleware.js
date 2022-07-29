"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
function errorMiddleware(err, req, res, next) {
    switch (err.name) {
        case 'NotFoundError':
            res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: err.message });
            break;
        case 'UnauthorizedError':
            res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({ message: err.message });
            break;
        default:
            res.status(500).json({ message: err.message });
            break;
    }
}
exports.default = errorMiddleware;
