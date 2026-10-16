"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  CalendarDays,
  CreditCard,
  MapPin,
  Package,
  PackageCheck,
  Phone,
  ReceiptText,
  ShoppingBag,
  Truck,
} from "lucide-react";
import type { UserOrder } from "@/CheckOutAction/getUserOrders/getUserOrders.Action";

interface OrderCardProps {
  order: UserOrder;
}

function getOrderStatus(order: UserOrder) {
  if (order.isDelivered) {
    return {
      label: "Delivered",
      className: "bg-green-100 text-green-700",
    };
  }

  return {
    label: "On the Way",
    className: "bg-blue-100 text-blue-700",
  };
}

function formatDate(date?: string) {
  if (!date) return "Date unavailable";

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "Date unavailable";

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function OrderCard({ order }: OrderCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const firstProduct = order.cartItems?.[0]?.product;
  const firstProductData =
    typeof firstProduct === "object" && firstProduct !== null
      ? firstProduct
      : null;
  const extraItems = Math.max((order.cartItems?.length ?? 0) - 1, 0);
  const status = getOrderStatus(order);
  const orderNumber = order.orderNumber ?? order._id.slice(-4).toUpperCase();
  const totalItems =
    order.cartItems?.reduce((sum, item) => sum + item.count, 0) ?? 0;
  const totalPrice = order.totalOrderPrice ?? 0;

  return (
    <article
      className={`overflow-hidden rounded-[20px] border bg-white shadow-sm transition-all duration-300 ${
        isOpen ? "border-green-200 shadow-md" : "border-gray-200"
      }`}
    >
      <div className="p-5 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative flex h-30 w-30 shrink-0 items-center justify-center self-start rounded-[18px] border border-gray-100 bg-gray-50 p-4 sm:h-33.75 sm:w-33.75">
            {firstProductData?.imageCover ? (
              <Image
                src={firstProductData.imageCover}
                alt={firstProductData.title ?? "Ordered product"}
                width={500}
                height={500}
                className="h-full w-full object-contain"
              />
            ) : (
              <Package size={42} className="text-gray-300" />
            )}

            {extraItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-9 min-w-9 items-center justify-center rounded-full bg-[#101827] px-2 text-sm font-bold text-white shadow-md">
                +{extraItems}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium ${status.className}`}
              >
                <Truck size={16} />
                {status.label}
              </span>
            </div>

            <h2 className="flex items-center gap-2 text-xl font-bold text-[#101827]">
              <span className="text-slate-400">#</span>
              {orderNumber}
            </h2>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 sm:text-base">
              <span className="flex items-center gap-2">
                <CalendarDays size={16} className="text-slate-400" />
                {formatDate(order.createdAt)}
              </span>

              <span className="hidden text-slate-300 sm:inline">•</span>

              <span className="flex items-center gap-2">
                <Package size={16} className="text-slate-400" />
                {totalItems} items
              </span>

              <span className="hidden text-slate-300 sm:inline">•</span>

              <span className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-slate-400" />
                <span className="max-w-55 truncate">
                  {order.shippingAddress?.city || "No address"}
                </span>
              </span>
            </div>

            <p className="mt-7 text-2xl font-bold text-[#101827]">
              {totalPrice.toLocaleString()}
              <span className="ml-1 text-sm font-normal text-slate-400">
                EGP
              </span>
            </p>
          </div>

          <div className="hidden h-12 w-12 shrink-0 items-center justify-center self-start rounded-2xl bg-purple-100 text-purple-600 sm:flex">
            <CreditCard size={22} />
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((previous) => !previous)}
            className={`flex shrink-0 items-center justify-center gap-2 self-start rounded-[14px] px-5 py-3 text-sm font-semibold transition sm:self-center ${
              isOpen
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-100 text-slate-700 hover:bg-gray-200"
            }`}
          >
            {isOpen ? "Hide" : "Details"}
            {isOpen ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-green-100 bg-[#FAFCFD] p-5 sm:p-7">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-700">
              <ReceiptText size={17} />
            </span>
            <h3 className="font-semibold text-[#101827]">Order Items</h3>
          </div>

          <div className="space-y-3">
            {order.cartItems?.map((item, index) => {
              const product =
                typeof item.product === "object" && item.product !== null
                  ? item.product
                  : null;

              return (
                <div
                  key={item._id ?? `${order._id}-${index}`}
                  className="flex items-center gap-4 rounded-[15px] border border-gray-100 bg-white p-4"
                >
                  <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-2">
                    {product?.imageCover ? (
                      <Image
                        src={product.imageCover}
                        alt={product.title ?? "Ordered product"}
                        width={200}
                        height={200}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <Package size={28} className="text-gray-300" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-medium text-[#101827] sm:text-lg">
                      {product?.title ?? "Product"}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.count} × {item.price.toLocaleString()} EGP
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-lg font-bold text-[#101827]">
                      {(item.count * item.price).toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-400">EGP</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-7 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="rounded-[15px] border border-gray-100 bg-white p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-[#101827]">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <MapPin size={17} />
                </span>
                Delivery Address
              </h3>

              <p className="font-medium text-[#101827]">
                {order.shippingAddress?.city || "No city provided"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {order.shippingAddress?.details || "No address details"}
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <Phone size={16} className="text-slate-400" />
                {order.shippingAddress?.phone || "No phone provided"}
              </p>
            </div>

            <div className="rounded-[15px] border border-blue-200 bg-blue-50 p-5">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-[#101827]">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white">
                  <Truck size={17} />
                </span>
                Order Summary
              </h3>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between gap-3">
                  <span>Payment</span>
                  <span>{order.paymentMethodType ?? "Not specified"}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Paid</span>
                  <span>{order.isPaid ? "Yes" : "No"}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-blue-200 pt-4 font-bold text-[#101827]">
                  <span>Total</span>
                  <span className="text-base">
                    {totalPrice.toLocaleString()} EGP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function MyOrders({ orders }: { orders: UserOrder[] }) {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-5 py-6 sm:px-8 lg:px-10">
      <nav className="mb-8 flex items-center gap-3 text-sm sm:text-base">
        <Link
          href="/"
          className="text-slate-500 transition hover:text-green-600"
        >
          Home
        </Link>
        <span className="text-slate-300">/</span>
        <span className="font-medium text-[#101827]">My Orders</span>
      </nav>

      <header className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-16.5 w-16.5 shrink-0 items-center justify-center rounded-[20px] bg-linear-to-br from-green-500 to-green-700 text-white shadow-lg shadow-green-600/20">
            <ShoppingBag size={29} fill="currentColor" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#101827] sm:text-[36px]">
              My Orders
            </h1>
            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Track and manage your {orders.length} orders
            </p>
          </div>
        </div>

        <Link
          href="/products"
          className="flex items-center gap-2 text-sm font-medium text-green-600 transition hover:text-green-800 sm:text-base"
        >
          <ArrowLeft size={17} />
          Continue Shopping
        </Link>
      </header>

      {orders.length > 0 ? (
        <div className="space-y-5">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-[20px] border border-gray-200 bg-white px-5 py-16 text-center">
          <PackageCheck size={55} className="mb-5 text-gray-300" />
          <h2 className="text-2xl font-bold text-[#101827]">No orders yet</h2>
          <p className="mt-3 text-slate-500">
            Your orders will appear here once you make a purchase.
          </p>
          <Link
            href="/products"
            className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </main>
  );
}
