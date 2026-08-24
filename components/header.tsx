import React from 'react'
import Logo from './Logo'

function Header() {
    return (
        <header className='w-full bg-white shadow-sm'>
            <div className='max-w-8xl mx-auto flex items-center justify-between px-6 py-4'>
                <div className='text-xl font-bold text-slate-800'>
                   <Logo />
                </div>

                <nav className='hidden md:flex items-center gap-8 text-slate-600 font-medium'>
                    <a href="#" className='hover:text-slate-900'>Menu</a>
                    <a href="#" className='hover:text-slate-900'>My Bookings</a>
                    <a href="#" className='hover:text-slate-900'>Contact</a>
                </nav>

                <button className='bg-slate-800 text-white px-5 py-2 rounded-lg font-medium hover:bg-slate-700 transition'>
                    Login
                </button>
            </div>
        </header>
    )
}

export default Header