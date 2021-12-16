import { Request, Response, NextFunction } from "express";
import { Group } from "../models/group.model";
import { IGroup } from "../models/interfaces/group.interface";

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

  addOne(req: Request<{}, {}, IGroup>, res: Response, next: NextFunction) {
    const group = new Group({
      ...req.body,
    });

    group.save((err, data) => {
      if (err) {
        return res.status(400).json({
          code: 400,
          message: "Troubles with data was sent",
          err: err.message,
        });
      }
      return res.status(201).json({
        code: 201,
        message: "Group added successfull",
        data: data,
      });
    });
  }

  async updateGroup(req: Request, res: Response, next: NextFunction) {
    const dataForUpdate = req.body.data;
    const id = req.body.id;
    if (!dataForUpdate || !id) {
      return res.status(400).json({
        code: 400,
        message: "Not found data to update or troubles with id",
      });
    }
    try {
      await Group.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            ...dataForUpdate,
          },
        },
        { new: true },
        (err, data) => {
          if (err) {
            return res.status(400).json({
              code: 400,
              message: "Troubles when update some fields",
              error: err,
            });
          }
          return res.status(201).json({
            code: 201,
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
