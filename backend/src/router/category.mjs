import { Router } from "express";
import * as categoryController from "../controller/category.mjs";
import trouserMiddleware from "../middlewares/trousersMiddleware.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";

const categoryRouter = Router();

categoryRouter
  .route("/categories")
  .post(categoryController.addCategory)
  .get(categoryController.getAllCategories);

categoryRouter
  .route("/categories/:id")
  .delete(trouserMiddleware, authMiddleware, categoryController.deleteCategory);

export default categoryRouter;
