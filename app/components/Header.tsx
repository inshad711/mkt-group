

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
                    {/* <a href="tel:+971 42255765" className=" block lg:hidden text-white absolute left-4 gap-2 text-sm font-medium">
                        <Phone size={16} />
                        <span className='cursor-pointer'>+971 42255765</span>
                    </a> */}
                    {/* Left: Phone (Mobile Only) */}
                    <a
                        href="tel:+97142255765"
                        className="flex items-center gap-2 cursor-pointer lg:hidden text-white absolute left-4 text-sm font-medium"
                    >
                        {/* Icon is always visible */}
                        <Phone size={18} />

                        {/* Text is hidden on mobile, visible on tablet (md) and up */}
                        <span className='hidden md:block cursor-pointer'>
                            +971 42255765
                        </span>
                    </a>

                    {/* Center: Logo */}
                    <Link href="/">
                        <Image
                            src="/image/mktlogo.webp"
                            alt="mkt Logo"
                            width={60}
                            height={38}
                            className={`h-12 md:h-12 transition-all duration-300 filter ${isHomePage ? 'brightness-0 invert ' : 'brightness-0 invert'}`}
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
                        <div className="flex items-center  cursor-pointer text-white gap-2 text-sm">
                            {/* <a href="tel:+97142255765">
                                <span>+971 42255765</span>
                            </a> */}

                            <a
                                href="tel:+97142255765"
                                className="flex items-center gap-2  text-white  text-sm font-medium"
                            >
                                {/* Icon is always visible */}
                                <Phone size={18} />

                                {/* Text is hidden on mobile, visible on tablet (md) and up */}
                                <span className='cursor-pointer'>
                                    +971 42255765
                                </span>
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
                                src="/image/mktlogo.webp"
                                alt="mkt Logo"
                                width={60}
                                height={38}
                                // The logo should not be inverted inside the white mobile menu panel
                                className={`h-12 md:h-12 transition-all duration-300`}
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

