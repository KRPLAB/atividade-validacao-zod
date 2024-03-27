import { z } from "zod";

export const createProductBodySchema = z.object({
    name: z.string().min(2),
    description: z.string().min(20).max(250),
    category: z.string().optional(),
    price: z.number().min(0.01),
});