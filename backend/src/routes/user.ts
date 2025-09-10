import { Router, Request, Response } from "express";
import { PaginatedRequest } from "../requests/paginatedRequest";
import { getUsers } from "../controllers/user";
import { pagination } from "../middlewares/pagination";

const router = Router();

router.get("/", pagination, (request: Request, response: Response) =>
  getUsers(request as PaginatedRequest, response)
);

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});

export default router;
