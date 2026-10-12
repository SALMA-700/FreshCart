import { getLoggedUserCart } from '@/cartAction/getLoggedUserCart.Action'
import { getMyToken } from '@/utilities/getMyuToken.utilities'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default async function CartIcon() {
    const token = await getMyToken()
    if (!token) return null

    const response = await getLoggedUserCart()
    
  return (
    <>
    <Link
                  href="/cart"
                  className="relative ml-5 flex shrink-0 items-center justify-center xl:ml-6"
                >
                  <ShoppingCart
                    className="h-5 w-5 text-[#697586] transition-colors hover:text-green-600 xl:h-6 xl:w-6 2xl:h-7.75 2xl:w-7.75"
                    strokeWidth={2}
                  />

                  <span
                    className="
                absolute
                -right-2
                -top-2
                flex
                h-5.25
                w-5.25
                items-center
                justify-center
                rounded-full
                bg-green-600
                text-[11px]
                font-bold
                text-white
                2xl:h-6.25
                2xl:w-6.25
                2xl:text-[12px]
              "
                  >
                    {response.numOfCartItems}
                  </span>
                </Link>
    
    
    </>
  )
}
