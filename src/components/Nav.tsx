"use client"

import { motion } from 'framer-motion';
import Link from "next/link";
import { useState } from "react";

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navLinks = [
        {href:"/home", label:"Home"},
        {href:"/find", label:"Find a doctor"},
        {href:"/apps", label:"Apps"},
        {href:"/testimonials", label:"Testimonials"},
        {href:"/about", label:"About us"},
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <motion.header 
        initial= {{y:-5, opacity:0 }}
        animate= {{y:0, opacity:1}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="relative">
            <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-20 pt-6 sm:pt-8 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center">
                    <button className="bg-blue-600 text-white w-8 h-8 rounded-full font-bold mr-2 flex items-center justify-center">
                        T
                    </button>
                    <span className="font-semibold text-lg">Travfalgar</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-6 items-center">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="
                                text-sm font-semibold text-gray-800
                                transition duration-150 ease-in-out
                                hover:-translate-y-0.5 hover:text-blue-600
                                inline-block
                                "
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="px-4 py-6 space-y-4">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="
                                block text-base font-semibold text-gray-800
                                transition duration-150 ease-in-out
                                hover:text-blue-600 hover:translate-x-2
                                py-2
                                "
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </motion.header>
    )
}