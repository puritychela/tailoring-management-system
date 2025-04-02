import Router from "express";
import * as productcontroller from "../controller/products.mjs";

const productRouter = Router();

productRouter.route("/products").get(productcontroller.getAllProducts).post(
  // checkSchema(productSchema),
  /*authMiddleware,*/ productcontroller.addProduct
);

productRouter
  .route("/products/:id")
  .put(
    // checkSchema(productSchema),
    productcontroller.updateProducts
  )
  .delete(productcontroller.deleteProduct);

productRouter.post("/products", productcontroller.addProduct);

productRouter.get("/products", productcontroller.getAllProducts);

export default productRouter;
