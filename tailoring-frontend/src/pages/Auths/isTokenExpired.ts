// utils/isTokenExpired.ts
import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  exp: number; // expiry time in seconds
}

const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JWTPayload>(token);
    const currentTime = Date.now() / 1000; // in seconds
    return decoded.exp < currentTime;
  } catch (error) {
    console.error("Invalid token", error);
    return true; // Treat invalid tokens as expired
  }
};

export default isTokenExpired;
