import CheckOut from "./CheckoutClient";
import { getLoggedUserCart } from "@/cartAction/getLoggedUserCart.Action";
import { CartType } from "@/Types/cart.types";

export default async function CheckOutPage() {
  const cartResponse: CartType = await getLoggedUserCart();

  return <CheckOut cartResponse={cartResponse} />;


// allorders
}
