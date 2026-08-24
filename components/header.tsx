"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import { ShoppingCart, Truck } from 'lucide-react'

function Header() {
    const data = [{
        "count": "5"
    }]
    const [openMenu, setOpenMenu] = useState(false);
    const menuDetails = [
        {
            category: "BROWNIES",
            items: [
                { name: "Classic Brownie", price: 60 },
                { name: "Double Chocolate Brownie", price: 70 },
                { name: "Triple Chocolate Brownie", price: 80 },
                { name: "Brownie Bites", price: 50 },
            ],
        },
        {
            category: "CUSTOMISABLE CAKES",
            items: [
                { name: "Chocolate", price: 550, priceLabel: "From" },
                { name: "Vanilla", price: 500, priceLabel: "From" },
                { name: "Choco Truffle", price: 650, priceLabel: "From" },
                { name: "Butterscotch", price: 600, priceLabel: "From" },
                { name: "Rasmalai", price: 700, priceLabel: "From" },
            ],
        },
        {
            category: "DESSERT CUPS",
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
                    <a href="#" className='hover:text-pink-200 transition '>Home</a>
                    <div
                        className='relative'
                        onMouseEnter={() => setOpenMenu(true)}
                        onMouseLeave={() => setOpenMenu(false)}
                    >
                        <a href="#" className='hover:text-pink-200 transition' onMouseEnter={handleMenu}>Menu</a>
                        {
                            openMenu && (
                                <div className='absolute top-full left-0 mt-3 w-64 bg-white rounded-lg shadow-xl p-4 text-slate-800'>
                                    <p className='font-semibold mb-2'>Today's Menu</p>
                                    {menuDetails.map((menu, index) => (
                                        <ul key={index} className='space-y-1 text-sm'>
                                            <li className='font-semibold'>{menu.category}</li>
                                            {menu.items.map((item, i) => (
                                                <li key={i} className='flex justify-between gap-4'>
                                                    <span>{item.name}</span>
                                                    <span>{item.price}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
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