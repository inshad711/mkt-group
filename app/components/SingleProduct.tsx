


//////////


// D:\mktgroup\app\components\SingleProduct.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Minus, Plus, ChevronDown } from 'lucide-react';


const PRODUCT_DATA = {
    category: "HOUSEHOLD CLEANING",
    title: "Harpic Power Plus 10X Toilet Cleaner",
    price: 3.50, // Example price
    description: "Harpic Power Plus 10X is a powerful toilet cleaner that kills 99.9% of germs and removes tough stains, leaving your toilet sparkling clean and fresh. Its unique formula is 10 times better than ordinary cleaners for a superior clean.",
    images: [
        "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
        "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
        "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
        "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png"
    ],
    sizes: ["500 ml", "750 ml", "1 L"],
    accordions: [
        {
            id: "info",
            title: "Product Information",
            content: "Harpic Power Plus 10X is a one-stop solution for all your toilet cleaning needs. It gives you 10 times better cleaning benefits versus ordinary cleaners: 1. Tough Stain Removal 2. 99.9% Germ Kill 3. Malodor Control 4. Sparkling Clean Toilet 5. Better Viscosity 6. Faster Action 7. Easy to Use 8. Longer Shelf Life 9. Kills Disease Causing Bacteria 10. Removes Yellowish Stains."
        },
        {
            id: "benefits",
            title: "Key Benefits",
            content: "Kills 99.9% of germs, Removes tough stains, Leaves a fresh fragrance, 10X superior cleaning power."
        },
        {
            id: "ingredients",
            title: "Ingredients",
            content: "Hydrochloric Acid 10.5% w/w, Hydroxy Ethyl Oleyl Amine, Alkyl Trimethyl Ammonium Chloride, Methyl Salicylate, De-ionized Water."
        }
    ]
};

export default function SingleProduct() {
    const [selectedSize, setSelectedSize] = useState("100 ml");
    const [quantity, setQuantity] = useState(1);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [openAccordion, setOpenAccordion] = useState<string | null>("ingredients");

    const handleQuantityChange = (type: 'inc' | 'dec') => {
        if (type === 'dec' && quantity > 1) setQuantity(quantity - 1);
        if (type === 'inc') setQuantity(quantity + 1);
    };

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="bg-white text-gray-900 py-4 md:py-8 lg:py-12">

            <div className="templateContainer grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left Column: Gallery 
          sticky top-8: Makes the entire gallery stick to the top of the screen when scrolling.
        */}
                <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 lg:sticky lg:top-8">

                    {/* Thumbnails */}
                    <div className="hidden md:flex flex-col gap-3 order-1 md:order-1 w-20">
                        {PRODUCT_DATA.images.map((img, idx) => (
                            <div
                                key={idx}
                                // Changed to onMouseEnter for hover effect
                                onMouseEnter={() => setActiveImageIndex(idx)}
                                className={`relative w-full aspect-square rounded-lg overflow-hidden border cursor-pointer transition-all duration-200 ${activeImageIndex === idx
                                    ? 'border-black opacity-100 ring-1 ring-black'
                                    : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${idx}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Image */}
                    {/* Added h-[600px] to enforce a fixed height so it doesn't jump around */}
                    <div className="flex-1 order-2 md:order-2 relative bg-[#F4F4F4] rounded-xl overflow-hidden aspect-[4/5] md:h-[600px] w-full">
                        <Image
                            src={PRODUCT_DATA.images[activeImageIndex]}
                            alt="Product Main"
                            fill
                            className="object-cover object-center transition-opacity duration-300 ease-in-out"
                            priority
                        />
                    </div>

                    {/* Mobile Thumbnails */}
                    <div className="flex md:hidden gap-2 order-3 overflow-x-auto pb-2 no-scrollbar">
                        {PRODUCT_DATA.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImageIndex(idx)}
                                className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border ${activeImageIndex === idx ? 'border-black' : 'border-transparent'
                                    }`}
                            >
                                <Image src={img} alt="thumb" fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Product Details */}
                <div className="lg:col-span-5 flex flex-col pt-2">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {PRODUCT_DATA.category}
                        </span>

                    </div>

                    <h1 className="text-[32px] font-normal tracking-normal text-gray-900 mb-2">
                        {PRODUCT_DATA.title}
                    </h1>

                    <p className="text-lg font-medium text-gray-900 mb-8">
                        ${PRODUCT_DATA.price.toFixed(2)}
                    </p>

                    <div className="h-px w-full bg-gray-200 mb-8" />

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                        {PRODUCT_DATA.description}
                    </p>

                    {/* Variants */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-900 mb-3">Size</label>
                        <div className="flex gap-3">
                            {PRODUCT_DATA.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-5 py-3 rounded-lg text-sm font-medium border transition-all ${selectedSize === size
                                        ? 'border-gray-200 bg-white text-black ring-1 ring-black shadow-sm'
                                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>





                    {/* Accordions */}
                    <div className="border-t border-gray-200">
                        {PRODUCT_DATA.accordions.map((item) => {
                            const isOpen = openAccordion === item.id;
                            return (
                                <div key={item.id} className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full py-5 flex justify-between items-center text-left group"
                                    >
                                        <span className="text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                                            {item.title}
                                        </span>
                                        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                            {/* Switched to Plus/Minus icon to match video exactly if needed, but chevron is standard. 
                            If you want Plus/Minus like typical Accordions: */}
                                            {isOpen ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-gray-400" />}
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}