import * as jwt from "jsonwebtoken";
import { Types } from "mongoose";

import { Token } from "../models/token.model";

class TokenService {
  accessSecret: string;
  refreshSecret: string;
  accessExpiresTime: string;
  refreshExpiresTime: string;

  constructor() {
    this.accessSecret = process.env.JWT_ACCESS_SECRET || "supersecretstring";
    this.refreshSecret = process.env.JWT_REFRESH_SECRET || "supersecretstring2";
    this.accessExpiresTime = process.env.JWT_ACCESS_EXPIRES || "2h";
    this.refreshExpiresTime = process.env.JWT_REFRESH_EXPIRES || "4h";
  }

  public generateTokens(payload: {}) {
    const accessToken = jwt.sign(payload, this.accessSecret, {
      expiresIn: this.accessExpiresTime,
    });
    const refreshToken = jwt.sign(payload, this.refreshSecret, {
      expiresIn: this.refreshExpiresTime,
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userID: Types.ObjectId, refreshToken: string) {
    const candidateTokenData = await Token.findOne({ user: userID });
    if (candidateTokenData) {
      candidateTokenData.refreshToken = refreshToken;
      return candidateTokenData.save();
    }

    const token = await Token.create({ user: userID, refreshToken });
    return token;
  }
}

export default new TokenService();
