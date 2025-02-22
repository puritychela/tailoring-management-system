import { checkSchema } from "express-validator";
import { Router } from "express";
import * as trousercontroller from "../controllers/trousersController.mjs";
import trouserMiddleware from "../middlewares/trousersMiddleware.mjs";
import trouserSchema from "../schemas/trouserSchema.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";
const trousersRouter = Router();
trousersRouter
  .route("/trousers")
  .get(authMiddleware, trousercontroller.getAllTrousers) // we pass reference to the fxn getTrouserController
  .post(
    checkSchema(trouserSchema),
    authMiddleware,
    trousercontroller.createTrouser
  );

trousersRouter.route("/trouser/:id");
// .delete(trouserMiddleware, trousercontroller.deleteTrousersController);

export default trousersRouter;
