import * as bcrypt from "bcrypt";
import { UserDTO } from "../dto/user.dto";
import { ApiError } from "../exceptions/apiError";
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
    const candidate = await User.findOne({ username });
    if (candidate) {
      throw ApiError.BadRequest(`User ${username} is already exist`);
    }

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

  async login(username: string, password: string) {
    const user = await User.findOne({ username });

    if (!user) {
      throw ApiError.BadRequest(`User ${username} is not found`);
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) {
      throw ApiError.BadRequest("Incorrect Password!");
    }
    const userDto = new UserDTO(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

export default new UserService();
