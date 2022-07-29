import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export default function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  switch (err.name) {
    case 'NotFoundError':
      res.status(StatusCodes.NOT_FOUND).json({ message: err.message });
      break;

    case 'UnauthorizedError':
      res.status(StatusCodes.UNAUTHORIZED).json({ message: err.message });
      break;
  
    default:
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
      break;
  }
}
