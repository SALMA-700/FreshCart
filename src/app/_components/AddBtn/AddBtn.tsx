'use client'
import { addProductToCart } from '@/cartAction/addToCart.Action'
import { Button } from '@/components/ui/button'
import {  Loader, Plus, ShoppingCart } from 'lucide-react'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import  { useState } from 'react'
import { toast } from 'react-toastify'

export default function AddBtn({id , showalways=false}:{id:string ,showalways?:boolean}) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
   async function AddTocart() {
     try {
         const session = await getSession()
         if (!session) {
             router.push('/login')
             return
         }
         setIsLoading(true)
         const response =await addProductToCart(id)
        if (response.status=="success") {
            router.refresh()
        toast.success(response.message,{position:"top-right",autoClose:2000,closeOnClick:true})
        }
        else{
        toast.error("somthing went wrong",{position:"top-right",autoClose:2000,closeOnClick:true})

        }
    } catch (error) {
        toast.error("somthing went wrong",{position:"top-right",autoClose:2000,closeOnClick:true})

    }
     finally{
        setIsLoading(false)
     }  
        
    }

  return (
    <>
    {
        showalways? <>  <Button onClick={AddTocart}
           className='w-full my-3 py-5 cursor-pointer bg-green-500 hover:bg-green-600 duration-300 transition-all text-white'
            >
                {isLoading? <Loader className='animate-spin' />: <>Add To Cart <ShoppingCart/> </>}
              
            </Button></> :<>
                        <Button onClick={AddTocart}
              className="
          absolute bottom-5 right-5
          w-10 h-10
          rounded-full
          p-0 cursor-pointer
          bg-green-500
          hover:bg-green-600
          text-white
          flex items-center justify-center
          transition-all duration-300
        "
            >
                {isLoading? <Loader className='animate-spin' />: <><Plus size={30} /></>}
              
            </Button>
            
            </>
    }
</>
  )
}
