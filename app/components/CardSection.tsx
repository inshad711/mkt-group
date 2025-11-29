// 'use client';

// import React, { useState, useRef } from 'react';
// import Image from 'next/image';

// interface Solution {
//     id: number;
//     title: string;
//     image: string; // Using placeholder URLs for demo, replace with your actual paths
// }

// const solutions: Solution[] = [
//     {
//         id: 1,
//         title: "Residential",
//         image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop"
//     },
//     {
//         id: 2,
//         title: "Bathroom & Kitchen",
//         image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop"
//     },
//     {
//         id: 3,
//         title: "Commercial / Office",
//         image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
//     },
//     {
//         id: 4,
//         title: "Hospitality / Retail / Restaurant",
//         image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
//     },
//     {
//         id: 5,
//         title: "Industrial / Institutional",
//         image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
//     },
// ];

// const CardSection = () => {
//     // Optional: State for dots if you want them interactive
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <section className="w-full py-10 px-4 md:px-10 bg-white">
//             <div className="max-w-[1600px] mx-auto space-y-8">

//                 {/* Header Section */}
//                 <div className="space-y-2">
//                     <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
//                         Responsive Solutions
//                     </h2>
//                     <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
//                         for Modern Living / From concept to Finish - Responsively Built Include spaces, effects and colors in a similar way
//                     </h3>
//                 </div>

//                 {/* Carousel Container */}
//                 {/* We use overflow-x-auto for horizontal scrolling and snap-x for carousel behavior */}
//                 <div className="overflow-hidden">
//                     <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">

//                         {solutions.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="
//                   relative 
//                   min-w-[70%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[20%] 
//                   snap-start 
//                   group cursor-pointer
//                 "
//                             >
//                                 {/* Card Wrapper with Aspect Ratio */}
//                                 <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-md">

//                                     {/* Background Image */}
//                                     <Image
//                                         src={item.image}
//                                         alt={item.title}
//                                         fill
//                                         className="
//                       object-cover 
//                       transition-transform duration-500 ease-in-out 
//                       group-hover:scale-110
//                     "
//                                         sizes="(max-width: 768px) 70vw, (max-width: 1200px) 33vw, 20vw"
//                                     />

//                                     {/* Gradient Overlay & Text */}
//                                     {/* Changed bg-linear-to-t to bg-gradient-to-t for standard Tailwind */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
//                                         <p className="text-white text-center font-light tracking-wide text-sm md:text-base px-2">
//                                             {item.title}
//                                         </p>
//                                     </div>

//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                 </div>

//                 {/* Navigation Dots (Visual Representation) */}
//                 <div className="flex justify-center gap-3 mt-2">
//                     {/* Example of active/inactive dots based on the image style */}
//                     <button className="w-2.5 h-2.5 rounded-full bg-gray-300 transition hover:bg-gray-400"></button>
//                     <button className="w-2.5 h-2.5 rounded-full bg-gray-300 transition hover:bg-gray-400"></button>
//                     <button className="w-2.5 h-2.5 rounded-full bg-black transition"></button>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default CardSection;



// D:\mktgroup\app\components\CardSection.tsx
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
        title: "Retail",
        image: "/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png"
    },
    {
        id: 2,
        title: "Food",
        image: "/category/Gemini_Generated_Image_cczy10cczy10cczy.png"
    },
    {
        id: 3,
        title: "Non Food",
        image: "/category/Gemini_Generated_Image_3joxeu3joxeu3jox.png"
    },
    {
        id: 4,
        title: "Commodities",
        image: "/category/Gemini_Generated_Image_vw0wrzvw0wrzvw0w.png"
    },
    {
        id: 5,
        title: "Disposable",
        image: "/category/Gemini_Generated_Image_c9cxf2c9cxf2c9cx.png"
    },
];

const CardSection = () => {
    return (
        <section className="w-full py-10  pt-48 bg-white">
            <div className="templateContainer space-y-8">

                {/* Header Section */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                        Categories of Our Solutions
                    </h2>
                    <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                        for Modern effects and colors in a similar way
                    </h3>
                </div>

                {/* Responsive Card Grid Container */}
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

export default CardSection;