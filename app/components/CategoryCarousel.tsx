

'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Interface for the data fetched from the API
interface Category {
    name: string;
    slug: string;
    image: string;
}

// Define the CSS for hiding the scrollbar using vendor prefixes
const ScrollbarHideStyle = (
    <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar-hide::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
        }
        .custom-scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
            overflow-x: scroll !important; /* Force scrollable content to ensure hiding works */
        }
        /* Fix for image scaling transition, since we cannot use Next/Image 'fill' prop */
        .image-container {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        .category-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .group:hover .category-image {
            transform: scale(1.1);
        }
    `}} />
);

const CategoryCarousel = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Ref to the slider element for programmatic scrolling
    const sliderRef = React.useRef<HTMLDivElement>(null);

    // NOTE: We cannot rely on environment variables in the sandbox,
    // so API_BASE_URL is hardcoded as a fallback for demonstration.
    // In a production Next.js environment, the process.env variable would be used.
    const API_BASE_URL = typeof process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL !== 'undefined'
        ? process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL
        : 'https://placeholder.api'; // Fallback for sandbox execution

    // --- Data Fetching Logic (Fixed with dummy data for sandbox testing) ---
    useEffect(() => {
        const fetchCategories = async () => {
            if (!API_BASE_URL || API_BASE_URL === 'https://placeholder.api') {
                // Use mock data when API URL is missing or is the placeholder for sandbox demo
                setCategories([
                    { name: "Digital Marketing", slug: "digital-marketing", image: "https://placehold.co/400x500/A0E7E5/333?text=Digital" },
                    { name: "Web Development", slug: "web-development", image: "https://placehold.co/400x500/FFD3B5/333?text=Web" },
                    { name: "Brand Strategy", slug: "brand-strategy", image: "https://placehold.co/400x500/B5EAD7/333?text=Brand" },
                    { name: "Content Creation", slug: "content-creation", image: "https://placehold.co/400x500/C7CEEA/333?text=Content" },
                    { name: "SEO Optimization", slug: "seo-optimization", image: "https://placehold.co/400x500/E8D1BA/333?text=SEO" },
                    { name: "Data Analytics", slug: "data-analytics", image: "https://placehold.co/400x500/F4A261/333?text=Data" },
                    { name: "Social Media", slug: "social-media", image: "https://placehold.co/400x500/2A9D8F/333?text=Social" },
                ]);
                setIsLoading(false);
                return;
            }

            try {
                // Implementing exponential backoff for the fetch call
                const maxRetries = 3;
                let lastError = null;
                for (let i = 0; i < maxRetries; i++) {
                    try {
                        const apiUrl = `${API_BASE_URL}/wp-json/custom/v1/getAllCategories`;
                        const response = await fetch(apiUrl);
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const data = await response.json();
                        setCategories(data.categories || []);
                        lastError = null;
                        break;
                    } catch (err) {
                        lastError = err;
                        if (i < maxRetries - 1) {
                            // Wait using exponential backoff: 2^i * 500ms
                            await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 500));
                        }
                    }
                }

                if (lastError) {
                    console.error("Failed to fetch categories after multiple retries:", lastError);
                    setError("Failed to load categories after multiple retries.");
                }

            } catch (err) {
                console.error("Failed to fetch categories:", err);
                setError("Failed to load categories.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchCategories();
    }, [API_BASE_URL]);

    // --- Navigation Logic (Optional) ---
    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            // Scroll by 80% of the container width for a better user experience
            const scrollAmount = (direction === 'left' ? -1 : 1) * sliderRef.current.clientWidth * 0.8;
            sliderRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    // --- Loading and Error States (Same as before) ---
    if (isLoading) {
        return <div className="templateContainer text-center py-48"><p className="text-gray-500">Loading categories...</p></div>;
    }
    if (error) {
        return <div className="templateContainer text-center py-48"><p className="text-red-500">{error}</p></div>;
    }
    if (categories.length === 0) {
        return <div className="templateContainer text-center py-48"><p className="text-gray-500">No categories found.</p></div>;
    }

    // --- Main Component Render ---
    return (
        <section className="w-full bg-white">
            {ScrollbarHideStyle} {/* Inject the scrollbar hiding CSS and image transition styles */}

            {/* templateContainer handles max-width and centering */}
            <div className="templateContainer space-y-8">

                {/* Header Section */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                        Our Product Categories
                    </h2>
                    <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                        Explore all our product categories.
                    </h3>
                </div>

                {/* Slider Container: Handles positioning for the buttons relative to the track */}
                <div className="relative">

                    {/* Left Navigation Button: Pushed outside the content area on larger screens */}
                    <button
                        onClick={() => scroll('left')}
                        className="
                            absolute left-0 lg:-left-12 top-1/2 cursor-pointer -translate-y-1/2 z-20 
                            bg-[#0B2447] hover:bg-[#0B2447]/80 p-3 rounded-full shadow-xl ring-1 ring-gray-100
                            transition duration-200 hidden md:block
                        "
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Right Navigation Button: Pushed outside the content area on larger screens */}
                    <button
                        onClick={() => scroll('right')}
                        className="
                            absolute right-0 lg:-right-12 top-1/2 cursor-pointer -translate-y-1/2 z-20 
                            bg-[#0B2447] hover:bg-[#0B2447]/80 p-3 rounded-full shadow-xl ring-1 ring-gray-100
                            transition duration-200 hidden md:block
                        "
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>


                    {/* Horizontal Scrollable Content */}
                    <div
                        ref={sliderRef}
                        className="
                            flex 
                            gap-4 
                            custom-scrollbar-hide /* Apply the new class to hide the scrollbar */
                            overflow-y-hidden 
                            py-1                    /* Small vertical padding for overflow/shadow space */
                            scroll-smooth 
                            snap-x snap-mandatory 
                        "
                    >
                        {categories.map((item) => (
                            // Card Wrapper: Ensure each card has a defined width and shrink property
                            <div
                                key={item.slug}
                                className="
                                    flex-shrink-0 
                                    w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-[280px] 
                                    snap-start 
                                "
                            >
                                {/* Replaced Next/Link with standard <a> tag */}
                                <a
                                    href={`/category/${item.slug}`}
                                    className="relative group cursor-pointer block h-full"
                                >
                                    {/* Card Wrapper with Aspect Ratio */}
                                    <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-md">
                                        {/* Replaced Next/Image with standard <img> tag and custom classes */}
                                        <div className="image-container">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="category-image"
                                            />
                                        </div>

                                        {/* Gradient Overlay & Text */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
                                            <p className="text-white text-center font-light tracking-wide text-sm md:text-sm px-2">
                                                {item.name}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CategoryCarousel;