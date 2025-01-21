import { Router } from "express";
import skirtRouter from "./skirtRoutes.mjs";
import userRouter from "./usersRoutes.mjs";
import shirtRouter from "./shirtsRoutes.mjs";
import dressesRouter from "./dressesRoutes.mjs";
import trousersRouter from "./trouserRoutes.mjs";
import productsRouter from "./productsRouter.mjs";
import categoryRouter from "./categoryRouter.mjs";

const router = Router();

router.use(userRouter);
router.use(skirtRouter);
router.use(shirtRouter);
router.use(dressesRouter);
router.use(trousersRouter);
router.use(categoryRouter);
router.use(productsRouter);

export default router;
