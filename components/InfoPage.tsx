import Link from "next/link";

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
};

export default function InfoPage({
  eyebrow,
  title,
  description,
  note,
}: InfoPageProps) {
  return (
    <main className="w-full flex-1 px-4 py-8 sm:px-6 sm:py-16">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-amber-100 bg-white/80 p-5 shadow-xl shadow-amber-950/5 sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-amber-950 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-amber-900/80">
          {description}
        </p>
        <p className="mt-4 leading-relaxed text-amber-900/70">{note}</p>
        <Link
          href="/products"
          className="mt-8 inline-flex rounded-xl bg-amber-700 px-5 py-3 font-semibold text-white transition hover:bg-amber-800"
        >
          Browse products
        </Link>
      </section>
    </main>
  );
}
