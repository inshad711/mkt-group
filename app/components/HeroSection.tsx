// /////////////// older code for context ///////////////

// // D:\mktgroup\app\components\HeroSection.tsx
// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- 1. Data Configuration ---
// const SLIDES = [
//     {
//         id: 1,
//         theme: "olive",
//         // The specific video path you provided (changed type to 'image')
//         videoSrc: "/dummy-image/vecteezy_ai-generated-grocery-cart-full-of-shopping-copy-space_39898959.jpg",
//         textColor: "text-white",
//         eyebrow: "Skincare simplified",
//         title: ["The next wave", "of natural", "skincare."],
//         buttonText: "Discover",
//         type: "image" // Type is 'image' for JPG
//     },
//     {
//         id: 2,
//         theme: "teal",
//         // Placeholder video path for slide 2 (changed type to 'video')
//         videoSrc: "https://herbyo-store-demo.myshopify.com/cdn/shop/files/slide1.1.jpg?v=1637223275",
//         textColor: "text-white",
//         eyebrow: "Moisturize & Protect",
//         title: ["Introducing the", "new Body "],
//         buttonText: "Shop now",
//         type: "image" // Type is 'video' for MP4
//     },
//     {
//         id: 3,
//         theme: "photo",
//         // Placeholder video path for slide 3 (changed type to 'video')
//         videoSrc: "/video/_ka2ubCBKoIJF1v0vkupWpgSw1c.mp4",
//         textColor: "text-white",
//         eyebrow: "Summer Sale",
//         title: ["Get 50% off", "on all bundles"],
//         buttonText: "Browse Sale",
//         type: "video" // Type is 'video' for MP4
//     },
// ];

// const AUTOPLAY_DELAY = 5000;

// // --- Helper Component for Media ---
// // Conditionally renders an <img> or <video> tag
// const MediaElement = ({ src, type }: { src: string; type: string }) => {
//     const commonClasses = "absolute inset-0 w-full h-full object-cover";

//     if (type === "video") {
//         return (
//             <video
//                 src={src}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className={commonClasses}
//             />
//         );
//     }

//     if (type === "image") {
//         return (
//             // Using a standard <img> tag for image files
//             <img
//                 src={src}
//                 alt="Hero Background"
//                 className={commonClasses}
//             // Important: Next.js <Image> component offers better optimization, but
//             // a standard <img> is used here for minimal changes.
//             />
//         );
//     }

//     // Fallback or just render nothing if type is unrecognized
//     return null;
// };
// // --- 2. Main Hero Component ---

// export default function HeroSlider() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Auto-play logic
//     useEffect(() => {
//         const timer = setInterval(() => {
//             nextSlide();
//         }, AUTOPLAY_DELAY);
//         return () => clearInterval(timer);
//     }, [currentIndex]);

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
//     };

//     const handleDotClick = (index: number) => {
//         setCurrentIndex(index);
//     };

//     const currentSlide = SLIDES[currentIndex];

//     return (
//         <main className="relative w-full h-screen overflow-hidden bg-black">

//             {/* Slide Container */}
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={currentSlide.id}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.7, ease: "easeInOut" }}
//                     className="absolute inset-0 w-full h-full flex flex-col justify-center items-center"
//                 >
//                     {/* --- BACKGROUND MEDIA LAYER (CORRECTED) --- */}
//                     {currentSlide.videoSrc && (
//                         <>
//                             <MediaElement
//                                 src={currentSlide.videoSrc}
//                                 type={currentSlide.type === "bg-video-only" ? "video" : currentSlide.type}
//                             />

//                             {/* Optional Overlay to ensure text is readable on top of media */}
//                             <div className="absolute inset-0 bg-black/20" />
//                         </>
//                     )}

//                     {/* Content Wrapper */}
//                     <div className="relative w-full templateContainer h-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 md:pt-20 items-center z-10">

//                         {/* Left/Bottom Text Content */}
//                         <div className="md:col-span-7 flex flex-col justify-end md:justify-center h-full pb-24 md:pb-0 order-2 md:order-1">

//                             {/* Eyebrow Text */}
//                             <motion.p
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.3, duration: 0.6 }}
//                                 className={`text-sm md:text-base tracking-widest uppercase mb-4 ${currentSlide.textColor}`}
//                             >
//                                 {currentSlide.eyebrow}
//                             </motion.p>

