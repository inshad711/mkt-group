// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { ShoppingBag, Menu, X } from "lucide-react";
// import Image from "next/image";

// const Header = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Handle scroll effect (optional: adds background on scroll)
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const navLinks = [
//         { name: "Home", href: "/" },
//         { name: "Shop", href: "/shop" },
//         { name: "Testimonials", href: "/testimonials" },
//         { name: "About", href: "/about" },
//         { name: "Contact", href: "/contact" },
//     ];

//     return (
//         <>
//             {/* Header Container */}
//             <header
//                 className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
//                     }`}
//             >
//                 <div className="container mx-auto px-6">
//                     <div className="flex flex-col items-center justify-center relative">

//                         {/* Mobile Menu Toggle (Visible on Mobile only) */}
//                         <div className="absolute left-0 top-1 md:hidden">
//                             <button
//                                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                                 className="text-white hover:text-gray-300"
//                             >
//                                 {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//                             </button>
//                         </div>

//                         <div className="mb-6 md:mb-4">
//                             <Link href="/">
//                                 <div className="relative w-40 h-12 md:w-48 md:h-14 cursor-pointer">
// <Image
//     src="/image/mktlogo.png"          // Replace with your actual file path
//     alt="Cosmetics Logo"
//     fill                     // Automatically fills the parent div
//     className="object-contain" // Keeps aspect ratio intact
//     priority                 // Loads image immediately (good for logos)
// />
//                                 </div>
//                             </Link>
//                         </div>

//                         {/* 2. Navigation & Actions Section */}
//                         <div className="w-full flex justify-center items-center relative">

//                             {/* Desktop Navigation */}
//                             <nav className="hidden md:flex items-center gap-8">
//                                 {navLinks.map((link) => (
//                                     <Link
//                                         key={link.name}
//                                         href={link.href}
//                                         className="text-white text-[13px] font-medium uppercase tracking-widest hover:text-gray-300 transition-colors"
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 ))}
//                             </nav>


//                         </div>
//                     </div>
//                 </div>

//                 {/* Mobile Navigation Dropdown */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 w-full bg-black/95 text-center py-6 border-t border-gray-800">
//                         <nav className="flex flex-col gap-6">
//                             {navLinks.map((link) => (
//                                 <Link
//                                     key={link.name}
//                                     href={link.href}
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                     className="text-white text-sm uppercase tracking-widest hover:text-gray-400"
//                                 >
//                                     {link.name}
//                                 </Link>
//                             ))}
//                         </nav>
//                     </div>
//                 )}
//             </header>

//             {/* Hero Section Placeholder (To show the transparency effect) */}
//             <section className="relative w-full h-screen bg-teal-900 flex items-center justify-center overflow-hidden">

//                 <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-black opacity-60 z-0"></div>

//                 <div
//                     className="absolute inset-0 z-[-1] bg-cover bg-center"
//                     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=2070&auto=format&fit=crop')" }}
//                 ></div>

//                 <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 items-center">
//                     <div className="text-white max-w-lg mt-20">
//                         <p className="text-sm uppercase tracking-[0.2em] mb-4">A whole new look</p>
//                         <h2 className="text-6xl md:text-7xl font-bold mb-2">BEAUTY</h2>
//                         <h2 className="text-6xl md:text-7xl font-bold mb-6">PRONOUNCED</h2>
//                         <p className="text-gray-200 text-sm leading-relaxed mb-8 opacity-90">
//                             We craft skincare and cosmetics that highlight your natural glow, bringing confidence to every expression. Subtle, refined, and effortlessly radiant—this is beauty, pronounced.
//                         </p>
//                         <button className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
//                             View More
//                         </button>
//                     </div>

//                     <div></div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Header;


// "use client";

// import React, { useState, useEffect } from 'react';
// import { Share2, Facebook, Instagram, Twitter, ChevronDown, X, Menu, Phone } from 'lucide-react';

// // --- Data extracted from your code & image ---
// const CATEGORIES = [
//     {
//         id: 'bracelets',
//         label: 'BRACELETS',
//         image: 'https://framerusercontent.com/images/DdMSTOefO0YEho190OisMkszb8.png?scale-down-to=512&width=430&height=645',
//         href: '/store-grid/bracelet'
//     },
//     {
//         id: 'earrings',
//         label: 'EARRINGS',
//         image: 'https://framerusercontent.com/images/VUCxKLRtAXtB7J9fhWKrMpxLg.png?width=430&height=645',
//         href: '/store-grid/earring'
//     },
//     {
//         id: 'rings',
//         label: 'RINGS',
//         image: 'https://framerusercontent.com/images/nYmBPU9wzxN2XzOy4Mors5JiA.png?width=430&height=645',
//         href: '/store-grid/rings'
//     },
//     {
//         id: 'necklaces',
//         label: 'NECKLACES',
//         image: 'https://framerusercontent.com/images/ye7CD1FwMK23YrmwGKBxPmwkxs.png?width=430&height=645',
//         href: '/store-grid/necklace'
//     },
//     {
//         id: 'watches',
//         label: 'WATCHES',
//         image: 'https://framerusercontent.com/images/J7D8037iOHxzeluZMHv3T7v8.png?width=430&height=645',
//         href: '/store-grid/watches'
//     }
// ];

// const NAV_LINKS = [
//     { label: 'HOME', href: '/' },
//     { label: 'STORE', href: '/store-grid' },
//     { label: 'CATEGORIES', href: '#', hasDropdown: true },
//     { label: 'ABOUT', href: '/about' },
//     { label: 'CONTACT', href: '/contact' },
// ];

// export default function Header() {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (!event.target.closest('.dropdown-container') && !event.target.closest('.nav-trigger')) {
//                 setIsDropdownOpen(false);
//             }
//         };
//         document.addEventListener('click', handleClickOutside);
//         return () => document.removeEventListener('click', handleClickOutside);
//     }, []);

//     return (
//         <div className="min-h-screen bg-white font-sans text-gray-900">
//             {/* Import Fonts directly into the component for the preview */}
//             <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');

//         .font-serif { font-family: 'Playfair Display', serif; }
//         .font-sans { font-family: 'Inter', sans-serif; }
//       `}</style>

//             {/* --- Top Bar --- */}
//             <div className="w-full border-b border-gray-100 bg-white">
//                 <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-10 flex items-center justify-between text-xs md:text-sm text-gray-600">
//                     <div className="flex items-center gap-2 hover:text-black cursor-pointer transition-colors">
//                         <Share2 size={14} />
//                         <span>Join the Social Club for exclusive Rewards</span>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         <a href="#" className="hover:text-black transition-colors"><Twitter size={14} /></a>
//                         <a href="#" className="hover:text-black transition-colors"><Instagram size={14} /></a>
//                         <a href="#" className="hover:text-black transition-colors"><Facebook size={14} /></a>
//                     </div>
//                 </div>
//             </div>

//             {/* --- Main Header Area --- */}
//             <header className="relative bg-white z-50">

//                 {/* Logo Section */}
//                 <div className="flex justify-center items-center py-6 md:py-8">
//                     <a href="/" className="font-serif text-3xl md:text-4xl tracking-wider text-black font-medium">
//                         AXELS
//                     </a>
//                 </div>

//                 {/* Navigation Bar */}
//                 <div className="border-t border-gray-100 relative">
//                     <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* Left: Phone */}
//                         <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-800">
//                             <span>( +123 ) 456 7890</span>
//                         </div>

//                         {/* Center: Nav Links */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div key={link.label} className="relative group">
//                                     <a
//                                         href={link.href}
//                                         className={`nav-trigger text-xs font-bold tracking-widest hover:text-gray-600 transition-colors flex items-center gap-1 py-4 uppercase ${link.label === 'CATEGORIES' ? 'cursor-pointer' : ''}`}
//                                         onClick={(e) => {
//                                             if (link.hasDropdown) {
//                                                 e.preventDefault();
//                                                 setIsDropdownOpen(!isDropdownOpen);
//                                             }
//                                         }}
//                                         onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </a>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* Right: Support */}
//                         <div className="hidden md:flex items-center text-sm font-medium text-gray-800 hover:text-blue-500 hover:underline cursor-pointer">
//                             Customer Support
//                         </div>

//                         {/* Mobile Menu Toggle */}
//                         <div className="md:hidden flex items-center justify-between w-full">
//                             <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-gray-800">
//                                 <Phone size={16} />
//                             </a>
//                             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden z-40 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//                             }`}
//                         onMouseEnter={() => setIsDropdownOpen(true)}
//                         onMouseLeave={() => setIsDropdownOpen(false)}
//                     >
//                         <div className="max-w-[1400px] mx-auto px-8 py-12">
//                             <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//                                 {CATEGORIES.map((category) => (
//                                     <a
//                                         href={category.href}
//                                         key={category.id}
//                                         className="group block text-center"
//                                     >
//                                         <div className="relative overflow-hidden mb-6 aspect-[2/3] bg-gray-50">
//                                             <img
//                                                 src={category.image}
//                                                 alt={category.label}
//                                                 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                             />
//                                             {/* Optional Overlay */}
//                                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                         </div>
//                                         <h3 className="font-serif text-lg tracking-[0.2em] text-gray-900 group-hover:text-gray-600 transition-colors">
//                                             {category.label}
//                                         </h3>
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (Simple Stack) --- */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.label}>
//                                 <a href={link.href} className="block text-sm font-bold tracking-widest py-2">
//                                     {link.label}
//                                 </a>
//                                 {/* Mobile Submenu for Categories */}
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {CATEGORIES.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1">
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}

//             </header>


//         </div>
//     );
// }

/////////////////////// working /////////////


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { Share2, Facebook, Instagram, Twitter, ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';

// // --- Data extracted from your code & image ---
// const CATEGORIES = [
//     {
//         id: 'bracelets',
//         label: 'BRACELETS',
//         image: 'https://framerusercontent.com/images/DdMSTOefO0YEho190OisMkszb8.png?scale-down-to=512&width=430&height=645',
//         href: '/store-grid/bracelet'
//     },
//     {
//         id: 'earrings',
//         label: 'EARRINGS',
//         image: 'https://framerusercontent.com/images/VUCxKLRtAXtB7J9fhWKrMpxLg.png?width=430&height=645',
//         href: '/store-grid/earring'
//     },
//     {
//         id: 'rings',
//         label: 'RINGS',
//         image: 'https://framerusercontent.com/images/nYmBPU9wzxN2XzOy4Mors5JiA.png?width=430&height=645',
//         href: '/store-grid/rings'
//     },
//     {
//         id: 'necklaces',
//         label: 'NECKLACES',
//         image: 'https://framerusercontent.com/images/ye7CD1FwMK23YrmwGKBxPmwkxs.png?width=430&height=645',
//         href: '/store-grid/necklace'
//     },
//     {
//         id: 'watches',
//         label: 'WATCHES',
//         image: 'https://framerusercontent.com/images/J7D8037iOHxzeluZMHv3T7v8.png?width=430&height=645',
//         href: '/store-grid/watches'
//     }
// ];

// const NAV_LINKS = [
//     { label: 'HOME', href: '/' },
//     { label: 'About', href: '/store-grid' },
//     { label: 'CATEGORIES', href: 'category', hasDropdown: true },
//     { label: 'Product', href: '/about' },
//     { label: 'Brand', href: '/contact' },
//     { label: 'Retail', href: '/contact' },
//     { label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Removed the useEffect for handling click outside, as we are now using onMouseLeave/onMouseEnter for desktop.
//     // However, the mobile menu state is fine as is.

//     return (
//         <div className=" bg-white text-gray-900">

//             {/* --- Main Header Area --- */}
//             <header className="relative bg-white z-50">

//                 {/* Logo Section */}
//                 <div className="flex justify-center items-center py-6 md:py-6">
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             className="h-9 md:h-12" /* Adjust height as needed */
//                         />
//                     </Link>
//                 </div>

//                 {/* Navigation Bar */}
//                 <div className="border-t border-gray-100 relative">
//                     <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* Left: Phone */}
//                         <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-800">
//                             <span>( +123 ) 456 7890</span>
//                         </div>

//                         {/* Center: Nav Links */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.label}
//                                     className="relative group"
//                                     // ADDED onMouseLeave to close the dropdown when leaving the link area
//                                     onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
//                                 >
//                                     <a
//                                         href={link.href}
//                                         className={`nav-trigger text-xs font-bold tracking-widest hover:text-gray-600 transition-colors flex items-center gap-1 py-4 uppercase ${link.label === 'CATEGORIES' ? 'cursor-pointer' : ''}`}
//                                         // REMOVED onClick handler
//                                         onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </a>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* Right: Support */}
//                         <div className="hidden md:flex items-center text-sm font-medium text-gray-800 hover:text-blue-500 hover:underline cursor-pointer">
//                             Location
//                         </div>

//                         {/* Mobile Menu Toggle */}
//                         <div className="md:hidden flex items-center justify-between w-full">
//                             <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-gray-800">
//                                 <Phone size={16} />
//                             </a>
//                             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden z-40 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//                             }`}
//                         onMouseEnter={() => setIsDropdownOpen(true)}
//                         onMouseLeave={() => setIsDropdownOpen(false)}
//                     >
//                         <div className="max-w-[1400px] mx-auto px-8 py-12">
//                             <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//                                 {CATEGORIES.map((category) => (
//                                     <a
//                                         href={category.href}
//                                         key={category.id}
//                                         className="group block text-center"
//                                     >
//                                         <div className="relative overflow-hidden mb-6 aspect-[2/3] bg-gray-50">
//                                             <img
//                                                 src={category.image}
//                                                 alt={category.label}
//                                                 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                             />
//                                             {/* Optional Overlay */}
//                                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                         </div>
//                                         <h3 className=" text-lg tracking-[0.2em] text-gray-900 group-hover:text-gray-600 transition-colors">
//                                             {category.label}
//                                         </h3>
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (Simple Stack) --- */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.label}>
//                                 <a href={link.href} className="block text-sm font-bold tracking-widest py-2">
//                                     {link.label}
//                                 </a>
//                                 {/* Mobile Submenu for Categories */}
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {CATEGORIES.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1">
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}

//             </header>


//         </div>
//     );
// }

//////////////////////// alll working ///////////////////////////

// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { Share2, Facebook, Instagram, Twitter, ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';

// // --- Data extracted from your code & image ---
// const CATEGORIES = [
//     {
//         id: 'bracelets',
//         label: 'Retail',
//         image: '/dummy-image/al-jubail-souk-sharjah.jpg',
//         href: '/store-grid/bracelet'
//     },
//     {
//         id: 'earrings',
//         label: 'Food',
//         image: '/dummy-image/man-shopping-with-mask-side-view.jpg',
//         href: '/store-grid/earring'
//     },
//     {
//         id: 'rings',
//         label: 'Non Food',
//         image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg',
//         href: '/store-grid/rings'
//     },
//     {
//         id: 'necklaces',
//         label: 'Commodities',
//         image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg',
//         href: '/store-grid/necklace'
//     },
//     {
//         id: 'watches',
//         label: 'Disposable',
//         image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg',
//         href: '/store-grid/watches'
//     }
// ];

