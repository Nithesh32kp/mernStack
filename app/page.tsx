import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import Image from "next/image";

const categoryMeta: Record<string, { emoji: string; blurb: string }> = {
  brownies: { emoji: "🍫", blurb: "Fudgy, gooey and chocolatey" },
  "customisable cakes": {
    emoji: "🎂",
    blurb: "Made your way for any occasion",
  },
  "dessert cups": { emoji: "🍮", blurb: "Layered cups, perfect for sharing" },
};

function getCategoryMeta(cat: string) {
  return (
    categoryMeta[cat.toLowerCase()] ?? {
      emoji: "🍪",
      blurb: "Freshly baked for you",
    }
  );
}

function SectionHeading({
  title,
  subtitle,
  href,
  linkLabel,
}: {
  title: string;
  subtitle: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4 mb-8">
      <div>
        <h2 className="text-3xl font-bold text-amber-950 tracking-tight">
          {title}
        </h2>
        <p className="mt-1 text-amber-900/70">{subtitle}</p>
        <div className="mt-3 h-1 w-12 rounded-full bg-amber-500" />
      </div>
      {href && (
        <Link
          href={href}
          className="shrink-0 text-sm font-semibold text-amber-700 hover:text-amber-900 transition"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] font-sans">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* ---------- Hero ---------- */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-800 mb-5 animate-fade-in">
              🍪 Homemade • Baked fresh daily
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-amber-950 mb-5 leading-[1.1] tracking-tight">
              Bakes by Yazh —{" "}
              <span className="text-amber-600">Homemade treats</span> that
              delight
            </h1>

            <p className="text-lg text-amber-900/80 mb-8 max-w-lg leading-relaxed">
              Freshly baked brownies, customizable cakes and dessert cups. Made
              with love and irresistible flavors.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-block bg-amber-600 text-white font-medium px-7 py-3.5 rounded-xl shadow-lg shadow-amber-600/30 hover:bg-amber-700 hover:-translate-y-0.5 transition"
              >
                Order Now
              </Link>
              <Link
                href="/products"
                className="inline-block border border-amber-900/30 text-amber-950 font-medium px-7 py-3.5 rounded-xl bg-white/70 hover:bg-white hover:-translate-y-0.5 transition"
              >
                View Menu
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white text-amber-950 px-4 py-2.5 rounded-xl shadow-sm border border-amber-100 animate-fade-in">
                <span className="text-lg">🍫</span>
                <span className="text-sm">
                  Triple Chocolate — <b className="font-semibold">₹80</b>
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white text-amber-950 px-4 py-2.5 rounded-xl shadow-sm border border-amber-100 animate-fade-in">
                <span className="text-lg">🎂</span>
                <span className="text-sm">
                  Custom Cakes — From <b className="font-semibold">₹500</b>
                </span>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative flex items-center justify-center min-h-[460px]">
            <div className="absolute w-80 h-80 lg:w-[26rem] lg:h-[26rem] rounded-full bg-amber-200/60 blur-3xl" />
            <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-amber-300/70" />

            <div className="relative rotate-3">
              <div className="animate-float">
                <div className="relative w-72 sm:w-80 aspect-[4/5] rounded-3xl bg-white p-3 shadow-2xl shadow-amber-900/20">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#F3E5D3]">
                    <Image
                      src="https://res.cloudinary.com/tlcq09oo/image/upload/f_auto,q_auto/WhatsApp_Image_2026-08-25_at_2.47.32_PM"
                      alt="Chocolate birthday cake by Bakes by Yazh"
                      fill
                      priority
                      sizes="(min-width: 640px) 320px, 288px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-6 left-0 sm:-left-4 animate-float"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-amber-900/15 border border-amber-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E5D3] text-2xl">
                  🍫
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-amber-950">
                    Rich Chocolate
                  </p>
                  <p className="text-xs text-amber-900/70">Made to order</p>
                </div>
              </div>
            </div>

            <div
              className="absolute top-6 right-0 sm:-right-2 animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-amber-900/15 border border-amber-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E5D3] text-2xl">
                  ☕️
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-amber-950">
                    Fresh Daily
                  </p>
                  <p className="text-xs text-amber-900/70">Perfect with tea</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Featured ---------- */}
        <section className="mt-24">
          <SectionHeading
            title="Featured"
            subtitle="Our most loved treats, baked fresh for you"
            href="/products"
            linkLabel="View all"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* ---------- Categories ---------- */}
        <section className="mt-24">
          <SectionHeading
            title="Categories"
            subtitle="Pick what you are craving"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const meta = getCategoryMeta(cat);
              return (
                <Link
                  key={cat}
                  href="/products"
                  className="group relative overflow-hidden flex items-center gap-5 rounded-2xl bg-white p-5 border border-amber-100 shadow-sm hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-1 transition duration-300"
                >
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F3E5D3] text-3xl group-hover:scale-110 group-hover:rotate-6 transition duration-300">
                    {meta.emoji}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-lg text-amber-950 capitalize">
                      {cat.toLowerCase()}
                    </p>
                    <p className="text-sm text-amber-900/70">{meta.blurb}</p>
                  </div>
                  <span className="text-amber-600 text-xl group-hover:translate-x-1 transition">
                    →
                  </span>
                  <span className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-amber-100/70 group-hover:scale-150 transition duration-500" />
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
