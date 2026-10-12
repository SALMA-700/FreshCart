/* eslint-disable @next/next/no-img-element */
import {  RefreshCw, Eye, Star } from "lucide-react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import AddBtn from "../AddBtn/AddBtn";
import WishListIcon from "../WishListIcon/WishListIcon";

type Product = {
  id: string;
  images: string[];
  imageCover: string;
  category: { name: string };
  title: string;
  price: number;
  ratingsAverage: number;
  ratingsQuantity?: number;
  priceAfterDiscount?: number;
};

export default function SingleProduct({ product ,isWishList}: { product: Product , isWishList:boolean }) {
  return (
    <>
      <div className="card w-full">
        <div className="inner p-2">
          <Card className="relative w-full p-4 pt-2 cursor-pointer max-w-sm ring-gray-200 transition-all duration-150 hover:ring-1 hover:ring-green-500 group">
              <CardHeader className="p-0">
                {}
                {/* Image + Hover Actions */}
                <div className="relative h-50 flex items-center justify-center">
                  {/* Main Image */}
                  <img
                    src={product.imageCover}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
                  />

                  {/* Hover Image */}
                  <img
                    src={product.images?.[1] || product.imageCover}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* Action Buttons */}
                  <div className="absolute top-2 right-0 flex flex-col gap-2">
                    <WishListIcon id={product.id} isWishList={isWishList}/>
                    
                    <button
                      className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center
                text-slate-600 hover:text-green-500 transition-all duration-300"
                    >
                      <RefreshCw size={20} />
                    </button>
                    <Link href={`/products/${product.id}`}>

                    <button
                      className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center
                text-slate-600 hover:text-green-500 transition-all duration-300"
                    >
                      <Eye size={20} />
                    </button>
                    </Link>
                  </div>
                </div>
                <CardDescription className="mt-4">
                  <h2 className="text-[#52759a] text-sm mb-1">
                    {product.category.name}
                  </h2>
                  <p className="text-black text-xl line-clamp-1 font-medium">
                    {product.title}
                  </p>
                </CardDescription>
              </CardHeader>
            
            {/* Rating */}
            <div className="rating flex gap-1 items-center text-gray-600">
              <span className="flex gap-1 items-center text-gray-600">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                {product.ratingsAverage}
              </span>
              <div className="reviewQuanity">({product.ratingsQuantity})</div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between mt-5">
              {/* Price */}
              <span className="text-2xl font-bold text-[#173b61]">
                {product.price} EGP
              </span>
            </div>

            <AddBtn id={product.id}/>
          </Card>
        </div>
      </div>
    </>
  );
}
