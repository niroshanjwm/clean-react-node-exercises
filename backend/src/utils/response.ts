import { Response } from "express";
import { HttpCode } from "../consts/http";

const httpResponse = <T>(
  status: HttpCode,
  response: Response,
  message: string,
  data: T | undefined = undefined
): void => {
  response.status(status).json({ status, message, data });
};

export const responseSuccess = <T>(
  response: Response,
  message: string,
  data: T | undefined = undefined
): void => httpResponse(HttpCode.success, response, message, data);

export const responseFail = <T>(
  response: Response,
  message: string,
  options?: { data?: T; error?: Error | unknown }
): void => {
  console.error("Error: ", message, options?.error);
  httpResponse(HttpCode.error, response, message, options?.data);
};
