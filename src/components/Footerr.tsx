import { li } from "framer-motion/client";
import Link from "next/link";

export const Footer = () => {
    const companyLinks = [
        { href: "/about", label: "About" },
        { href: "/testimonials", label: "Testimonials" },
        { href: "/find", label: "Find a doctor" },
        { href: "/apps", label: "Apps" }
    ];

    const regionLinks = [
        { href: "/indonesia", label: "Indonesia" },
        { href: "/singapore", label: "Singapore" },
        { href: "/hongkong", label: "Hongkong" },
        { href: "/canada", label: "Canada" }
    ];

    const helpLinks = [
        { href: "/help", label: "Help center" },
        { href: "/contact", label: "Contact support" },
        { href: "/instructions", label: "Instructions" },
        { href: "/how-it-works", label: "How it works" }
    ];

    return (
        <footer className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white">
        

            <div className="relative px-4 sm:px-6 lg:px-20 py-12 lg:py-16 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="bg-white text-blue-600 w-8 h-8 rounded-full font-bold flex items-center justify-center mr-3">
                                T
                            </div>
                            <span className="text-xl font-semibold">Trafalgar</span>
                        </div>
                        
                        <p className="text-blue-100 leading-relaxed mb-8 max-w-sm">
                            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone
                        </p>
                        
                        <p className="text-blue-200 text-sm">
                            ©Trafalgar PTY LTD 2020. All rights reserved
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Region Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Region</h3>
                        <ul className="space-y-4">
                            {regionLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Help</h3>
                        <ul className="space-y-4">
                            {helpLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};