// const NAV_LINKS = [
//     { label: 'HOME', href: '/' },
//     { label: 'About', href: '/store-grid' },
//     { label: 'CATEGORIES', href: 'category', hasDropdown: true },
//     { label: 'Product', href: '/about' },
//     { label: 'Brand', href: '/contact' },
//     { label: 'Retail', href: '/contact' },
//     { label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Note: If you want to keep the header visible when scrolling, change 'absolute' to 'fixed'.

//     return (
//         // 1. Made the header container absolute, full width, and gave it high z-index and white text color.
//         <div className="absolute top-0 left-0 w-full z-50 text-white">

//             {/* --- Main Header Area --- */}
//             {/* Removed bg-white here */}
//             <header className="relative z-50">

//                 {/* Logo Section */}
//                 <div className="flex justify-center items-center py-6 md:py-6">
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"

//                             className="h-9 md:h-12 filter brightness-0 invert"
//                         />
//                     </Link>
//                 </div>

//                 {/* Navigation Bar */}
//                 {/* 3. Changed border color to a transparent white */}
//                 <div className="border-t border-white/20 relative">
//                     <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* Left: Phone - Changed text color to white */}
//                         <div className="hidden md:flex items-center gap-2 text-sm font-medium text-white">
//                             <span>( +123 ) 456 7890</span>
//                         </div>

//                         {/* Center: Nav Links - Changed hover color for transparency */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.label}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
//                                 >
//                                     <a
//                                         href={link.href}
//                                         // Set link text to white and hover to light gray
//                                         className={`nav-trigger text-xs font-bold tracking-widest text-white hover:text-white/70 transition-colors flex items-center gap-1 py-4 uppercase ${link.label === 'CATEGORIES' ? 'cursor-pointer' : ''}`}
//                                         onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </a>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* Right: Support - Changed text color to white */}
//                         <div className="hidden md:flex items-center text-sm font-medium text-white hover:text-blue-200 hover:underline cursor-pointer">
//                             Location
//                         </div>

//                         {/* Mobile Menu Toggle - Changed icon color to white */}
//                         <div className="md:hidden flex items-center justify-between w-full text-white">
//                             <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-white">
//                                 <Phone size={16} />
//                             </a>
//                             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     {/* Kept background white for sub-menu readability */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden z-40 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//                             }`}
//                         onMouseEnter={() => setIsDropdownOpen(true)}
//                         onMouseLeave={() => setIsDropdownOpen(false)}
//                     >
//                         <div className="max-w-[1400px] mx-auto px-8 py-12">
//                             <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//                                 {CATEGORIES.map((category) => (
//                                     <a
//                                         href={category.href}
//                                         key={category.id}
//                                         className="group block text-center"
//                                     >
//                                         <div className="relative overflow-hidden mb-6 aspect-[2/3] bg-gray-50">
//                                             <img
//                                                 src={category.image}
//                                                 alt={category.label}
//                                                 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                             />
//                                             {/* Optional Overlay */}
//                                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                         </div>
//                                         {/* Ensure category text remains dark for contrast with white dropdown background */}
//                                         <h3 className=" text-lg tracking-[0.2em] text-gray-900 group-hover:text-gray-600 transition-colors">
//                                             {category.label}
//                                         </h3>
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (Simple Stack) --- */}
//                 {isMobileMenuOpen && (
//                     // Kept background white for mobile menu readability
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.label}>
//                                 <a href={link.href} className="block text-sm font-bold tracking-widest py-2 text-gray-900">
//                                     {link.label}
//                                 </a>
//                                 {/* Mobile Submenu for Categories */}
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {CATEGORIES.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1">
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}

//             </header>


//         </div>
//     );
// }


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState } from 'react';
// import { Share2, Facebook, Instagram, Twitter, ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';

// // --- Data extracted from your code & image ---
// const CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/al-jubail-souk-sharjah.jpg',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/dummy-image/man-shopping-with-mask-side-view.jpg',
//         href: '/store-grid/food'
//     },
//     {
//         id: 'non-food',
//         label: 'Non Food',
//         image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg',
//         href: '/store-grid/non-food'
//     },
//     {
//         id: 'commodities',
//         label: 'Commodities',
//         image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg',
//         href: '/store-grid/commodities'
//     },
//     {
//         id: 'disposable',
//         label: 'Disposable',
//         image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg',
//         href: '/store-grid/disposable'
//     }
// ];

// // --- NEW DATA FOR PRODUCT DROPDOWN ---
// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Fresh Produce', image: '/dummy-image/al-jubail-souk-sharjah.jpg', href: '/products/fresh' },
//     { id: 'frozen', label: 'Frozen Goods', image: '/dummy-image/man-shopping-with-mask-side-view.jpg', href: '/products/frozen' },
//     { id: 'packaged', label: 'Packaged Foods', image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg', href: '/products/packaged' },
//     { id: 'clothing', label: 'Clothing/Apparel', image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg', href: '/products/clothing' },
//     { id: 'electronics', label: 'Electronics', image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg', href: '/products/electronics' }
// ];


// // --- UPDATED NAV_LINKS with IDs and Product dropdown enabled ---
// const NAV_LINKS = [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/store-grid' },
//     { id: 'categories', label: 'CATEGORIES', href: 'category', hasDropdown: true, categories: CATEGORIES }, // Added ID and category data reference
//     { id: 'products', label: 'Product', href: 'product', hasDropdown: true, categories: PRODUCT_CATEGORIES }, // Added ID, hasDropdown: true, and product data
//     { id: 'brand', label: 'Brand', href: '/contact' },
//     { id: 'retail', label: 'Retail', href: '/contact' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     // 💡 CHANGED: Use a string state to track which dropdown is currently active (or null)
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Get the categories for the currently active dropdown
//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     // Note: If you want to keep the header visible when scrolling, change 'absolute' to 'fixed'.

//     return (
//         // 1. Made the header container absolute, full width, and gave it high z-index and white text color.
//         <div className="absolute top-0 left-0 w-full z-50 text-white">

//             {/* --- Main Header Area --- */}
//             {/* Removed bg-white here */}
//             <header className="relative z-50">

//                 {/* Logo Section */}
//                 <div className="flex justify-center items-center py-3 md:py-3">
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"

//                             className="h-9 md:h-12 filter brightness-0 invert"
//                         />
//                     </Link>
//                 </div>

//                 {/* Navigation Bar */}
//                 {/* 3. Changed border color to a transparent white */}
//                 <div className="border-t border-white/20 relative">
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* Left: Phone - Changed text color to white */}
//                         <div className="hidden md:flex items-center gap-2 text-sm text-white">
//                             <span>( +123 ) 456 7890</span>
//                         </div>

//                         {/* Center: Nav Links - Changed hover color for transparency */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     // 💡 UPDATED: Set activeDropdown to null on mouse leave
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <a
//                                         href={link.href}
//                                         // Set link text to white and hover to light gray
//                                         className={`nav-trigger text-xs tracking-widest text-white hover:text-white/70 transition-colors flex items-center gap-1 py-4 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}`}
//                                         // 💡 UPDATED: Set activeDropdown to the link ID on mouse enter
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 // 💡 UPDATED: Check if this specific link ID is active
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </a>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* Right: Support - Changed text color to white */}
//                         <div className="hidden md:flex items-center text-sm text-white hover:text-blue-200 cursor-pointer">
//                             Location
//                         </div>

//                         {/* Mobile Menu Toggle - Changed icon color to white */}
//                         <div className="md:hidden flex items-center justify-between w-full text-white">
//                             <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-white">
//                                 <Phone size={16} />
//                             </a>
//                             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Now handles both CATEGORIES and PRODUCTS) --- */}
//                     {/* Kept background white for sub-menu readability */}
//                     <div
//                         // 💡 UPDATED: Check if ANY dropdown is active
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out overflow-hidden z-40 ${activeDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="max-w-[1400px] mx-auto px-8 py-12">
//                             {/* 💡 UPDATED: Render the content based on activeDropdownContent */}
//                             <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//                                 {activeDropdownContent.map((category) => (
//                                     <a
//                                         href={category.href}
//                                         key={category.id}
//                                         className="group block text-center"
//                                     >
//                                         <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                             <img
//                                                 src={category.image}
//                                                 alt={category.label}
//                                                 className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                             />
//                                             {/* Optional Overlay */}
//                                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                         </div>
//                                         {/* Ensure category text remains dark for contrast with white dropdown background */}
//                                         <h3 className=" text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                             {category.label}
//                                         </h3>
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (Simple Stack) --- */}
//                 {isMobileMenuOpen && (
//                     // Kept background white for mobile menu readability
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <a href={link.href} className="block text-sm font-bold tracking-widest py-2 text-gray-900">
//                                     {link.label}
//                                 </a>
//                                 {/* Mobile Submenu for Categories/Products */}
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {/* 💡 UPDATED: Use the categories data stored directly in the link object */}
//                                         {link.categories.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1">
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}

//             </header>


//         </div>
//     );
// }


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState } from 'react';
// import { Share2, Facebook, Instagram, Twitter, ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';

// // --- DATA CONSTANTS ---
// const CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/al-jubail-souk-sharjah.jpg',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/dummy-image/man-shopping-with-mask-side-view.jpg',
//         href: '/store-grid/food'
//     },
//     {
//         id: 'non-food',
//         label: 'Non Food',
//         image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg',
//         href: '/store-grid/non-food'
//     },
//     {
//         id: 'commodities',
//         label: 'Commodities',
//         image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg',
//         href: '/store-grid/commodities'
//     },
//     {
//         id: 'disposable',
//         label: 'Disposable',
//         image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg',
//         href: '/store-grid/disposable'
//     }
// ];

// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Fresh Produce', image: '/dummy-image/al-jubail-souk-sharjah.jpg', href: '/products/fresh' },
//     { id: 'frozen', label: 'Frozen Goods', image: '/dummy-image/man-shopping-with-mask-side-view.jpg', href: '/products/frozen' },
//     { id: 'packaged', label: 'Packaged Foods', image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg', href: '/products/packaged' },
//     { id: 'clothing', label: 'Clothing/Apparel', image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg', href: '/products/clothing' },
//     { id: 'electronics', label: 'Electronics', image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg', href: '/products/electronics' }
// ];

// const NAV_LINKS = [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/store-grid' },
//     { id: 'categories', label: 'CATEGORIES', href: 'category', hasDropdown: true, categories: CATEGORIES },
//     { id: 'products', label: 'Product', href: 'product', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '/contact' },
//     { id: 'retail', label: 'Retail', href: '/contact' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Get the categories for the currently active dropdown
//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         <div className="absolute top-0 left-0 w-full z-50 text-white">

//             {/* --- Main Header Area --- */}
//             <header className="relative z-50">

//                 {/* Logo Section */}
//                 <div className="flex justify-center items-center py-3 md:py-3">
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             className="h-9 md:h-12 filter brightness-0 invert"
//                         />
//                     </Link>
//                 </div>

//                 {/* Navigation Bar */}
//                 <div className="border-t border-white/20 relative">
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* Left: Phone */}
//                         <div className="hidden md:flex items-center gap-2 text-sm text-white">
//                             <span>( +123 ) 456 7890</span>
//                         </div>

//                         {/* Center: Nav Links */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <a
//                                         href={link.href}
//                                         className={`nav-trigger text-xs tracking-widest text-white hover:text-white/70 transition-colors flex items-center gap-1 py-4 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </a>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* Right: Support */}
//                         <div className="hidden md:flex items-center text-sm text-white hover:text-blue-200 cursor-pointer">
//                             Location
//                         </div>

//                         {/* Mobile Menu Toggle */}
//                         <div className="md:hidden flex items-center justify-between w-full text-white">
//                             <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-white">
//                                 <Phone size={16} />
//                             </a>
//                             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Updated with Grid Animation) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         {/* Inner wrapper required for grid animation */}
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-12">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//                                     {activeDropdownContent.map((category) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <a href={link.href} className="block text-sm font-bold tracking-widest py-2 text-gray-900">
//                                     {link.label}
//                                 </a>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1">
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }

/////////////////////////////// all working /////////////

// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';

// // --- DATA CONSTANTS ---
// const CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/al-jubail-souk-sharjah.jpg',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/dummy-image/man-shopping-with-mask-side-view.jpg',
//         href: '/store-grid/food'
//     },
//     {
//         id: 'non-food',
//         label: 'Non Food',
//         image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg',
//         href: '/store-grid/non-food'
//     },
//     {
//         id: 'commodities',
//         label: 'Commodities',
//         image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg',
//         href: '/store-grid/commodities'
//     },
//     {
//         id: 'disposable',
//         label: 'Disposable',
//         image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg',
//         href: '/store-grid/disposable'
//     }
// ];

// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Fresh Produce', image: '/dummy-image/al-jubail-souk-sharjah.jpg', href: '/products/fresh' },
//     { id: 'frozen', label: 'Frozen Goods', image: '/dummy-image/man-shopping-with-mask-side-view.jpg', href: '/products/frozen' },
//     { id: 'packaged', label: 'Packaged Foods', image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg', href: '/products/packaged' },
//     { id: 'clothing', label: 'Clothing/Apparel', image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg', href: '/products/clothing' },
//     { id: 'electronics', label: 'Electronics', image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg', href: '/products/electronics' }
// ];

// const NAV_LINKS = [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '#about' },
//     { id: 'categories', label: 'CATEGORIES', href: '#categories', hasDropdown: true, categories: CATEGORIES },
//     { id: 'products', label: 'Product', href: '#products', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '#brand' },
//     { id: 'retail', label: 'Retail', href: '#retail' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // Get the categories for the currently active dropdown
//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         <div className="absolute top-0 left-0 w-full z-50 text-white">

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className="relative z-50">

//                 {/* Logo Section */}
//                 <div className="flex justify-center items-center py-3 md:py-3">
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             className="h-9 md:h-12 filter brightness-0 invert"
//                         />
//                     </Link>
//                 </div>

//                 {/* Navigation Bar */}
//                 <div className="border-t border-white/20 relative">
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* Left: Phone */}
//                         <div className="hidden md:flex items-center gap-2 text-sm text-white">
//                             <span>+971 42255765</span>
//                         </div>

//                         {/* Center: Nav Links */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <a
//                                         href={link.href}
//                                         className={`nav-trigger text-xs tracking-widest text-white hover:text-white/70 transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </a>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* Right: Support */}
//                         <div className="hidden md:flex items-center text-sm text-white hover:text-blue-200 cursor-pointer">
//                             Location
//                         </div>

