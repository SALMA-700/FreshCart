'use client'
import { updateCart } from '@/cartAction/UpdateCartProductQuantity.Action'
import { Loader, Minus, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function UpdateQuantity({count , id}:{count:number , id:string}) {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
async function quantity(count:number) {
    try {
        setIsLoading(true)
        const {data} =await updateCart( id , count)
        router.refresh()
        
    } catch (error) {
        
    }
    finally{
        setIsLoading(false)
    }
    
}

  return (
    <>
    <div className="flex h-10 items-center rounded-[10px] border border-gray-200 bg-white p-3 shadow-sm">
              <button onClick={()=>quantity(count-1)}
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-[5px] border border-gray-200 bg-white text-gray-400 transition hover:bg-gray-50 hover:text-gray-700"
              >
                <Minus size={19} />
              </button>
            <span className="flex min-w-16.25 items-center justify-center text-[20px] font-semibold text-[#07152B]">
              {isLoading? <Loader className='animate-spin'/> : <>{count}</>}
                
              </span>
              <button onClick={()=>quantity(count+1)}
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#16A34A] text-white transition hover:bg-green-700"
              >
                <Plus size={19} />
              </button>
            </div>
    
    
    </>
  )
}