//                             {/* Main Title (Staggered Reveal) */}
//                             <div className="overflow-hidden mb-8">
//                                 {currentSlide.title.map((line, i) => (
//                                     <div key={i} className="overflow-hidden">
//                                         <motion.h1
//                                             initial={{ y: "100%" }}
//                                             animate={{ y: 0 }}
//                                             transition={{
//                                                 delay: 0.4 + i * 0.1,
//                                                 duration: 0.8,
//                                                 ease: [0.215, 0.61, 0.355, 1],
//                                             }}
//                                             className={`text-4xl md:text-6xl lg:text-5xl font-medium tracking-tight leading-[1.1] ${currentSlide.textColor}`}
//                                         >
//                                             {line}
//                                         </motion.h1>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* CTA Button */}
//                             <motion.button
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 0.8, duration: 0.6 }}
//                                 className={`w-fit px-8 py-3 cursor-pointer border text-sm font-medium transition-all hover:bg-white hover:text-black hover:border-white ${currentSlide.textColor === "text-white" ? "border-white/50 text-white" : "border-black/20 text-black"
//                                     }`}
//                             >
//                                 {currentSlide.buttonText}
//                             </motion.button>
//                         </div>


//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* --- 3. Bottom Controls (Indicators) --- */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//                 {SLIDES.map((slide, index) => (
//                     <button
//                         key={slide.id}
//                         onClick={() => handleDotClick(index)}
//                         className="group relative h-[2.3px] w-9 md:w-12 bg-white/30 rounded-full transition-all overflow-hidden"
//                         aria-label={`Go to slide ${index + 1}`}
//                     >
//                         {/* Active Liquid Indicator */}
//                         {currentIndex === index && (
//                             <motion.div
//                                 // 1. This layoutId makes the container slide smoothly (liquid)
//                                 // from one button to the next across the gap.
//                                 layoutId="active-indicator"
//                                 className="absolute inset-0 w-full h-full bg-transparent rounded-full overflow-hidden"
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 300,
//                                     damping: 30
//                                 }}
//                             >
//                                 {/* 2. This inner div handles the filling animation separately */}
//                                 <motion.div
//                                     className="w-full h-full bg-white"
//                                     initial={{ x: "-100%" }}
//                                     animate={{ x: "0%" }}
//                                     transition={{
//                                         duration: AUTOPLAY_DELAY / 1000,
//                                         ease: "linear"
//                                     }}
//                                 />
//                             </motion.div>
//                         )}
//                     </button>
//                 ))}
//             </div>
//         </main>
//     );
// }



/////////////// latest code for context ///////////////

// // D:\mktgroup\app\components\HeroSection.tsx
// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- 1. Data Configuration ---
// const SLIDES = [
//     {
//         id: 1,
//         theme: "olive",
//         // The specific video path you provided (changed type to 'image')
//         videoSrc: "/dummy-image/vecteezy_ai-generated-grocery-cart-full-of-shopping-copy-space_39898959.jpg",
//         textColor: "text-white",
//         eyebrow: "Established 2009 • Dubai, UAE",
//         // title: ["The next wave", "of natural", "skincare."],
//         title: ["Dubai's One-Stop", "FMCG Hub"],
//         buttonText: "Discover",
//         type: "image" // Type is 'image' for JPG
//     },
//     {
//         id: 2,
//         theme: "teal",
//         // Placeholder video path for slide 2 (changed type to 'video')
//         videoSrc: "https://herbyo-store-demo.myshopify.com/cdn/shop/files/slide1.1.jpg?v=1637223275",
//         textColor: "text-white",
//         eyebrow: "Moisturize & Protect",
//         title: ["Introducing the", "new Body "],
//         buttonText: "Shop now",
//         type: "image" // Type is 'video' for MP4
//     },
//     {
//         id: 3,
//         theme: "photo",
//         // Placeholder video path for slide 3 (changed type to 'video')
//         videoSrc: "/video/_ka2ubCBKoIJF1v0vkupWpgSw1c.mp4",
//         textColor: "text-white",
//         eyebrow: "Summer Sale",
//         title: ["Get 50% off", "on all bundles"],
//         buttonText: "Browse Sale",
//         type: "video" // Type is 'video' for MP4
//     },
// ];

// const AUTOPLAY_DELAY = 5000;

// // --- Helper Component for Media ---
// // Conditionally renders an <img> or <video> tag
// const MediaElement = ({ src, type }: { src: string; type: string }) => {
//     const commonClasses = "absolute inset-0 w-full h-full object-cover";

