"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { product } from "@/Types/allCategory.types";


export default function Slidering({ data }: { data: product[] }) {

  return (
    <>
      <Swiper
        className="py-4 "
        spaceBetween={20}
        slidesPerView={2}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          750: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
      >
        {data.map((cat) => (
          <SwiperSlide
            key={cat._id}
            className="shadow-2xl p-4  cursor-pointer rounded-2xl "
          >
            <div className="rounded-2xl text-center flex-col items-center justify-center w-30 h-fit">
              <Image
                className="rounded-full w-16 h-16 mx-auto"
                src={cat.image}
                alt={cat.name}
                width={64}
                height={64}
              />
              <h4 className="text-sm">{cat.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
