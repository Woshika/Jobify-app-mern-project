import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  console.log("Token from cookies:", token); // Debug statement

  if (!token) {
    console.error("No token found"); // Debug statement
    throw new UnauthenticatedError("Authentication invalid");
  }

  try {
    const { userId, role } = verifyJWT(token);
    console.log("Verified user:", { userId, role }); // Debug statement
    req.user = { userId, role };
    next();
  } catch (error) {
    console.error("JWT verification error:", error); // Debug statement
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