//     if (type === "video") {
//         return (
//             <video
//                 src={src}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className={commonClasses}
//             />
//         );
//     }

//     if (type === "image") {
//         return (
//             // Using a standard <img> tag for image files
//             <img
//                 src={src}
//                 alt="Hero Background"
//                 className={commonClasses}
//             // Important: Next.js <Image> component offers better optimization, but
//             // a standard <img> is used here for minimal changes.
//             />
//         );
//     }

//     // Fallback or just render nothing if type is unrecognized
//     return null;
// };
// // --- 2. Main Hero Component ---

// export default function HeroSlider() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Auto-play logic
//     useEffect(() => {
//         const timer = setInterval(() => {
//             nextSlide();
//         }, AUTOPLAY_DELAY);
//         return () => clearInterval(timer);
//     }, [currentIndex]);

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
//     };

//     const handleDotClick = (index: number) => {
//         setCurrentIndex(index);
//     };

//     const currentSlide = SLIDES[currentIndex];

//     return (
//         <main className="relative w-full h-screen overflow-hidden bg-black">

//             {/* Slide Container */}
//             <AnimatePresence mode="wait">
//                 <motion.div
//                     key={currentSlide.id}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.7, ease: "easeInOut" }}
//                     className="absolute inset-0 w-full h-full flex flex-col justify-center items-center"
//                 >
//                     {/* --- BACKGROUND MEDIA LAYER (CORRECTED) --- */}
//                     {currentSlide.videoSrc && (
//                         <>
//                             <MediaElement
//                                 src={currentSlide.videoSrc}
//                                 type={currentSlide.type === "bg-video-only" ? "video" : currentSlide.type}
//                             />

//                             {/* Optional Overlay to ensure text is readable on top of media */}
//                             <div className="absolute inset-0 bg-black/20" />
//                         </>
//                     )}

//                     {/* Content Wrapper */}
//                     <div className="relative w-full templateContainer h-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 md:pt-20 items-center z-10">

//                         {/* Left/Bottom Text Content */}
//                         <div className="md:col-span-7 flex flex-col justify-end md:justify-center h-full pb-24 md:pb-0 order-2 md:order-1">

//                             {/* Eyebrow Text */}
//                             <motion.p
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.3, duration: 0.6 }}
//                                 className={`text-sm md:text-base tracking-widest uppercase mb-4 ${currentSlide.textColor}`}
//                             >
//                                 {currentSlide.eyebrow}
//                             </motion.p>

//                             {/* Main Title (Staggered Reveal) */}
//                             <div className="overflow-hidden mb-8">
//                                 {currentSlide.title.map((line, i) => (
//                                     <div key={i} className="overflow-hidden">
//                                         <motion.h1
//                                             initial={{ y: "100%" }}
//                                             animate={{ y: 0 }}
//                                             transition={{
//                                                 delay: 0.4 + i * 0.1,
//                                                 duration: 0.8,
//                                                 ease: [0.215, 0.61, 0.355, 1],
//                                             }}
//                                             className={`text-4xl md:text-6xl lg:text-5xl font-medium tracking-tight leading-[1.1] ${currentSlide.textColor}`}
//                                         >
//                                             {line}
//                                         </motion.h1>
//                                     </div>
//                                 ))}
//                             </div>

//                             {/* CTA Button */}
//                             <motion.button
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 0.8, duration: 0.6 }}
//                                 className={`w-fit px-8 py-3 cursor-pointer border text-sm font-medium transition-all hover:bg-white hover:text-black hover:border-white ${currentSlide.textColor === "text-white" ? "border-white/50 text-white" : "border-black/20 text-black"
//                                     }`}
//                             >
//                                 {currentSlide.buttonText}
//                             </motion.button>
//                         </div>


