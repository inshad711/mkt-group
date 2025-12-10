


/////  D:\mktgroup\app\components\FullCard.tsx
"use client"; // Required for using React hooks like useState and useEffect

import React, { useState, useEffect } from 'react';


// Define the structure for the product data
interface Product {
    id: number;
    title: string;
    category: string;
    image: string;
    hoverImage: string;
}

/**
 * Transforms the raw API product data into the structured 'Product' interface.
 * NOTE: All price and discount fields have been removed as requested.
 */
const transformApiData = (apiProducts: any[]): Product[] => {
    return apiProducts.map((p, index) => {
        // Extracting product title, image URLs, and creating a temporary ID
        const title = p.title.split(' - ')[0]; // Use first part of the title for a cleaner look

        // --- Use the full URL directly from the API response ---
        // The API returns the full URL, not just a slug, so no need for prefixing.
        const primaryImageURL = p.product_gallery_images[0] || '';
        // Use the second image as hover, or the first if only one exists
        const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';

        const image = primaryImageURL;
        const hoverImage = hoverImageURL;
        // -----------------------------------------------------------

        return {
            id: index + 1, // Using index as a temporary ID
            title: title || 'Unknown Product',
            category: 'Household', // Category from the API's top level is "Household Cleaning"
            image: image,
            hoverImage: hoverImage,
        };
    });
};

// 2. ProductCard Component (Updated to remove price/discount and standardize hover text)
const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group flex flex-col gap-3 cursor-pointer">

            {/* Image Container with Hover Swap */}
            <div className="relative w-full aspect-[4/5] bg-[#F4F4F4] rounded-[5px] overflow-hidden">

                {/* Discount Badge - REMOVED */}

                {/* Main Product Image (Visible by default, fades out on hover) */}
                <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                    <img
                        src={product.image}
                        alt={product.title}
                        // Use key to force image re-render if src changes (good practice for dynamic images)
                        key={product.image}
                        className="w-full h-full object-cover object-center mix-blend-multiply"
                    />
                </div>


                {/* Hover Image (Slides in and scales up) */}
                <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
                    <img
                        src={product.hoverImage}
                        alt={`${product.title} texture`}
                        key={product.hoverImage}
                        className="w-full h-full object-cover object-center mix-blend-multiply"
                    />
                </div>
            </div>

            {/* Product Details with "Quick Add" Animation */}
            <div className="flex justify-between items-end px-1 h-10">
                <div className="flex flex-col gap-1">
                    <p className="text-[12px] font-medium text-gray-400 uppercase tracking-wide">
                        {product.category}
                    </p>
                    <h3 className="text-[11px] md:text-[12px] font-medium text-gray-900 leading-tight">
                        {product.title}
                    </h3>

                </div>

                {/* Price / Quick Add Swap Area - Simplified to only show Quick Add */}
                <div className="relative h-5 overflow-hidden w-24 text-right">
                    {/* Quick Add: Slides in from bottom on hover */}
                    {/* Note: The old price element was removed, leaving only the 'Quick Add' element. */}
                    <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        <span className="text-[13px] font-normal text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
                            View
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 1. Updated FullCard component to fetch data dynamically
const FullCard = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
            const apiEndpoint = '/wp-json/custom/v1/getProductByCategory/household-cleaning';
            const fullUrl = `${baseUrl}${apiEndpoint}`;

            try {
                const response = await fetch(fullUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                // Check if data is an object and contains a 'products' array
                if (data && data.products && Array.isArray(data.products)) {
                    // Transform and set the fetched data
                    const transformedProducts = transformApiData(data.products);
                    setProducts(transformedProducts);
                } else {
                    // This handles the case where the API call succeeds but returns unexpected data
                    throw new Error('Invalid product data structure received from API.');
                }
            } catch (err: any) {
                console.error("Error fetching products:", err);
                // Use a more user-friendly error message for the UI
                setError(`Failed to load products. Check the network connection and API endpoint.`);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // --- Loading, Error, and Empty States ---

    if (loading) {
        return (
            <section className="w-full templateContainer px-6 py-12 text-center">
                <p>Loading products...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section className="w-full templateContainer px-6 py-12 text-center text-red-600">
                <p>{error}</p>
            </section>
        );
    }

    if (products.length === 0) {
        return (
            <section className="w-full templateContainer px-6 py-12 text-center">
                <p>No products found in this category.</p>
            </section>
        );
    }

    // --- Main Render ---

    return (
        <section className="w-full templateContainer px-6 py-12">

            {/* Header Section */}
            <div className="flex flex-row justify-between items-baseline mb-8 border-b border-transparent">
                <div className="flex items-baseline gap-6">
                    <button className="text-2xl font-medium text-black cursor-pointer">
                        Trending
                    </button>

                </div>


            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-8 sm:hidden flex justify-center">
                <a href="/all" className="text-sm font-medium text-black underline underline-offset-4">
                    Shop all
                </a>
            </div>
        </section>
    );
};

export default FullCard;