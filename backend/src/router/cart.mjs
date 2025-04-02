import { Router } from "express";
import * as CartController from "../controller/cart.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";

const cartRouter = Router();

cartRouter.route("/cart/add").post(authMiddleware, CartController.createCart);

cartRouter
  .route("/cart/:userId")
  .get(authMiddleware, CartController.getAllCart);

export default cartRouter;
