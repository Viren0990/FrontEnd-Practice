'use client'

import Link from "next/link";
import { Button } from "./ui/button"; // Assuming this is from shadcn/ui or similar
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const navLinks = [
        { href: "/dashboard", label: "Home" },
        { href: "/problems", label: "Features" },
        { href: "/pricing", label: "Pricing" },
        { href: "/blog", label: "Blog" },
        { href: "/me", label: "Me" },
    ];

    return (
        <header> {/* Header wraps Navbar, absolute to overlay background */}
            <div className="container mx-auto flex justify-center items-center pt-14"> {/* Container for logo and nav */}
               
                <nav className="hidden sm:flex items-center gap-6">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="
                                text-sm font-semibold text-white
                                transition duration-150 ease-in-out
                                hover:-translate-y-0.5 hover:text-gray-200
                                inline-block /* Ensures transform works reliably */
                            "
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Hamburger Button */}
                <div className="sm:hidden">
                    <Button
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen} // Accessibility
                        aria-controls="mobile-menu" // Accessibility
                        className="p-2 bg-transparent text-white rounded-md border-white border-2"
                    >
                        {isMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                    </Button>
                </div>
            </div>

        
            {isMenuOpen && (
                <div
                    id="mobile-menu" 
                    className={`
                        sm:hidden                     
                        bg-transparent                 
                        py-4 px-4                     
                        transition-all duration-300 ease-in-out 
                        transform                    
                        ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
                    `}
                >
                    <nav className="flex flex-col items-center gap-4">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="text-lg text-white hover:text-purple-400 transition-colors w-full text-center py-2"
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};