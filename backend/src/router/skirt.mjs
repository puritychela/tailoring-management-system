import { checkSchema } from "express-validator";
import { Router } from "express";
import * as skirtController from "../controller/skirt.mjs";
import skirtMiddleware from "../middlewares/skirtMiddleware.mjs";
import skirtSchema from "../schemas/skirtSchema.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";

const skirtRouter = Router();
skirtRouter
  .route("/skirts")
  .get(skirtController.getAllSkirts)
  .post(checkSchema(skirtSchema), authMiddleware, skirtController.createSkirt);

// skirtRouter.route("/skirts/:id").delete(skirtMiddleware, skirtController.deleteskirtsController);

export default skirtRouter;
