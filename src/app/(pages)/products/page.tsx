import { getallProducts } from "@/Api/allProducts.api";
import SingleProduct from "../../_components/singleProduct/singleProduct";
import { getLoggedUserWishlist } from "@/wishlistAction/Getloggeduserwishlist.Action";
import { WishListing } from "@/Types/wishlist.types";

type Product = {
  id: string;
  images: string[];
  imageCover: string;
  category: { name: string };
  title: string;
  price: number;
  ratingsAverage: number;
};

export default async function Products() {
  const { data } = await getallProducts();

  const wishlist = await getLoggedUserWishlist()
      console.log(wishlist);
      const wishListids = wishlist.data.map((wishlist:WishListing)=>wishlist.id)
  return (
    <>
      <title>products</title>
      <div className="w-[95%] mx-auto my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 w-full my-5">
          {data.map((product: Product) => (
            <SingleProduct key={product.id} product={product} isWishList={wishListids.includes(product.id)} />
          ))}
        </div>
      </div>
    </>
  );
}
