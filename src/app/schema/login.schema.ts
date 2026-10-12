import { z } from "zod";

export const loginSchema = z.object({
   email: z.string().min(1, "name is required").pipe(z.email('invalid email')),
    password:z.string().min(6, "password is required at least 6 "),
})


export type loginSchemaType = z.infer<typeof loginSchema> 
