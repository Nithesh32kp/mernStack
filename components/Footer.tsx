"use client"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg">Bakes by Yazh</h3>
          <p className="text-sm text-amber-100 mt-2">Homemade with love — brownies, cakes and sweet treats.</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-amber-100">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/products" className="hover:underline">Products</Link></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Location</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <p className="text-sm text-amber-100 mt-2">Get tasty updates and offers.</p>
          <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input aria-label="email" className="flex-1 px-3 py-2 rounded-md text-slate-800" placeholder="you@example.com" />
            <button className="bg-pink-200 text-slate-800 px-3 py-2 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-amber-800/60">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-amber-200 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Bakes by Yazh</span>
          <span>Made with ❤️ — Freshly baked</span>
        </div>
      </div>
    </footer>
  )
}
