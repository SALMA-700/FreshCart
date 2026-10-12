import { CartType } from '@/Types/cart.types';
import Image from 'next/image';
import RemoveBtns from '../RemoveBtns/RemoveBtns';
import UpdateQuantity from '../UpdateQuantity/UpdateQuantity';

export default function CartItem({ response }: { response: CartType }) {
  return response.data.products.map((item) => {
    const total = item.price * item.count;

    return (
      <div key={item.product._id} className="w-full rounded-[15px] border border-gray-200 bg-white p-7 shadow-sm">
      <div className="flex items-center gap-8 max-md:gap-5 max-sm:flex-col max-sm:items-start">

        {/* Image */}
        <div className="flex h-30 w-30 shrink-0 items-center justify-center rounded-[18px] bg-gray-50 p-5 max-lg:h-40 max-lg:w-40 max-md:h-36.25 max-md:w-36.25 max-sm:h-45 max-sm:w-full">
        <Image width={500} height={500}
            src={item.product.imageCover}
            alt={item.product.title}
            className="h-full w-full object-contain"
        />
        </div>
        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col self-stretch">
        <h3 className=" font-semibold text-2xl leading-tight text-[#07152B]  ">
            {item.product.title}
        </h3>
          {/* Category */}
          <span className="mt-2 w-fit rounded-full text-[12px] bg-green-50 px-3 py-1 font-medium text-green-600">
            {item.product.category.name}
          </span>
          {/* Price */}
          <p className="my-3 text-xl  font-bold text-[#16A34A] ">
            {item.price} EGP
          </p>
          {/* Bottom */}
          <div className="mt-auto flex items-end justify-between gap-5 max-sm:mt-7">
            {/* Quantity */}
            <UpdateQuantity count={item.count} id={item.product._id}/>
            {/* Total + Delete */}
            <div className="flex items-center gap-6 max-sm:gap-3">
              <div className="text-right">
                <p className=" text-gray-400">
                  Total
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold leading-none text-[#07152B] max-md:text-[25px]">
                    {total.toLocaleString()}
                  </span>

                  <span className="text-[17px] text-gray-400">
                    EGP
                  </span>
                </div>
              </div>
              <RemoveBtns id={item.product._id}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  });
}
