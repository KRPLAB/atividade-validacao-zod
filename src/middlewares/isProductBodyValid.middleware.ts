import { NextFunction, Request, Response } from "express";
import { createProductBodySchema } from "../schemas/isCreateProductBodyValid.schema";

export class IsProductBodyValid {
    static execute(req: Request, res: Response, next: NextFunction) {
        try {
            createProductBodySchema.parse(req.body);
            next();
        } catch (error) {
            return res.status(409).json({ message: "User body is not valid" });
        }
    }
}