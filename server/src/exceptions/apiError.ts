export class ApiError extends Error {
  status: number;
  field: string;

  constructor(status: number, message: string, field: string = "") {
    super(message);
    this.status = status;
    this.field = field;
    Object.setPrototypeOf(this, new.target.prototype);
  }

  static NotFound() {
    return new ApiError(404, "Data was not found!");
  }

  static UnauthorizedError() {
    return new ApiError(401, "User is not authorized");
  }

  static BadRequest(message: string, field: string = "") {
    return new ApiError(400, message, field);
  }
}
