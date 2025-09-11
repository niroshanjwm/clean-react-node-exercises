import { Response } from "express";
import { PaginatedRequest } from "../requests/paginatedRequest";
import { generateUsers } from "../services/user";
import { responseFail, responseSuccess } from "../utils/response";

export const getUsers = async (
  request: PaginatedRequest,
  response: Response
): Promise<void> => {
  try {
    const { size } = request.pagination;
    const users = await generateUsers(size);
    responseSuccess(response, "Users fetched successfully", { users });
  } catch (error) {
    responseFail(response, "Error fetching users", { error });
  }
};
