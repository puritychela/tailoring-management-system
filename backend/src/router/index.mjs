import { Router } from "express";
import categoryRouter from "./category.mjs";
import productRouter from "./products.mjs";
import userRouter from "./users.mjs";
import skirtRouter from "./skirt.mjs";
import shirtRouter from "./shirt.mjs";
import dressesRouter from "./dress.mjs";
import trousersRouter from "./trouser.mjs";
import cartRouter from "./cart.mjs";

const router = Router();

router.use(categoryRouter);
router.use(productRouter);
router.use(userRouter);
router.use(skirtRouter);
router.use(shirtRouter);
router.use(dressesRouter);
router.use(trousersRouter);
router.use(cartRouter);

export default router;
