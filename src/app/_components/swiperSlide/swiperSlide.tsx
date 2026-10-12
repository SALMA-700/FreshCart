'use client'
import  { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Star } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import AddBtn from '../AddBtn/AddBtn';
import Image from 'next/image';

type Product = {
  id: string;
  imageCover: string;
  images: string[];
  price: number;
  priceAfterDiscount?: number;
  title: string;
  category: { name: string };
  brand: { name: string };
  description: string;
  ratingsAverage: number;
  quantity:number;
};

export default function SwiperSlider({ data }: { data: Product }) {
    const [selectedImage, setselectedImage] = useState(data.imageCover)
    const discountAmount = data.price - (data.priceAfterDiscount ?? data.price);
    const discountPercent = (discountAmount / data.price) * 100;
  return (

    <>
   <div className='relative w-[90%] group my-5 rounded-2xl shadow-2xl mx-auto flex '>
    <div className='sticky top-2.5 w-full md:w-1/4 overflow-hidden rounded-s-2xl'>
    <Image width={500} height={500} src={selectedImage} alt="" />
    <div className="slider">
  <Swiper
      spaceBetween={0}
      slidesPerView={4}>
      
      {data.images.map((img, index) => <SwiperSlide onClick={() => setselectedImage(img)} key={index}><Image width={500} height={500} src={img} alt="" /></SwiperSlide>)}
    </Swiper>    </div>
    </div>
    <div className=" w-full md:w-3/4 p-5 pt-10">{data.priceAfterDiscount&&<span className='bg-red-500 text-white p-3 rounded-lg mb-24'>Save %{discountPercent.toFixed()} </span>}
           <div className="badges mt-10 flex gap-2">
            <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">{data.category.name}</Badge> 
            <Badge className='bg-[#F3F4F6]'>{data.brand.name}</Badge>
        
            </div>   <h2 className=' text-blac text-2xl font-bold mt-3'>{data.title}</h2>
            <p className='text-green-400 text-sm '></p>
            <p>{data.description}</p>
          <div className="stars my-3 flex justify-between items-center">
            <div className="star-left">
                {data.priceAfterDiscount?  <> <span className=' text-xl text-red-500 line-through'>{data.price} EGP</span>    
        <br/>  <span className='text-2xl font-bold'>{data.priceAfterDiscount} EGP</span></> :  <span className='font-bold text-2xl'>{data.price} EGP</span>
                }
            </div>
            <div className="star-right">
            <span className='flex text-2xl gap-1 items-center'>{data.ratingsAverage}<Star size={25} color='yellow-500' className='fill-yellow-500 '/></span>
            </div>
           
            
          </div>
           {data.quantity&&<Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 text-sm"><span className='bg-green-400 rounded-full block w-2 h-2 animate-pulse duration-100 '></span>
         In Stock
      </Badge>}
          <AddBtn showalways={true} id={data.id} />
    </div>
    </div>
    </>
  )
}
