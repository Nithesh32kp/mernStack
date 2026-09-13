import Header from "@/components/header";
import Link from 'next/link';
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-rose-300 font-sans">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-4 leading-tight">Bakes by Yazh — Homemade treats that delight</h1>
            <p className="text-slate-700 mb-6">Freshly baked brownies, customizable cakes and dessert cups. Made with love and irresistible flavors.</p>

            <div className="flex gap-4">
              <Link href="/products" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg shadow hover:bg-amber-700 transition">Order Now</Link>
              <Link href="/products" className="inline-block border border-slate-800 px-6 py-3 rounded-lg bg-white/60 hover:bg-white transition">View Menu</Link>
            </div>

            <div className="mt-6 flex gap-4">
              <div className="bg-white/80 px-3 py-2 rounded-lg shadow animate-fade-in">Triple Chocolate — ₹80</div>
              <div className="bg-white/80 px-3 py-2 rounded-lg shadow animate-fade-in">Custom Cakes — From ₹500</div>
            </div>
          </div>

          <div className="flex items-center justify-center relative">
            <div className="w-80 h-80 rounded-2xl bg-white/80 flex items-center justify-center shadow-lg transform rotate-3 animate-float">
              <span className="text-6xl">🍰</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '0.6s'}}>🍫</div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '1.2s'}}>☕️</div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Featured</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="flex gap-4">
            {categories.map((cat) => (
              <Link key={cat} href="/products" className="bg-white/80 px-4 py-3 rounded-lg shadow hover:scale-105 transform transition">
                <div className="font-semibold">{cat}</div>
                <div className="text-sm text-slate-600">Explore</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
