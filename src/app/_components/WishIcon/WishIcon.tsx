import { getMyToken } from '@/utilities/getMyuToken.utilities'
import { getLoggedUserWishlist } from '@/wishlistAction/Getloggeduserwishlist.Action'
import { Heart } from 'lucide-react'
import Link from 'next/link'

export default async function WishIcon() {
    const token = await getMyToken()
        if (!token) return null
        const response = await getLoggedUserWishlist()        
  return (
    <>
     <Link
                  href="/wishlist"
                  className="relative ml-4 flex shrink-0 items-center justify-center xl:ml-5"
                >
                  <Heart
                    className="h-6.5 w-6.5 text-[#697586] transition-colors hover:text-green-600 xl:h-6 xl:w-6 2xl:h-7.5 2xl:w-7.5"
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
                bg-red-600
                text-[11px]
                font-bold
                text-white
                2xl:h-6.25
                2xl:w-6.25
                2xl:text-[12px]
              "
                  >
                    {response.count}
                  </span>
                </Link>
    
    </>
  )
}
