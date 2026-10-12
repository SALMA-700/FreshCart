import CartItem from "@/app/_components/CartItem/CartItem";
import CheckOutBtn from "@/app/_components/CheckOutBtn/CheckOutBtn";
import ClearItems from "@/app/_components/ClearItems/ClearItems";
import EmptyCart from "@/app/_components/EmptyCart/EmptyCart";
import { getLoggedUserCart } from "@/cartAction/getLoggedUserCart.Action"
import { CartType } from "@/Types/cart.types";
import {
  ArrowLeft,
  ShoppingCart,
  
} from "lucide-react";
import Link from "next/link";

export default async function Cart() {
  const response: CartType = await getLoggedUserCart();
  
  const itemCount = response.data.products.reduce((total, item) => total + item.count, 0);
  
  return (
    <>
    <main className="min-h-screen bg-[#F8FAFC] px-6 py-5 lg:px-8 xl:px-10">
    { response.data.products.length? <>
    {/* ================= Breadcrumb ================= */}
      <div className="mb-7 flex items-center gap-3 ">
       <Link href='/'><span className="text-[#64748B] hover:cursor-pointer hover:text-[#07152B]">
          Home
        </span></Link> 
        <span className="text-[#64748B]">
          /
        </span>
        <span className="font-medium text-[#07152B]">
          Shopping Cart
        </span>
      </div>
      {/* ================= Page Header ================= */}
      <div className="mb-12">
        <div className="flex items-center gap-5">

          <div className="flex h-12.5 w-12.5  items-center justify-center rounded-[10px] bg-[#16A34A] text-white">
            <ShoppingCart
              size={25}
              strokeWidth={2.5}
            />
          </div>

          <h1 className="text-[30px] font-bold tracking-tight text-[#07152B] max-md:text-[20px] max-sm:text-[18px]">
            Shopping Cart
          </h1>

        </div>
        <p className="mt-4  text-[#64748B] max-md:text-[20px]">
          You have{" "}
          <span className="font-semibold text-[#16A34A]">
            {itemCount}
          </span>{" "}
          items in your cart
        </p>
      </div>
      {/* ================= Main Content ================= */}
      <div className="grid grid-cols-[minmax(0,2fr)_minmax(360px,0.95fr)] items-start gap-12 xl:gap-14 lg:max-xl:grid-cols-[minmax(0,1.7fr)_minmax(330px,0.9fr)] max-lg:grid-cols-1">

        {/* ================= Cart Items ================= */}
        <section className="flex min-w-0 flex-col gap-6">

          <CartItem response={response} />

          {/* ================= Bottom Actions ================= */}
          <div className="mt-2 border-t border-gray-200 pt-8">

            <div className="flex items-center justify-between gap-5 max-sm:flex-col max-sm:items-start">

              <Link
                href="/products"
                className="flex items-center gap-2  font-medium text-[#16A34A] transition hover:text-green-700"
              >
                <ArrowLeft size={22} />

                <span>

                  Continue Shopping
                </span>
              </Link>

              <ClearItems/>

            </div>

          </div>

        </section>
        {/* ================= Order Summary ================= */}
        <aside className="sticky top-20 w-full overflow-hidden rounded-[22px] border border-gray-200 bg-white shadow-sm ">
          {/* Summary Header */}
          <div className="bg-[#101827] px-5 py-7 max-md:px-6">
            <h2 className="font-bold text-white">
              Order Summary
            </h2>
          </div>
          {/* Summary Body */}
          <div className="px-6 py-8 max-md:px-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold text-[#475569]">
                Subtotal ({itemCount} items)
              </span>
              <span className=" font-semibold text-[#475569]">
                {response.data.totalCartPrice.toLocaleString()} EGP
              </span>
            </div>
            {/* Shipping */}
            <div className="mt-7 flex items-center justify-between gap-3">
              <span className="font-semibold text-[#475569]">
                Shipping
              </span>
              <span className="text-right  font-medium text-[#16A34A]">
                Calculated at checkout
              </span>
            </div>
            {/* Divider */}
            <div className="my-7 h-px bg-gray-200" />
            {/* Estimated Total */}
            <div className="flex items-center justify-between gap-5">
              <span className="text-xl font-bold text-[#475569]">
                Estimated Total
              </span>
              <span className="text-xl font-bold text-[#16A34A]">
                {response.data.totalCartPrice.toLocaleString()} EGP
              </span>
            </div>
            {/* Login Button */}
            
            <CheckOutBtn cartId={response.cartId}/>
            {/* Signup */}
            <p className="mt-5 text-center text-sm  text-[#94A3B8]">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                className="font-medium text-[#16A34A] hover:underline"
              >
                Sign up
              </button>
            </p>
            {/* Divider */}
            <div className="my-7 h-px bg-gray-200" />
            {/* Benefits */}
            <div className="space-y-4  text-sm text-[#64748B]">
              <p>
                ✓ Your cart items will be saved
              </p>
              <p>
                ✓ Track your orders easily
              </p>
              <p>
                ✓ Access exclusive member deals
              </p>
            </div>
          </div>
        </aside>
      </div>
    
    </>:<EmptyCart/>  }

      
    </main>
    
    </>
  )
}