//                         {/* Mobile Menu Toggle */}
//                         <div className="md:hidden flex items-center justify-between w-full text-white">
//                             <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-white">
//                                 <Phone size={16} />
//                             </a>
//                             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         {/* Inner wrapper required for grid animation */}
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-12">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             // INLINE STYLES FOR ANIMATION:
//                                             // 1. opacity: 0 ensures it's hidden before the delay finishes.
//                                             // 2. animation uses the 'slideUpFade' keyframes we defined above.
//                                             // 3. forwards keeps the element visible after animation ends.
//                                             style={{
//                                                 opacity: 0,
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms` // The delay creates the wave effect
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <a href={link.href} className="block text-sm font-bold tracking-widest py-2 text-gray-900">
//                                     {link.label}
//                                 </a>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1">
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }



// "use client";

// import React, { useState, useEffect } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';

// // --- DATA CONSTANTS ---
// const CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/al-jubail-souk-sharjah.jpg',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/dummy-image/man-shopping-with-mask-side-view.jpg',
//         href: '/store-grid/food'
//     },
//     {
//         id: 'non-food',
//         label: 'Non Food',
//         image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg',
//         href: '/store-grid/non-food'
//     },
//     {
//         id: 'commodities',
//         label: 'Commodities',
//         image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg',
//         href: '/store-grid/commodities'
//     },
//     {
//         id: 'disposable',
//         label: 'Disposable',
//         image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg',
//         href: '/store-grid/disposable'
//     }
// ];

// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Fresh Produce', image: '/dummy-image/al-jubail-souk-sharjah.jpg', href: '/products/fresh' },
//     { id: 'frozen', label: 'Frozen Goods', image: '/dummy-image/man-shopping-with-mask-side-view.jpg', href: '/products/frozen' },
//     { id: 'packaged', label: 'Packaged Foods', image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg', href: '/products/packaged' },
//     { id: 'clothing', label: 'Clothing/Apparel', image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg', href: '/products/clothing' },
//     { id: 'electronics', label: 'Electronics', image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg', href: '/products/electronics' }
// ];

// const NAV_LINKS = [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '#about' },
//     { id: 'categories', label: 'CATEGORIES', href: '#categories', hasDropdown: true, categories: CATEGORIES },
//     { id: 'products', label: 'Product', href: '#products', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '#brand' },
//     { id: 'retail', label: 'Retail', href: '#retail' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [pathname, setPathname] = useState('/');

//     useEffect(() => {
//         // Safe check for window object availability (avoids SSR errors)
//         if (typeof window !== 'undefined') {
//             setPathname(window.location.pathname);
//         }
//     }, []);

//     // Determine if we are on the home page (or default path in preview)
//     const isHomePage = pathname === '/' || pathname === '';

//     // Get the categories for the currently active dropdown
//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     // --- Dynamic Styles based on Route ---
//     const containerClasses = isHomePage
//         ? "absolute top-0 left-0 w-full z-50 text-white bg-transparent"
//         : "relative w-full z-50 text-gray-900 bg-white shadow-sm";

//     const logoClasses = isHomePage
//         ? "h-9 md:h-12 filter brightness-0 invert" // White logo
//         : "h-9 md:h-12"; // Original logo color

//     const borderClass = isHomePage
//         ? "border-white/20"
//         : "border-gray-200";

//     const linkTextClass = isHomePage
//         ? "text-white hover:text-white/70"
//         : "text-gray-900 hover:text-gray-600";

//     return (
//         <div className={containerClasses}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className="relative z-50">

//                 {/* Logo Section */}
//                 <div className="flex justify-center items-center py-3 md:py-3">
//                     <a href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             className={logoClasses}
//                         />
//                     </a>
//                 </div>

//                 {/* Navigation Bar */}
//                 <div className={`border-t ${borderClass} relative transition-colors duration-300`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* Left: Phone */}
//                         <div className={`hidden md:flex items-center gap-2 text-sm ${isHomePage ? 'text-white' : 'text-gray-900'}`}>
//                             <span>+971 42255765</span>
//                         </div>

//                         {/* Center: Nav Links */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <a
//                                         href={link.href}
//                                         className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${linkTextClass} ${link.hasDropdown ? 'cursor-pointer' : ''}`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </a>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* Right: Support */}
//                         <div className={`hidden md:flex items-center text-sm cursor-pointer ${isHomePage ? 'text-white hover:text-blue-200' : 'text-gray-900 hover:text-blue-600'}`}>
//                             Location
//                         </div>

//                         {/* Mobile Menu Toggle */}
//                         <div className={`md:hidden flex items-center justify-between w-full ${isHomePage ? 'text-white' : 'text-gray-900'}`}>
//                             <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium">
//                                 <Phone size={16} />
//                             </a>
//                             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         {/* Inner wrapper required for grid animation */}
//                         <div className="overflow-hidden min-h-0 text-left">
//                             <div className="max-w-[1400px] mx-auto px-8 py-12">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             style={{
//                                                 opacity: 0,
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4 text-left">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <a href={link.href} className="block text-sm font-bold tracking-widest py-2 text-gray-900">
//                                     {link.label}
//                                 </a>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1">
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation'; // 1. Import usePathname

// // --- DATA CONSTANTS ---
// const CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/al-jubail-souk-sharjah.jpg',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/dummy-image/man-shopping-with-mask-side-view.jpg',
//         href: '/store-grid/food'
//     },
//     {
//         id: 'non-food',
//         label: 'Non Food',
//         image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg',
//         href: '/store-grid/non-food'
//     },
//     {
//         id: 'commodities',
//         label: 'Commodities',
//         image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg',
//         href: '/store-grid/commodities'
//     },
//     {
//         id: 'disposable',
//         label: 'Disposable',
//         image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg',
//         href: '/store-grid/disposable'
//     }
// ];

// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Fresh Produce', image: '/dummy-image/al-jubail-souk-sharjah.jpg', href: '/products/fresh' },
//     { id: 'frozen', label: 'Frozen Goods', image: '/dummy-image/man-shopping-with-mask-side-view.jpg', href: '/products/frozen' },
//     { id: 'packaged', label: 'Packaged Foods', image: '/dummy-image/ALFAMART-NON-FOOD-1.jpg', href: '/products/packaged' },
//     { id: 'clothing', label: 'Clothing/Apparel', image: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg', href: '/products/clothing' },
//     { id: 'electronics', label: 'Electronics', image: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg', href: '/products/electronics' }
// ];

// const NAV_LINKS = [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '#about' },
//     { id: 'categories', label: 'CATEGORIES', href: '#categories', hasDropdown: true, categories: CATEGORIES },
//     { id: 'products', label: 'Product', href: '#products', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '#brand' },
//     { id: 'retail', label: 'Retail', href: '#retail' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // 2. Determine if we are on the Home Page
//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // Get the categories for the currently active dropdown
//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         // 3. Update Wrapper text color based on page
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             {/* 4. Update Header Background based on page */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Logo Section */}
//                 <div className="flex justify-center items-center py-3 md:py-3">
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             // 5. Update Logo Filter: Invert (White) on Home, Brightness-0 (Black) on others
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert' : ''}`}
//                         />
//                     </Link>
//                 </div>

//                 {/* Navigation Bar */}
//                 {/* 6. Update Border color based on page */}
//                 <div className={`border-t relative ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* Left: Phone */}
//                         <div className="hidden md:flex items-center gap-2 text-sm">
//                             <span>+971 42255765</span>
//                         </div>

//                         {/* Center: Nav Links */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <a
//                                         href={link.href}
//                                         // 7. Update Nav Text Colors based on page
//                                         className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                         ${isHomePage
//                                                 ? 'text-white hover:text-white/70'
//                                                 : 'text-gray-900 hover:text-gray-600'
//                                             }`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </a>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* Right: Support */}
//                         <div className={`hidden md:flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>
//                             Location
//                         </div>

//                         {/* Mobile Menu Toggle */}
//                         {/* Mobile toggle inherits parent text color, so it works automatically */}
//                         <div className="md:hidden flex items-center justify-between w-full">
//                             <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium">
//                                 <Phone size={16} />
//                             </a>
//                             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     {/* Dropdown styles remain untouched (bg-white, text-gray) as requested */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         {/* Inner wrapper required for grid animation */}
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-12">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             style={{
//                                                 opacity: 0,
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <a href={link.href} className="block text-sm font-bold tracking-widest py-2 text-gray-900">
//                                     {link.label}
//                                 </a>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1">
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }

/////////////////// working header ////////////////

// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// // --- DATA CONSTANTS ---
// const CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         href: '/store-grid/food'
//     },
//     {
//         id: 'non-food',
//         label: 'Non Food',
//         image: '/category/Gemini_Generated_Image_3joxeu3joxeu3jox.png',
//         href: '/store-grid/non-food'
//     },
//     {
//         id: 'commodities',
//         label: 'Commodities',
//         image: '/category/Gemini_Generated_Image_vw0wrzvw0wrzvw0w.png',
//         href: '/store-grid/commodities'
//     },
//     {
//         id: 'disposable',
//         label: 'Disposable',
//         image: '/category/Gemini_Generated_Image_c9cxf2c9cxf2c9cx.png',
//         href: '/store-grid/disposable'
//     }
// ];

// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Household Cleaning', image: "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png", href: '/products/fresh' },
//     { id: 'frozen', label: 'Edible Products', image: '/dummy-image/Gemini_Generated_Image_8j3yai8j3yai8j3y.png', href: '/products/frozen' },
//     { id: 'packaged', label: 'Dairy Products', image: '/dummy-image/Gemini_Generated_Image_rrqw3prrqw3prrqw.png', href: '/products/packaged' },
//     { id: 'clothing', label: 'Baby Products', image: '/dummy-image/Gemini_Generated_Image_x76mrdx76mrdx76m.png', href: '/products/clothing' },
//     { id: 'electronics', label: 'Tea & coffee', image: '/dummy-image/Gemini_Generated_Image_rigiv7rigiv7rigi.png', href: '/products/electronics' }
// ];

// const NAV_LINKS = [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: CATEGORIES },
//     { id: 'products', label: 'Product', href: '/products', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '#brand' },
//     { id: 'retail', label: 'Retail', href: '#retail' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // 1. Get current path to check if we are on Home Page
//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // 2. Helper function to fix hash links when not on home page
//     // (e.g., changes "#brand" to "/#brand" if you are on "/contact")
//     const getLinkHref = (href: string) => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Get the categories for the currently active dropdown
//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         // 3. Dynamic Text Color Wrapper
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             {/* 4. Dynamic Background Color */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Logo Section */}
//                 <div className="flex justify-center items-center py-3 md:py-3">
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             // 5. Dynamic Logo Filter (Invert on Home, Normal on others)
//                             // className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert' : ''}`}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>
//                 </div>

//                 {/* Navigation Bar */}
//                 {/* 6. Dynamic Border Color */}
//                 <div className={`border-t relative ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* Left: Phone */}
//                         <div className="hidden md:flex items-center gap-2 text-sm">
//                             <span>+971 42255765</span>
//                         </div>

//                         {/* Center: Nav Links */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <Link
//                                         // 7. Use getLinkHref here
//                                         href={getLinkHref(link.href)}
//                                         className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                         ${isHomePage
//                                                 ? 'text-white hover:text-white/70'
//                                                 : 'text-gray-900 hover:text-gray-600'
//                                             }`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </Link>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* Right: Support */}
//                         <div className={`hidden md:flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>
//                             Location
//                         </div>

