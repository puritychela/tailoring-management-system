import { checkSchema } from "express-validator";
import { Router } from "express";
import * as trousercontroller from "../controller/trouser.mjs";
import trouserMiddleware from "../middlewares/trousersMiddleware.mjs";
import trouserSchema from "../schemas/trouserSchema.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";
const trousersRouter = Router();
trousersRouter
  .route("/trousers")
  .get(trousercontroller.getAllTrousers) // we pass reference to the fxn getTrouserController
  .post(
    checkSchema(trouserSchema),
    authMiddleware,
    trousercontroller.createTrouser
  );

trousersRouter
  .route("/trousers/:id")
  .put(authMiddleware, trousercontroller.updateTrouser)
  .delete(trouserMiddleware, trousercontroller.deleteTrouser);

export default trousersRouter;
