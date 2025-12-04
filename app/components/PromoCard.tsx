// import React from 'react';
// import { ArrowRight, ShoppingCart } from 'lucide-react';

// // Data structure to map your content
// // I've matched the text to your HTML, but styled it like the image.
// const bannerData = [
//     {
//         id: 1,
//         badge: "Weekend Discount",
//         title: "Feed The Best Energy \nDrink Booster",
//         subtitle: "Just don't miss the special offer this week",
//         buttonText: "Shop Now",
//         // Light Beige background similar to the left card in the image
//         bgColor: "bg-[#F4EFE9]",
//         // Placeholder for an energy product to match your text
//         image: "/dummy-image/02.jpg",
//         imageAlt: "Energy Drink",
//         darkText: true
//     },
//     {
//         id: 2,
//         badge: "Weekend Discount",
//         title: "Our Garden Fresh \nVegetables",
//         subtitle: "Just don't miss the special offer this week",
//         buttonText: "Shop Now",
//         // Light Pinkish/Off-white background similar to the right card in the image
//         bgColor: "bg-[#F7F0ED]",
//         // Placeholder for vegetables to match your text
//         image: "/dummy-image/03.jpg",
//         imageAlt: "Fresh Vegetables",
//         darkText: true
//     }
// ];

// const ProductBanner = () => {
//     return (
//         <div className="w-full py-16 bg-white">
//             <div className="container mx-auto px-4 md:px-6">
//                 {/* Grid Layout: Stack on mobile (grid-cols-1), side-by-side on large screens (lg:grid-cols-2) */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//                     {bannerData.map((card) => (
//                         <div
//                             key={card.id}
//                             className={`relative overflow-hidden rounded-2xl ${card.bgColor} transition-transform hover:scale-[1.01] duration-300 group h-full min-h-[320px] sm:min-h-[380px] flex items-center`}
//                         >

//                             {/* Content Side (Left) */}
//                             <div className="relative z-10 w-full sm:w-3/5 p-8 sm:p-12 flex flex-col items-start justify-center h-full">

//                                 {/* Badge */}
//                                 <span className="inline-block bg-[#5B9C2C] text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4 shadow-sm">
//                                     {card.badge}
//                                 </span>

//                                 {/* Title */}
//                                 <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-3 whitespace-pre-line">
//                                     {card.title}
//                                 </h2>

//                                 {/* Subtitle */}
//                                 <p className="text-gray-600 font-medium mb-8 text-sm sm:text-base">
//                                     {card.subtitle}
//                                 </p>

//                                 {/* Button */}
//                                 <a
//                                     href="#"
//                                     className="inline-flex items-center justify-center bg-[#5B9C2C] hover:bg-[#4a8522] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md group-hover:shadow-lg"
//                                 >
//                                     {card.buttonText}
//                                     <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
//                                 </a>
//                             </div>

//                             {/* Image Side (Right) - Absolute positioning for the "cutout" look */}
//                             <div className="absolute right-0 bottom-0 w-1/2 h-full hidden sm:block">
//                                 {/* Decorative circle/shape behind image (Optional, adds depth) */}
//                                 <div className="absolute right-[-20%] bottom-[-20%] w-[120%] h-[120%] bg-white/20 rounded-full blur-3xl" />

//                                 <img
//                                     src={card.image}
//                                     alt={card.imageAlt}
//                                     className="absolute right-0 bottom-0 h-[90%] w-full object-contain object-right-bottom drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
//                                 />
//                             </div>

//                             {/* Mobile Image Fallback (Background or smaller image) */}
//                             <div className="absolute inset-0 sm:hidden opacity-10 pointer-events-none">
//                                 <img
//                                     src={card.image}
//                                     alt={card.imageAlt}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>

//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </div>
//     );
// };

// // Main App Component
// export default function PromoCard() {
//     return (
//         <div className="bg-gray-50 flex items-center justify-center">
//             <ProductBanner />
//         </div>
//     );
// }

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