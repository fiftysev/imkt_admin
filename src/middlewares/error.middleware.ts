import { NextFunction, Request, Response } from "express";
import { ApiError } from "../exceptions/apiError";

export default function (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, field: err.field });
  }
}