//                         {/* Mobile Menu Toggle */}
//                         <div className="md:hidden flex items-center justify-between w-full">
//                             <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium">
//                                 <Phone size={16} />
//                             </a>
//                             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         {/* Inner wrapper required for grid animation */}
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             style={{
//                                                 opacity: 0,
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     // 8. Use getLinkHref here
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1">
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }




// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// // --- DATA CONSTANTS ---
// const CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         href: '/store-grid/food'
//     },
//     {
//         id: 'non-food',
//         label: 'Non Food',
//         image: '/category/Gemini_Generated_Image_3joxeu3joxeu3jox.png',
//         href: '/store-grid/non-food'
//     },
//     {
//         id: 'commodities',
//         label: 'Commodities',
//         image: '/category/Gemini_Generated_Image_vw0wrzvw0wrzvw0w.png',
//         href: '/store-grid/commodities'
//     },
//     {
//         id: 'disposable',
//         label: 'Disposable',
//         image: '/category/Gemini_Generated_Image_c9cxf2c9cxf2c9cx.png',
//         href: '/store-grid/disposable'
//     }
// ];

// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Household Cleaning', image: "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png", href: '/products/fresh' },
//     { id: 'frozen', label: 'Edible Products', image: '/dummy-image/Gemini_Generated_Image_8j3yai8j3yai8j3y.png', href: '/products/frozen' },
//     { id: 'packaged', label: 'Dairy Products', image: '/dummy-image/Gemini_Generated_Image_rrqw3prrqw3prrqw.png', href: '/products/packaged' },
//     { id: 'clothing', label: 'Baby Products', image: '/dummy-image/Gemini_Generated_Image_x76mrdx76mrdx76m.png', href: '/products/clothing' },
//     { id: 'electronics', label: 'Tea & coffee', image: '/dummy-image/Gemini_Generated_Image_rigiv7rigiv7rigi.png', href: '/products/electronics' }
// ];

// const NAV_LINKS = [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: CATEGORIES },
//     { id: 'products', label: 'Product', href: '/products', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '#brand' },
//     { id: 'retail', label: 'Retail', href: '#retail' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // 1. Get current path to check if we are on Home Page
//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // 2. Helper function to fix hash links when not on home page
//     // (e.g., changes "#brand" to "/#brand" if you are on "/contact")
//     const getLinkHref = (href: string) => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Get the categories for the currently active dropdown
//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         // 3. Dynamic Text Color Wrapper
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             {/* 4. Dynamic Background Color */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Logo Section */}
//                 <div className="flex justify-center items-center py-3 md:py-3">
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             // 5. Dynamic Logo Filter (Invert on Home, Normal on others)
//                             // className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert' : ''}`}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>
//                 </div>

//                 {/* Navigation Bar */}
//                 {/* 6. Dynamic Border Color */}
//                 <div className={`border-t relative ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* Left: Phone */}
//                         <div className="hidden md:flex items-center gap-2 text-sm">
//                             <span>+971 42255765</span>
//                         </div>

//                         {/* Center: Nav Links */}
//                         <nav className="hidden md:flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <Link
//                                         // 7. Use getLinkHref here
//                                         href={getLinkHref(link.href)}
//                                         className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                         ${isHomePage
//                                                 ? 'text-white hover:text-white/70'
//                                                 : 'text-gray-900 hover:text-gray-600'
//                                             }`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </Link>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* Right: Support */}
//                         <div className={`hidden md:flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>
//                             Enquire Now
//                         </div>

//                         {/* Mobile Menu Toggle */}
//                         <div className="md:hidden flex items-center justify-between w-full">
//                             <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium">
//                                 <Phone size={16} />
//                             </a>
//                             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                                 {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         {/* Inner wrapper required for grid animation */}
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             style={{
//                                                 opacity: 0,
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     // 8. Use getLinkHref here
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1">
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }

// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// // --- DATA CONSTANTS ---
// const CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         href: '/store-grid/food'
//     },
//     {
//         id: 'non-food',
//         label: 'Non Food',
//         image: '/category/Gemini_Generated_Image_3joxeu3joxeu3jox.png',
//         href: '/store-grid/non-food'
//     },
//     {
//         id: 'commodities',
//         label: 'Commodities',
//         image: '/category/Gemini_Generated_Image_vw0wrzvw0wrzvw0w.png',
//         href: '/store-grid/commodities'
//     },
//     {
//         id: 'disposable',
//         label: 'Disposable',
//         image: '/category/Gemini_Generated_Image_c9cxf2c9cxf2c9cx.png',
//         href: '/store-grid/disposable'
//     }
// ];

// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Household Cleaning', image: "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png", href: '/products/fresh' },
//     { id: 'frozen', label: 'Edible Products', image: '/dummy-image/Gemini_Generated_Image_8j3yai8j3yai8j3y.png', href: '/products/frozen' },
//     { id: 'packaged', label: 'Dairy Products', image: '/dummy-image/Gemini_Generated_Image_rrqw3prrqw3prrqw.png', href: '/products/packaged' },
//     { id: 'clothing', label: 'Baby Products', image: '/dummy-image/Gemini_Generated_Image_x76mrdx76mrdx76m.png', href: '/products/clothing' },
//     { id: 'electronics', label: 'Tea & coffee', image: '/dummy-image/Gemini_Generated_Image_rigiv7rigiv7rigi.png', href: '/products/electronics' }
// ];

// const NAV_LINKS = [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: CATEGORIES },
//     { id: 'products', label: 'Product', href: '/products', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '#brand' },
//     { id: 'retail', label: 'Retail', href: '#retail' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // 1. Get current path to check if we are on Home Page
//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // 2. Helper function to fix hash links when not on home page
//     const getLinkHref = (href: string) => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Get the categories for the currently active dropdown
//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         // 3. Dynamic Text Color Wrapper
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             {/* 4. Dynamic Background Color */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Top Bar for Logo, Phone/Enquire Now, and Mobile Toggle */}
//                 <div className="flex items-center justify-between py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Desktop) / Phone (Mobile) */}
//                     <div className="hidden md:flex items-center gap-2 text-sm">
//                         <span>+971 42255765</span>
//                     </div>
//                     <a href="tel:+1234567890" className="md:hidden flex items-center gap-2 text-sm font-medium">
//                         <Phone size={16} />
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-auto md:transform-none">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>

//                     {/* Right: Enquire Now (Desktop/Large) / Mobile Menu Toggle */}
//                     <div className="flex items-center gap-4">
//                         {/* Desktop/Large Screen - Enquire Now */}
//                         <div className={`hidden lg:flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>
//                             Enquire Now
//                         </div>

//                         {/* Mobile Menu Toggle */}
//                         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
//                             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                         </button>
//                     </div>

//                     {/* Right: Enquire Now (Tablet/Desktop, but hidden on Mobile/LG) - Placeholder for consistency, moved above */}
//                     <div className={`hidden md:flex lg:hidden items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>
//                         Enquire Now
//                     </div>

//                 </div>

//                 {/* Navigation Bar (Desktop) */}
//                 {/* 6. Dynamic Border Color */}
//                 <div className={`border-t relative hidden md:block ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-center">

//                         {/* Center: Nav Links (Desktop only) */}
//                         <nav className="flex items-center gap-8">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <Link
//                                         // 7. Retaining getLinkHref (Fix for hash links across pages)
//                                         href={getLinkHref(link.href)}
//                                         className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                         ${isHomePage
//                                                 ? 'text-white hover:text-white/70'
//                                                 : 'text-gray-900 hover:text-gray-600'
//                                             }`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </Link>
//                                 </div>
//                             ))}
//                         </nav>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         {/* Inner wrapper required for grid animation */}
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             style={{
//                                                 opacity: 0,
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     // 8. Retaining getLinkHref (Fix for hash links across pages)
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                         <div className="pt-4 border-t border-gray-100">
//                             <a href="#" className="text-sm font-medium text-gray-500">Customer Support</a>
//                         </div>
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }



/////////////////// static version ///////////////////


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// // --- DATA CONSTANTS ---
// const CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         href: '/store-grid/food'
//     },
//     {
//         id: 'non-food',
//         label: 'Non Food',
//         image: '/category/Gemini_Generated_Image_3joxeu3joxeu3jox.png',
//         href: '/store-grid/non-food'
//     },
//     {
//         id: 'commodities',
//         label: 'Commodities',
//         image: '/category/Gemini_Generated_Image_vw0wrzvw0wrzvw0w.png',
//         href: '/store-grid/commodities'
//     },
//     {
//         id: 'disposable',
//         label: 'Disposable',
//         image: '/category/Gemini_Generated_Image_c9cxf2c9cxf2c9cx.png',
//         href: '/store-grid/disposable'
//     }
// ];

// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Household Cleaning', image: "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png", href: '/products/fresh' },
//     { id: 'frozen', label: 'Edible Products', image: '/dummy-image/Gemini_Generated_Image_8j3yai8j3yai8j3y.png', href: '/products/frozen' },
//     { id: 'packaged', label: 'Dairy Products', image: '/dummy-image/Gemini_Generated_Image_rrqw3prrqw3prrqw.png', href: '/products/packaged' },
//     { id: 'clothing', label: 'Baby Products', image: '/dummy-image/Gemini_Generated_Image_x76mrdx76mrdx76m.png', href: '/products/clothing' },
//     { id: 'electronics', label: 'Tea & coffee', image: '/dummy-image/Gemini_Generated_Image_rigiv7rigiv7rigi.png', href: '/products/electronics' }
// ];

// const NAV_LINKS = [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: CATEGORIES },
//     { id: 'products', label: 'Product', href: '/products', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '#brand' },
//     { id: 'retail', label: 'Retail', href: '#retail' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     const getLinkHref = (href: string) => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Top Bar for Logo (Now the *only* element in this row on desktop) */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+1234567890" className="lg:hidden absolute left-4 flex items-center gap-2 text-sm font-medium">
//                         {/* <Phone size={16} /> */}
//                         <span>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (The second row) */}
//                 {/* Dynamic Border Color */}
//                 <div className={`border-t relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     {/* The navigation container is now a flex container with justify-between */}
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number (Moved to the second row) */}
//                         <div className="flex items-center gap-2 text-sm">
//                             <span>+971 42255765</span>
//                         </div>

//                         {/* CENTER: Nav Links (Centered) */}
//                         {/* We use ml-auto mr-auto to center the nav relative to the container,
//                            while the phone/enquire now stay at the edges */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <Link
//                                         href={getLinkHref(link.href)}
//                                         className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                         ${isHomePage
//                                                 ? 'text-white hover:text-white/70'
//                                                 : 'text-gray-900 hover:text-gray-600'
//                                             }`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </Link>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* RIGHT: Enquire Now (Moved to the second row) */}
//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>
//                             Enquire Now
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Unchanged) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         {/* Inner wrapper required for grid animation */}
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             style={{
//                                                 opacity: 0,
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (Unchanged) --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}

//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }




/////////// dynamic version ///////////

// D:\mktgroup\app\components\Header.tsx

// "use client";

// import React, { useState } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// // --- DATA CONSTANTS ---
// const CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         href: '/store-grid/food'
//     },
//     {
//         id: 'non-food',
//         label: 'Non Food',
//         image: '/category/Gemini_Generated_Image_3joxeu3joxeu3jox.png',
//         href: '/store-grid/non-food'
//     },
//     {
//         id: 'commodities',
//         label: 'Commodities',
//         image: '/category/Gemini_Generated_Image_vw0wrzvw0wrzvw0w.png',
//         href: '/store-grid/commodities'
//     },
//     {
//         id: 'disposable',
//         label: 'Disposable',
//         image: '/category/Gemini_Generated_Image_c9cxf2c9cxf2c9cx.png',
//         href: '/store-grid/disposable'
//     }
// ];

// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Household Cleaning', image: "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png", href: '/products/fresh' },
//     { id: 'frozen', label: 'Edible Products', image: '/dummy-image/Gemini_Generated_Image_8j3yai8j3yai8j3y.png', href: '/products/frozen' },
//     { id: 'packaged', label: 'Dairy Products', image: '/dummy-image/Gemini_Generated_Image_rrqw3prrqw3prrqw.png', href: '/products/packaged' },
//     { id: 'clothing', label: 'Baby Products', image: '/dummy-image/Gemini_Generated_Image_x76mrdx76mrdx76m.png', href: '/products/clothing' },
//     { id: 'electronics', label: 'Tea & coffee', image: '/dummy-image/Gemini_Generated_Image_rigiv7rigiv7rigi.png', href: '/products/electronics' }
// ];

// const NAV_LINKS = [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: CATEGORIES },
//     { id: 'products', label: 'Product', href: '/products', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '#brand' },
//     { id: 'retail', label: 'Retail', href: '#retail' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     const getLinkHref = (href: string) => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Top Bar for Logo (Now the *only* element in this row on desktop) */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+1234567890" className="lg:hidden absolute left-4 flex items-center gap-2 text-sm font-medium">
//                         {/* <Phone size={16} /> */}
//                         <span>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (The second row) */}
//                 {/* Dynamic Border Color */}
//                 <div className={`border-t relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     {/* The navigation container is now a flex container with justify-between */}
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number (Moved to the second row) */}
//                         <div className="flex items-center gap-2 text-sm">
//                             <span>+971 42255765</span>
//                         </div>

//                         {/* CENTER: Nav Links (Centered) */}
//                         {/* We use ml-auto mr-auto to center the nav relative to the container,
//                            while the phone/enquire now stay at the edges */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <Link
//                                         href={getLinkHref(link.href)}
//                                         className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                         ${isHomePage
//                                                 ? 'text-white hover:text-white/70'
//                                                 : 'text-gray-900 hover:text-gray-600'
//                                             }`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </Link>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* RIGHT: Enquire Now (Moved to the second row) */}
//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>
//                             Enquire Now
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Unchanged) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         {/* Inner wrapper required for grid animation */}
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             style={{
//                                                 opacity: 0,
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (Unchanged) --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}

//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }



// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// // --- DATA CONSTANTS (Kept for reference, but CATEGORIES will be overwritten) ---

// // Hardcoded CATEGORIES will be replaced by fetched data
// let CATEGORIES = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         href: '/store-grid/retail'
//     },
//     // ... other hardcoded categories
// ];

// const PRODUCT_CATEGORIES = [
//     { id: 'fresh', label: 'Household Cleaning', image: "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png", href: '/products/fresh' },
//     { id: 'frozen', label: 'Edible Products', image: '/dummy-image/Gemini_Generated_Image_8j3yai8j3yai8j3y.png', href: '/products/frozen' },
//     { id: 'packaged', label: 'Dairy Products', image: '/dummy-image/Gemini_Generated_Image_rrqw3prrqw3prrqw.png', href: '/products/packaged' },
//     { id: 'clothing', label: 'Baby Products', image: '/dummy-image/Gemini_Generated_Image_x76mrdx76mrdx76m.png', href: '/products/clothing' },
//     { id: 'electronics', label: 'Tea & coffee', image: '/dummy-image/Gemini_Generated_Image_rigiv7rigiv7rigi.png', href: '/products/electronics' }
// ];

// // The full NAV_LINKS array now depends on the dynamic CATEGORIES state
// const getNavLinks = (dynamicCategories) => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },
//     { id: 'products', label: 'Product', href: '/products', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '#brand' },
//     { id: 'retail', label: 'Retail', href: '#retail' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     // 1. State for dynamic categories
//     const [dynamicCategories, setDynamicCategories] = useState(CATEGORIES); // Start with hardcoded data as fallback/initial state

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // 2. Fetch function
//     const fetchCategories = useCallback(async () => {
//         try {
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();

//             // 3. Transformation logic: Convert API format to component format
//             const transformedCategories = data.categories.map(cat => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 href: `/store-grid/${cat.slug}` // Assumes the slug is used in the href
//             }));

//             setDynamicCategories(transformedCategories);
//         } catch (error) {
//             console.error("Error fetching categories:", error);
//             // Optionally keep the hardcoded data if fetch fails
//         }
//     }, []);

//     // 4. useEffect to run fetch on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]);

//     // Use the function to get the latest navigation links with dynamic categories
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     const getLinkHref = (href: string) => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     const activeDropdownContent = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Top Bar for Logo (Now the *only* element in this row on desktop) */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+1234567890" className="lg:hidden absolute left-4 flex items-center gap-2 text-sm font-medium">
//                         {/* <Phone size={16} /> */}
//                         <span>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <img
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (The second row) */}
//                 {/* Dynamic Border Color */}
//                 <div className={`border-t relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     {/* The navigation container is now a flex container with justify-between */}
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number (Moved to the second row) */}
//                         <div className="flex items-center gap-2 text-sm">
//                             <span>+971 42255765</span>
//                         </div>

