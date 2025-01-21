import { checkSchema } from "express-validator";
import { Router } from "express";
import * as dressController from "../controllers/dressController.mjs";
import dressMiddleware from "../middlewares/dressesMiddleware.mjs";
import dressSchema from "../schemas/dressSchema.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";

const dressesRouter = Router();
dressesRouter
  .route("/dresses")
  .get(authMiddleware, dressController.getAllDresses)
  .post(checkSchema(dressSchema), dressController.createDress);

dressesRouter.route("/dresses/:id");
// .delete(dressMiddleware, dressController.deleteDressController);

export default dressesRouter;
