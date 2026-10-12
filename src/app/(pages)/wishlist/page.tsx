import EmptyWishList from "@/app/_components/EmptyWishList/EmptyWishList";
import WishlistItem from "@/app/_components/WishlistItem/WishlistItem";
import { WishListing } from "@/Types/wishlist.types";
import { getLoggedUserWishlist } from "@/wishlistAction/Getloggeduserwishlist.Action";
import { Heart } from "lucide-react";
import Link from "next/link";

export default async function Wishlist() {
    const response = await getLoggedUserWishlist()
    console.log(response);
    
  
  return (
    <>
    {response.data.length==0? <EmptyWishList/> : <><main className="min-h-screen bg-[#F8FAFC]">
        {/* Header */}
        <div className="border-b border-gray-100 bg-white px-6 py-5 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-3">
            <Link  href={'/'}><span className="text-[#64748B] hover:cursor-pointer hover:text-[#07152B]">Home</span>
</Link>
            <span className="text-[#64748B]">/</span>
            <span className="font-medium text-[#07152B]">Wishlist</span>
          </div>
          {/* Title */}
          <div className="flex items-center gap-6 pb-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50">
              <Heart size={20} fill="#FF3045" stroke="#FF3045" />
            </div>
            <div>
              <h1 className="text-2xl font-bold leading-tight text-[#07152B] max-sm:text-[30px]">
                My Wishlist
              </h1>
              <p className="mt-1  text-[#64748B]">
                {response.data.length} items saved
              </p>
            </div>
          </div>
        </div>
        {/* Table */}
        <section className="px-6 py-12 lg:px-8">
          <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white">
            <table className="w-full min-w-262.5 border-collapse text-left">
              <thead className="bg-[#F8FAFC]">
                <tr className="border-b border-gray-100  text-[#64748B]">
                  <th className="px-9 py-6 font-normal">Product</th>
                  <th className="px-6 py-6 text-center font-normal">Price</th>
                  <th className="px-6 py-6 text-center font-normal">Status</th>
                  <th className="px-6 py-6 text-center font-normal">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {response.data.map((product:WishListing) =><WishlistItem key={product._id} product={product} />)}
              </tbody>
            </table>
          </div>
        </section>
      </main>  </>}
      
    </>
  );
}