//                         {/* CENTER: Nav Links (Centered) */}
//                         {/* We use ml-auto mr-auto to center the nav relative to the container,
//                             while the phone/enquire now stay at the edges */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <Link
//                                         href={getLinkHref(link.href)}
//                                         className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                         ${isHomePage
//                                                 ? 'text-white hover:text-white/70'
//                                                 : 'text-gray-900 hover:text-gray-600'
//                                             }`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </Link>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* RIGHT: Enquire Now (Moved to the second row) */}
//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>
//                             Enquire Now
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Unchanged) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         {/* Inner wrapper required for grid animation */}
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             style={{
//                                                 opacity: 0,
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <img
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (Unchanged) --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a key={cat.id} href={cat.href} className="block text-xs text-gray-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}

//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }



// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }

// // --- DATA CONSTANTS (Initial/Fallback Data) ---
// const PRODUCT_CATEGORIES: CategoryItem[] = [
//     { id: 'fresh', label: 'Household Cleaning', image: "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png", href: '/products/fresh' },
//     { id: 'frozen', label: 'Edible Products', image: '/dummy-image/Gemini_Generated_Image_8j3yai8j3yai8j3y.png', href: '/products/frozen' },
//     { id: 'packaged', label: 'Dairy Products', image: '/dummy-image/Gemini_Generated_Image_rrqw3prrqw3prrqw.png', href: '/products/packaged' },
//     { id: 'clothing', label: 'Baby Products', image: '/dummy-image/Gemini_Generated_Image_x76mrdx76mrdx76m.png', href: '/products/clothing' },
//     { id: 'electronics', label: 'Tea & coffee', image: '/dummy-image/Gemini_Generated_Image_rigiv7rigiv7rigi.png', href: '/products/electronics' }
// ];

// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         href: '/store-grid/food'
//     },
//     // ... add more as needed for a robust initial state
// ];

// /** * Function to construct the NAV_LINKS array using the current dynamic categories state.
//  * This ensures that when dynamicCategories updates, the navigation structure is rebuilt.
//  */
// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },
//     { id: 'products', label: 'Product', href: '/products', hasDropdown: true, categories: PRODUCT_CATEGORIES },
//     { id: 'brand', label: 'Brand', href: '#brand' },
//     { id: 'retail', label: 'Retail', href: '#retail' },
//     { id: 'contact', label: 'Contact', href: '/contact' },
// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 href: `/store-grid/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+1234567890" className="lg:hidden absolute left-4 flex items-center gap-2 text-sm font-medium">
//                         {/* <Phone size={16} /> */}
//                         <span>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) */}
//                 <div className={`border-t relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         <div className="flex items-center gap-2 text-sm">
//                             <span>+971 42255765</span>
//                         </div>

//                         {/* CENTER: Nav Links */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => (
//                                 <div
//                                     key={link.id}
//                                     className="relative group"
//                                     onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                 >
//                                     <Link
//                                         href={getLinkHref(link.href)}
//                                         className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                         ${isHomePage
//                                                 ? 'text-white hover:text-white/70'
//                                                 : 'text-gray-900 hover:text-gray-600'
//                                             }`}
//                                         onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                     >
//                                         {link.label}
//                                         {link.hasDropdown && (
//                                             <ChevronDown
//                                                 size={14}
//                                                 className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                             />
//                                         )}
//                                     </Link>
//                                 </div>
//                             ))}
//                         </nav>

//                         {/* RIGHT: Enquire Now */}
//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-blue-200' : 'hover:text-blue-600'}`}>
//                             Enquire Now
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a
//                                                 key={cat.id}
//                                                 href={cat.href}
//                                                 className="block text-xs text-gray-600 py-1"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}

//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }

// // --- DATA CONSTANTS (Initial/Fallback Data) ---
// const PRODUCT_CATEGORIES: CategoryItem[] = [
//     { id: 'fresh', label: 'Household Cleaning', image: "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png", href: '/products/fresh' },
//     { id: 'frozen', label: 'Edible Products', image: '/dummy-image/Gemini_Generated_Image_8j3yai8j3yai8j3y.png', href: '/products/frozen' },
//     { id: 'packaged', label: 'Dairy Products', image: '/dummy-image/Gemini_Generated_Image_rrqw3prrqw3prrqw.png', href: '/products/packaged' },
//     { id: 'clothing', label: 'Baby Products', image: '/dummy-image/Gemini_Generated_Image_x76mrdx76mrdx76m.png', href: '/products/clothing' },
//     { id: 'electronics', label: 'Tea & coffee', image: '/dummy-image/Gemini_Generated_Image_rigiv7rigiv7rigi.png', href: '/products/electronics' }
// ];

// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         href: '/store-grid/food'
//     },
//     // ... add more as needed for a robust initial state
// ];

// /** * Function to construct the NAV_LINKS array using the current dynamic categories state.
//  * This ensures that when dynamicCategories updates, the navigation structure is rebuilt.
//  */
// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },
//     // { id: 'products', label: 'Product', href: '/products', hasDropdown: true, categories: PRODUCT_CATEGORIES },

//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 href: `/store-grid/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/products/frozen' mark the '/products' link as active.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+971 42255765" className="lg:hidden  absolute left-4 flex items-center gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) */}
//                 <div className={`border-t relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         {/* <div className="flex items-center gap-2 text-sm">
//                             <span>+971 42255765</span>
//                         </div> */}
//                         <div className="flex items-center gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                             ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-gray-900 hover:text-gray-600'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // FIX: Close dropdown on link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a
//                                                 key={cat.id}
//                                                 href={cat.href}
//                                                 className="block text-xs text-gray-600 py-1"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }




// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         href: '/store-grid/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         href: '/store-grid/food'
//     },
//     // ... add more as needed for a robust initial state
// ];

// /** * Function to construct the NAV_LINKS array using the current dynamic categories state.
//  * This ensures that when dynamicCategories updates, the navigation structure is rebuilt.
//  */
// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 href: `/store-grid/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/products/frozen' mark the '/products' link as active.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+971 42255765" className="lg:hidden  absolute left-4 flex items-center gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) */}
//                 <div className={`border-t relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         {/* <div className="flex items-center gap-2 text-sm">
//                             <span>+971 42255765</span>
//                         </div> */}
//                         <div className="flex items-center gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                             ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-gray-900 hover:text-gray-600'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // FIX: Close dropdown on link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a
//                                                 key={cat.id}
//                                                 href={cat.href}
//                                                 className="block text-xs text-gray-600 py-1"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }
////////////////////////////////////////


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];

// /** * Function to construct the NAV_LINKS array using the current dynamic categories state.
//  * This ensures that when dynamicCategories updates, the navigation structure is rebuilt.
//  */
// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+971 42255765" className="lg:hidden  absolute left-4 flex items-center gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) */}
//                 <div className={`border-t relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         {/* <div className="flex items-center gap-2 text-sm">
//                             <span>+971 42255765</span>
//                         </div> */}
//                         <div className="flex items-center gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-gray-900 hover:text-gray-600'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // FIX: Close dropdown on link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a
//                                                 key={cat.id}
//                                                 href={cat.href}
//                                                 className="block text-xs text-gray-600 py-1"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }
/////////////////////////////////////////


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];

// /** * Function to construct the NAV_LINKS array using the current dynamic categories state.
//  * This ensures that when dynamicCategories updates, the navigation structure is rebuilt.
//  */
// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         <div className={`absolute top-0 left-0 w-full z-50 ${isHomePage ? 'text-white' : 'text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-white shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+971 42255765" className="lg:hidden  absolute left-4 flex items-center gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? '' : ''}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) */}
//                 <div className={`border-t relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-gray-200'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         {/* <div className="flex items-center gap-2 text-sm">
//                              <span>+971 42255765</span>
//                          </div> */}
//                         <div className="flex items-center gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-gray-900 hover:text-gray-600'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                             // FIX: Close dropdown when any main nav link is clicked
//                                             onClick={() => setActiveDropdown(null)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? 'hover:text-[#D4AF37]' : 'hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a
//                                                 key={cat.id}
//                                                 href={cat.href}
//                                                 className="block text-xs text-gray-600 py-1"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }


///////////////// working ///////////////////

// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];


// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         // *** MODIFIED: Use relative positioning unless it is the home page ***
//         <div className={`w-full z-50 ${isHomePage ? 'absolute top-0 left-0 text-white' : 'relative text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#0B2447] shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+971 42255765" className="lg:hidden  absolute left-4 flex items-center gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) */}
//                 <div className={`border-y relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-white/20'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         <div className="flex items-center text-white gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-white hover:text-white/70'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                             // FIX: Close dropdown when any main nav link is clicked
//                                             onClick={() => setActiveDropdown(null)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? ' text-white hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a
//                                                 key={cat.id}
//                                                 href={cat.href}
//                                                 className="block text-xs text-gray-600 py-1"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }

/////////////


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];


// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         // *** MODIFIED: Use relative positioning unless it is the home page ***
//         <div className={`w-full z-50 ${isHomePage ? 'absolute top-0 left-0 text-white' : 'relative text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#0B2447] shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+971 42255765" className="lg:hidden  absolute left-4 flex items-center gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) */}
//                 <div className={`border-y relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-white/20'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         <div className="flex items-center text-white gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-white hover:text-white/70'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                             // FIX: Close dropdown when any main nav link is clicked
//                                             onClick={() => setActiveDropdown(null)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? ' text-white hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>
//                                 {link.hasDropdown && (
//                                     <div className="pl-4 mt-2 border-l-2 border-gray-100 space-y-2">
//                                         {link.categories?.map(cat => (
//                                             <a
//                                                 key={cat.id}
//                                                 href={cat.href}
//                                                 className="block text-xs text-gray-600 py-1"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {cat.label}
//                                             </a>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone, TextAlignEnd } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];


// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         // *** MODIFIED: Use relative positioning unless it is the home page ***
//         <div className={`w-full z-50 ${isHomePage ? 'absolute top-0 left-0 text-white' : 'relative text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#0B2447] shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) */}
//                     <a href="tel:+971 42255765" className=" block lg:hidden text-white absolute left-4 gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <TextAlignEnd size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) */}
//                 <div className={`border-y relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-white/20'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         <div className="flex items-center text-white gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-white hover:text-white/70'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                             // FIX: Close dropdown when any main nav link is clicked
//                                             onClick={() => setActiveDropdown(null)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? ' text-white hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Desktop) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (MODIFIED FOR GRID LAYOUT) --- */}
//                 {isMobileMenuOpen && (
//                     <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col gap-4">
//                         {NAV_LINKS.map((link) => (
//                             <div key={link.id}>
//                                 {/* Main Mobile Link */}
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-2 text-gray-900"
//                                     onClick={() => {
//                                         if (!link.hasDropdown) {
//                                             setIsMobileMenuOpen(false);
//                                         }
//                                     }}
//                                 >
//                                     {link.label}
//                                 </Link>

//                                 {/** MODIFIED: Categories dropdown now uses a grid for the mega menu style */}
//                                 {link.hasDropdown && (
//                                     <div className="mt-2 pl-4 border-l-2 border-gray-100">
//                                         {/* **This is the key to mobile responsiveness and the "mega menu" look** */}
//                                         <div className="grid grid-cols-2 gap-3 py-2">
//                                             {link.categories?.map(cat => (
//                                                 <a
//                                                     key={cat.id}
//                                                     href={cat.href}
//                                                     className="group block text-center"
//                                                     onClick={() => setIsMobileMenuOpen(false)}
//                                                 >
//                                                     {/* Category Image container - responsive square aspect ratio */}
//                                                     <div className="relative overflow-hidden mb-2 aspect-[2/2] rounded-lg bg-gray-50">
//                                                         <Image
//                                                             src={cat.image}
//                                                             alt={cat.label}
//                                                             fill
//                                                             sizes="(max-width: 600px) 50vw, 100px"
//                                                             className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                         />
//                                                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                                     </div>
//                                                     {/* Category Label */}
//                                                     <h3 className="text-xs text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
//                                                         {cat.label}
//                                                     </h3>
//                                                 </a>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </header>
//         </div>
//     );
// }


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone, TextAlignEnd } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];


// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         // *** MODIFIED: Use relative positioning unless it is the home page ***
//         <div className={`w-full z-50 ${isHomePage ? 'absolute top-0 left-0 text-white' : 'relative text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#0B2447] shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) - REMOVED from top bar to be inside mobile menu */}
//                     <a href="tel:+971 42255765" className="hidden text-white absolute left-4 gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <TextAlignEnd size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) */}
//                 <div className={`border-y relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-white/20'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         <div className="flex items-center text-white gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-white hover:text-white/70'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                             // FIX: Close dropdown when any main nav link is clicked
//                                             onClick={() => setActiveDropdown(null)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? ' text-white hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Desktop) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (MODIFIED FOR SLIDE-IN) --- */}
//                 {/* 1. Use fixed or absolute on the viewport (right-0)
//                     2. Add transition-transform duration-300
//                     3. Conditional transform: translate-x-full (off-screen) or translate-x-0 (on-screen)
//                     4. Use z-40 (below header, but above content)
//                 */}
//                 <div
//                     className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-lg p-6 flex flex-col gap-4
//                         transition-transform duration-300 ease-in-out z-40 overflow-y-auto
//                         ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
//                 >
//                     {/* Add a close button at the top right of the menu panel */}
//                     <div className="flex justify-end">
//                         <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900">
//                             <X size={24} />
//                         </button>
//                     </div>

//                     {/* Phone Number at the top of the mobile menu */}
//                     <a href="tel:+971 42255765" className="text-sm font-bold tracking-widest py-2 text-gray-900 flex items-center gap-2 border-b pb-3 mb-2">
//                         <Phone size={16} />
//                         <span>+971 42255765</span>
//                     </a>


//                     {NAV_LINKS.map((link) => (
//                         <div key={link.id} className="border-b border-gray-100 last:border-b-0">
//                             {/* Main Mobile Link */}
//                             <Link
//                                 href={getLinkHref(link.href)}
//                                 className="block text-sm font-bold tracking-widest py-3 text-gray-900 uppercase"
//                                 onClick={() => {
//                                     // Close menu if it's a regular link (not a dropdown)
//                                     if (!link.hasDropdown) {
//                                         setIsMobileMenuOpen(false);
//                                     }
//                                 }}
//                             >
//                                 {link.label}
//                             </Link>

//                             {/** MODIFIED: Categories dropdown now uses a grid for the mega menu style */}
//                             {link.hasDropdown && (
//                                 <div className="mt-2 pl-4 border-l-2 border-gray-100">
//                                     <div className="grid grid-cols-2 gap-3 py-2">
//                                         {link.categories?.map(cat => (
//                                             <a
//                                                 key={cat.id}
//                                                 href={cat.href}
//                                                 className="group block text-center"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {/* Category Image container - responsive square aspect ratio */}
//                                                 <div className="relative overflow-hidden mb-2 aspect-[2/2] rounded-lg bg-gray-50">
//                                                     <Image
//                                                         src={cat.image}
//                                                         alt={cat.label}
//                                                         fill
//                                                         sizes="(max-width: 600px) 50vw, 100px"
//                                                         className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                     />
//                                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                                 </div>
//                                                 {/* Category Label */}
//                                                 <h3 className="text-xs text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
//                                                     {cat.label}
//                                                 </h3>
//                                             </a>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                     <div className="border-b border-gray-100">
//                         <a
//                             href="/contact"
//                             className="block text-sm font-bold tracking-widest py-3 text-gray-900 uppercase"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             Contact
//                         </a>
//                     </div>

//                 </div>
//                 {/* MODIFIED: Overlay to darken content when menu is open */}
//                 {isMobileMenuOpen && (
//                     <div
//                         className="fixed inset-0 bg-black/50 z-30 lg:hidden"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     />
//                 )}
//             </header>
//         </div>
//     );
// }



// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone, TextAlignEnd } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];


// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     return (
//         // *** MODIFIED: Use relative positioning unless it is the home page ***
//         <div className={`w-full z-50 ${isHomePage ? 'absolute top-0 left-0 text-white' : 'relative text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#0B2447] shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) - REMOVED from top bar to be inside mobile menu */}
//                     <a href="tel:+971 42255765" className="hidden lg:hidden text-white absolute left-4 gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <TextAlignEnd size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) */}
//                 <div className={`border-y relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-white/20'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         <div className="flex items-center text-white gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-white hover:text-white/70'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                             // FIX: Close dropdown when any main nav link is clicked
//                                             onClick={() => setActiveDropdown(null)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? ' text-white hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Desktop) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (MODIFIED FOR SLIDE-IN FROM LEFT) --- */}
//                 <div
//                     className={`lg:hidden fixed top-0 **left-0** h-full w-full max-w-xs bg-white shadow-lg p-6 flex flex-col gap-4
//                         transition-transform duration-300 ease-in-out z-40 overflow-y-auto
//                         ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform **-translate-x-full**'}`}
//                 >
//                     {/* Close button at the top right of the menu panel */}
//                     <div className="flex justify-end">
//                         <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900">
//                             <X size={24} />
//                         </button>
//                     </div>

//                     {/* Phone Number at the top of the mobile menu */}
//                     <a href="tel:+971 42255765" className="text-sm font-bold tracking-widest py-2 text-gray-900 flex items-center gap-2 border-b pb-3 mb-2">
//                         <Phone size={16} />
//                         <span>+971 42255765</span>
//                     </a>


//                     {NAV_LINKS.map((link) => (
//                         <div key={link.id} className="border-b border-gray-100 last:border-b-0">
//                             {/* Main Mobile Link */}
//                             <Link
//                                 href={getLinkHref(link.href)}
//                                 className="block text-sm font-bold tracking-widest py-3 text-gray-900 uppercase"
//                                 onClick={() => {
//                                     // Close menu if it's a regular link (not a dropdown)
//                                     if (!link.hasDropdown) {
//                                         setIsMobileMenuOpen(false);
//                                     }
//                                 }}
//                             >
//                                 {link.label}
//                             </Link>

