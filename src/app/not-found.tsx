"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Home,
  ShoppingCart,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F8FAFC] px-5 py-10">
      <div className="flex w-full max-w-175 flex-col items-center text-center">
        <div className="relative mb-12">
          <div className="flex h-40 w-40 items-center justify-center rounded-[25px] bg-linear-to-br from-white to-green-50 shadow-[0_20px_45px_rgba(16,185,129,0.08)]">
            <ShoppingCart
              size={52}
              strokeWidth={2.8}
              className="text-green-400"
            />
          </div>

          <div className="absolute -right-8.75 -top-7.5 flex h-20 w-20 items-center justify-center rounded-full border-8 border-white bg-[#16B856] shadow-[0_10px_25px_rgba(22,184,86,0.28)]">
            <span className="text-[20px] font-extrabold tracking-tight text-white">
              404
            </span>
          </div>

          <div className="absolute -bottom-15.5 left-1/2 flex -translate-x-1/2 items-center gap-5">
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="h-4.5 w-9.5 rounded-b-full border-b-2 border-green-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
        </div>

        <h1 className="mt-6 text-[32px] font-extrabold leading-tight tracking-[-1.5px] text-[#101827] max-md:text-[42px] max-sm:text-[34px]">
          Oops! Nothing Here
        </h1>

        <p className="mt-2 max-w-162.5 text-[21px] leading-[1.55] text-[#64748B] max-md:text-[18px] max-sm:text-[16px]">
          Looks like this page went out of stock! Don&apos;t worry,
          <br className="max-sm:hidden" />
          there&apos;s plenty more fresh content to explore.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4 max-sm:w-full max-sm:flex-col">
          <Link
            href="/"
            className="flex h-14 min-w-40 items-center justify-center gap-4 rounded-[17px] bg-[#16A34A] px-7 text-[18px] font-bold text-white shadow-[0_10px_25px_rgba(22,163,74,0.2)] transition-all duration-200 hover:bg-green-700 hover:shadow-[0_12px_30px_rgba(22,163,74,0.28)] max-sm:w-full"
          >
            <Home size={20} fill="currentColor" strokeWidth={2} />
            <span>Go to Homepage</span>
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex h-14 min-w-30 items-center justify-center gap-4 rounded-[17px] border border-gray-200 bg-white px-7 text-[18px] font-semibold text-[#475569] shadow-[0_4px_10px_rgba(0,0,0,0.08)] transition-all duration-200 hover:bg-gray-50 hover:shadow-md max-sm:w-full"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
