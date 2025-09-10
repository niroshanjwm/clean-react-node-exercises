import { Response } from "express";
import { PaginatedRequest } from "../requests/paginatedRequest";
import { generateUsers } from "../services/user";
import { responsSuccess } from "../utils/response";

export const getUsers = async (
  request: PaginatedRequest,
  response: Response
) => {
  const { size } = request.pagination;
  const users = await generateUsers(size);
  responsSuccess(response, "Users fetched successfully", { users });
};