//                             {/** MODIFIED: Categories dropdown now uses a grid for the mega menu style */}
//                             {link.hasDropdown && (
//                                 <div className="mt-2 pl-4 border-l-2 border-gray-100">
//                                     <div className="grid grid-cols-2 gap-3 py-2">
//                                         {link.categories?.map(cat => (
//                                             <a
//                                                 key={cat.id}
//                                                 href={cat.href}
//                                                 className="group block text-center"
//                                                 onClick={() => setIsMobileMenuOpen(false)}
//                                             >
//                                                 {/* Category Image container - responsive square aspect ratio */}
//                                                 <div className="relative overflow-hidden mb-2 aspect-[2/2] rounded-lg bg-gray-50">
//                                                     <Image
//                                                         src={cat.image}
//                                                         alt={cat.label}
//                                                         fill
//                                                         sizes="(max-width: 600px) 50vw, 100px"
//                                                         className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                     />
//                                                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                                 </div>
//                                                 {/* Category Label */}
//                                                 <h3 className="text-xs text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
//                                                     {cat.label}
//                                                 </h3>
//                                             </a>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                     <div className="border-b border-gray-100">
//                         <a
//                             href="/contact"
//                             className="block text-sm font-bold tracking-widest py-3 text-gray-900 uppercase"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             Contact
//                         </a>
//                     </div>

//                 </div>
//                 {/* MODIFIED: Overlay to darken content when menu is open */}
//                 {isMobileMenuOpen && (
//                     <div
//                         className="fixed inset-0 bg-black/50 z-30 lg:hidden"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     />
//                 )}
//             </header>
//         </div>
//     );
// }


// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone, TextAlignEnd } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];


// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic (unchanged) ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // *** FIX 2: Prevent body scroll when mobile menu is open ***
//     useEffect(() => {
//         if (isMobileMenuOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//         // Cleanup function to ensure scroll is re-enabled if component unmounts
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isMobileMenuOpen]);


//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     // Helper to toggle mobile dropdown
//     const toggleMobileDropdown = (linkId: string) => {
//         if (activeDropdown === linkId) {
//             setActiveDropdown(null);
//         } else {
//             setActiveDropdown(linkId);
//         }
//     };

//     return (
//         // *** MODIFIED: Use relative positioning unless it is the home page ***
//         // Ensure the component is rendered on top
//         <div className={`w-full z-50 ${isHomePage ? 'absolute top-0 left-0 text-white' : 'relative text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes (unchanged) */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area (unchanged) --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#0B2447] shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles (unchanged) */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) - REMOVED from top bar to be inside mobile menu */}
//                     <a href="tel:+971 42255765" className="hidden lg:hidden text-white absolute left-4 gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <TextAlignEnd size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) (unchanged) */}
//                 <div className={`border-y relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-white/20'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         <div className="flex items-center text-white gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-white hover:text-white/70'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                             // FIX: Close dropdown when any main nav link is clicked
//                                             onClick={() => setActiveDropdown(null)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? ' text-white hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Desktop) (unchanged) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (MODIFIED FOR SLIDE-IN FROM LEFT) --- */}
//                 <div
//                     className={`lg:hidden fixed top-0 left-0 h-full w-full max-w-xs bg-white shadow-lg p-6 flex flex-col gap-4
//                         transition-transform duration-300 ease-in-out z-40 overflow-y-auto
//                         ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
//                 >
//                     {/* Close button at the top right of the menu panel (unchanged) */}
//                     <div className="flex justify-end">
//                         <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900">
//                             <X size={24} />
//                         </button>
//                     </div>

//                     {/* Phone Number at the top of the mobile menu (unchanged) */}
//                     <a href="tel:+971 42255765" className="text-sm font-bold tracking-widest py-2 text-gray-900 flex items-center gap-2 border-b pb-3 mb-2">
//                         <Phone size={16} />
//                         <span>+971 42255765</span>
//                     </a>


//                     {NAV_LINKS.map((link) => (
//                         <div key={link.id} className="border-b border-gray-100 last:border-b-0">
//                             {/* Main Mobile Link - MODIFIED for dropdowns to be a button or link */}
//                             {link.hasDropdown ? (
//                                 // *** FIX 1: Use a button to handle dropdown toggle/display ***
//                                 <div
//                                     className="flex items-center justify-between text-sm font-bold tracking-widest py-3 text-gray-900 uppercase cursor-pointer"
//                                     onClick={() => toggleMobileDropdown(link.id)}
//                                 >
//                                     {link.label}
//                                     <ChevronDown
//                                         size={18}
//                                         className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                     />
//                                 </div>
//                             ) : (
//                                 // Regular Link
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-3 text-gray-900 uppercase"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     {link.label}
//                                 </Link>
//                             )}


//                             {/** MODIFIED: Categories dropdown now uses a grid for the mega menu style, conditionally rendered */}
//                             {link.hasDropdown && (
//                                 <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <div className="mt-2 pl-4 border-l-2 border-gray-100">
//                                         <div className="grid grid-cols-2 gap-3 py-2">
//                                             {link.categories?.map(cat => (
//                                                 <Link
//                                                     key={cat.id}
//                                                     href={cat.href}
//                                                     className="group block text-center"
//                                                     onClick={() => setIsMobileMenuOpen(false)}
//                                                 >
//                                                     {/* Category Image container - responsive square aspect ratio */}
//                                                     <div className="relative overflow-hidden mb-2 aspect-[2/2] rounded-lg bg-gray-50">
//                                                         <Image
//                                                             src={cat.image}
//                                                             alt={cat.label}
//                                                             fill
//                                                             sizes="(max-width: 600px) 50vw, 100px"
//                                                             className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                         />
//                                                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                                     </div>
//                                                     {/* Category Label */}
//                                                     <h3 className="text-xs text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
//                                                         {cat.label}
//                                                     </h3>
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                     <div className="border-b border-gray-100">
//                         <a
//                             href="/contact"
//                             className="block text-sm font-bold tracking-widest py-3 text-gray-900 uppercase"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             Contact
//                         </a>
//                     </div>

//                 </div>
//                 {/* MODIFIED: Overlay to darken content when menu is open (unchanged) */}
//                 {isMobileMenuOpen && (
//                     <div
//                         className="fixed inset-0 bg-black/50 z-30 lg:hidden"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     />
//                 )}
//             </header>
//         </div>
//     );
// }


// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone, TextAlignEnd } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- CONFIGURATION ---
// // Define the LG breakpoint used by Tailwind CSS (default is 1024px)
// const LG_BREAKPOINT = 1024;


// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];


// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic (unchanged) ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // *** FIX 2: Prevent body scroll when mobile menu is open ***
//     useEffect(() => {
//         if (isMobileMenuOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//         // Cleanup function to ensure scroll is re-enabled if component unmounts
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isMobileMenuOpen]);


//     // *** FIX 3: Automatically close mobile menu on desktop resize ***
//     useEffect(() => {
//         // Function to close the menu if the screen size crosses the 'lg' breakpoint
//         const handleResize = () => {
//             if (typeof window !== 'undefined' && window.innerWidth >= LG_BREAKPOINT) {
//                 // Only close it if it's currently open
//                 if (isMobileMenuOpen) {
//                     setIsMobileMenuOpen(false);
//                 }
//             }
//         };

//         // Initialize and attach the event listener
//         window.addEventListener('resize', handleResize);

//         // Cleanup function
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [isMobileMenuOpen]); // Dependency on isMobileMenuOpen is important for running the check when state changes

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     // Helper to toggle mobile dropdown
//     const toggleMobileDropdown = (linkId: string) => {
//         if (activeDropdown === linkId) {
//             setActiveDropdown(null);
//         } else {
//             setActiveDropdown(linkId);
//         }
//     };

//     return (
//         // *** MODIFIED: Use relative positioning unless it is the home page ***
//         // Ensure the component is rendered on top
//         <div className={`w-full z-50 ${isHomePage ? 'absolute top-0 left-0 text-white' : 'relative text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes (unchanged) */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area (unchanged) --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#0B2447] shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles (unchanged) */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) - REMOVED from top bar to be inside mobile menu */}
//                     <a href="tel:+971 42255765" className="hidden lg:hidden text-white absolute left-4 gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-9 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <TextAlignEnd size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) (unchanged) */}
//                 <div className={`border-y relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-white/20'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         <div className="flex items-center text-white gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-white hover:text-white/70'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                             // FIX: Close dropdown when any main nav link is clicked
//                                             onClick={() => setActiveDropdown(null)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? ' text-white hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Desktop) (unchanged) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (MODIFIED FOR SLIDE-IN FROM LEFT) --- */}
//                 <div
//                     className={`lg:hidden fixed top-0 left-0 h-full w-full max-w-xs bg-white shadow-lg p-6 flex flex-col gap-4
//                         transition-transform duration-300 ease-in-out z-40 overflow-y-auto
//                         ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
//                 >
//                     {/* Close button at the top right of the menu panel (unchanged) */}
//                     <div className="flex justify-end">
//                         <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900">
//                             <X size={24} />
//                         </button>
//                     </div>

//                     {/* Phone Number at the top of the mobile menu (unchanged) */}
//                     <a href="tel:+971 42255765" className="text-sm font-bold tracking-widest py-2 text-gray-900 flex items-center gap-2 border-b pb-3 mb-2">
//                         <Phone size={16} />
//                         <span>+971 42255765</span>
//                     </a>


//                     {NAV_LINKS.map((link) => (
//                         <div key={link.id} className="border-b border-gray-100 last:border-b-0">
//                             {/* Main Mobile Link - MODIFIED for dropdowns to be a button or link */}
//                             {link.hasDropdown ? (
//                                 // *** FIX 1: Use a button to handle dropdown toggle/display ***
//                                 <div
//                                     className="flex items-center justify-between text-sm font-bold tracking-widest py-3 text-gray-900 uppercase cursor-pointer"
//                                     onClick={() => toggleMobileDropdown(link.id)}
//                                 >
//                                     {link.label}
//                                     <ChevronDown
//                                         size={18}
//                                         className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                     />
//                                 </div>
//                             ) : (
//                                 // Regular Link
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-bold tracking-widest py-3 text-gray-900 uppercase"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     {link.label}
//                                 </Link>
//                             )}


//                             {/** MODIFIED: Categories dropdown now uses a grid for the mega menu style, conditionally rendered */}
//                             {link.hasDropdown && (
//                                 <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <div className="mt-2 pl-4 border-l-2 border-gray-100">
//                                         <div className="grid grid-cols-2 gap-3 py-2">
//                                             {link.categories?.map(cat => (
//                                                 <Link
//                                                     key={cat.id}
//                                                     href={cat.href}
//                                                     className="group block text-center"
//                                                     onClick={() => setIsMobileMenuOpen(false)}
//                                                 >
//                                                     {/* Category Image container - responsive square aspect ratio */}
//                                                     <div className="relative overflow-hidden mb-2 aspect-[2/2] rounded-lg bg-gray-50">
//                                                         <Image
//                                                             src={cat.image}
//                                                             alt={cat.label}
//                                                             fill
//                                                             sizes="(max-width: 600px) 50vw, 100px"
//                                                             className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                         />
//                                                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                                     </div>
//                                                     {/* Category Label */}
//                                                     <h3 className="text-xs text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
//                                                         {cat.label}
//                                                     </h3>
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                     <div className="border-b border-gray-100">
//                         <a
//                             href="/contact"
//                             className="block text-sm font-bold tracking-widest py-3 text-gray-900 uppercase"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             Contact
//                         </a>
//                     </div>

//                 </div>
//                 {/* MODIFIED: Overlay to darken content when menu is open (unchanged) */}
//                 {isMobileMenuOpen && (
//                     <div
//                         className="fixed inset-0 bg-black/50 z-30 lg:hidden"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     />
//                 )}
//             </header>
//         </div>
//     );
// }

///////////////////////////////////////////////////////////////


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone, TextAlignEnd } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- CONFIGURATION ---
// // Define the LG breakpoint used by Tailwind CSS (default is 1024px)
// const LG_BREAKPOINT = 1024;


// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];


// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '/about/#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic (unchanged) ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // *** FIX 2: Prevent body scroll when mobile menu is open ***
//     useEffect(() => {
//         if (isMobileMenuOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//         // Cleanup function to ensure scroll is re-enabled if component unmounts
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isMobileMenuOpen]);


//     // *** FIX 3: Automatically close mobile menu on desktop resize ***
//     useEffect(() => {
//         // Function to close the menu if the screen size crosses the 'lg' breakpoint
//         const handleResize = () => {
//             if (typeof window !== 'undefined' && window.innerWidth >= LG_BREAKPOINT) {
//                 // Only close it if it's currently open
//                 if (isMobileMenuOpen) {
//                     setIsMobileMenuOpen(false);
//                 }
//             }
//         };

//         // Initialize and attach the event listener
//         window.addEventListener('resize', handleResize);

//         // Cleanup function
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [isMobileMenuOpen]); // Dependency on isMobileMenuOpen is important for running the check when state changes

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     // Helper to toggle mobile dropdown
//     const toggleMobileDropdown = (linkId: string) => {
//         if (activeDropdown === linkId) {
//             setActiveDropdown(null);
//         } else {
//             setActiveDropdown(linkId);
//         }
//     };

//     return (
//         // *** MODIFIED: Use relative positioning unless it is the home page ***
//         // Ensure the component is rendered on top
//         <div className={`w-full z-50 ${isHomePage ? 'absolute top-0 left-0 text-white' : 'relative text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes (unchanged) */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area (unchanged) --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#0B2447] shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles (unchanged) */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) - REMOVED from top bar to be inside mobile menu */}
//                     <a href="tel:+971 42255765" className=" block lg:hidden text-white absolute left-4 gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-10 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <TextAlignEnd size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) (unchanged) */}
//                 <div className={`border-y relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-white/20'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         <div className="flex items-center  text-white gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-white hover:text-white/70'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                             // FIX: Close dropdown when any main nav link is clicked
//                                             onClick={() => setActiveDropdown(null)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? ' text-white hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Desktop) (unchanged) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (MODIFIED FOR SLIDE-IN FROM LEFT AND ADDED LOGO) --- */}
//                 <div
//                     className={`lg:hidden fixed top-0 left-0 h-full w-full max-w-xs bg-white shadow-lg py-3 px-6 flex flex-col gap-4
//                         transition-transform duration-300 ease-in-out z-40 overflow-y-auto
//                         ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
//                 >
//                     {/* MODIFIED: Header for Mobile Menu with Logo and Close Button */}
//                     <div className="flex justify-between items-center mb-4">
//                         {/* Logo on the left */}
//                         <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//                             <Image
//                                 src="/image/mktlogo.png"
//                                 alt="AXELS Logo"
//                                 width={60}
//                                 height={38}
//                                 // The logo should not be inverted inside the white mobile menu panel
//                                 className={`h-10 md:h-12 transition-all duration-300`}
//                             />
//                         </Link>
//                         {/* Close button on the right */}
//                         <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900">
//                             <X size={24} />
//                         </button>
//                     </div>

