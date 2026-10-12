import { z } from "zod";

export const registerSchema = z.object({
    name: z
    .string()
    .min(3, "name must be at least 3 charecters")
    .max(13, "name must be at maximmum 13 charcters")
    .min(1, "name is required"),
    email: z.string().min(1, "name is required").pipe(z.email('invalid email')),
    password:z.string().min(6, "password is required at least 6 "),
    rePassword:z.string().min(6, "rePassword is required at least 6"),
    phone:z.string().min(1, "phone is required").regex(/^01[0125][0-9]{8}$/,'phone number must be an egyptian number'),
}).refine((object)=>object.password===object.rePassword,{
    path:['rePassword'],
    error:'password and repassword must be same'
});


export type registerSchemaType = z.infer<typeof registerSchema> 
