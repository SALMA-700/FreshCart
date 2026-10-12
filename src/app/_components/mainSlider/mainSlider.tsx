import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function MainSlider() {
  return (
    <>
      <div>
        <Carousel className="w-full h-[60vh] mx-auto">
          <CarouselContent className="h-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="h-full py-0 ">
                  <Card className="h-full p-0 object-center">
                    <CardContent className="relative  h-full overflow-hidden p-0">
                      <Image
                        src="/main bg.png"
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover bg-cover "
                        priority={index === 0}
                      />
                      <div className="content bg-linear-to-r  from-green-600 to-green-400 bg-bg-opacity-50 opacity-70 absolute top-0 right-0 left-0 bottom-0 z-20">

                          </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 p-5 bg-white  border-0" />
          <CarouselNext className="right-4 p-5 bg-white border-0" />
        </Carousel>
      </div>
    </>
  );
}
