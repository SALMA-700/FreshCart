import { ArrowRight, PackageOpen } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function EmptyCart() {
  return (
    <>
     <div className="flex min-h-130 w-full items-center justify-center bg-white px-5 py-16">
      <div className="flex w-full max-w-175 flex-col items-center text-center">

        {/* Icon */}
        <div className="flex h-42.5 w-42.5 items-center justify-center rounded-full bg-gray-50">
          <PackageOpen
            size={65}
            strokeWidth={1.8}
            className="text-gray-300"
          />
        </div>

        {/* Title */}
        <h2 className="mt-8 text-[32px] font-bold tracking-tight text-[#07152B] max-md:text-[28px] max-sm:text-[25px]">
          Your cart is empty
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-162.5 text-[22px] leading-[1.55] text-[#64748B] max-md:text-[19px] max-sm:text-[17px]">
          Looks like you havent added anything to your cart yet.
          <br />
          Start exploring our products!
        </p>

        {/* Button */}
        <Link
          href={'/products'}
          className="mt-11 flex h-17.5 min-w-67.5 items-center justify-center gap-3 rounded-[17px] bg-[#16A34A] px-8 text-[21px] font-semibold text-white shadow-[0_10px_25px_rgba(22,163,74,0.18)] transition-all duration-200 hover:bg-green-700 hover:shadow-[0_12px_30px_rgba(22,163,74,0.25)] max-md:h-15.5 max-md:min-w-60 max-md:text-[19px]"
        >
          <span>Start Shopping</span>
          <ArrowRight
            size={25}
            strokeWidth={2.5}
          />
        </Link>

      </div>
    </div>
    </>
  )
}
