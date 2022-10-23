import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/User.service";

export default class UserControler {
  constructor(private _service: UserService) {
    this._service = _service;
    this.login = this.login.bind(this);
  }

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this._service.login(email, password);
    res.status(StatusCodes.OK).json({ token });
  }
}
