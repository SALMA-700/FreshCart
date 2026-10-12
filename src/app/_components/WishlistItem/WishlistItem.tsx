"use client";

import { addProductToCart } from "@/cartAction/addToCart.Action";
import { WishListing } from "@/Types/wishlist.types";
import { deleteFromWishList } from "@/wishlistAction/Removeproductfromwishlist.Action";
import { LoaderCircle, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function WishlistItem({ product }: { product: WishListing }) {
  const router = useRouter();
  const [pendingAction, setPendingAction] = useState<"cart" | "remove" | null>(
    null,
  );

  async function addToCart() {
    setPendingAction("cart");
    try {
      const response = await addProductToCart(product._id);
      if (response.status !== "success") {
        toast.error(response.message || "Could not add this product to your cart.");
        return;
      }

      toast.success(response.message || "Product added to cart.");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not add this product to your cart.",
      );
    } finally {
      setPendingAction(null);
    }
  }

  async function removeFromWishlist() {
    setPendingAction("remove");
    try {
      const response = await deleteFromWishList(product._id);
      if (response.status !== "success") {
        toast.error(response.message || "Could not remove this product from your wishlist.");
        return;
      }

      toast.success(response.message || "Product removed from wishlist.");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Could not remove this product from your wishlist.",
      );
    } finally {
      setPendingAction(null);
    }
  }

  return (
    <tr className="border-b border-gray-100 transition-colors hover:bg-gray-50/50">
      <td className="px-9 py-7">
        <div className="flex min-w-70 items-center gap-6">
          <div className="flex h-25 w-25 shrink-0 items-center justify-center rounded-[10px] border border-gray-100 bg-gray-50 p-2 max-md:h-22.5 max-md:w-22.5">
            <Image
              width={500}
              height={500}
              src={product.imageCover}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-medium text-[#07152B] max-md:text-[19px]">
              {product.title}
            </h3>
            <p className="mt-2 text-[#94A3B8] max-md:text-[16px]">
              {product.category.name}
            </p>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-6 py-7 text-center">
        <span className="font-semibold text-[#07152B]">{product.price} EGP</span>
      </td>
      <td className="px-6 py-7 text-center">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${product.quantity > 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`}
        >
          <span
            className={`h-2 w-2 rounded-full ${product.quantity > 0 ? "bg-green-500" : "bg-red-500"}`}
          />
          {product.quantity > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </td>
      <td className="px-6 py-7">
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={addToCart}
            disabled={product.quantity === 0 || pendingAction !== null}
            className="flex h-10 items-center justify-center gap-3 whitespace-nowrap rounded-[13px] bg-[#16A34A] px-6 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50 max-md:px-4"
          >
            {pendingAction === "cart" ? (
              <LoaderCircle size={17} className="animate-spin" />
            ) : (
              <ShoppingCart size={17} />
            )}
            <span>{pendingAction === "cart" ? "Adding..." : "Add to Cart"}</span>
          </button>
          <button
            type="button"
            onClick={removeFromWishlist}
            disabled={pendingAction !== null}
            aria-label="Remove from wishlist"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-gray-200 bg-white text-[#94A3B8] transition hover:border-red-200 hover:bg-red-50 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pendingAction === "remove" ? (
              <LoaderCircle size={18} className="animate-spin" />
            ) : (
              <Trash2 size={18} fill="currentColor" />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
}