//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* --- 3. Bottom Controls (Indicators) --- */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//                 {SLIDES.map((slide, index) => (
//                     <button
//                         key={slide.id}
//                         onClick={() => handleDotClick(index)}
//                         className="group relative h-[2.3px] w-9 md:w-12 bg-white/30 rounded-full transition-all overflow-hidden"
//                         aria-label={`Go to slide ${index + 1}`}
//                     >
//                         {/* Active Liquid Indicator */}
//                         {currentIndex === index && (
//                             <motion.div
//                                 // 1. This layoutId makes the container slide smoothly (liquid)
//                                 // from one button to the next across the gap.
//                                 layoutId="active-indicator"
//                                 className="absolute inset-0 w-full h-full bg-transparent rounded-full overflow-hidden"
//                                 transition={{
//                                     type: "spring",
//                                     stiffness: 300,
//                                     damping: 30
//                                 }}
//                             >
//                                 {/* 2. This inner div handles the filling animation separately */}
//                                 <motion.div
//                                     className="w-full h-full bg-white"
//                                     initial={{ x: "-100%" }}
//                                     animate={{ x: "0%" }}
//                                     transition={{
//                                         duration: AUTOPLAY_DELAY / 1000,
//                                         ease: "linear"
//                                     }}
//                                 />
//                             </motion.div>
//                         )}
//                     </button>
//                 ))}
//             </div>
//         </main>
//     );
// }


// D:\mktgroup\app\components\HeroSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. Data Configuration ---
const SLIDES = [
    {
        id: 1,
        theme: "olive",
        // The specific video path you provided (changed type to 'image')
        videoSrc: "/dummy-image/vecteezy_ai-generated-grocery-cart-full-of-shopping-copy-space_39898959.jpg",
        textColor: "text-white",
        eyebrow: "Established 2009 • Dubai, UAE",

        title: ["Dubai's One-Stop", "FMCG Hub"],
        // ** NEW FIELD **
        description: "MKT General Trading connects food, cleaning and household brands from Dubai to importers, distributors and wholesalers across the GCC, Africa and beyond with mixed-container solutions, competitive pricing and reliable export support.",
        // 🚨 MODIFIED: buttonText replaced with an array of button objects
        buttons: [
            { text: "WhatsApp Now", href: "/", style: "primary" },
            { text: "Get a Quote", href: "/contact", style: "secondary" },
        ],
        type: "image" // Type is 'image' for JPG
    },
    {
        id: 2,
        theme: "teal",
        // Placeholder video path for slide 2 (changed type to 'video')
        videoSrc: "https://herbyo-store-demo.myshopify.com/cdn/shop/files/slide1.1.jpg?v=1637223275",
        textColor: "text-white",
        eyebrow: "Established 2009 • Dubai, UAE",

        title: ["Your FMCG Trading ", "Partner in Dubai"],
        // ** NEW FIELD **
        description: "We source, consolidate and ship quality food, cleaning and household products to importers and distributors across the GCC, Africa and beyond.",
        // 🚨 MODIFIED: buttonText replaced with an array of button objects
        buttons: [
            { text: "WhatsApp Now", href: "/", style: "primary" },
            { text: "Get a Quote", href: "/contact", style: "secondary" },
        ],
        type: "image" // Type is 'image' for JPG
    },
    {
        id: 3,
        theme: "photo",
        // Placeholder video path for slide 3 (changed type to 'video')
        videoSrc: "/dummy-image/Gemini_Generated_Image_bepfdobepfdobepf.png",
        textColor: "text-white",
        eyebrow: "Established 2009 • Dubai, UAE",

        title: ["Dubai's One-Stop", "FMCG Hub"],
        // ** NEW FIELD **
        description: "MKT General Trading connects food, cleaning and household brands from Dubai to importers, distributors and wholesalers across the GCC, Africa and beyond with mixed-container solutions, competitive pricing and reliable export support.",
        // 🚨 MODIFIED: buttonText replaced with an array of button objects
        buttons: [
            { text: "Browse Sale", href: "/sale", style: "primary" },
        ],
        type: "image" // Type is 'video' for MP4
    },
];

const AUTOPLAY_DELAY = 5000;

