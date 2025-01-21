import { Router } from "express";
import * as productsController from "../controllers/productsController.mjs";
import { checkSchema } from "express-validator";
import productSchema from "../schemas/productsSchema.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";
const productsRouter = Router();

productsRouter
  .route("/products")
  .get(productsController.getAllProducts)
  .post(
    checkSchema(productSchema),
    authMiddleware,
    productsController.createProduct
  );

export default productsRouter;
