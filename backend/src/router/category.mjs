import { Router } from "express";
import * as categoryController from "../controller/category.mjs";

const categoryRouter = Router();

categoryRouter.post("/categories", categoryController.addCategory);

categoryRouter.get("/categories", categoryController.getAllCategories);

export default categoryRouter;
