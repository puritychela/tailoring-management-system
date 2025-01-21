import { checkSchema } from "express-validator";
import * as categoryController from "../controllers/categorycontroller.mjs";
import { Router } from "express";
import categorySchema from "../schemas/categorySchema.mjs";
import categoryMiddleware from "../middlewares/categoryMiddleware.mjs";

const categoryRouter = Router();

categoryRouter
  .route("/categories")
  .get(categoryController.getAllCategories)
  .post(checkSchema(categorySchema), categoryController.createCategory);

categoryRouter
  .route("/category/:id")
  .put(
    checkSchema(categorySchema),
    categoryMiddleware,
    categoryController.updatecategory
  );

export default categoryRouter;
