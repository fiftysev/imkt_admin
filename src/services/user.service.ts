import * as bcrypt from "bcrypt";
import { UserDTO } from "../dto/user.dto";
import { User } from "../models/user.model";
import tokenService from "./token.service";

class UserService {
  constructor() {}

  async registration(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) {
    const saltRounds = process.env.saltRounds || 5;
    const hashPassword = await bcrypt.hash(password, +saltRounds);
    const user = await User.create({
      firstName,
      lastName,
      username,
      password: hashPassword,
    });

    const userDto = new UserDTO(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

export default new UserService();
