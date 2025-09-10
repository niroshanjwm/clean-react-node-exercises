import { Response } from "express";
import { HttpCode } from "../consts/http";

export const responsSuccess = (
  response: Response,
  message: string,
  data: any | undefined = undefined
) =>
  response
    .status(HttpCode.success)
    .json({ status: HttpCode.success, message, data });

export const responsFail = (
  response: Response,
  message: string,
  data: any | undefined = undefined
) =>
  response
    .status(HttpCode.error)
    .json({ status: HttpCode.error, message, data });
