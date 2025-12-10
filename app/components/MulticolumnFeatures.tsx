



"use client";
import React, { useState } from 'react';
import { Plus, ArrowUp, ShoppingBag, Zap, Activity } from 'lucide-react';

// --- Types (Standard TS pattern) ---
interface Product {
    id: string;
    number: string;
    title: string;
    subtitle?: string; // Some cards might have extra text
    imageBg: string; // The B&W background
    productColor: string; // To simulate different product flavors
    isFlashSale?: boolean;
}

const products: Product[] = [
    {
        id: '1',
        number: '01',
        title: 'Disposable',
        imageBg: '/dummy-image/volunteer-putting-plastic-bottles-bin.jpg',
        productColor: 'from-lime-400 to-green-600',
    },
    {
        id: '2',
        number: '02',
        title: 'Retail',
        imageBg: '/dummy-image/al-jubail-souk-sharjah.jpg',
        productColor: 'from-emerald-400 to-teal-600',
        isFlashSale: true,
    },
    {
        id: '3',
        number: '03',
        title: 'Food',
        imageBg: '/dummy-image/man-shopping-with-mask-side-view.jpg',
        productColor: 'from-green-300 to-lime-500',
    },
    {
        id: '4',
        number: '04',
        title: 'Commodities',
        imageBg: '/dummy-image/462841592_8900146553349644_4378514585439633327_n.jpg',
        productColor: 'from-lime-400 to-green-600',
    },
    {
        id: '5',
        number: '05',
        title: 'Non Food',
        imageBg: '/dummy-image/ALFAMART-NON-FOOD-1.jpg',
        productColor: 'from-emerald-400 to-teal-600',
        isFlashSale: true,
    },
    {
        id: '6',
        number: '06',
        title: 'FOCUS SYNERGY',
        imageBg: '/dummy-image/man-shopping-with-mask-side-view.jpg',
        productColor: 'from-green-300 to-lime-500',
    }
];

// --- Sub-components ---

const OutlineNumber = ({ num }: { num: string }) => (
    <span
        className="text-5xl font-bold tracking-tighter"
        style={{
            // Replicating the hollow text effect
            WebkitTextStroke: '1px #374151', // text-gray-700
            color: 'transparent',
        }}
    >
        {num}
    </span>
);

const ProductImageArea = ({ product }: { product: Product }) => {
    return (
        <div className="relative w-full h-72 rounded-lg overflow-hidden group bg-gray-900">
            {/*  Image  */}
            <div className="absolute inset-0">
                <img
                    src={product.imageBg}
                    alt="background"
                    className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div> */}
            </div>

            {/* Flash Sale Badge */}
            {product.isFlashSale && (
                <div className="absolute top-4 right-4 z-20">
                    <div className="bg-lime-400 text-black text-xs font-black px-3 py-1 rounded-sm transform rotate-3 shadow-[0_0_15px_rgba(163,230,53,0.5)]">
                        FLASH SALE
                    </div>
                </div>
            )}


        </div>
    );
};

// --- Main App Component ---

export default function MulticolumnFeatures() {
    return (
        <div className="bg-gray-100 p-8 pt-44">

            {/* Header / Context */}
            <div className="templateContainer mb-12  flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        CATEGORIES</h1>
                    <p className="text-[#D4AF37] mt-2">Curated for your specific workout plan.</p>
                    <p className="text-[#0B2447] mt-2">Curated for your specific workout plan.</p>
                    <p className="text-[#F4F4F4] mt-2">Curated for your specific workout plan.</p>
                    <p className="text-[#FFFFFF] mt-2">Curated for your specific workout plan.</p>
                </div>
                <button className="hidden md:flex items-center space-x-2 text-sm font-semibold text-gray-600 hover:text-black transition-colors">
                    <span>View All Products</span>
                    <ArrowUp className="w-4 h-4 rotate-45" />
                </button>
            </div>

            {/* Grid Layout */}
            <div className="templateContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg p-4 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
                    >

                        {/* Product Image Area */}
                        <ProductImageArea product={product} />
                        {/* Card Header */}
                        <div className="flex justify-between items-start mb-4 px-2 pt-2">
                            <div className="flex flex-col">
                                {/* <OutlineNumber num={product.number} /> */}
                                <h2 className="text-lg font-bold text-gray-800 mt-1 tracking-tight">
                                    {product.title}
                                </h2>
                            </div>

                            {/* Add Button */}
                            <button
                                className="bg-lime-400 hover:bg-lime-300 active:bg-lime-500 text-black p-2 rounded-lg transition-colors duration-200"
                                aria-label="Add to cart"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>


                    </div>
                ))}
            </div>



        </div>
    );
}