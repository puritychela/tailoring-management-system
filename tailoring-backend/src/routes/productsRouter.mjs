import { Router } from "express";
import * as productsController from "../controllers/productsController.mjs";
import { checkSchema } from "express-validator";
import {
  productSchema,
  fetchingProductsByQueryParams,
} from "../schemas/productsSchema.mjs";
import { authMiddleware } from "../middlewares/authmiddleware.mjs";
const productsRouter = Router();

productsRouter
  .route("/products")
  .get(
    checkSchema(fetchingProductsByQueryParams),
    productsController.getAllProducts
  )
  .post(
    checkSchema(productSchema),
    // authMiddleware,
    productsController.createProduct
  );

productsRouter
  .route("/products/:id")
  .put(checkSchema(productSchema), productsController.updateProducts)
  .delete(productsController.deleteProduct);

export default productsRouter;
