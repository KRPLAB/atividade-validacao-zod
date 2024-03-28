import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { IsValidRequest } from "../middlewares/isValidRequest.middleware.ts";
import { createProductBodySchema } from "../schemas/isCreateProductBodyValid.schema";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", IsValidRequest.execute({body: createProductBodySchema}),IsProductNameUnique.execute, productsControllers.createProduct);
