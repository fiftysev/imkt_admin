import { Request, Response, NextFunction } from "express";
import { Group } from "../models/group.model";

class GroupsController {
  constructor() {}

  getAll(req: Request, res: Response, next: NextFunction) {
    Group.find().exec((err, data) => {
      if (err) {
        return res.status(500).json({
          code: 500,
          message: "Error when get all groups",
          error: err,
        });
      }
      return res
        .status(200)
        .json({ code: 200, message: "All groups fetched", data });
    });
  }

  getById(req: Request, res: Response, next: NextFunction) {
    if (req.params.id) {
      Group.findById(req.params.id as string).exec((err, data) => {
        if (err) {
          return res.status(500).json({
            code: 500,
            message: "Error when get group by id",
            error: err,
          });
        }
        return res
          .status(200)
          .json({ code: 200, message: "Group fetched", data });
      });
    } else {
      return res.status(400).json({ code: 400, message: "Invalid request" });
    }
  }

  deleteOne(req: Request, res: Response, next: NextFunction) {
    if (req.params.id) {
      const id = req.params.id as string;
      Group.deleteOne({ _id: id }).exec((err, data) => {
        if (err) {
          return res.status(500).json({
            code: 500,
            message: "Error when delete group by id",
            error: err,
          });
        }
        return res.status(200).json({
          code: 200,
          message: "Succesfully deleted",
          deletedGroup: data,
        });
      });
    }
  }
}

export default new GroupsController();
