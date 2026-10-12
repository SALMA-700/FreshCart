import { FaShieldAlt } from "react-icons/fa";
import MainSlider from "./_components/mainSlider/mainSlider";
import Newsletter from "./_components/newslitter/newslitter";
import { Truck, RotateCcw, Headphones } from "lucide-react";
import CategorySlider from "./_components/categoryCards/categoryCards";
import DayForDeials from "./_components/dayForDeials/dayForDeials";
import Products from "./(pages)/products/page";

export default function Home() {
  return (
    <>
      <div className="">
        <MainSlider />

        <div className="bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 fill-blue-600 text-blue-600" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm">
                  Free Shipping
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  On orders over 500 EGP
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <FaShieldAlt className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm">
                  Secure Payment
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  100% secure checkout
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <RotateCcw className="w-5 h-5 text-[#FF6900]" />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm">
                  Easy Returns
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  14-day return policy
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow-2xs">
              <div className="w-12 h-12 rounded-full bg-violet-100-100 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5 text-[#AD46FF] " />
              </div>
              <div>
                <p className="text-slate-900 font-semibold text-sm">
                  24/7 Support
                </p>
                <p className="text-slate-500 text-xs mt-0.5">
                  Contact us anytime
                </p>
              </div>
            </div>
          </div>
        </div>
        <CategorySlider />
        <div className="w-[95%] mx-auto">
          <DayForDeials />
          <div className="header flex justify-between items-center">
            <div className="title my-10 flex gap-2 items-center">
              <span className="w-2 h-10 rounded-full bg-linear-to-t from-[#008059] to-[#00B276] block  "></span>
              <h2 className="text-3xl font-bold">
                Featured
                <span className="text-[#009966]">Products</span>{" "}
              </h2>
            </div>
          </div>
          <Products />
          <Newsletter />
        </div>
      </div>
    </>
  );
}
