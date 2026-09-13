"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { ShoppingCart, Truck } from 'lucide-react'

function Header() {
    const data = [{
        "count": "5"
    }]
    const [openMenu, setOpenMenu] = useState(false);
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

    const handleMenu = () => {
        console.log('working');
    }

    return (
        <header className='w-full bg-amber-800'>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-5'>
                <div className='text-xl font-bold text-white'>
                    <Logo />
                </div>

                <nav className='hidden md:flex items-center gap-12 text-slate-300 font-medium '>
                    <Link href="/" className='hover:text-pink-200 transition '>Home</Link>
                    <div
                        className='relative'
                        onMouseEnter={() => setOpenMenu(true)}
                        onMouseLeave={() => setOpenMenu(false)}
                    >
                        <Link href="/products" className='hover:text-pink-200 transition' onMouseEnter={handleMenu}>Products</Link>
                        {
                            openMenu && (
                                <div className='absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[640px] bg-[#FFFBF5] border border-amber-100 rounded-2xl shadow-2xl shadow-amber-900/20 p-6 text-slate-800 z-50'>
                                    {/* little arrow pointing up to the trigger */}
                                    <div className='absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFFBF5] border-t border-l border-amber-100 rotate-45' />

                                    <div className='flex items-baseline justify-between mb-5 pb-4 border-b border-amber-100'>
                                        <p className='font-serif text-lg font-semibold text-amber-900 tracking-wide'>Today's Menu</p>
                                        <span className='text-xs text-slate-400 uppercase tracking-widest'>Fresh Daily</span>
                                    </div>

                                    <div className='grid grid-cols-3 gap-6'>
                                        {menuDetails.map((menu, index) => (
                                            <div key={index}>
                                                <p className='text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-3'>
                                                    {menu.category}
                                                </p>
                                                <ul className='space-y-2.5'>
                                                    {menu.items.map((item, i) => (
                                                        <li key={i} className='group flex items-start justify-between gap-3 cursor-pointer'>
                                                            <span className='text-sm text-slate-700 leading-snug group-hover:text-amber-700 transition-colors'>
                                                                {item.name}
                                                            </span>
                                                            <span className='shrink-0 text-sm font-medium text-slate-500 whitespace-nowrap'>
                                                                {item.priceLabel && (
                                                                    <span className='text-[10px] font-normal text-slate-400 mr-1'>
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

                                    <div className='mt-5 pt-4 border-t border-amber-100 flex justify-end'>
                                        <Link
                                            href="/products"
                                            className='text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors'
                                        >
                                            View full menu →
                                        </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <a href="#" className='hover:text-pink-200 transition'>Parcel</a>
                    <a href="#" className='hover:text-pink-200 transition'>Location</a>
                    <a href="#" className='hover:text-pink-200 transition'>Contact</a>
                </nav>

                <div className='flex items-center gap-4'>
                    <button className='flex items-center gap-2 bg-pink-200 text-slate-700 px-5 py-2 rounded-md font-medium hover:bg-pink-300 transition'>
                        <Truck size={18} />
                        Order Now
                    </button>

                    <button className='relative bg-slate-800 text-white p-3 rounded-full hover:bg-slate-700 transition'>
                        <ShoppingCart size={18} />
                        <span className='absolute -top-1 -right-1 bg-lime-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center'>
                            {data.map((item, index) => (
                                <span key={index}>{item.count}</span>
                            ))}
                        </span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header