import { Request, Response, NextFunction } from "express";
import { IMaster } from "../models/interfaces/master.interface";
import { Master } from "../models/master.model";

class MastersController {
  constructor() {}

  getAll(req: Request, res: Response, next: NextFunction) {
    Master.find().exec((err, data) => {
      if (err) {
        return res.status(500).json(err.message);
      }
      return res.status(200).json(data);
    });
  }

  getById(req: Request, res: Response, next: NextFunction) {
    if (req.params.id) {
      Master.findById(req.params.id as string).exec((err, data) => {
        if (err) {
          return res.status(500).json(err.message);
        }
        return res.status(200).json(data);
      });
    } else {
      return res.status(400).json("Invalid request");
    }
  }

  deleteOne(req: Request, res: Response, next: NextFunction) {
    if (req.params.id) {
      const id = req.params.id as string;
      Master.deleteOne({ _id: id }).exec((err, data) => {
        if (err) {
          return res.status(500).json(err.message);
        }
        return res.status(200).json(data);
      });
    }
  }

  addOne(req: Request<{}, {}, IMaster>, res: Response, next: NextFunction) {
    const master = new Master({
      ...req.body,
    });

    master.save((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      return res.status(201).json(data);
    });
  }

  async updateMaster(
    req: Request<{}, {}, IMaster>,
    res: Response,
    next: NextFunction
  ) {
    if (!req.body) {
      return res.status(400).json("Bad request with empty body");
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
            return res.status(400).json(err.message);
          }
          return res.status(201).json(data);
        }
      ).clone();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new MastersController();
