import { ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export default function EmptyWishList(){
  return (
    <>
    <section className="flex min-h-145 w-full items-center justify-center bg-[#F8FAFC] px-5 py-16">
      <div className="flex w-full max-w-162.5 flex-col items-center text-center">

        {/* Icon */}
        <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-[#F1F2F4]">
          <Heart
            size={27}
            strokeWidth={2.2}
            className="text-[#9CA3AF]"
          />
        </div>

        {/* Title */}
        <h2 className="mt-9 text-2xl font-bold tracking-tight text-[#101827] max-md:text-[26px]">
          Your wishlist is empty
        </h2>

        {/* Description */}
        <p className="mt-4 leading-relaxed text-[#64748B] max-md:text-[17px]">
          Browse products and save your favorites here.
        </p>
        <Link
          href="/products"
          className="mt-9 flex h-13 w-75 mx-auto max-w-xl items-center justify-center gap-4 rounded-2xl bg-[#16A34A] px-3  font-semibold text-white transition-all duration-200 hover:bg-green-700 hover:shadow-lg max-md:h-10"
        >
          <span>Browse Products</span>

          <ArrowRight
            size={26}
            strokeWidth={2.5}
          />
        </Link>

      </div>
    </section>
    </>
  );
}
