import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import Image from "next/image";
import { getWhatsAppOrderUrl } from "@/data/whatsapp";

const categoryMeta: Record<
  string,
  { emoji: string; blurb: string; image: string; imageAlt: string }
> = {
  brownies: {
    emoji: "🍫",
    blurb: "Fudgy, gooey and chocolatey",
    image: "/fudgy-brownie-cup.webp",
    imageAlt: "Fudgy chocolate brownie pieces",
  },
  "customisable cakes": {
    emoji: "🎂",
    blurb: "Made your way for any occasion",
    image: "/celebration-brownie-cake.webp",
    imageAlt: "Chocolate celebration brownie cake",
  },
  "dessert cups": {
    emoji: "🍮",
    blurb: "Layered cups, perfect for sharing",
    image: "/chocolate-loaded-dessert-cup.webp",
    imageAlt: "Chocolate-loaded dessert cup",
  },
};

function getCategoryMeta(cat: string) {
  return (
    categoryMeta[cat.toLowerCase()] ?? {
      emoji: "🍪",
      blurb: "Freshly baked for you",
      image: "/chocolate-donuts.webp",
      imageAlt: "Chocolate treats with colorful sprinkles",
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
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        {/* ---------- Hero ---------- */}
        <section className="grid min-w-0 items-center gap-10 md:grid-cols-2 md:gap-12">
          {/* Left: text */}
          <div className="relative isolate min-w-0 overflow-hidden rounded-[1.75rem] border border-amber-900/10 bg-gradient-to-br from-white via-[#fffaf2] to-[#f6e4ce] p-4 shadow-xl shadow-amber-950/5 sm:rounded-[2rem] sm:p-7 md:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-16 -z-10 h-48 w-48 rounded-full bg-amber-200/40 blur-3xl"
            />
            <span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-amber-700/10 bg-white/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-amber-800 shadow-sm animate-fade-in sm:px-4 sm:text-xs">
              <span aria-hidden="true">✦</span> Homemade • Baked fresh daily
            </span>

            <h1 className="mb-5 text-[2.55rem] font-extrabold leading-[1.04] tracking-tight text-amber-950 sm:text-5xl lg:text-6xl">
              <span className="mb-2 block font-sans text-lg font-bold tracking-normal text-amber-800 sm:text-xl">
                Bakes by Yazh
              </span>
              <span className="block font-serif">
                Homemade{" "}
                <span className="relative inline-block italic text-amber-600">
                  treats
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-amber-300/60"
                  />
                </span>
              </span>
              <span className="mt-2 block text-[0.62em] font-semibold leading-tight text-amber-900/75">
                made to delight.
              </span>
            </h1>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-amber-900/80 sm:text-lg">
              Freshly baked brownies, customizable cakes and dessert cups. Made
              with love and irresistible flavors.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-600 text-white font-medium px-7 py-3.5 rounded-xl shadow-lg shadow-amber-600/30 hover:bg-amber-700 hover:-translate-y-0.5 transition"
              >
                Order Now
              </a>
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

          {/* Product photo collage */}
          <div className="relative mx-auto grid h-[24rem] w-full max-w-[35rem] grid-cols-[1.1fr_0.9fr_0.9fr] grid-rows-[1fr_1fr_0.62fr] gap-2 sm:h-[31rem] sm:gap-3 lg:h-[34rem]">
            <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-[1.75rem] border-4 border-white bg-[#F3E5D3] shadow-2xl shadow-amber-950/15 sm:rounded-[2.25rem]">
              <Image
                src="/celebration-brownie-cake.webp"
                alt="Chocolate birthday brownie cake with fresh chocolate drizzle"
                fill
                priority
                sizes="(min-width: 1024px) 390px, (min-width: 640px) 330px, 68vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#28130c]/85 via-[#28130c]/30 to-transparent px-3 pb-3 pt-12 text-white sm:px-5 sm:pb-5 sm:pt-20">
                <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] backdrop-blur sm:px-3 sm:text-[10px]">
                  Baked fresh, made yours
                </span>
                <p className="mt-2 font-serif text-lg font-semibold sm:text-2xl">
                  Sweet moments start here
                </p>
              </div>
            </div>

            <div className="group relative col-start-3 row-start-1 overflow-hidden rounded-2xl border-4 border-white bg-[#F3E5D3] shadow-lg shadow-amber-950/10 sm:rounded-3xl">
              <Image
                src="/chocolate-donuts.webp"
                alt="Chocolate glazed donuts covered with colorful sprinkles"
                fill
                sizes="(min-width: 1024px) 180px, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 pb-2 pt-6 text-[9px] font-semibold text-white sm:px-3 sm:pb-3 sm:text-xs">
                Chocolate treats
              </span>
            </div>

            <div className="group relative col-start-3 row-start-2 overflow-hidden rounded-2xl border-4 border-white bg-[#F3E5D3] shadow-lg shadow-amber-950/10 sm:rounded-3xl">
              <Image
                src="/brownie-dessert-cup.webp"
                alt="Chocolate brownie dessert cup topped with chocolate pieces"
                fill
                sizes="(min-width: 1024px) 180px, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 pb-2 pt-6 text-[9px] font-semibold text-white sm:px-3 sm:pb-3 sm:text-xs">
                Dessert cups
              </span>
            </div>

            <div className="group relative col-start-1 row-start-3 overflow-hidden rounded-2xl border-4 border-white bg-[#F3E5D3] shadow-lg shadow-amber-950/10 sm:rounded-3xl">
              <Image
                src="/fudgy-brownie-cup.webp"
                alt="Fudgy chocolate brownie pieces in a dessert cup"
                fill
                sizes="(min-width: 1024px) 140px, 28vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="group relative col-start-2 row-start-3 overflow-hidden rounded-2xl border-4 border-white bg-[#F3E5D3] shadow-lg shadow-amber-950/10 sm:rounded-3xl">
              <Image
                src="/chocolate-loaded-dessert-cup.webp"
                alt="Chocolate-loaded brownie dessert cup"
                fill
                sizes="(min-width: 1024px) 140px, 28vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="col-start-3 row-start-3 flex flex-col justify-center rounded-2xl bg-[#4E342E] p-2.5 text-amber-50 shadow-lg shadow-amber-950/10 sm:rounded-3xl sm:p-4">
              <span className="text-lg sm:text-2xl" aria-hidden="true">
                ✦
              </span>
              <p className="mt-1 text-[10px] font-semibold leading-tight sm:text-sm">
                A little joy in every bite
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Featured ---------- */}
        <section className="mt-16 sm:mt-24">
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
        <section className="mt-16 sm:mt-24">
          <SectionHeading
            title="Categories"
            subtitle="Pick what you are craving"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {categories.map((cat) => {
              const meta = getCategoryMeta(cat);
              return (
                <Link
                  key={cat}
                  href="/products"
                  className="group relative isolate overflow-hidden rounded-[1.75rem] border border-amber-900/10 bg-white shadow-md shadow-amber-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-950/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F3E5D3]">
                    <Image
                      src={meta.image}
                      alt={meta.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#28130c]/65 via-transparent to-black/5" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-xs font-semibold text-amber-950 shadow-sm backdrop-blur sm:left-5 sm:top-5">
                      Freshly baked
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/40 bg-white/90 text-2xl shadow-lg backdrop-blur transition duration-300 group-hover:rotate-6 group-hover:scale-110 sm:bottom-5 sm:right-5"
                    >
                      {meta.emoji}
                    </span>
                    <p className="absolute bottom-4 left-4 max-w-[70%] font-serif text-xl font-semibold capitalize leading-tight text-white drop-shadow sm:bottom-5 sm:left-5 sm:text-2xl">
                      {cat.toLowerCase()}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                    <p className="text-sm font-medium text-amber-900/75 sm:text-base">
                      {meta.blurb}
                    </p>
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg text-amber-900 transition duration-300 group-hover:translate-x-1 group-hover:bg-amber-700 group-hover:text-white"
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ---------- Testimonials ---------- */}
        <section className="mt-16 sm:mt-24">
          <SectionHeading
            title="Customer love"
            subtitle="A space for your honest words and sweet moments"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-amber-900/10 bg-gradient-to-br from-[#fff8ec] via-white to-[#f5e2cb] px-6 py-9 text-center shadow-lg shadow-amber-950/5 sm:rounded-[2rem] sm:px-10 sm:py-12">
            <span
              aria-hidden="true"
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-700"
            >
              ✨
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-amber-950 sm:text-3xl">
              Your kind words could be next
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-amber-900/70 sm:text-base">
              Share your experience, and we can feature your review and name
              here.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
