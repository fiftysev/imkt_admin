import * as bcrypt from "bcrypt";
import { UserDTO } from "../dto/user.dto";
import { ApiError } from "../exceptions/apiError";
import { AuthUser } from "../models/user.model";
import tokenService from "./token.service";

class UserService {
  constructor() {}

  async registration(
    firstName: string,
    lastName: string,
    username: string,
    password: string
  ) {
    const candidate = await AuthUser.findOne({ username });
    if (candidate) {
      throw ApiError.BadRequest(`User ${username} is already exist`);
    }

    const saltRounds = process.env.saltRounds || 5;
    const hashPassword = await bcrypt.hash(password, +saltRounds);
    const user = await AuthUser.create({
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
    const user = await AuthUser.findOne({ username });

    if (!user) {
      throw ApiError.BadRequest(`User ${username} is not found`, "username");
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) {
      throw ApiError.BadRequest("Incorrect Password!", "password");
    }
    const userDto = new UserDTO(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(token: string) {
    const tokenData = await tokenService.removeToken(token);
    return tokenData;
  }

  async refresh(token: string) {
    if (!token) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(token);
    const fetchedToken = await tokenService.findToken(token);
    if (!userData || !fetchedToken) {
      throw ApiError.UnauthorizedError();
    }

    const user = await AuthUser.findById(userData.id);
    const userDto = new UserDTO(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async getUsersList() {
    const users = await AuthUser.find();
    return users;
  }
}

export default new UserService();