//                     {/* Phone Number at the top of the mobile menu (unchanged) */}
//                     <a href="tel:+971 42255765" className="text-sm font-normal tracking-widest py-2 text-gray-900 flex items-center gap-2 border-b pb-3 mb-2">
//                         <Phone size={16} />
//                         <span>+971 42255765</span>
//                     </a>


//                     {NAV_LINKS.map((link) => (
//                         <div key={link.id} className="border-b border-gray-100 last:border-b-0">
//                             {/* Main Mobile Link - MODIFIED for dropdowns to be a button or link */}
//                             {link.hasDropdown ? (
//                                 // *** FIX 1: Use a button to handle dropdown toggle/display ***
//                                 <div
//                                     className="flex items-center justify-between text-sm font-normal tracking-widest py-3 text-gray-900 uppercase cursor-pointer"
//                                     onClick={() => toggleMobileDropdown(link.id)}
//                                 >
//                                     {link.label}
//                                     <ChevronDown
//                                         size={18}
//                                         className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                     />
//                                 </div>
//                             ) : (
//                                 // Regular Link
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-normal tracking-widest py-3 text-gray-900 uppercase"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     {link.label}
//                                 </Link>
//                             )}


//                             {/** MODIFIED: Categories dropdown now uses a grid for the mega menu style, conditionally rendered */}
//                             {link.hasDropdown && (
//                                 <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <div className="mt-2 pl-4 border-l-2 border-gray-100">
//                                         <div className="grid grid-cols-2 gap-3 py-2">
//                                             {link.categories?.map(cat => (
//                                                 <Link
//                                                     key={cat.id}
//                                                     href={cat.href}
//                                                     className="group block text-center"
//                                                     onClick={() => setIsMobileMenuOpen(false)}
//                                                 >
//                                                     {/* Category Image container - responsive square aspect ratio */}
//                                                     <div className="relative overflow-hidden mb-2 aspect-[2/2] rounded-lg bg-gray-50">
//                                                         <Image
//                                                             src={cat.image}
//                                                             alt={cat.label}
//                                                             fill
//                                                             sizes="(max-width: 600px) 50vw, 100px"
//                                                             className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                         />
//                                                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                                     </div>
//                                                     {/* Category Label */}
//                                                     <h3 className="text-xs text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
//                                                         {cat.label}
//                                                     </h3>
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                     <div className="border-b border-gray-100">
//                         <a
//                             href="/contact"
//                             className="block text-sm font-bold tracking-widest py-3 text-gray-900 uppercase"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             Contact
//                         </a>
//                     </div>

//                 </div>
//                 {/* MODIFIED: Overlay to darken content when menu is open (unchanged) */}
//                 {isMobileMenuOpen && (
//                     <div
//                         className="fixed inset-0 bg-black/50 z-30 lg:hidden"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     />
//                 )}
//             </header>
//         </div>
//     );
// }




// // D:\mktgroup\app\components\Header.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, X, Menu, Phone, TextAlignEnd } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// --- CONFIGURATION ---
// Define the LG breakpoint used by Tailwind CSS (default is 1024px)
const LG_BREAKPOINT = 1024;


// --- INTERFACES ---

/** Defines the structure for a single category item (used in dropdowns) */
interface CategoryItem {
    id: string;
    label: string;
    image: string;
    href: string;
}

/** Defines the structure for a single item in the main navigation bar */
interface NavLinkItem {
    id: string;
    label: string;
    href: string;
    hasDropdown?: boolean;
    categories?: CategoryItem[];
}


// Initial hardcoded data structure for the main CATEGORIES link
const INITIAL_CATEGORIES: CategoryItem[] = [
    {
        id: 'retail',
        label: 'Retail',
        image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
        // --- UPDATED HREF PATH ---
        href: '/category/retail'
    },
    {
        id: 'food',
        label: 'Food',
        image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
        // --- UPDATED HREF PATH ---
        href: '/category/food'
    },
    // ... add more as needed for a robust initial state
];


const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    // Inject the dynamic categories into the 'categories' link
    { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


    { id: 'retail', label: 'Retail', href: '/about/#retail' },

];

// Define the expected structure of the API response item for type safety
interface WpCategory {
    name: string;
    slug: string;
    image: string;
}

interface WpApiResponse {
    categories: WpCategory[];
}


