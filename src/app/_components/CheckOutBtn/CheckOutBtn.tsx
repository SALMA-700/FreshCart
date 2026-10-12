import { Lock } from 'lucide-react'
import Link from 'next/link'

export default function CheckOutBtn({cartId}:{cartId:string}) {
  return (
    <>
    <Link href={`/checkout/${cartId}`}>
    <button
              type="button"
              className="mt-12 flex py-4 w-full items-center justify-center gap-2 rounded-[18px] bg-[#16A34A] font-semibold text-white transition hover:bg-green-700"
            >
              <Lock size={18} />
              <span>
                Secure Checkout
              </span>
            </button>
    </Link>
    </>
  )
}
