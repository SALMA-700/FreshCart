"use client";
import { ArrowLeft, Banknote, Check, CreditCard, LockKeyhole, PackageCheck, ReceiptText, Shield, Truck } from "lucide-react";
import { useState } from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import Link from "next/link";
import { checkOutSchema, checkOutSchemaType } from "@/app/schema/checkOut.schema";
import { checkoutsession, createCashOrder } from "@/CheckOutAction/checkOutsession";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CartType } from "@/Types/cart.types";
// type LoginValues = z.infer<typeof checkOutSchema>;

export default function CheckOut({ cartResponse }: { cartResponse: CartType }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("online");
  const { control, handleSubmit } = useForm<checkOutSchemaType>({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
      postalCode: "",
    },
    resolver: zodResolver(checkOutSchema),
    mode: "all",
  });

  const products = cartResponse.data.products;
  const totalItems = products.reduce((total, item) => total + item.count, 0);
  const subtotal = cartResponse.data.totalCartPrice;

  interface FormField {
    name: "details" | "phone"| "city" |"postalCode";
    type: string;
    placeholder: string;
    autoComplete: string;
  }
  const formFields: FormField[] = [
    {
      name: "details",
      type: "text",
      placeholder: "Enter Your details",
      autoComplete: "details",
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Enter Your phone",
      autoComplete: "phone",
    },
     {
      name: "city",
      type: "text",
      placeholder: "Enter Your city",
      autoComplete: "city",
    },
     {
      name: "postalCode",
      type: "text",
      placeholder: "Enter Your postalCode",
      autoComplete: "postalCode",
    },
  ];
  const handleCheckOut = async (values: checkOutSchemaType) => {
    try {
      setIsLoading(true);

      if (products.length === 0) {
        throw new Error("Your cart is empty or unavailable.");
      }

      if (paymentMethod === "online") {
        const response = await checkoutsession(
          cartResponse.cartId,
          window.location.origin,
          values,
        );
        const checkoutUrl = response.session?.url;
        if (response.status !== "success" || typeof checkoutUrl !== "string") {
          throw new Error(response.message || "Could not start checkout.");
        }
        window.location.assign(checkoutUrl);
      } else {
        const response = await createCashOrder(cartResponse.cartId, values);
        if (response.status !== "success") {
          throw new Error(response.message || "Could not place your order.");
        }
        toast.success(response.message || "Order placed successfully.");
        router.push("/allorders");
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not start checkout.",
      );
    }
    finally {
      setIsLoading(false);
    }
  };
  return (
    <>
    
       <main className="min-h-screen bg-[#F8FAFC] px-5 py-5 sm:px-8 lg:px-10 xl:px-[4%]">
      {/* Breadcrumb */}
      <nav className="mb-7 flex items-center gap-3 text-sm sm:text-base">
        <Link
          href="/"
          className="text-slate-500 transition hover:text-green-600"
        >
          Home
        </Link>

        <span className="text-slate-300">/</span>

        <Link
          href="/cart"
          className="text-slate-500 transition hover:text-green-600"
        >
          Cart
        </Link>

        <span className="text-slate-300">/</span>

        <span className="font-medium text-[#101827]">
          Checkout
        </span>
      </nav>

      {/* Page Header */}
      <div className="mb-9 flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-green-500 to-green-700 text-white shadow-md sm:h-13.5 sm:w-13.5">
              <ReceiptText size={32} strokeWidth={2.5} />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-[#101827] sm:text-3xl lg:text-[34px]">
              Complete Your Order
            </h1>
          </div>

          <p className="mt-3 text-sm text-slate-500 sm:text-lg">
            Review your items and complete your purchase
          </p>
        </div>

        <Link
          href="/cart"
          className="hidden shrink-0 items-center gap-2 text-sm font-medium text-green-600 transition hover:text-green-800 sm:flex sm:text-base"
        >
          <ArrowLeft size={20} />
          Back to Cart
        </Link>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1.85fr)_minmax(360px,0.9fr)]">
        {/* Left Column */}
        <form
          id="checkout-form"
          onSubmit={handleSubmit(handleCheckOut)}
          className="flex min-w-0 flex-col gap-7"
        >
          {/* Shipping Address */}
          {formFields.map((myInput) => (
              <>
                <Controller
                  key={myInput.name}
                  name={myInput.name}
                  control={control}
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
            
          
          {/* Payment Method */}
          <section className="overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm">
            <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-5 text-white sm:px-7">
              <h2 className="flex items-center gap-3 text-lg font-bold sm:text-xl">
                <CreditCard size={23} fill="currentColor" />
                Payment Method
              </h2>

              <p className="mt-1 text-sm text-green-50 sm:text-base">
                Choose how you&apos;d like to pay
              </p>
            </div>

            <div className="space-y-4 p-5 sm:p-7">
              {/* Cash on Delivery */}
              <label
                className={`flex cursor-pointer items-center gap-4 rounded-[15px] border-2 p-4 transition sm:p-5 ${
                  paymentMethod === "cash"
                    ? "border-green-500 bg-green-50/60"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                  className="sr-only"
                />

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-gray-100 text-slate-400">
                  <Banknote size={27} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-slate-900">
                    Cash on Delivery
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    Pay when your order arrives at your doorstep
                  </p>
                </div>

                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                    paymentMethod === "cash"
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-gray-200"
                  }`}
                >
                  {paymentMethod === "cash" && <Check size={17} />}
                </div>
              </label>

              {/* Pay Online */}
              <label
                className={`flex cursor-pointer items-center gap-4 rounded-[15px] border-2 p-4 transition sm:p-5 ${
                  paymentMethod === "online"
                    ? "border-green-500 bg-linear-to-r from-green-50 to-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                  className="sr-only"
                />

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] bg-linear-to-br from-emerald-400 to-blue-600 text-white shadow-md">
                  <CreditCard size={27} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-bold ${
                      paymentMethod === "online"
                        ? "text-green-700"
                        : "text-slate-900"
                    }`}
                  >
                    Pay Online
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    Secure payment with Credit/Debit Card via Stripe
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-[10px] font-extrabold italic text-blue-700">
                    <span className="rounded bg-white px-1.5 py-0.5 shadow-sm">
                      VISA
                    </span>
                    <span className="rounded bg-white px-1.5 py-0.5 shadow-sm">
                      MC
                    </span>
                    <span className="rounded bg-white px-1.5 py-0.5 shadow-sm">
                      AMEX
                    </span>
                  </div>
                </div>

                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                    paymentMethod === "online"
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-gray-200"
                  }`}
                >
                  {paymentMethod === "online" && <Check size={17} />}
                </div>
              </label>

              {/* Security Notice */}
              <div className="flex items-center gap-3 rounded-[15px] border border-green-100 bg-emerald-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Shield size={21} />
                </div>

                <div>
                  <p className="text-sm font-medium text-green-800">
                    Secure &amp; Encrypted
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-green-700">
                    Your payment information is protected during checkout.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile Submit Button */}
          <button
            type="submit"
            disabled={isLoading || products.length === 0}
            className="flex h-15 w-full items-center justify-center gap-3 rounded-[14px] bg-linear-to-r from-green-600 to-green-700 font-bold text-white shadow-lg shadow-green-600/15 transition hover:from-green-700 hover:to-green-800 xl:hidden"
          >
            <Shield size={20} />
            {isLoading
              ? "Processing..."
              : paymentMethod === "cash"
                ? "Place Order"
                : "Proceed to Payment"}
          </button>
        </form>

        {/* Right Column: Order Summary */}
        <aside className="overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm xl:sticky xl:top-6">
          {/* Summary Header */}
          <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-5 text-white">
            <h2 className="flex items-center gap-3 text-lg font-bold sm:text-xl">
              <LockKeyhole size={22} fill="currentColor" />
              Order Summary
            </h2>

            <p className="mt-1 text-sm text-green-50">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="p-5 sm:p-6">
            <div className="mb-5 max-h-65 space-y-3 overflow-y-auto pr-1">
              {products.map((item) => (
                <div
                  key={item.product._id}
                  className="flex items-center gap-3 rounded-[15px] bg-gray-50 p-3"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-2">
                    <Image width={500} height={500}
                      src={item.product.imageCover}
                      alt={item.product.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-800">
                      {item.product.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.count} × {item.price.toLocaleString()} EGP
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-bold text-slate-800">
                    {(item.price * item.count).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            {/* Prices */}
            <div className="space-y-4 border-t border-gray-100 pt-5">
              <div className="flex items-center justify-between gap-3 text-slate-600">
                <span>Subtotal</span>
                <span className="text-right">
                  {subtotal.toLocaleString()} EGP
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 text-slate-600">
                <span className="flex items-center gap-2">
                  <Truck size={19} className="text-slate-400" />
                  Shipping
                </span>

                <span className="font-semibold text-green-600">
                  FREE
                </span>
              </div>

              <div className="flex items-baseline justify-between gap-3 border-t border-gray-100 pt-4">
                <span className="text-lg font-bold text-slate-900">
                  Total
                </span>

                <span className="text-right text-2xl font-bold text-green-600">
                  {subtotal.toLocaleString()}
                  <span className="ml-1 text-sm font-normal text-slate-500">
                    EGP
                  </span>
                </span>
              </div>
            </div>

            {/* Desktop Submit Button */}
            <button
              type="submit"
              disabled={isLoading || products.length === 0}
              onClick={() => {
                const form = document.querySelector<HTMLFormElement>(
                  "#checkout-form"
                );
                form?.requestSubmit();
              }}
              className="mt-7 hidden h-15.5 w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-green-600 to-green-700 font-bold text-white shadow-lg shadow-green-600/15 transition hover:from-green-700 hover:to-green-800 xl:flex"
            >
              <Shield size={20} />
              {isLoading
                ? "Processing..."
                : paymentMethod === "cash"
                  ? "Place Order"
                  : "Proceed to Payment"}
            </button>

            {/* Trust Badges */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 border-t border-gray-100 pt-5 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Shield size={15} className="text-green-500" />
                Secure
              </span>

              <span className="hidden h-4 w-px bg-gray-200 sm:block" />

              <span className="flex items-center gap-1.5">
                <PackageCheck size={15} className="text-blue-500" />
                Fast Delivery
              </span>

              <span className="hidden h-4 w-px bg-gray-200 sm:block" />

              <span className="flex items-center gap-1.5">
                <Truck size={15} className="text-orange-500" />
                Easy Returns
              </span>
            </div>
          </div>
        </aside>
      </div>
    </main>
    </>
  );
}
