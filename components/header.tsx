"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { ShoppingCart, Truck } from "lucide-react";

type MenuItem = { name: string; price: number; priceLabel?: string };
type MenuGroup = { category: string; items: MenuItem[] };

const menuDetails: MenuGroup[] = [
  {
    category: "Brownies",
    items: [
      { name: "Classic Brownie", price: 60 },
      { name: "Double Chocolate Brownie", price: 70 },
      { name: "Triple Chocolate Brownie", price: 80 },
      { name: "Brownie Bites", price: 50 },
    ],
  },
  {
    category: "Customisable Cakes",
    items: [
      { name: "Chocolate", price: 550, priceLabel: "From" },
      { name: "Vanilla", price: 500, priceLabel: "From" },
      { name: "Choco Truffle", price: 650, priceLabel: "From" },
      { name: "Butterscotch", price: 600, priceLabel: "From" },
      { name: "Rasmalai", price: 700, priceLabel: "From" },
    ],
  },
  {
    category: "Dessert Cups",
    items: [
      { name: "Red Velvet", price: 100 },
      { name: "Chocolate", price: 90 },
      { name: "Butterscotch", price: 90 },
    ],
  },
];

const navLink = "nav-choco px-4 py-2 rounded-full text-amber-100/90";

function CookieDecoration() {
  return (
    <span className="nav-cookie" aria-hidden="true">
      {Array.from({ length: 7 }, (_, index) => (
        <span className="nav-cookie-chip" key={index} />
      ))}
    </span>
  );
}

function Header() {
  const cartCount = 5;

  return (
    <header className="relative z-50 w-full bg-gradient-to-r from-[#3E2723] via-[#4E342E] to-[#5D4037]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-3">
        <div className="text-xl font-bold text-white bg-amber-50 rounded-full p-0.5 w-fit aspect-square flex items-center justify-center">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-3 font-medium">
          <Link href="/" className={navLink}>
            <span className="nav-choco-label">Home</span>
            <CookieDecoration />
          </Link>

          {/* Products + submenu */}
          <div className="relative group">
            <Link href="/products" className={`${navLink} inline-block`}>
              <span className="nav-choco-label">Products</span>
              <CookieDecoration />
            </Link>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block group-focus-within:block z-50">
              <div className="relative w-[640px] bg-[#FFFBF5] border border-amber-100 rounded-2xl shadow-2xl shadow-amber-900/20 p-6 text-slate-800">
                {/* arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFFBF5] border-t border-l border-amber-100 rotate-45" />

                <div className="flex items-baseline justify-between mb-5 pb-4 border-b border-amber-100">
                  <p className="font-serif text-lg font-semibold text-amber-900 tracking-wide">
                    Today&apos;s Menu
                  </p>
                  <span className="text-xs text-slate-400 uppercase tracking-widest">
                    Fresh Daily
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {menuDetails.map((menu) => (
                    <div key={menu.category}>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-3">
                        {menu.category}
                      </p>
                      <ul className="space-y-2.5">
                        {menu.items.map((item) => (
                          <li
                            key={item.name}
                            className="group/item flex items-start justify-between gap-3 cursor-pointer"
                          >
                            <span className="text-sm text-slate-700 leading-snug group-hover/item:text-amber-700 transition-colors">
                              {item.name}
                            </span>
                            <span className="shrink-0 text-sm font-medium text-slate-500 whitespace-nowrap">
                              {item.priceLabel && (
                                <span className="text-[10px] font-normal text-slate-400 mr-1">
                                  {item.priceLabel}
                                </span>
                              )}
                              ₹{item.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-amber-100 flex justify-end">
                  <Link
                    href="/products"
                    className="text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors"
                  >
                    View full menu →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className={navLink}>
            <span className="nav-choco-label">Parcel</span>
            <CookieDecoration />
          </a>
          <a href="#" className={navLink}>
            <span className="nav-choco-label">Location</span>
            <CookieDecoration />
          </a>
          <a href="#" className={navLink}>
            <span className="nav-choco-label">Contact</span>
            <CookieDecoration />
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-amber-100 text-[#3E2723] px-5 py-2 rounded-md font-medium hover:bg-amber-200 transition">
            <Truck size={18} />
            Order Now
          </button>

          <button className="relative bg-[#6D4C41] text-white p-3 rounded-full hover:bg-[#8D6E63] transition">
            <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 bg-amber-200 text-[#3E2723] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
