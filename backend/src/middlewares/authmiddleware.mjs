import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const decoded = jwt.verify(token, JWT_SECRET);
  req.userId = decoded.id;
  next();
};
