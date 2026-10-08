import React from 'react';
import { products, categories } from '@/data/products';
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">Products</h1>
        <p className="text-amber-900/70 mt-2">Browse our brownies, cakes and dessert cups.</p>
      </header>

      {categories.map((cat) => (
        <section key={cat} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{cat}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.filter((p) => p.category === cat).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
