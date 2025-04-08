import { checkSchema } from "express-validator";
import { Router } from "express";
import * as dressController from "../controller/dress.mjs";
import dressMiddleware from "../middlewares/dressesMiddleware.mjs";
import dressSchema from "../schemas/dressSchema.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";

const dressesRouter = Router();
dressesRouter
  .route("/dresses")
  .get(authMiddleware, dressController.getAllDresses)
  .post(authMiddleware, checkSchema(dressSchema), dressController.createDress);

dressesRouter
  .route("/dresses/:id")
  .put(authMiddleware, dressController.updateDress)
  .delete(dressMiddleware, authMiddleware, dressController.deleteDress);

export default dressesRouter;
