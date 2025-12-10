

// D:\mktgroup\app\components\CardSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// 1. Import Framer Motion AND Variants type
import { motion, Variants } from 'framer-motion';
import { CategorySkeleton } from './Skeletons';

interface Category {
    name: string;
    slug: string;
    image: string;
}

// 2. Define Animation Variants with the explicit Variants type
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

const CardSection = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

    useEffect(() => {
        const fetchCategories = async () => {
            if (!API_BASE_URL) {
                setError("API Base URL is not configured.");
                setIsLoading(false);
                return;
            }

            try {
                const apiUrl = `${API_BASE_URL}/wp-json/custom/v1/getAllCategories`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setCategories(data.categories || []);
            } catch (err) {
                console.error("Failed to fetch categories:", err);
                setError("Failed to load categories.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, [API_BASE_URL]);

    if (isLoading) {
        // UPDATED: Return Skeleton
        return <CategorySkeleton />;
    }

    if (error) {
        return (
            <section className="w-full py-10 pt-48 bg-white">
                <div className="templateContainer text-center">
                    <p className="text-red-500">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-10 bg-white">
            <div className="templateContainer space-y-8">

                <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                        Categories of Our Solutions
                    </h2>
                    <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                        for Modern effects and colors in a similar way
                    </h3>
                </div>

                {/* 3. Apply Motion to Container Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Animates when scrolled into view
                    viewport={{ once: true, margin: "-100px" }}
                >

                    {categories.map((item) => (
                        // 4. Wrap Link in motion.div and apply card variants
                        // Note: key moved here
                        <motion.div key={item.slug} variants={cardVariants}>
                            <Link
                                href={`/category/${item.slug}`}
                                className="relative group cursor-pointer block h-full"
                            >
                                <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-md">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22, 1, 0.36, 1)] group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
                                        <p className="text-white text-center font-light tracking-wide text-sm md:text-sm px-2">
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
};

export default CardSection;