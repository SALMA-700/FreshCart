import { z } from "zod";

export const checkOutSchema = z.object({
   details: z.string().min(1, "details is required"),
    phone:z.string().min(1, "phone is required  ").regex(/^01[0125][0-9]{8}$/, "invalid egyption phone number"),
    city: z.string().min(1, "city is required"),
    postalCode: z.string().min(1, "postalCode is required"),
})


export type checkOutSchemaType = z.infer<typeof checkOutSchema> 
