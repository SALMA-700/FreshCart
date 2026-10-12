"use client";
import { Loader, Star, UserRoundPlus } from "lucide-react";
import React, { useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from "@/app/schema/register.schema";
import { z } from "zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type RegisterValues = z.infer<typeof registerSchema>;

export default function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const form = useForm<registerSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
    mode:"all"
  });

  interface FormField{
    name:"name"|"email" | "password"|"rePassword"|"phone",
    type:string,
    placeholder:string,
    autoComplete:string,
  }
  const formFields : FormField[] = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter Your Name",
      autoComplete: "name",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter Your Email",
      autoComplete: "email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter Your Password",
      autoComplete: "new-password",
    },
    {
      name: "rePassword",
      type: "password",
      placeholder: "Enter Your RePassword",
      autoComplete: "new-password",
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Enter Your Phone Number",
      autoComplete: "phone",
    },
  ];
  const  handleRegister = async(values:registerSchemaType) => {
    setIsLoading(true)
    try {
      const response =await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`,{
        method:"POST",
        body:JSON.stringify(values),
        headers:{"Content-type":"application/json"}
      }

      )
      const data = await response.json()
      if (data.message=="success") {
        toast.success("Register Successfully" , {position:"top-right",delay:2000,autoClose:1500})
        router.push("/login")
      }
      else{
        toast.error(data.message || 'SomeThing Went Wrong' , {position:"top-right",delay:2000,autoClose:1500})
      }

      

    } catch (error) {
      toast.error( 'SomeThing Went Wrong' , {position:"top-right",delay:2000,autoClose:1500})
    }
    finally{
      setIsLoading(false)
    }
  };
  return (
    <>
      <div className="signup my-20 w-[95%] mx-auto flex gap-5 items-center">
        <div className="left w-1/2">
          <h2 className="text-[#364153] font-bold text-4xl">
            Welcome to <span className="text-[#16A34A]">FreshCart</span>{" "}
          </h2>
          <p className="my-5 font-semibold text-[#364153]">
            Join thousands of happy customers who enjoy fresh groceries
            delivered right to their doorstep.
          </p>
          <ul className="">
            <li className="flex items-center gap-4">
              <div className="icon flex items-center rounded-full justify-center w-12 h-12 bg-[#BBF7D0] text-[#16A34A]">
                <Star size={20} className="fill-[#16A34A]" />
              </div>
              <div className="data">
                <h3 className="font-bold text-xl">Premium Quality</h3>
                <p>Premium quality products sourced from trusted suppliers.</p>
              </div>
            </li>
            <li className="flex my-6 items-center gap-4">
              <div className="icon flex items-center rounded-full justify-center w-12 h-12 bg-[#BBF7D0] text-[#16A34A]">
                <FaTruckFast size={20} className="fill-[#16A34A]" />
              </div>
              <div className="data">
                <h3 className="font-bold text-xl">Premium Quality</h3>
                <p>Premium quality products sourced from trusted suppliers.</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="icon flex items-center rounded-full justify-center w-12 h-12 bg-[#BBF7D0] text-[#16A34A]">
                <FaShieldAlt size={20} />
              </div>
              <div className="data">
                <h3 className="font-bold text-xl">Premium Quality</h3>
                <p>Premium quality products sourced from trusted suppliers.</p>
              </div>
            </li>
          </ul>
          <div className="comment-card border border-gray-200 p-4 rounded-xl shadow-2xl mt-5">
            <div className="user-data mb-3 flex items-center gap-4">
              <div className="avatar">
                <Avatar className="size-13 border-0 after:hidden">
                  <AvatarImage
                    src="/review-author.webp"
                    alt="Sarah Johnson"
                    className="border-0"
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
              </div>
              <div className="data">
                <h5 className="font-semibold text-[#364153]">Sarah Johnson</h5>
                <div className="stars flex gap-1">
                  <Star size={20} className="fill-yellow-300 text-yellow-300" />
                  <Star size={20} className="fill-yellow-300 text-yellow-300" />
                  <Star size={20} className="fill-yellow-300 text-yellow-300" />
                  <Star size={20} className="fill-yellow-300 text-yellow-300" />
                  <Star size={20} className="fill-yellow-300 text-yellow-300" />
                </div>
              </div>
            </div>
            <div className="comment">
              <p className="text-[#4A5574] italic font-medium">
                &quot;FreshCart has transformed my shopping experience. The quality
                of the products is outstanding, and the delivery is always on
                time. Highly recommend!&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="right w-1/2 shadow-2xl rounded-2xl p-6">
          <h2 className="text-center mt-4 mb-1 text-[#364153] font-bold text-4xl">
            Create Your Account
          </h2>
          <p className="text-center  text-[#364153]  text-lg">
            Start your fresh journey with us today
          </p>
          <form onSubmit={form.handleSubmit(handleRegister)} id="">
            {formFields.map((myInput) => (
              <>
                <Controller
                  key={myInput.name}
                  name={myInput.name}
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="my-3" data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor={field.name}
                        className="text-[#364153]"
                      >
                        {myInput.name}*
                      </FieldLabel>
                      <Input
                        className={`border-gray-200 py-5 ${
                          fieldState.invalid
                            ? "border-red-500! ring-3! ring-red-500!"
                            : ""
                        }`}
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder={myInput.placeholder}
                        autoComplete={myInput.autoComplete}
                        type={myInput.type}
                      />
                      {fieldState.invalid && (
                        <FieldError
                          className="text-red-500!"
                          errors={[fieldState.error]}
                        />
                      )}
                    </Field>
                  )}
                />
              </>
            ))}
            <div className="flex gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">
                I agree to the Terms of Service and Privacy Policy *
              </Label>
            </div>
            <Button
              className="w-full text-white my-5 bg-green-500 py-5"
              type="submit" disabled={isLoading}
            >
              {isLoading? <Loader className="fill-white animate-spin" />: <> Sign Up <UserRoundPlus /></>}
            </Button>
            <p></p>
          </form>
        </div>
      </div>
    </>
  );
}
