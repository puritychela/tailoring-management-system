import { checkSchema } from "express-validator";
import { Router } from "express";
import * as shirtController from "../controllers/shirtsController.mjs";
import shirtMiddleware from "../middlewares/shirtsMiddleware.mjs";
import shirtSchema from "../schemas/shirtsSchema.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";

const shirtRouter = Router();
shirtRouter
  .route("/shirts")
  .get(authMiddleware, shirtController.getAllShirts)
  .post(checkSchema(shirtSchema), authMiddleware, shirtController.createShirt);

shirtRouter.route("/shirts/:id");
// .delete(shirtMiddleware, shirtController.deleteShirtsController);

export default shirtRouter;
