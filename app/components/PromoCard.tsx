

/////////////////

import React from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const bannerData = [
    {
        id: 1,
        badge: "Weekend Discount",
        title: "Essential Cleaning \nSrink Supplies",
        subtitle: "Sparkle Your Home Today",
        buttonText: "Shop Now",
        bgColor: "bg-[#F4EFE9]",
        image: "/dummy-image/Gemini_Generated_Image_uxa40duxa40duxa4.png",
        imageAlt: "Essential Cleaning",
        href: "/category/household-cleaning",
    },
    {
        id: 2,
        badge: "Weekend Discount",
        title: "Our Convenient \nSnacks & Drinks",
        subtitle: "Perfect for any time to day!",
        buttonText: "Shop Now",
        bgColor: "bg-[#F7F0ED]",
        image: "/dummy-image/Gemini_Generated_Image_amq3plamq3plamq3.png",
        imageAlt: "Our Convenient",
        href: "/category/edible-products",
    }
];

const ProductBanner = () => {
    return (
        <div className="w-full pt-16 bg-white">
            <div className="templateContainer px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

                    {bannerData.map((card) => (
                        <div
                            key={card.id}
                            // Added 'group' for hover effects
                            className={`relative overflow-hidden rounded-[7px] ${card.bgColor}  transition-all duration-300 group h-full min-h-[280px] flex items-center`}
                        >
                            {/* --- 1. Background Image (Full Cover) --- */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={card.image}
                                    alt={card.imageAlt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>


                            {/* --- 3. Content Side (Left) --- 
                                Added 'relative z-10' so it sits on top of the image/overlay
                            */}
                            <div className="relative z-10 w-full px-3 sm:px-8 flex flex-col items-start justify-center h-full">



                                {/* Title */}
                                <h2 className="text-[25px] sm:text-[30px] font-normal text-gray-900 leading-tight mb-3 whitespace-pre-line drop-shadow-sm">
                                    {card.title}
                                </h2>

                                {/* Subtitle */}
                                <p className="text-gray-700 font-medium mb-8 text-sm sm:text-[12px] max-w-sm">
                                    {card.subtitle}
                                </p>

                                {/* Button */}
                                <Link
                                    href={card.href}
                                    className="inline-flex items-center justify-center text-sm bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white font-normal py-3 px-7  transition-colors duration-200 shadow-md group-hover:shadow-lg"
                                >
                                    {card.buttonText}
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default function PromoCard() {
    return (
        <div className="bg-gray-50 flex items-center justify-center">
            <ProductBanner />
        </div>
    );
}