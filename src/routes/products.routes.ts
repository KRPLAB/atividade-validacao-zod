import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { IsProductBodyValid } from "../middlewares/isProductBodyValid.middleware";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", IsProductBodyValid.execute,IsProductNameUnique.execute, productsControllers.createProduct);
