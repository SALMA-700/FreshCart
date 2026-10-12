import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'
import { FaFire } from 'react-icons/fa'

export default function DayForDeials() {
  return (
    <>
    <section className="w-full px-2 py-20 sm:px-3 lg:px-4">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-4 lg:grid-cols-2">

        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#08b77c] via-[#00a875] to-[#00875f] px-4 py-7 text-white  sm:px-5 lg:px-12">

          {/* Top Right Circle */}
          <div className="absolute -right-12 -top-24 h-56 w-56 rounded-full bg-white/10" />

          {/* Bottom Left Circle */}
          <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-white/10" />

          <div className="relative z-10">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur-sm sm:text-base">
              <FaFire className="text-orange-300" />
              <span>Deal of the Day</span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-extrabold leading-tight tracking-tight sm:text-3xl ">
              Fresh Organic Fruits
            </h2>

            {/* Description */}
            <p className="mt-4 text-lg font-medium text-white/90 sm:text-lg">
              Get up to 40% off on selected organic fruits
            </p>

            {/* Discount */}
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-4xl font-extrabold tracking-tight sm:text-2xl">
                40% OFF
              </span>

              <span className="text-base text-white/90 sm:text-md">
                Use code:
                <span className="ml-1 font-extrabold text-white">
                  ORGANIC40
                </span>
              </span>
            </div>

            {/* Button */}
            <button className="group mt-9 flex items-center gap-3 rounded-full bg-white px-4 py-2  font-semibold text-[#00966b] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span>Shop Now</span>

              <ArrowRight
                size={24}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>


        {/* New Arrivals */}
        <div className="relative  overflow-hidden rounded-[24px] bg-gradient-to-br from-[#ff8414] via-[#ff5c45] to-[#ff2458] px-7 py-7 text-white  sm:px-10  lg:px-12">

          {/* Top Right Circle */}
          <div className="absolute -right-12 -top-24 h-56 w-56 rounded-full bg-white/10" />

          {/* Bottom Left Circle */}
          <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-white/10" />

          <div className="relative z-10">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur-sm sm:text-base">
              <Sparkles className="h-5 w-5 text-yellow-200" />
              <span>New Arrivals</span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-extrabold leading-tight tracking-tight sm:text-3xl ">
              Exotic Vegetables
            </h2>

            {/* Description */}
            <p className="mt-4 text-lg font-medium text-white/90 sm:text-sm">
              Discover our latest collection of premium vegetables
            </p>

            {/* Discount */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-4xl font-extrabold tracking-tight sm:text-2xl">
                25% OFF
              </span>

              <span className="text-base text-white/90 sm:text-md">
                Use code:
                <span className="ml-1 font-extrabold text-white">
                  FRESH25
                </span>
              </span>
            </div>

            {/* Button */}
            <button className="group mt-10 flex items-center gap-3 rounded-full bg-white px-4 py-2 text-md font-semibold text-[#ff6400] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span>Explore Now</span>

              <ArrowRight
                size={24}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>

      </div>
    </section>
    
    </>
  )
}
