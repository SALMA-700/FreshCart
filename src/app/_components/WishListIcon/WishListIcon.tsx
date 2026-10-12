"use client"
import { addProductToWishlist } from "@/wishlistAction/Addproducttowishlist.action";
import { deleteFromWishList } from "@/wishlistAction/Removeproductfromwishlist.Action";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function WishListIcon({id , isWishList}:{id:string , isWishList:boolean}) {
  const [wishListt, setIswishListt] = useState(isWishList)
  const router = useRouter()
    async function ToggleWishList(){
      if (wishListt) {
        try {
          router.refresh()
          setIswishListt(false)
         const response = await deleteFromWishList(id)
        if (response.status=="success") {
          toast.success(response.message,{position:"bottom-right", autoClose:2000 , closeOnClick:true})
        } 
        }
        catch (error) {
        toast.error("can't remove product to wishlist now",{position:"bottom-right", autoClose:2000 , closeOnClick:true})
        }
      }
      else{
        try {
          router.refresh()
          setIswishListt(true)
        const response =await addProductToWishlist(id)
        console.log(response);
        if (response.status=="success") {
          toast.success(response.message,{position:"bottom-right", autoClose:2000 , closeOnClick:true})
        }
    } catch (error) {
        toast.error("can't add product to wishlist now",{position:"bottom-right", autoClose:2000 , closeOnClick:true})
    }
      }
    
    }
  return (
    <>
      <button onClick={()=>ToggleWishList()}
        className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center
        text-slate-600 hover:text-red-500 transition-all duration-300"
      >
        <Heart size={20} className={wishListt? "fill-red-500 text-red-500":""} />
      </button>
    </>
  );
}
