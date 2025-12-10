

// D:\mktgroup\app\components\TrendingSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// 1. Import Framer Motion AND Variants type
import { motion, Variants } from 'framer-motion';
// 2. Import Skeleton
import { ProductListSkeleton } from './Skeletons';

// Define the structure for the product data
interface Product {
    id: number;
    title: string;
    slug: string;
    category: string;
    image: string;
    hoverImage: string;
    product_specification: string;
}

// Define the expected structure for a raw API product item.
interface ApiProduct {
    title: string;
    slug: string;
    product_gallery_images: string[];
    product_specification?: string;
}

// Define Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            when: "beforeChildren",
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 15 }
    },
};

/**
 * Transforms the raw API product data into the structured 'Product' interface.
 */
const transformApiData = (apiProducts: ApiProduct[], categoryName: string): Product[] => {
    return apiProducts.map((p, index) => {
        const title = p.title.split(' - ')[0];

        const primaryImageURL = p.product_gallery_images[0] || '';
        const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';

        const image = primaryImageURL;
        const hoverImage = hoverImageURL;

        return {
            id: index + 1,
            title: title || 'Unknown Product',
            slug: p.slug,
            category: categoryName,
            image: image,
            hoverImage: hoverImage,
            product_specification: p.product_specification || '',
        };
    });
};

// ProductCard Component
const ProductCard = ({ product }: { product: Product }) => {
    const IMAGE_WIDTH = 400;
    const IMAGE_HEIGHT = 533;

    return (
        <Link
            href={`/product/${product.slug}`}
            className="group flex flex-col gap-3 cursor-pointer"
        >
            {/* Image Container with Hover Swap */}
            <div className="relative w-full bg-white rounded-[5px] overflow-hidden">

                {/* Main Product Image */}
                <div className="transition-opacity duration-[1.8s] ease-in-out group-hover:opacity-0 z-10">
                    <Image
                        src={product.image}
                        alt={product.title}
                        key={product.image}
                        width={IMAGE_WIDTH}
                        height={IMAGE_HEIGHT}
                        className="w-full h-full object-contain object-center"
                        unoptimized
                    />
                </div>

                {/* Hover Image */}
                <div className="absolute inset-0 transition-all duration-[1.8s] ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
                    <Image
                        src={product.hoverImage}
                        alt={`${product.title} texture`}
                        key={product.hoverImage}
                        width={IMAGE_WIDTH}
                        height={IMAGE_HEIGHT}
                        className="w-full h-full object-contain object-center"
                        unoptimized
                    />
                </div>
            </div>

            {/* Product Details with "Quick Add" Animation */}
            <div className="flex justify-between items-end px-1">
                <div className="flex flex-col py-2 gap-1">
                    <p className="text-[10px] md:text-[12px] font-normal text-gray-500 uppercase tracking-wide">
                        {product.category}
                    </p>
                    <h3 className="text-[11px] md:text-[13px] font-normal text-gray-900 leading-tight">
                        {product.title}
                    </h3>
                </div>

                <div className="relative h-5 overflow-hidden w-24 text-right">
                    {/* Quick Add: Slides in from bottom on hover */}
                    <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        <span className="text-[13px] font-normal text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
                            View
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const TrendingSection = () => {
    // Fixed slug for trending products
    const fixedSlug = 'household-cleaning';

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        setProducts([]);

        const fetchProducts = async () => {
            const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
            if (!baseUrl) {
                setError("API Base URL is not configured in .env.local.");
                setLoading(false);
                return;
            }

            // API endpoint to fetch products by category slug
            const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${fixedSlug}`;
            const fullUrl = `${baseUrl}${apiEndpoint}`;

            try {
                const response = await fetch(fullUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (data && data.products && Array.isArray(data.products)) {
                    const transformedProducts = transformApiData(data.products, data.category_name || 'Household Cleaning');
                    setProducts(transformedProducts.slice(0, 4)); // Limit to 4 for trending
                } else {
                    setProducts([]);
                }
            }
            catch (err) {
                console.error("Error fetching products:", err);
                const errorMessage = err instanceof Error
                    ? err.message
                    : `Failed to load trending products. Check connection and API endpoint.`;

                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        // 3. Return Skeleton
        return (
            <section className="w-full py-12">
                <ProductListSkeleton />
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
                <p>No trending products found.</p>
            </section>
        );
    }

    return (
        <section className="w-full templateContainer px-6 py-12">

            {/* Header Section */}
            <div className="space-y-2 mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                    Trending Products
                </h2>
                <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                    The most popular household cleaning essentials right now.
                </h3>
            </div>

            {/* Product Grid with Animation */}
            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" // Triggers animation when scrolled into view
                viewport={{ once: true, margin: "-100px" }} // Once:true means it won't replay if you scroll up and down
            >
                {products.map((product) => (
                    // Wrap Item in motion.div and move Key here
                    <motion.div key={product.id} variants={cardVariants}>
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>

            <div className="mt-8 flex justify-center">
                <Link href="/category/household-cleaning" className="text-sm font-medium text-black underline underline-offset-4">
                    Shop all
                </Link>
            </div>

        </section>
    );
};

export default TrendingSection;