// --- Helper Component for Media ---
// Conditionally renders an <img> or <video> tag
const MediaElement = ({ src, type }: { src: string; type: string }) => {
    const commonClasses = "absolute inset-0 w-full h-full object-cover";

    if (type === "video") {
        return (
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className={commonClasses}
            />
        );
    }

    if (type === "image") {
        return (
            // Using a standard <img> tag for image files
            <img
                src={src}
                alt="Hero Background"
                className={commonClasses}
            // Important: Next.js <Image> component offers better optimization, but
            // a standard <img> is used here for minimal changes.
            />
        );
    }

    // Fallback or just render nothing if type is unrecognized
    return null;
};
// --- 2. Main Hero Component ---

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play logic
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, AUTOPLAY_DELAY);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const currentSlide = SLIDES[currentIndex];

    // Helper to determine button style based on the theme and style property
    const getButtonStyle = (style: string, textColor: string) => {
        const isWhiteText = textColor === "text-white";

        if (style === "primary") {
            // Primary style: Solid or High-Contrast border
            return `bg-white text-black border-white hover:bg-transparent ${isWhiteText ? "hover:text-white hover:border-white/50" : "hover:text-black hover:border-black/20"}`;
        }
        // Secondary style: Outline only
        return `bg-transparent ${isWhiteText ? "border-white/50 text-white hover:bg-white hover:text-black hover:border-white" : "border-black/20 text-black hover:bg-black/10"}`;
    }


    return (
        <main className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-black">

            {/* Slide Container */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full flex flex-col justify-center items-center"
                >
                    {/* --- BACKGROUND MEDIA LAYER (CORRECTED) --- */}
                    {currentSlide.videoSrc && (
                        <>
                            <MediaElement
                                src={currentSlide.videoSrc}
                                type={currentSlide.type === "bg-video-only" ? "video" : currentSlide.type}
                            />

                            {/* Optional Overlay to ensure text is readable on top of media */}
                            <div className="absolute inset-0 bg-black/20" />
                        </>
                    )}

                    {/* Content Wrapper */}
                    <div className="relative w-full templateContainer h-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 pt-0 md:pt-20 items-center z-10">

                        {/* Left/Bottom Text Content */}
                        <div className="md:col-span-7 flex flex-col justify-end md:justify-center h-full pb-28 md:pb-0 order-2 md:order-1">

                            {/* Eyebrow Text */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className={`text-sm md:text-base tracking-widest uppercase mb-4 ${currentSlide.textColor}`}
                            >
                                {currentSlide.eyebrow}
                            </motion.p>

                            {/* Main Title (Staggered Reveal) */}
                            <div className="overflow-hidden mb-4">
                                {currentSlide.title.map((line, i) => (
                                    <div key={i} className="overflow-hidden">
                                        <motion.h1
                                            initial={{ y: "100%" }}
                                            animate={{ y: 0 }}
                                            transition={{
                                                delay: 0.4 + i * 0.1,
                                                duration: 0.8,
                                                ease: [0.215, 0.61, 0.355, 1],
                                            }}
                                            className={`text-4xl md:text-6xl lg:text-5xl font-normal tracking-tight leading-[1.1] ${currentSlide.textColor}`}
                                        >
                                            {line}
                                        </motion.h1>
                                    </div>
                                ))}
                            </div>


                            {/* Retained from previous modification */}
                            {currentSlide.description && (
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.6 }}
                                    className={`text-base md:text-md font-light mb-8 max-w-lg ${currentSlide.textColor}`}
                                >
                                    {currentSlide.description}
                                </motion.p>
                            )}

                            {/* 🚨 MODIFIED: CTA Buttons (Multiple in a Row) */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                                className="flex gap-4" // Use flex and gap to place buttons side-by-side
                            >
                                {currentSlide.buttons.map((button, index) => (
                                    <a
                                        key={index}
                                        href={button.href} // Use <a> tag for navigation (better practice)
                                        className={`w-fit px-4 md:px-8 py-3 text-sm font-medium transition-all border ${getButtonStyle(button.style, currentSlide.textColor)}`}
                                    >
                                        {button.text}
                                    </a>
                                ))}
                            </motion.div>
                        </div>


                    </div>
                </motion.div>
            </AnimatePresence>

            {/* --- 3. Bottom Controls (Indicators) --- */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {SLIDES.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => handleDotClick(index)}
                        className="group relative h-[2.3px] w-9 md:w-12 bg-white/30 rounded-full transition-all overflow-hidden"
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {/* Active Liquid Indicator */}
                        {currentIndex === index && (
                            <motion.div
                                // 1. This layoutId makes the container slide smoothly (liquid)
                                // from one button to the next across the gap.
                                layoutId="active-indicator"
                                className="absolute inset-0 w-full h-full bg-transparent rounded-full overflow-hidden"
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                            >
                                {/* 2. This inner div handles the filling animation separately */}
                                <motion.div
                                    className="w-full h-full bg-white"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{
                                        duration: AUTOPLAY_DELAY / 1000,
                                        ease: "linear"
                                    }}
                                />
                            </motion.div>
                        )}
                    </button>
                ))}
            </div>
        </main>
    );
}