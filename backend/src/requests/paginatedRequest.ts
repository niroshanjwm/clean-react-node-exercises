import { Request } from "express";
import { Pagination } from "../middlewares/pagination/types";

export interface PaginatedRequest extends Request {
  pagination: Pagination;
}
