import { checkSchema } from "express-validator";
import { Router } from "express";
import * as userControllers from "../controllers/userControllers.mjs";
import userSchema from "../schemas/userSchemas.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";

const userRouter = Router();
userRouter
  .route("/auth/register")
  .get(authMiddleware, userControllers.getAllUsers)
  .post(checkSchema(userSchema), userControllers.createUser);

userRouter.post("/auth/login", userControllers.loginUser);

userRouter.route("/users/:id");
// .delete(userMiddleware, userControllers.deleteUserController);

export default userRouter;
