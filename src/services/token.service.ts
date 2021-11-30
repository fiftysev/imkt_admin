import * as jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";
import { devNull } from "os";

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

  public validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, this.accessSecret) as JwtPayload;
      return userData;
    } catch (e) {
      return null;
    }
  }

  public validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, this.refreshSecret) as JwtPayload;
      return userData;
    } catch (e) {
      return null;
    }
  }

  async removeToken(token: string) {
    const tokenData = await Token.deleteOne({ refreshToken: token });
    return tokenData;
  }

  async findToken(token: string) {
    const tokenData = await Token.findOne({ refreshToken: token });
    return tokenData;
  }
}

export default new TokenService();
