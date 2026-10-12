import {
  Truck,RotateCcw,ShieldCheck,Headphones,ShoppingCart,Phone,Mail,MapPin,CreditCard,} from "lucide-react";
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebookF, FaInstagram, FaShieldAlt, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5 fill-green-500 text-green-600" />
            </div>
            <div>
              <p className="text-slate-900 font-semibold text-sm">Free Shipping</p>
              <p className="text-slate-500 text-xs mt-0.5">On orders over 500 EGP</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-slate-900 font-semibold text-sm">Easy Returns</p>
              <p className="text-slate-500 text-xs mt-0.5">14-day return policy</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
              <FaShieldAlt className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-slate-900 font-semibold text-sm">Secure Payment</p>
              <p className="text-slate-500 text-xs mt-0.5">100% secure checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-slate-900 font-semibold text-sm">24/7 Support</p>
              <p className="text-slate-500 text-xs mt-0.5">Contact us anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
            {/* Brand column */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2.5">
                {/* <ShoppingCart className="w-6 h-6 text-green-600" strokeWidth={2.5} />
                <span className="text-slate-900 font-bold text-xl">FreshCart</span> */}
                 <img
              src="/freshcart-logo.49f1b44d.svg"
              className="h-auto w-40"
              alt="FreshCart"
            />
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mt-5 max-w-xs">
                FreshCart is your one-stop destination for quality products. From
                fashion to electronics, we bring you the best brands at competitive
                prices with a seamless shopping experience.
              </p>

              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-green-500 shrink-0" />
                  <a href="tel:+18001234567" className="text-slate-300 text-sm hover:text-green-500 transition-colors">
                    +1 (800) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-green-500 shrink-0" />
                  <a href="mailto:support@freshcart.com" className="text-slate-300 text-sm hover:text-green-500 transition-colors">
                    support@freshcart.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">123 Commerce Street, New York, NY 10001</span>
                </li>
              </ul>

              <div className="flex items-center gap-3 mt-6">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-green-500 hover:text-white transition-colors">
                  <FaFacebookF  className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-green-500 hover:text-white transition-colors">
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-green-500 hover:text-white transition-colors">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-green-500 hover:text-white transition-colors">
                  <FaYoutube  className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-white font-semibold text-base mb-5">Shop</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">All Products</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Categories</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Brands</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Electronics</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Men's Fashion</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Women's Fashion</a></li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="text-white font-semibold text-base mb-5">Account</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">My Account</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Order History</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Wishlist</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Shopping Cart</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Sign In</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Create Account</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold text-base mb-5">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Track Order</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold text-base mb-5">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 text-sm hover:text-green-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © 2026 FreshCart. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-slate-400 text-xs bg-slate-800 rounded-md px-2.5 py-1.5">
                <FaCcVisa className="w-3.5 h-3.5" />
                Visa
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 text-xs bg-slate-800 rounded-md px-2.5 py-1.5">
                <FaCcMastercard className="w-3.5 h-3.5" />
                Mastercard
              </span>
              <span className="flex items-center gap-1.5 text-slate-400 text-xs bg-slate-800 rounded-md px-2.5 py-1.5">
                <FaCcPaypal className="w-3.5 h-3.5" />
                PayPal
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}