export default function Header(): React.JSX.Element {

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    // State to hold the dynamically fetched categories
    const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

    const pathname = usePathname();
    const isHomePage = pathname === '/';

    // --- Data Fetching Logic (unchanged) ---
    const fetchCategories = useCallback(async () => {
        try {
            // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
            // in a single file component environment.
            const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
            const response = await fetch(API_URL);

            if (!response.ok) {
                // Log and throw if response is not successful
                throw new Error(`Failed to fetch categories. Status: ${response.status}`);
            }

            // Cast the response JSON to the defined interface for type safety
            const data: WpApiResponse = await response.json();

            // Transformation: Map WP category structure to our component's required structure (CategoryItem)
            const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
                id: cat.slug,
                label: cat.name,
                image: cat.image,
                // --- UPDATED HREF PATH to /category/[slug] ---
                href: `/category/${cat.slug}` // Constructing the href dynamically
            }));

            setDynamicCategories(transformedCategories);

        } catch (error) {
            console.error("Error fetching or parsing dynamic categories:", error);
            // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
        }
    }, []);

    // Effect to run the fetch once on component mount
    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]); // Dependency array includes fetchCategories

    // *** FIX 2: Prevent body scroll when mobile menu is open ***
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup function to ensure scroll is re-enabled if component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);


    // *** FIX 3: Automatically close mobile menu on desktop resize ***
    useEffect(() => {
        // Function to close the menu if the screen size crosses the 'lg' breakpoint
        const handleResize = () => {
            if (typeof window !== 'undefined' && window.innerWidth >= LG_BREAKPOINT) {
                // Only close it if it's currently open
                if (isMobileMenuOpen) {
                    setIsMobileMenuOpen(false);
                }
            }
        };

        // Initialize and attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]); // Dependency on isMobileMenuOpen is important for running the check when state changes

    // Re-run getNavLinks whenever dynamicCategories changes
    const NAV_LINKS = getNavLinks(dynamicCategories);

    // Helper function for link href logic
    const getLinkHref = (href: string): string => {
        if (!isHomePage && href.startsWith('#')) {
            return `/${href}`;
        }
        return href;
    };

    // Helper function to determine if a link is active
    const isLinkActive = (href: string): boolean => {
        // 1. Get the final, resolved href (handles #anchors correctly)
        const finalHref = getLinkHref(href);
        // 2. Remove leading '/' for comparison consistency
        const cleanPathname = pathname.replace(/^\//, '');
        const cleanHref = finalHref.replace(/^\//, '');

        // 3. Special case for the home link
        if (cleanHref === '') {
            return pathname === '/';
        }

        // 4. Check if the current path starts with the link's path (for categories/products)
        // This makes '/category/food' mark the '/category' link as active, or for slug match.
        return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
    };

    // Find the content for the currently active mega menu dropdown
    const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

    // Helper to toggle mobile dropdown
    const toggleMobileDropdown = (linkId: string) => {
        if (activeDropdown === linkId) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(linkId);
        }
    };

    return (
        // *** MODIFIED: Use relative positioning unless it is the home page ***
        // Ensure the component is rendered on top
        <div className={`w-full z-50 ${isHomePage ? 'absolute top-0 left-0 text-white' : 'relative text-gray-900'}`}>

            {/* Inject Custom Animation Keyframes (unchanged) */}
            <style jsx global>{`
                @keyframes slideUpFade {
                    0% {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>

            {/* --- Main Header Area (unchanged) --- */}
            <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#0B2447] shadow-sm'}`}>

                {/* Top Bar for Logo & Mobile Toggles (unchanged) */}
                <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

                    {/* Left: Phone (Mobile Only) - REMOVED from top bar to be inside mobile menu */}
                    <a href="tel:+971 42255765" className=" block lg:hidden text-white absolute left-4 gap-2 text-sm font-medium">

                        <span className='cursor-pointer'>+971 42255765</span>
                    </a>

                    {/* Center: Logo */}
                    <Link href="/">
                        <Image
                            src="/image/mktlogo.png"
                            alt="AXELS Logo"
                            width={60}
                            height={38}
                            className={`h-10 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
                        />
                    </Link>

                    {/* Right: Mobile Menu Toggle (Mobile Only) */}
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white absolute right-4">
                        {isMobileMenuOpen ? <X size={24} /> : <TextAlignEnd size={24} />}
                    </button>
                </div>

                {/* Navigation Bar (Desktop - Second row) (unchanged) */}
                <div className={`border-y relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-white/20'}`}>
                    <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

                        {/* LEFT: Phone Number */}
                        <div className="flex items-center  text-white gap-2 text-sm">
                            <a href="tel:+97142255765">
                                <span>+971 42255765</span>
                            </a>
                        </div>

                        {/* CENTER: Nav Links (with active state logic) */}
                        <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                            {NAV_LINKS.map((link) => {
                                const active = isLinkActive(link.href);

                                return (
                                    <div
                                        key={link.id}
                                        className="relative group"
                                        onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                                    >
                                        <Link
                                            href={getLinkHref(link.href)}
                                            className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
                                                ${isHomePage
                                                    ? active
                                                        ? 'text-white font-normal' // Active on Home
                                                        : 'text-white hover:text-white/70'
                                                    : active
                                                        ? 'text-[#D4AF37] font-normal' // Active elsewhere
                                                        : 'text-white hover:text-white/70'
                                                }`}
                                            onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
                                            // FIX: Close dropdown when any main nav link is clicked
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            {link.label}
                                            {link.hasDropdown && (
                                                <ChevronDown
                                                    size={14}
                                                    className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
                                                />
                                            )}
                                        </Link>
                                    </div>
                                );
                            })}
                        </nav>


                        <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? ' text-white hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
                            <a href="/contact">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* --- Mega Menu Dropdown (Desktop) (unchanged) --- */}
                    <div
                        className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
                        grid overflow-hidden transition-all duration-500 ease-out z-40
                        ${activeDropdown
                                ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
                                : 'grid-rows-[0fr] opacity-0 border-t-0'
                            }`}
                        onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <div className="overflow-hidden min-h-0">
                            <div className="max-w-[1400px] mx-auto px-8 py-5">
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                    {/* Map over dynamically fetched categories */}
                                    {activeDropdownContent.map((category, index) => (
                                        <a
                                            href={category.href}
                                            key={category.id}
                                            className="group block text-center"
                                            onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
                                            style={{
                                                opacity: 0,
                                                // Using index for staggered animation effect
                                                animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                                                animationDelay: `${index * 120}ms`
                                            }}
                                        >
                                            <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
                                                <Image
                                                    src={category.image}
                                                    alt={category.label}
                                                    fill
                                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                            </div>
                                            <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
                                                {category.label}
                                            </h3>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Mobile Menu (MODIFIED FOR SLIDE-IN FROM LEFT AND ADDED LOGO) --- */}
                <div
                    className={`lg:hidden fixed top-0 left-0 h-full w-full max-w-xs bg-white shadow-lg py-3 px-6 flex flex-col gap-4
                        transition-transform duration-300 ease-in-out z-40 overflow-y-auto
                        ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
                >
                    {/* MODIFIED: Header for Mobile Menu with Logo and Close Button */}
                    <div className="flex justify-between items-center mb-4">
                        {/* Logo on the left */}
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <Image
                                src="/image/mktlogo.png"
                                alt="AXELS Logo"
                                width={60}
                                height={38}
                                // The logo should not be inverted inside the white mobile menu panel
                                className={`h-10 md:h-12 transition-all duration-300`}
                            />
                        </Link>
                        {/* Close button on the right */}
                        <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Phone Number at the top of the mobile menu (unchanged) */}
                    <a href="tel:+971 42255765" className="text-sm font-normal tracking-widest py-2 text-gray-900 flex items-center gap-2 border-b pb-3 mb-2">
                        <Phone size={16} />
                        <span>+971 42255765</span>
                    </a>


                    {NAV_LINKS.map((link) => (
                        <div key={link.id} className="border-b border-gray-100 last:border-b-0">
                            {/* Main Mobile Link - MODIFIED for dropdowns to be a button or link */}
                            {link.hasDropdown ? (
                                // *** FIX 1: Use a button to handle dropdown toggle/display ***
                                <div
                                    className="flex items-center justify-between text-sm font-normal tracking-widest py-3 text-gray-900 uppercase cursor-pointer"
                                    onClick={() => toggleMobileDropdown(link.id)}
                                >
                                    {link.label}
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
                                    />
                                </div>
                            ) : (
                                // Regular Link
                                <Link
                                    href={getLinkHref(link.href)}
                                    className="block text-sm font-normal tracking-widest py-3 text-gray-900 uppercase"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )}


                            {/** MODIFIED: Categories dropdown now uses a grid for the mega menu style, conditionally rendered */}
                            {link.hasDropdown && (
                                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="mt-2 p-4 border-2 border-gray-100">
                                        <div className="grid grid-cols-2 gap-3 pt-2 pb-4">
                                            {link.categories?.map(cat => (
                                                <Link
                                                    key={cat.id}
                                                    href={cat.href}
                                                    className="group block text-center"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {/* Category Image container - responsive square aspect ratio */}
                                                    <div className="relative overflow-hidden mb-2 aspect-[2/2] rounded-lg bg-gray-50">
                                                        <Image
                                                            src={cat.image}
                                                            alt={cat.label}
                                                            fill
                                                            sizes="(max-width: 600px) 50vw, 100px"
                                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                                    </div>
                                                    {/* Category Label */}
                                                    <h3 className="text-xs text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
                                                        {cat.label}
                                                    </h3>
                                                </Link>
                                            ))}
                                        </div>

                                        <Link
                                            href={link.href}
                                            className="block text-center text-xs border font-normal tracking-widest py-3 text-gray-900 uppercase hover:text-[#D4AF37] transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            View all categories
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="border-b border-gray-100">
                        <a
                            href="/contact"
                            className="block text-sm font-normal tracking-widest py-3 text-gray-900 uppercase"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </div>

                </div>
                {/* MODIFIED: Overlay to darken content when menu is open (unchanged) */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </header>
        </div>
    );
}


// // D:\mktgroup\app\components\Header.tsx
// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { ChevronDown, X, Menu, Phone, TextAlignEnd } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import Image from 'next/image';

// // --- CONFIGURATION ---
// // Define the LG breakpoint used by Tailwind CSS (default is 1024px)
// const LG_BREAKPOINT = 1024;


// // --- INTERFACES ---

// /** Defines the structure for a single category item (used in dropdowns) */
// interface CategoryItem {
//     id: string;
//     label: string;
//     image: string;
//     href: string;
// }

// /** Defines the structure for a single item in the main navigation bar */
// interface NavLinkItem {
//     id: string;
//     label: string;
//     href: string;
//     hasDropdown?: boolean;
//     categories?: CategoryItem[];
// }


// // Initial hardcoded data structure for the main CATEGORIES link
// const INITIAL_CATEGORIES: CategoryItem[] = [
//     {
//         id: 'retail',
//         label: 'Retail',
//         image: '/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/retail'
//     },
//     {
//         id: 'food',
//         label: 'Food',
//         image: '/category/Gemini_Generated_Image_cczy10cczy10cczy.png',
//         // --- UPDATED HREF PATH ---
//         href: '/category/food'
//     },
//     // ... add more as needed for a robust initial state
// ];


// const getNavLinks = (dynamicCategories: CategoryItem[]): NavLinkItem[] => [
//     { id: 'home', label: 'HOME', href: '/' },
//     { id: 'about', label: 'About', href: '/about' },
//     // Inject the dynamic categories into the 'categories' link
//     { id: 'categories', label: 'CATEGORIES', href: '/category', hasDropdown: true, categories: dynamicCategories },


//     { id: 'retail', label: 'Retail', href: '/about/#retail' },

// ];

// // Define the expected structure of the API response item for type safety
// interface WpCategory {
//     name: string;
//     slug: string;
//     image: string;
// }

// interface WpApiResponse {
//     categories: WpCategory[];
// }


// export default function Header(): React.JSX.Element {

//     const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//     // State to hold the dynamically fetched categories
//     const [dynamicCategories, setDynamicCategories] = useState<CategoryItem[]>(INITIAL_CATEGORIES);

//     const pathname = usePathname();
//     const isHomePage = pathname === '/';

//     // --- Data Fetching Logic (unchanged) ---
//     const fetchCategories = useCallback(async () => {
//         try {
//             // NOTE: Using the direct URL instead of NEXT_PUBLIC_FRONTEND_API_BASE_URL for simplicity
//             // in a single file component environment.
//             const API_URL = 'https://mktgroupaebck.demo-web.live/wp-json/custom/v1/getSixCategories';
//             const response = await fetch(API_URL);

//             if (!response.ok) {
//                 // Log and throw if response is not successful
//                 throw new Error(`Failed to fetch categories. Status: ${response.status}`);
//             }

//             // Cast the response JSON to the defined interface for type safety
//             const data: WpApiResponse = await response.json();

//             // Transformation: Map WP category structure to our component's required structure (CategoryItem)
//             const transformedCategories: CategoryItem[] = data.categories.map((cat: WpCategory) => ({
//                 id: cat.slug,
//                 label: cat.name,
//                 image: cat.image,
//                 // --- UPDATED HREF PATH to /category/[slug] ---
//                 href: `/category/${cat.slug}` // Constructing the href dynamically
//             }));

//             setDynamicCategories(transformedCategories);

//         } catch (error) {
//             console.error("Error fetching or parsing dynamic categories:", error);
//             // On failure, the component gracefully falls back to using INITIAL_CATEGORIES
//         }
//     }, []);

//     // Effect to run the fetch once on component mount
//     useEffect(() => {
//         fetchCategories();
//     }, [fetchCategories]); // Dependency array includes fetchCategories

//     // *** FIX 2: Prevent body scroll when mobile menu is open ***
//     useEffect(() => {
//         if (isMobileMenuOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//         // Cleanup function to ensure scroll is re-enabled if component unmounts
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isMobileMenuOpen]);


//     // *** FIX 3: Automatically close mobile menu on desktop resize ***
//     useEffect(() => {
//         // Function to close the menu if the screen size crosses the 'lg' breakpoint
//         const handleResize = () => {
//             if (typeof window !== 'undefined' && window.innerWidth >= LG_BREAKPOINT) {
//                 // Only close it if it's currently open
//                 if (isMobileMenuOpen) {
//                     setIsMobileMenuOpen(false);
//                 }
//             }
//         };

//         // Initialize and attach the event listener
//         window.addEventListener('resize', handleResize);

//         // Cleanup function
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [isMobileMenuOpen]); // Dependency on isMobileMenuOpen is important for running the check when state changes

//     // Re-run getNavLinks whenever dynamicCategories changes
//     const NAV_LINKS = getNavLinks(dynamicCategories);

//     // Helper function for link href logic
//     const getLinkHref = (href: string): string => {
//         if (!isHomePage && href.startsWith('#')) {
//             return `/${href}`;
//         }
//         return href;
//     };

//     // Helper function to determine if a link is active
//     const isLinkActive = (href: string): boolean => {
//         // 1. Get the final, resolved href (handles #anchors correctly)
//         const finalHref = getLinkHref(href);
//         // 2. Remove leading '/' for comparison consistency
//         const cleanPathname = pathname.replace(/^\//, '');
//         const cleanHref = finalHref.replace(/^\//, '');

//         // 3. Special case for the home link
//         if (cleanHref === '') {
//             return pathname === '/';
//         }

//         // 4. Check if the current path starts with the link's path (for categories/products)
//         // This makes '/category/food' mark the '/category' link as active, or for slug match.
//         return cleanPathname.startsWith(cleanHref) && cleanHref !== '';
//     };

//     // Find the content for the currently active mega menu dropdown
//     const activeDropdownContent: CategoryItem[] = NAV_LINKS.find(link => link.id === activeDropdown)?.categories || [];

//     // Helper to toggle mobile dropdown
//     const toggleMobileDropdown = (linkId: string) => {
//         if (activeDropdown === linkId) {
//             setActiveDropdown(null);
//         } else {
//             setActiveDropdown(linkId);
//         }
//     };

//     return (
//         // *** MODIFIED: Use relative positioning unless it is the home page ***
//         // Ensure the component is rendered on top
//         <div className={`w-full z-50 ${isHomePage ? 'absolute top-0 left-0 text-white' : 'relative text-gray-900'}`}>

//             {/* Inject Custom Animation Keyframes (unchanged) */}
//             <style jsx global>{`
//                 @keyframes slideUpFade {
//                     0% {
//                         opacity: 0;
//                         transform: translateY(50px);
//                     }
//                     100% {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }
//             `}</style>

//             {/* --- Main Header Area (unchanged) --- */}
//             <header className={`relative z-50 transition-colors duration-300 ${isHomePage ? 'bg-transparent' : 'bg-[#0B2447] shadow-sm'}`}>

//                 {/* Top Bar for Logo & Mobile Toggles (unchanged) */}
//                 <div className="flex items-center justify-center py-3 md:py-3 px-4 md:px-8 max-w-[1400px] mx-auto">

//                     {/* Left: Phone (Mobile Only) - REMOVED from top bar to be inside mobile menu */}
//                     <a href="tel:+971 42255765" className=" block lg:hidden text-white absolute left-4 gap-2 text-sm font-medium">

//                         <span className='cursor-pointer'>+971 42255765</span>
//                     </a>

//                     {/* Center: Logo */}
//                     <Link href="/">
//                         <Image
//                             src="/image/mktlogo.png"
//                             alt="AXELS Logo"
//                             width={60}
//                             height={38}
//                             className={`h-10 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
//                         />
//                     </Link>

//                     {/* Right: Mobile Menu Toggle (Mobile Only) */}
//                     <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white absolute right-4">
//                         {isMobileMenuOpen ? <X size={24} /> : <TextAlignEnd size={24} />}
//                     </button>
//                 </div>

//                 {/* Navigation Bar (Desktop - Second row) (unchanged) */}
//                 <div className={`border-y relative hidden lg:block ${isHomePage ? 'border-white/20' : 'border-white/20'}`}>
//                     <div className="templateContainer px-4 md:px-8 h-16 flex items-center justify-between">

//                         {/* LEFT: Phone Number */}
//                         <div className="flex items-center text-white gap-2 text-sm">
//                             <a href="tel:+97142255765">
//                                 <span>+971 42255765</span>
//                             </a>
//                         </div>

//                         {/* CENTER: Nav Links (with active state logic) */}
//                         <nav className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
//                             {NAV_LINKS.map((link) => {
//                                 const active = isLinkActive(link.href);

//                                 return (
//                                     <div
//                                         key={link.id}
//                                         className="relative group"
//                                         onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
//                                     >
//                                         <Link
//                                             href={getLinkHref(link.href)}
//                                             className={`nav-trigger text-xs tracking-widest transition-colors flex items-center gap-1 py-6 uppercase ${link.hasDropdown ? 'cursor-pointer' : ''}
//                                                 ${isHomePage
//                                                     ? active
//                                                         ? 'text-white font-normal' // Active on Home
//                                                         : 'text-white hover:text-white/70'
//                                                     : active
//                                                         ? 'text-[#D4AF37] font-normal' // Active elsewhere
//                                                         : 'text-white hover:text-white/70'
//                                                 }`}
//                                             onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
//                                             // FIX: Close dropdown when any main nav link is clicked
//                                             onClick={() => setActiveDropdown(null)}
//                                         >
//                                             {link.label}
//                                             {link.hasDropdown && (
//                                                 <ChevronDown
//                                                     size={14}
//                                                     className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                                 />
//                                             )}
//                                         </Link>
//                                     </div>
//                                 );
//                             })}
//                         </nav>


//                         <div className={`flex items-center text-sm cursor-pointer ${isHomePage ? ' text-white hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'}`}>
//                             <a href="/contact">
//                                 Contact
//                             </a>
//                         </div>
//                     </div>

//                     {/* --- Mega Menu Dropdown (Desktop) (unchanged) --- */}
//                     <div
//                         className={`dropdown-container absolute top-full left-0 w-full bg-white shadow-xl
//                         grid overflow-hidden transition-all duration-500 ease-out z-40
//                         ${activeDropdown
//                                 ? 'grid-rows-[1fr] opacity-100 border-t border-gray-100'
//                                 : 'grid-rows-[0fr] opacity-0 border-t-0'
//                             }`}
//                         onMouseEnter={() => activeDropdown && setActiveDropdown(activeDropdown)}
//                         onMouseLeave={() => setActiveDropdown(null)}
//                     >
//                         <div className="overflow-hidden min-h-0">
//                             <div className="max-w-[1400px] mx-auto px-8 py-5">
//                                 <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                                     {/* Map over dynamically fetched categories */}
//                                     {activeDropdownContent.map((category, index) => (
//                                         <a
//                                             href={category.href}
//                                             key={category.id}
//                                             className="group block text-center"
//                                             onClick={() => setActiveDropdown(null)} // Close dropdown on category link click
//                                             style={{
//                                                 opacity: 0,
//                                                 // Using index for staggered animation effect
//                                                 animation: `slideUpFade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
//                                                 animationDelay: `${index * 120}ms`
//                                             }}
//                                         >
//                                             <div className="relative overflow-hidden mb-6 aspect-[2/2] bg-gray-50">
//                                                 <Image
//                                                     src={category.image}
//                                                     alt={category.label}
//                                                     fill
//                                                     className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                             </div>
//                                             <h3 className="text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
//                                                 {category.label}
//                                             </h3>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* --- Mobile Menu (MODIFIED FOR SLIDE-IN FROM LEFT AND ADDED LOGO) --- */}
//                 <div
//                     className={`lg:hidden fixed top-0 left-0 h-full w-full max-w-xs bg-white shadow-lg py-3 px-6 flex flex-col gap-4
//                         transition-transform duration-300 ease-in-out z-40 overflow-y-auto
//                         ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
//                 >
//                     {/* MODIFIED: Header for Mobile Menu with Logo and Close Button */}
//                     <div className="flex justify-between items-center mb-4">
//                         {/* Logo on the left */}
//                         <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//                             <Image
//                                 src="/image/mktlogo.png"
//                                 alt="AXELS Logo"
//                                 width={60}
//                                 height={38}
//                                 // The logo should not be inverted inside the white mobile menu panel
//                                 className={`h-10 md:h-12 transition-all duration-300`}
//                             />
//                         </Link>
//                         {/* Close button on the right */}
//                         <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900">
//                             <X size={24} />
//                         </button>
//                     </div>

//                     {/* Phone Number at the top of the mobile menu (unchanged) */}
//                     <a href="tel:+971 42255765" className="text-sm font-normal tracking-widest py-2 text-gray-900 flex items-center gap-2 border-b pb-3 mb-2">
//                         <Phone size={16} />
//                         <span>+971 42255765</span>
//                     </a>


//                     {NAV_LINKS.map((link) => (
//                         <div key={link.id} className="border-b border-gray-100 last:border-b-0">
//                             {/* Main Mobile Link - MODIFIED for dropdowns to be a button or link */}
//                             {link.hasDropdown ? (
//                                 // *** FIX 1: Use a button to handle dropdown toggle/display ***
//                                 <div
//                                     className="flex items-center justify-between text-sm font-normal tracking-widest py-3 text-gray-900 uppercase cursor-pointer"
//                                     onClick={() => toggleMobileDropdown(link.id)}
//                                 >
//                                     {link.label}
//                                     <ChevronDown
//                                         size={18}
//                                         className={`transition-transform duration-300 ${activeDropdown === link.id ? 'rotate-180' : ''}`}
//                                     />
//                                 </div>
//                             ) : (
//                                 // Regular Link
//                                 <Link
//                                     href={getLinkHref(link.href)}
//                                     className="block text-sm font-normal tracking-widest py-3 text-gray-900 uppercase"
//                                     onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                     {link.label}
//                                 </Link>
//                             )}


//                             {/** MODIFIED: Categories dropdown max-height adjusted to ensure all content is visible */}
//                             {link.hasDropdown && (
//                                 <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.id ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
//                                     <div className="mt-2 pl-4 border-l-2 border-gray-100">
//                                         <div className="grid grid-cols-2 gap-3 py-2">
//                                             {link.categories?.map(cat => (
//                                                 <Link
//                                                     key={cat.id}
//                                                     href={cat.href}
//                                                     className="group block text-center"
//                                                     onClick={() => setIsMobileMenuOpen(false)}
//                                                 >
//                                                     {/* Category Image container - responsive square aspect ratio */}
//                                                     <div className="relative overflow-hidden mb-2 aspect-[2/2] rounded-lg bg-gray-50">
//                                                         <Image
//                                                             src={cat.image}
//                                                             alt={cat.label}
//                                                             fill
//                                                             sizes="(max-width: 600px) 50vw, 100px"
//                                                             className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
//                                                         />
//                                                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
//                                                     </div>
//                                                     {/* Category Label */}
//                                                     <h3 className="text-xs text-gray-900 font-medium group-hover:text-gray-600 transition-colors">
//                                                         {cat.label}
//                                                     </h3>
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                         {/* *** NEW ADDITION: View all category link (Now visible due to max-height increase) *** */}
//                                         <Link
//                                             href={link.href}
//                                             className="block text-center text-sm font-bold tracking-widest py-3 text-gray-900 uppercase hover:text-[#D4AF37] transition-colors"
//                                             onClick={() => setIsMobileMenuOpen(false)}
//                                         >
//                                             View all categories
//                                         </Link>
//                                         {/* *** END NEW ADDITION *** */}
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                     <div className="border-b border-gray-100">
//                         <a
//                             href="/contact"
//                             className="block text-sm font-bold tracking-widest py-3 text-gray-900 uppercase"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                         >
//                             Contact
//                         </a>
//                     </div>

//                 </div>
//                 {/* MODIFIED: Overlay to darken content when menu is open (unchanged) */}
//                 {isMobileMenuOpen && (
//                     <div
//                         className="fixed inset-0 bg-black/50 z-30 lg:hidden"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     />
//                 )}
//             </header>
//         </div>
//     );
// }