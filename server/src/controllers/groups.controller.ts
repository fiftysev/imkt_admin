import { Request, Response, NextFunction } from "express";
import { Group } from "../models/group.model";
import { IGroup } from "../models/interfaces/group.interface";

class GroupsController {
  constructor() {}

  getAll(req: Request, res: Response, next: NextFunction) {
    if (req.query.format === "simple") {
      Group.find({}, { _id: 1, groupNumber: 1 }).exec((err, data) => {
        if (err) {
          return res.status(500).json(err.message);
        }
        return res.status(200).json(data);
      });
    } else {
      Group.find().exec((err, data) => {
        if (err) {
          return res.status(500).json(err.message);
        }
        return res.status(200).json(data);
      });
    }
  }

  getById(req: Request, res: Response, next: NextFunction) {
    if (req.params.id) {
      Group.findById(req.params.id as string).exec((err, data) => {
        if (err) {
          return res.status(500).json(err.message);
        }
        return res.status(200).json(data);
      });
    } else {
      return res.status(400).json({ message: "Invalid request" });
    }
  }

  deleteOne(req: Request, res: Response, next: NextFunction) {
    if (req.params.id) {
      const id = req.params.id as string;
      Group.deleteOne({ _id: id }).exec((err, data) => {
        if (err) {
          return res.status(500).json(err.message);
        }
        return res.status(200).json({
          message: "Succesfully deleted",
          deletedGroup: data,
        });
      });
    }
  }

  addOne(req: Request<{}, {}, IGroup>, res: Response, next: NextFunction) {
    const group = new Group({
      ...req.body,
    });

    group.save((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      return res.status(201).json({
        message: "Group added successfull",
        data: data,
      });
    });
  }

  async updateGroup(
    req: Request<{}, {}, IGroup>,
    res: Response,
    next: NextFunction
  ) {
    if (!req.body) {
      return res.status(400).json({
        message: "Bad request with empty body",
      });
    }
    try {
      await Group.findOneAndUpdate(
        { _id: req.body._id },
        {
          $set: {
            ...req.body,
          },
        },
        { new: true },
        (err, data) => {
          if (err) {
            return res.status(400).json(err.message);
          }
          return res.status(201).json({
            message: "Successfully update group data",
            data: data,
          });
        }
      ).clone();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new GroupsController();
