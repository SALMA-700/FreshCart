'use client'
import { clearCart } from '@/cartAction/ClearUserCart.Action';
import { Trash } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function ClearItems() {

     const router = useRouter()
       async function removeCart() {
        try {
            const response = await clearCart()
            if (response.status=='success') {
                toast.success(response.message,{position:"top-right",autoClose:2000 ,closeOnClick:true})
                router.refresh()
            }
            else{
                toast.error("can't remove now",{position:"top-right",autoClose:2000 ,closeOnClick:true})
            }
        } catch (error) {
                toast.error("can't remove now",{position:"top-right",autoClose:2000 ,closeOnClick:true})
        }
            
        }
  return (
    <>
    
    <button onClick={()=>removeCart()}
                type="button"
                className="flex items-center gap-2  font-medium text-[#94A3B8] transition hover:text-red-500"
              >
                <span className="">
                  <Trash size={18}/>
                </span>
                Clear all items
              </button>
    
    
    </>
  )
}
