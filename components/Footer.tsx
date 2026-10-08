"use client";
import Link from "next/link";
import Logo from "./Logo";

const linkClass =
  "inline-block text-amber-100/80 transition-all duration-300 hover:text-amber-300 hover:translate-x-1";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-b from-[#3E2723] to-[#2B1B17] text-amber-50">
      {/* chocolate drip on top edge */}
      <svg
        className="absolute bottom-full left-0 w-full h-10 md:h-14 text-[#3E2723]"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 60V0H1200V60H1160C1150 60 1150 32 1140 32S1130 60 1120 60H1010C1000 60 1000 20 990 20S980 60 970 60H860C850 60 850 38 840 38S830 60 820 60H700C690 60 690 14 680 14S670 60 660 60H540C530 60 530 34 520 34S510 60 500 60H380C370 60 370 24 360 24S350 60 340 60H220C210 60 210 40 200 40S190 60 180 60H60C50 60 50 28 40 28S30 60 20 60Z"
          transform="translate(0 0) scale(1 -1) translate(0 -60)"
        />
      </svg>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-12 md:grid-cols-3">
        <div>
          <div className="inline-flex rounded-2xl border border-amber-100/15 bg-[#24140f] p-2.5 shadow-lg shadow-black/20 transition-all duration-300 hover:border-amber-400/60 hover:bg-amber-400/10 hover:shadow-[0_0_25px_rgba(251,191,36,0.45)] hover:backdrop-blur-md">
            <Logo className="h-24 w-36 sm:h-28 sm:w-[10.5rem]" />
          </div>
          <p className="text-sm text-amber-100/80 mt-3 max-w-xs">
            Homemade with love — brownies, cakes and sweet treats.
          </p>
        </div>

        <div>
          <h4 className="font-semibold uppercase tracking-widest text-xs text-amber-300">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className={linkClass}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/location" className={linkClass}>
                Location
              </Link>
            </li>
            <li>
              <Link href="/parcel" className={linkClass}>
                Parcel
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold uppercase tracking-widest text-xs text-amber-300">
            Newsletter
          </h4>
          <p className="text-sm text-amber-100/80 mt-4">
            Get tasty updates and offers.
          </p>
          <form
            className="mt-3 flex min-w-0 flex-col gap-2 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              aria-label="email"
              className="w-full min-w-0 flex-1 rounded-full bg-amber-50 px-4 py-2 text-[#3E2723] placeholder:text-[#8D6E63] outline-none focus:ring-2 focus:ring-amber-300"
              placeholder="you@example.com"
            />
            <button className="w-full whitespace-nowrap rounded-full bg-amber-200 px-5 py-2 font-medium text-[#3E2723] transition hover:-translate-y-0.5 hover:bg-amber-300 active:scale-95 sm:w-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-amber-100/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-4 py-4 text-center text-sm text-amber-200/80 sm:flex-row sm:justify-between sm:px-6 sm:text-left">
          <span>© {new Date().getFullYear()} Bakes by Yazh</span>
          <span>Made with ❤️ — Freshly baked</span>
        </div>
      </div>
    </footer>
  );
}
