import { Mail, Leaf, Truck, Tag, ArrowRight, Star } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="w-full mx-auto bg-white my-10 p-4">
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#F3FEF9] shadow-sm p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Newsletter */}
          <div className="lg:pr-0 w-full">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl li bg-linear-to-br from-[#00BC83] to-[#00BB9F] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-green-600 font-semibold text-sm tracking-wide">
                  NEWSLETTER
                </p>
                <p className="text-slate-500 text-sm">50,000+ subscribers</p>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-6 leading-tight">
              Get the Freshest Updates{" "}
              <span className="text-green-600">Delivered Free</span>
            </h2>

            <p className="text-slate-500 text-base mt-4">
              Weekly recipes, seasonal offers & exclusive member perks.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="w-3.5 h-3.5 text-green-600" />
                </span>
                <span className="text-slate-700 text-sm font-medium">
                  Fresh Picks Weekly
                </span>
              </div>

              <div className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Truck className="w-3.5 h-3.5 text-green-600" />
                </span>
                <span className="text-slate-700 text-sm font-medium">
                  Free Delivery Codes
                </span>
              </div>

              <div className="flex items-center gap-2 border border-slate-200 rounded-full px-4 py-2">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Tag className="w-3.5 h-3.5 text-green-600" />
                </span>
                <span className="text-slate-700 text-sm font-medium">
                  Members-Only Deals
                </span>
              </div>
            </div>

            <form className="flex flex-col sm:flex-row gap-3 mt-6">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 border-2 border-slate-300 rounded-2xl px-5 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="flex group items-center justify-center gap-2 bg-linear-to-r from-green-700 to-green-400 hover:bg-green-700 hover:bg-linear-to-r hover:from-[#00BC83] hover:to-[#00BBA4] transition-colors text-white font-semibold text-sm rounded-full px-6 py-3 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200" />
              </button>
            </form>

            <p className="flex items-center gap-1.5 text-slate-400 text-xs mt-4">
              ✨ Unsubscribe anytime. No spam, ever.
            </p>
          </div>

          {/* App promo */}
          <div className="lg:pl-10 w-full">
            <div className="rounded-3xl bg-linear-to-tr from-slate-900 to-[#133339] p-8 h-full flex flex-col">
              <div className="inline-flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-1.5 w-fit">
                <span className="text-green-400 text-xs  tracking-wide">
                  📱 MOBILE APP
                </span>
              </div>

              <h3 className="text-white text-2xl lg:text-3xl font-bold mt-5">
                Shop Faster on Our App
              </h3>

              <p className="text-slate-400 text-sm mt-3">
                Get app-exclusive deals & 15% off your first order.
              </p>

              <div className="flex flex-col gap-3 mt-6">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-[#2F3846] hover:bg-[#3B4351] hover:scale-105 duration-300 transition-all  rounded-xl px-4 py-3"
                >
                  <FaApple className="w-6 h-6 text-white shrink-0" />
                  <div>
                    <p className="text-slate-400 text-[10px] tracking-wide">
                      DOWNLOAD ON
                    </p>
                    <p className="text-white text-sm font-semibold">
                      App Store
                    </p>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-3 bg-[#2F3846] hover:bg-[#3B4351] hover:scale-105 duration-300 transition-all  rounded-xl px-4 py-3"
                >
                  <FaGooglePlay className="w-6 h-6 text-white shrink-0" />
                  <div>
                    <p className="text-slate-400 text-[10px] tracking-wide">
                      GET IT ON
                    </p>
                    <p className="text-white text-sm font-semibold">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-2 mt-6">
                <div className="flex items-center gap-0.5">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-slate-300 text-sm">
                  4.9 · 100K+ downloads
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
