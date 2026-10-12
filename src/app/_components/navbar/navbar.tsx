"use client";

import React from "react";
import Link from "next/link";

import {
  CircleUserRound,
  Search,
  ChevronDown,
  Menu,
  House,
  PackageSearch,
  LayoutGrid,
  Gem,
  LogIn,
  UserPlus,
  Phone,
  Gift,
  Truck,
  Mail,
} from "lucide-react";

import { RiCustomerService2Line } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";

export default function Navbar({cartIcon , wishIcon}:{cartIcon : React.ReactNode , wishIcon:React.ReactNode}) {
  const logOut = () => {
    signOut({ callbackUrl: "/login" });
  };

  const { data: session, status } = useSession();

  return (
    <>
      <div className=" border-b border-gray-200 bg-white block">
        <div className="mx-auto flex h-13 w-full max-w-[1920px] items-center justify-between px-4 sm:px-6 lg:px-7 2xl:px-8">
          {/* Left Side */}
          <div className="flex items-center gap-8 text-[15px] text-[#536174] xl:text-[16px]">
            {/* Free Shipping */}
            <div className="flex items-center gap-2">
              <Truck size={19} strokeWidth={2} className="text-green-600" />

              <span>Free Shipping on Orders 500 EGP</span>
            </div>

            {/* New Arrivals */}
            <div className="flex items-center gap-2">
              <Gift size={19} strokeWidth={2} className="text-green-600" />

              <span>New Arrivals Daily</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center text-[15px] text-[#536174] xl:text-[16px]">
            {/* Phone */}
            <div className="flex items-center gap-2 pr-6">
              <Phone size={18} strokeWidth={2} />

              <span>+1 (800) 123-4567</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 border-l border-gray-200 px-6">
              <Mail size={18} strokeWidth={2} />

              <span>support@freshcart.com</span>
            </div>
            {session ? (
              <>
                <button
                  type="button"
                  onClick={logOut}
                  className="flex items-center gap-2 border-l border-gray-200 px-6 transition-colors hover:text-red-600"
                >
                  <CircleUserRound size={18} />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                {/* Sign In */}
                <Link
                  href="/login"
                  className="flex items-center gap-2 border-l border-gray-200 px-6 transition-colors hover:text-green-600"
                >
                  <CircleUserRound size={18} />

                  <span>Sign In</span>
                </Link>

                {/* Sign Up */}
                <Link
                  href="/register"
                  className="flex items-center gap-2 pl-6 transition-colors hover:text-green-600"
                >
                  <UserPlus size={18} />

                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex p-3 w-full max-w-[1920px] items-center px-4 sm:px-6 lg:px-7 2xl:px-8">
          {/* ================= LEFT ================= */}
          <div className="flex min-w-0 gap-6 flex-1 items-center">
            {/* Logo */}
            <Link href="/" className=" ">
              <Image width={500} height={500}
                src="/freshcart-logo.49f1b44d.svg"
                className="h-auto w-40"
                alt="FreshCart"
              />
            </Link>

            {/* ================= SEARCH ================= */}
            <div className="hidden min-w-0 flex-1 lg:block xl:flex-none">
              <div
                className="
                flex
                w-full
                p-2
                min-w-0
                items-center
                rounded-full
                border
                border-gray-200
                bg-white
                shadow-[0_2px_7px_rgba(0,0,0,0.08)]
                
              "
              >
                <input
                  type="text"
                  placeholder="Search for products, brands and more."
                  className="
                  min-w-0
                  flex-1
                  bg-transparent
                  px-7
                  text-[14px]
                  text-gray-700
                  outline-none
                  placeholder:text-[#9aa5b5]
                "
                />
                <button
                  className="
                  mr-1
                  flex
                  h-7.5
                  w-7.5
                  shrink-0
                  justify-center
                  items-center
                  rounded-full
                  bg-green-600
                  text-white
                  transition-colors
                  hover:bg-green-700
                  
                "
                >
                  <Search className="h-5 w-5  2xl:h-7 2xl:w-7" />
                </button>
              </div>
            </div>

            {/* ================= DESKTOP NAV ================= */}
            <nav className=" hidden min-w-0 lg:block xl:ml-4 2xl:ml-11">
              <ul
                className="
                flex
                items-center
                gap-6
                whitespace-nowrap
                text-[16px]
                text-[#182536]
                xl:text-[16px]
                2xl:text-[16px]"
              >
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-green-600"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/products"
                    className="transition-colors hover:text-green-600"
                  >
                    Shop
                  </Link>
                </li>
                {/* Categories */}
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className="
                        group
                        flex
                        cursor-pointer
                        items-center
                        gap-1
                        outline-none
                        transition-colors
                        hover:text-green-600
                        data-[state=open]:text-green-600
                      "
                    >
                      Categories
                      <ChevronDown
                        className="
                          h-4.25
                          w-4.25
                          transition-transform
                          duration-200
                          group-data-[state=open]:rotate-180
                        "
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      sideOffset={18}
                      className="
                      w-75
                      rounded-2xl
                      border
                      border-gray-100
                      bg-white
                      p-3
                      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                    "
                    >
                      <DropdownMenuItem
                        render={
                          <Link
                            href="/category"
                            className="flex cursor-pointer rounded-lg px-3 py-4 text-[17px] text-[#536174] outline-none transition-colors hover:bg-green-50 hover:text-green-600"
                          />
                        }
                      >
                        All Categories
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        render={
                          <Link
                            href="/category/electronics"
                            className="flex cursor-pointer rounded-lg px-3 py-4 text-[17px] text-[#536174] outline-none transition-colors hover:bg-green-50 hover:text-green-600"
                          />
                        }
                      >
                        Electronics
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        render={
                          <Link
                            href="/category/womens-fashion"
                            className="flex cursor-pointer rounded-lg px-3 py-4 text-[17px] text-[#536174] outline-none transition-colors hover:bg-green-50 hover:text-green-600"
                          />
                        }
                      >
                        Women's Fashion
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        render={
                          <Link
                            href="/category/mens-fashion"
                            className="flex cursor-pointer rounded-lg px-3 py-4 text-[17px] text-[#536174] outline-none transition-colors hover:bg-green-50 hover:text-green-600"
                          />
                        }
                      >
                        Men's Fashion
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        render={
                          <Link
                            href="/category/beauty-health"
                            className="flex cursor-pointer rounded-lg px-3 py-4 text-[17px] text-[#536174] outline-none transition-colors hover:bg-green-50 hover:text-green-600"
                          />
                        }
                      >
                        Beauty &amp; Health
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link
                    href="/brands"
                    className="transition-colors hover:text-green-600"
                  >
                    Brands
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="
            ml-4
            hidden
            shrink-0
            items-center
            lg:flex
            xl:ml-3
            2xl:ml-5
          "
          >
            {/* Support */}
            <div
              className="
              flex
              items-center
              gap-2
              border-r
              border-gray-200
              pr-4
              xl:gap-2.5
              xl:pr-5
              2xl:gap-3
            "
            >
              <div
                className="
                flex
                h-7.5
                w-7.5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-green-50
                xl:h-10
                xl:w-10
                2xl:h-10
                2xl:w-10
              "
              >
                <RiCustomerService2Line className="h-5 w-5 text-green-600 xl:h-6 xl:w-6.75 2xl:h-6.25 2xl:w-6.25" />
              </div>

              <div className="leading-[1.15]">
                <p className="text-[13px] text-[#9aa5b5] xl:text-[14px] 2xl:text-[16px]">
                  Support
                </p>

                <p className="text-[13px] font-semibold text-[#253746] xl:text-[14px] 2xl:text-[16px]">
                  24/7 Help
                </p>
              </div>
            </div>
            {session ? (
              <>
                {/* Wishlist */}
               {wishIcon}

                {/* Cart */}
                {cartIcon}
                
                <button
                  type="button"
                  onClick={logOut}
                  className="
              ml-5
              flex
              shrink-0
              items-center
              gap-1.5
              rounded-full
              bg-red-600
              px-5
              py-3
              text-[14px]
              font-semibold
              text-white
              transition-colors
              hover:bg-red-700
              
            "
                >
                  <CircleUserRound className="h-4.75 w-4.75 xl:h-5 xl:w-5 2xl:h-5.25 2xl:w-5.25" />
                  <span>Sign Out</span>
                </button>
              </>
            ) : (
              <>
                {/* Sign In */}
                <Link
                  href="/login"
                  className="
              ml-5
              flex
              shrink-0
              items-center
              gap-1.5
              rounded-full
              bg-green-600
              px-5
              py-3
              text-[14px]
              font-semibold
              text-white
              transition-colors
              hover:bg-green-700
              
            "
                >
                  <CircleUserRound className="h-4.75 w-4.75 xl:h-5 xl:w-5 2xl:h-5.25 2xl:w-5.25" />
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* ================= MOBILE ================= */}
          <div className="ml-auto flex lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="outline"
                    className="h-10 w-10 rounded-full p-0"
                  />
                }
              >
                <Menu size={21} />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                sideOffset={10}
                className="w-62.5 rounded-xl p-2"
              >
                <DropdownMenuItem
                  render={<Link href="/" className="flex gap-2" />}
                >
                  <House size={18} />
                  Home
                </DropdownMenuItem>

                <DropdownMenuItem
                  render={<Link href="/products" className="flex gap-2" />}
                >
                  <PackageSearch size={18} />
                  Shop
                </DropdownMenuItem>

                <DropdownMenuItem
                  render={<Link href="/category" className="flex gap-2" />}
                >
                  <LayoutGrid size={18} />
                  Categories
                </DropdownMenuItem>

                <DropdownMenuItem
                  render={<Link href="/brands" className="flex gap-2" />}
                >
                  <Gem size={18} />
                  Brands
                </DropdownMenuItem>
                {session ? (
                  <>
                    <DropdownMenuItem
                      render={<Link href="/wishlist" className="flex gap-2" />}
                    >
                      {wishIcon}
                      Wishlist
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      render={<Link href="/cart" className="flex gap-2" />}
                    >
                      {cartIcon}

                      Cart
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      render={
                        <button
                          type="button"
                          onClick={logOut}
                          className="flex w-full gap-2 text-left"
                        />
                      }
                    >
                      <FaSignOutAlt className="h-4.75 w-4.75 xl:h-5 xl:w-5 2xl:h-5.25 2xl:w-5.25" />
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem
                      render={<Link href="/login" className="flex gap-2" />}
                    >
                      <LogIn size={18} />
                      Sign In
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
}
