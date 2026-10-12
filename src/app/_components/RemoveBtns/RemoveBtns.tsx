'use client'
import { removeFromcart } from '@/cartAction/RemoveProductFromCart.Action'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function RemoveBtns({id}:{id:string}) {
    const router = useRouter()
   async function deleteFromCart() {
    try {
        const response = await removeFromcart(id)
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
      <button onClick={()=>deleteFromCart()}
                type="button"
                className="flex h-10 w-10 shrink-0 hover:cursor-pointer items-center justify-center rounded-[7px] border border-red-200 bg-red-50 text-red-500 transition hover:bg-red-100"
              >
                <Trash2 size={18} />
              </button>  
    
    </>
  )
}
