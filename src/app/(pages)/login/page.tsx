"use client";
import { Loader, LogIn } from "lucide-react";
import { useState } from "react";
import { FaLock, FaStar, FaUsers } from "react-icons/fa";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { loginSchemaType, loginSchema } from "@/app/schema/login.schema";
import Link from "next/link";
import { FaTruck, FaShieldAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { signIn } from "next-auth/react";
type LoginValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<loginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  interface FormField {
    name: "email" | "password";
    type: string;
    placeholder: string;
    autoComplete: string;
  }
  const formFields: FormField[] = [
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
  ];
  const handleLogin = async (values: loginSchemaType) => {
    setIsLoading(true);
    try {
    const response= await signIn("credentials",{
        email:values.email,
        password:values.password,
        redirect:false,
        callbackUrl:"/"
      })
      if (response?.ok) {
        toast.success("Login Successfully", {
          position: "top-right",
          delay: 2000,
          autoClose: 1500,
        });
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error(response?.error || "SomeThing Went Wrong", {
          position: "top-right",
          delay: 2000,
          autoClose: 1500,
        });
      }
    } catch (error) {
      toast.error("SomeThing Went Wrong", {
        position: "top-right",
        delay: 2000,
        autoClose: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="signup my-20 w-[95%] mx-auto flex gap-5 items-center">
        <div className="left w-1/2">
          <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-sm">
              <Image
                src="/2e5810ff3e-e750761ebcd4ae5907db.png"
                alt="FreshCart"
                width={500}
                height={500}
                className="w-full h-85 object-cover"
                priority
              />
            </div>
            <h1 className="mt-8 text-center text-2xl  font-bold text-slate-900 leading-snug">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h1>
            <p className="mt-4 text-center text-[#4A5565] text-md leading-relaxed">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-slate-700">
              <div className="flex items-center gap-2">
                <FaTruck className="text-green-600" size={15} />
                <span className="font-medium text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-green-600" size={15} />
                <span className="font-medium text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-green-600" size={15} />
                <span className="font-medium text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right w-1/2 shadow-2xl rounded-2xl p-6">
          <h2 className="text-center mt-4 mb-1 text-[#364153] font-bold text-3xl">
            <span className="text-green-600">Fresh</span>Cart
          </h2>
          <h3 className="text-center mt-4 mb-1 text-[#364153] font-bold text-2xl">
            Welcome Back!
          </h3>
          <p className="text-center  text-[#364153]  text-lg">
            Sign in to continue your fresh shopping experience
          </p>
          <form onSubmit={form.handleSubmit(handleLogin)} id="">
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
              <Label htmlFor="terms">Keep me signed in</Label>
            </div>
            <Button
              className="w-full text-white my-5 bg-green-500 py-5"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="fill-white animate-spin" />
              ) : (
                <>
                  {" "}
                  Sign In <LogIn />
                </>
              )}
            </Button>
            <hr className="text-sm text-[#d8d8d8] my-4" />
            <p className="text-center my-2 font-semibold text-[#6A7282]">
              New to FreshCart?{" "}
              <Link href="/register" className="text-green-600">
                Create an account
              </Link>{" "}
            </p>
            <div className="flex my-4 w-[65%] mx-auto gap-4 items-center">
              <div className="flex gap-2 items-center text-[#6A7282]">
                <FaLock className="text-sm" />{" "}
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex gap-2 items-center text-[#6A7282]">
                <FaUsers className="text-sm" />{" "}
                <span className="text-sm">50K+ Users</span>
              </div>
              <div className="flex gap-2 items-center text-[#6A7282]">
                <FaStar className="text-sm" />{" "}
                <span className="text-sm">4.9 Rating</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
