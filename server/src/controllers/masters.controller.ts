import { Request, Response, NextFunction } from "express";
import { IMaster } from "../models/interfaces/master.interface";
import { Master } from "../models/master.model";

class MastersController {
  constructor() {}

  getAll(req: Request, res: Response, next: NextFunction) {
    Master.find().exec((err, data) => {
      if (err) {
        return res.status(500).json({
          message: "Error when get all masters",
          error: err.message,
        });
      }
      return res.status(200).json(data);
    });
  }

  getById(req: Request, res: Response, next: NextFunction) {
    if (req.params.id) {
      Master.findById(req.params.id as string).exec((err, data) => {
        if (err) {
          return res.status(500).json({
            message: "Error when get master by id",
            error: err.message,
          });
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
      Master.deleteOne({ _id: id }).exec((err, data) => {
        if (err) {
          return res.status(500).json({
            message: "Error when delete master by id",
            error: err.message,
          });
        }
        return res.status(200).json({
          message: "Succesfully deleted",
          deletedGroup: data,
        });
      });
    }
  }

  addOne(req: Request<{}, {}, IMaster>, res: Response, next: NextFunction) {
    const master = new Master({
      ...req.body,
    });

    master.save((err, data) => {
      if (err) {
        return res.status(400).json({
          message: "Troubles with data was sent",
          err: err.message,
        });
      }
      return res.status(201).json({
        code: 201,
        message: "Master added successfull",
        data,
      });
    });
  }

  async updateMaster(
    req: Request<{}, {}, IMaster>,
    res: Response,
    next: NextFunction
  ) {
    if (!req.body) {
      return res.status(400).json({
        message: "Bad request with empty body",
      });
    }
    try {
      await Master.findOneAndUpdate(
        { _id: req.body._id },
        {
          $set: {
            ...req.body,
          },
        },
        { new: true },
        (err, data) => {
          if (err) {
            return res.status(400).json({
              message: "Troubles when update some fields",
              error: err.message,
            });
          }
          return res.status(201).json({
            message: "Successfully update master data",
            data,
          });
        }
      ).clone();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new MastersController();
