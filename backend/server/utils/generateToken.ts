import jwt from "jsonwebtoken";
import dotenv from "dotenv";
 
dotenv.config();
 
const JWT_SECRET = process.env.JWT_SECRET;
 
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not defined");
}
 
// Generate a JWT (JSON Web Token) for a given user ID
export const generateToken = (userId: string): string => {
  // Use a simple approach with just the necessary parameters
  // Using 86400 seconds = 1 day for expiration
  return jwt.sign(
    { id: userId },
    JWT_SECRET,
    { expiresIn: 86400 } // 1 day in seconds
  );
};
