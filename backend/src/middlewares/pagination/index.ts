import { Request, Response, NextFunction } from "express";
import { Pagination } from "./types";

export const pagination = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page = parseInt(req.query.page as string) || 1;
  const size = parseInt(req.query.size as string) || 10;
  const limit = parseInt(req.query.limit as string) || size;
  const orderBy = (req.query.orderBy as string) || undefined;
  const order =
    (req.query.order as string)?.toLowerCase() === "desc" ? "desc" : "asc";

  (req as any).pagination = { page, size, limit, orderBy, order } as Pagination;

  next();
};
