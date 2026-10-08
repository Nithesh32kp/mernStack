import React from 'react';
import type { Product } from '../data/products';
import { getWhatsAppOrderUrl } from '../data/whatsapp';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-amber-900/10 rounded-lg p-4 bg-white/85 text-amber-950 shadow-sm">
      <div className="h-40 bg-[#F3E5D3] rounded-md mb-4 flex items-center justify-center text-amber-800">
        <span className="text-4xl">🍫</span>
      </div>

      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-amber-900/65 mb-3">{product.description ?? ''}</p>

      <div className="flex items-center justify-between mt-4">
        <div className="text-xl font-bold">{product.priceLabel ? `${product.priceLabel} ₹${product.price}` : `₹${product.price}`}</div>
        <a
          href={getWhatsAppOrderUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-md bg-amber-600 px-3 py-2 text-center text-sm text-white transition hover:bg-amber-700"
        >
          Order
        </a>
      </div>
    </div>
  );
}
