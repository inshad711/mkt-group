


// D:\mktgroup\app\components\FullProductCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface Solution {
    id: number;
    title: string;
    image: string;
}

const solutions: Solution[] = [
    {
        id: 1,
        title: "Household Cleaning",
        image: "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png"
    },
    {
        id: 2,
        title: "Edible Products",
        image: "/dummy-image/Gemini_Generated_Image_8j3yai8j3yai8j3y.png"
    },
    {
        id: 3,
        title: "Dairy Products",
        image: "/dummy-image/Gemini_Generated_Image_rrqw3prrqw3prrqw.png"
    },
    {
        id: 4,
        title: "Baby Products ",
        image: "/dummy-image/Gemini_Generated_Image_x76mrdx76mrdx76m.png"
    },
    {
        id: 5,
        title: "Tea & coffee",
        image: "/dummy-image/Gemini_Generated_Image_rigiv7rigiv7rigi.png"
    },
    {
        id: 6,
        title: "Household Essential",
        image: "/dummy-image/Gemini_Generated_Image_5lvqy55lvqy55lvq.png"
    },
    {
        id: 7,
        title: "Personal Care",
        image: "/dummy-image/Gemini_Generated_Image_anwr9xanwr9xanwr.png"
    },
    {
        id: 8,
        title: "Dry Fruit",
        image: "/dummy-image/Gemini_Generated_Image_sk3jhysk3jhysk3j.png"
    },
    {
        id: 9,
        title: "Staples",
        image: "/dummy-image/Gemini_Generated_Image_ai5m10ai5m10ai5m.png"
    },
    {
        id: 10,
        title: "Disposable",
        image: "/dummy-image/Gemini_Generated_Image_c9cxf2c9cxf2c9cx.png"
    },
];

const FullProductCard = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="templateContainer space-y-8">

                {/* Header Section */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                        Products of Our Solutions
                    </h2>
                    <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                        for Modern effects and colors in a similar way
                    </h3>
                </div>

                {/* Responsive Card Grid Container */}
                {/* Cards now use a grid layout, fitting 1, 2, 3, or 5 cards per row based on screen size */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

                    {solutions.map((item) => (
                        <div
                            key={item.id}
                            className="
                                relative
                                group cursor-pointer
                            "
                        >
                            {/* Card Wrapper with Aspect Ratio */}
                            <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-md">

                                {/* Background Image */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="
                                        object-cover
                                        transition-transform duration-[1.6s] ease-[cubic-bezier(0.22, 1, 0.36, 1)]
                                        group-hover:scale-110
                                    "
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                                />

                                {/* Gradient Overlay & Text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
                                    <p className="text-white text-center font-light tracking-wide text-sm md:text-sm px-2">
                                        {item.title}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default FullProductCard;