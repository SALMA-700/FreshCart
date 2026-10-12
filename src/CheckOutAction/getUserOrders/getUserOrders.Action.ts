"use server"

import { getMyToken } from "@/utilities/getMyuToken.utilities";

export interface UserOrder {
  _id: string;
  orderNumber?: string | number;
  createdAt?: string;
  totalOrderPrice?: number;
  paymentMethodType?: string;
  isPaid?: boolean;
  isDelivered?: boolean;
  shippingAddress?: {
    city?: string;
    details?: string;
    phone?: string;
  };
  cartItems?: {
    _id?: string;
    count: number;
    price: number;
    product?: {
      _id?: string;
      title?: string;
      imageCover?: string;
    } | string | null;
  }[];
}

export async function getUserOrders(id: string): Promise<UserOrder[]> {
  const token = await getMyToken();
  if (!token) {
    throw new Error("Login First");
  }

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${encodeURIComponent(id)}`,
    {
      headers: { token },
      cache: "no-store",
    },
  );
  const payload: unknown = await response.json();

  if (!response.ok) {
    const message =
      typeof payload === "object" &&
      payload !== null &&
      "message" in payload &&
      typeof payload.message === "string"
        ? payload.message
        : "Could not load your orders";
    throw new Error(message);
  }

  if (!Array.isArray(payload)) {
    throw new Error("The orders response has an unexpected format");
  }

  return payload as UserOrder[];
}
