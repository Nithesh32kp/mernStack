import React from 'react';
import type { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <div className="h-40 bg-pink-50 rounded-md mb-4 flex items-center justify-center text-pink-300">
        <span className="text-4xl">🍫</span>
      </div>

      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-slate-500 mb-3">{product.description ?? ''}</p>

      <div className="flex items-center justify-between mt-4">
        <div className="text-xl font-bold">{product.priceLabel ? `${product.priceLabel} ₹${product.price}` : `₹${product.price}`}</div>
        <button className="bg-amber-600 text-white px-3 py-1 rounded-md text-sm hover:bg-amber-700">Add</button>
      </div>
    </div>
  );
}
