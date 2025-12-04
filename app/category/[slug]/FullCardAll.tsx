// D:\mktgroup\app\category\[slug]\FullCardAll.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewBreadCrumb from '@/app/components/NewBreadCrumb';
import { motion } from 'framer-motion';

interface Product {
    id: number;
    title: string;
    slug: string;
    category: string;
    image: string;
    hoverImage: string;
    product_specification: string;
}

interface ProductCardProps {
    product: Product;
    categoryTitle: string;
}

const ProductCard = ({ product, categoryTitle }: ProductCardProps) => {
    const IMAGE_WIDTH = 400;
    const IMAGE_HEIGHT = 533;

    return (
        <Link
            href={`/product/${product.slug}`}
            className="group flex flex-col gap-3 cursor-pointer"
        >
            <div className="relative w-full bg-white rounded-[5px] overflow-hidden">
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

            {/* // */}
            <div className="flex justify-between items-end px-1">
                <div className="flex flex-col py-2 gap-1">
                    <p className="text-[10px] md:text-[12px] font-normal text-gray-500 uppercase tracking-wide">
                        {categoryTitle}
                    </p>
                    <h3 className="text-[11px] md:text-[13px] font-normal text-gray-900 leading-tight">
                        {product.title}
                    </h3>
                </div>
                <div className="relative h-5 overflow-hidden w-24 text-right">
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren",
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    },
};

interface FullCardAllProps {
    products: Product[];
    error: string | null;
    formattedSlug: string;
}

const FullCardAll = ({ products, error, formattedSlug }: FullCardAllProps) => {
    if (error) {
        return (
            <>
                <NewBreadCrumb
                    title={formattedSlug}
                    page={formattedSlug}
                    img="/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.png"
                    version2={false}
                />
                <section className="w-full templateContainer px-6 py-12 text-center text-red-600">
                    <p>{error}</p>
                </section>
            </>
        );
    }

    if (products.length === 0) {
        return (
            <>
                <NewBreadCrumb
                    title={formattedSlug}
                    page={formattedSlug}
                    img="/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.png"
                    version2={false}
                />
                <section className="w-full templateContainer px-6 py-12 text-center">
                    <p>No products found in the category {formattedSlug}.</p>
                </section>
            </>
        );
    }

    return (
        <section className="w-full">
            <NewBreadCrumb
                title={formattedSlug}
                page={formattedSlug}
                img="/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.png"
                version2={false}
            />
            <div className='templateContainer pb-10'>

                <div className="flex flex-row justify-center py-10 items-baseline mb-8 border-b border-transparent">
                    <div className="flex items-baseline gap-6">
                        <h2 className="text-[22px] font-normal border-b-2 border-black text-black">
                            {formattedSlug}
                        </h2>
                    </div>
                </div>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {products.map((product) => (
                        <motion.div key={product.id} variants={cardVariants}>
                            <ProductCard
                                product={product}
                                categoryTitle={formattedSlug}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FullCardAll;