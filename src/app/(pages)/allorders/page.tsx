import { getUserOrders } from "@/CheckOutAction/getUserOrders/getUserOrders.Action";
import MyOrders from "@/app/_components/MyOrders/MyOrders";
import { getMyToken } from "@/utilities/getMyuToken.utilities";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

export default async function Allorders() {
  const token = await getMyToken();
  if (!token) {
    redirect("/login");
  }

  const decodedToken = jwtDecode<{ id: string }>(token);
  if (!decodedToken.id) {
    throw new Error("Could not identify the current user");
  }

  const orders = await getUserOrders(decodedToken.id);

  return <MyOrders orders={orders} />;
}
