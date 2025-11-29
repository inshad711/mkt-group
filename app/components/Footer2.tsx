import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Phone, MapPin, Mail, Clock, Instagram } from 'lucide-react';

// Custom Pinterest Icon since it's not always in default imports, or use generic
const Pinterest = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
    </svg>
);

const Footer2 = () => {
    return (
        <footer className="bg-[#F4F4F4] text-gray-600 pt-16 pb-8 text-sm">
            <div className="templateContainer lg:px-8">

                {/* --- Top Navigation Section --- */}
                <div className="flex justify-center mb-12">
                    <nav>
                        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 font-medium uppercase tracking-wide text-xs text-gray-800">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'About', href: '#about' },
                                { label: 'Categories', href: '/categories' },
                                { label: 'Products', href: '/products' },
                                { label: 'Brands', href: '#brands' },
                                { label: 'Retail', href: '#retail' },
                                { label: 'Contact', href: '/contact' },
                            ].map((item) => (
                                <li key={item.label}>
                                    {/* Use item.href directly */}
                                    <Link href={item.href} className="hover:text-orange-500 transition-colors duration-200">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* --- Middle Section (3 Columns) --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                    {/* Column 1: Contact Info */}
                    <div className="space-y-4">

                        <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-[#D4AF37]" />
                            <a href="tel:+97142255765" className="hover:text-orange-500 transition-colors">+971 4 2255765</a>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 text-[#D4AF37] mt-1" />
                            <span>25 West 21th Street, Miami FL, USA</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-[#D4AF37]" />
                            <a href="mailto:sam@mktgroup.ae" className="hover:text-orange-500 transition-colors">sam@mktgroup.ae</a>
                        </div>


                        <div className="flex items-center gap-3">
                            <Clock className="w-4 h-4 text-[#D4AF37]" />
                            <span>Mon-Fri: 10:00 - 18:00</span>
                        </div>
                    </div>

                    {/* Column 2: Logo & Socials */}
                    <div className="flex flex-col items-center text-center">

                        <Link href="/">
                            <img
                                src="/image/mktlogo.png"
                                alt="AXELS Logo"

                                className="h-16 md:h-16 w-auto "
                            />
                        </Link>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="p-2 rounded-full border border-transparent hover:border-gray-200 hover:bg-white transition-all text-gray-500 hover:text-[#3b5998]">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="p-2 rounded-full border border-transparent hover:border-gray-200 hover:bg-white transition-all text-gray-500 hover:text-[#1da1f2]">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 rounded-full border border-transparent hover:border-gray-200 hover:bg-white transition-all text-gray-500 hover:text-[#bd081c]">
                                <Instagram className="w-[18px] h-[18px]" />
                            </a>
                            <a href="#" className="p-2 rounded-full border border-transparent hover:border-gray-200 hover:bg-white transition-all text-gray-500 hover:text-[#0077b5]">
                                <Linkedin size={18} />
                            </a>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="/path/to/your/voucher.pdf"  // **Replace with the actual URL of the voucher file**
                                download="My-Voucher-Code-123.pdf" // **Optional: suggests a file name for the download**
                                className="inline-flex items-center justify-center bg-black hover:bg-black/80 text-white font-light  py-2 px-4 rounded-[8px]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                                    <path d="M10 2a1 1 0 011 1v7a1 1 0 11-2 0V3a1 1 0 011-1z" />
                                </svg>
                                Download Voucher
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Newsletter */}


                    <div className="flex flex-col md:items-end text-left md:text-right">
                        <h5 className="text-gray-900 font-bold uppercase tracking-wider mb-2">Subscribe to Updates</h5>
                        <p className="text-gray-500 mb-6 leading-relaxed max-w-xs">
                            Receive updates on our latest products, market trends, and commodities list from MKT General Trading LLC.
                        </p>

                        <form className="flex w-full md:max-w-xs border-b border-gray-300 pb-1">
                            <input
                                type="email"
                                placeholder="Enter your business email..."
                                className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400 py-2"
                            />
                            <button
                                type="button"
                                className="text-gray-900 font-bold uppercase text-xs tracking-wider whitespace-nowrap hover:text-orange-500 transition-colors"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                {/* --- Bottom Section: Copyright & Payment --- */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-500 text-xs sm:text-sm">
                        MKT  © {new Date().getFullYear()}. All Rights Reserved
                    </div>
                    <div>
                        <img
                            src="https://d-themes.com/wordpress/panda/demo1/wp-content/uploads/sites/6/2021/09/payment-1.png"
                            alt="Payment Methods"
                            className="h-6 w-auto opacity-80"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;