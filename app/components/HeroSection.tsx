

//////////////


// // D:\mktgroup\app\components\HeroSection.tsx
// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // --- 0. Helper Hook for Window Size (MODIFIED) ---
// // This hook helps determine if the screen is mobile or desktop size
// const useWindowSize = () => {
//     const [windowSize, setWindowSize] = useState({
//         width: 0,
//         // Set isReady to false initially. Only the client-side useEffect will set it to true.
//         isReady: false,
//     });

//     useEffect(() => {
//         if (typeof window === "undefined") return;

//         const handleResize = () => {
//             setWindowSize({
//                 width: window.innerWidth,
//                 isReady: true, // The width is now accurately measured.
//             });
//         };

//         window.addEventListener("resize", handleResize);
//         // Call initially to set the correct size and set isReady to true on client mount
//         handleResize();

//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return windowSize;
// };


// const SLIDES = [
//     {
//         id: 1,
//         theme: "olive",

//         mediaSrcDesktop: "/hero/mktbanner2d.webp",

//         mediaSrcMobile: "/hero/mkt2bannermobileview.webp",
//         textColor: "text-white",
//         eyebrow: "Established 2009 • Dubai, UAE",
//         title: ["Dubai's One-Stop", "FMCG Hub"],
//         description: "MKT General Trading exports Dubai food, cleaning, & household brands to GCC, Africa, & global wholesalers/importers with mixed-container & competitive pricing.",
//         buttons: [
//             { text: "WhatsApp Now", href: "https://wa.me/97142255765", style: "primary" },
//             { text: "Get a Quote", href: "/contact", style: "secondary" },
//         ],
//         type: "image"
//     },
//     {
//         id: 2,
//         theme: "teal",
//         // Desktop/Tablet Source (Original)
//         mediaSrcDesktop: "/hero/mktdesk.webp",

//         mediaSrcMobile: "/hero/mktbanner1d.webp",
//         textColor: "text-white",
//         eyebrow: "Dubai Global FMCG Hub",
//         title: ["Your FMCG Trading ", "Partner in Dubai"],
//         description: "We source, consolidate and ship quality food, cleaning and household products to importers and distributors across the GCC, Africa and beyond.",
//         buttons: [
//             { text: "View Products", href: "/category", style: "primary" },

//         ],
//         type: "image"
//     },
//     {
//         id: 3,
//         theme: "photo",

//         mediaSrcDesktop: "/dummy-image/Gemini_Generated_Image_bepfdobepfdobepf.webp",

//         mediaSrcMobile: "/dummy-image/1e247ecc-b255-405b-ba27-2c3edeb12e53ii.webp", // Use a different, smaller, or vertical image here
//         textColor: "text-white",
//         eyebrow: "Connect Importers & Brands",
//         title: ["Premium Produce", "Global Reach"],
//         description: "MKT General Trading provides Dubai food, fresh produce, and household brands. We connect GCC/Africa importers with competitive mixed-container export solutions.",
//         buttons: [
//             { text: "View Products", href: "/category", style: "primary" },
//         ],
//         type: "image"
//     },


// ];

// const AUTOPLAY_DELAY = 5000;
// const MOBILE_BREAKPOINT = 768; // Tailwind's 'md' breakpoint

// // --- Helper Component for Media ---
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
//             <img
//                 src={src}
//                 alt="Hero Background"
//                 className={commonClasses}
//             />
//         );
//     }

//     return null;
// };

// // --- 2. Main Hero Component (MODIFIED) ---
// export default function HeroSlider() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     // Destructure width and isReady
//     const { width, isReady } = useWindowSize();
//     const isMobile = width < MOBILE_BREAKPOINT;

//     // FIX: nextSlide must be declared before useEffect uses it
//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
//     };

//     // Auto-play logic
//     useEffect(() => {
//         const timer = setInterval(() => {
//             nextSlide();
//         }, AUTOPLAY_DELAY);
//         return () => clearInterval(timer);
//     }, [currentIndex]);

//     const handleDotClick = (index: number) => {
//         setCurrentIndex(index);
//     };

//     const currentSlide = SLIDES[currentIndex];

//     // ** NEW LOGIC **: Select media source based on viewport size
//     const currentMediaSrc = isMobile ? currentSlide.mediaSrcMobile : currentSlide.mediaSrcDesktop;


//     // Helper to determine button style based on the theme and style property
//     const getButtonStyle = (style: string, textColor: string) => {
//         const isWhiteText = textColor === "text-white";

//         if (style === "primary") {
//             // Primary style: Solid or High-Contrast border
//             return `bg-white text-black border-white hover:bg-transparent ${isWhiteText ? "hover:text-white hover:border-white/50" : "hover:text-black hover:border-black/20"}`;
//         }
//         // Secondary style: Outline only
//         return `bg-transparent ${isWhiteText ? "border-white/50 text-white hover:bg-white hover:text-black hover:border-white" : "border-black/20 text-black hover:bg-black/10"}`;
//     }

//     // *** FIX: Conditional Render to avoid initial mobile image flash ***
//     // We only render the slider once we have the correct client-side width.
//     if (!isReady) {
//         return <main className="relative w-full h-screen overflow-hidden bg-black" />;
//     }
//     // ******************************************************************


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
//                     {/* --- BACKGROUND MEDIA LAYER (UPDATED SOURCE) --- */}
//                     {currentMediaSrc && ( // Use the responsive source
//                         <>
//                             <MediaElement
//                                 src={currentMediaSrc}
//                                 type={currentSlide.type === "bg-video-only" ? "video" : currentSlide.type}
//                             />

//                             {/* Optional Overlay to ensure text is readable on top of media */}
//                             <div className="absolute inset-0 bg-black/20" />
//                         </>
//                     )}

//                     {/* Content Wrapper */}
//                     <div className="relative w-full templateContainer h-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 pt-20 items-center z-10">

//                         {/* Left/Bottom Text Content */}
//                         <div className="md:col-span-7 flex flex-col justify-center h-full pb-28 md:pb-0 order-2 md:order-1">

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
//                             <div className="overflow-hidden mb-4">
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
//                                             className={`text-4xl md:text-6xl lg:text-5xl font-normal tracking-tight leading-[1.1] ${currentSlide.textColor}`}
//                                         >
//                                             {line}
//                                         </motion.h1>
//                                     </div>
//                                 ))}
//                             </div>


//                             {/* Retained from previous modification */}
//                             {currentSlide.description && (
//                                 <motion.p
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: 0.7, duration: 0.6 }}
//                                     className={`text-base md:text-md font-light mb-8 max-w-lg ${currentSlide.textColor}`}
//                                 >
//                                     {currentSlide.description}
//                                 </motion.p>
//                             )}

//                             {/* CTA Buttons (Multiple in a Row) */}
//                             <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 0.9, duration: 0.6 }}
//                                 className="flex gap-4"
//                             >
//                                 {currentSlide.buttons.map((button, index) => (
//                                     <a
//                                         key={index}
//                                         href={button.href}
//                                         className={`w-fit px-4 md:px-8 py-3 text-sm font-medium transition-all border ${getButtonStyle(button.style, currentSlide.textColor)}`}
//                                     >
//                                         {button.text}
//                                     </a>
//                                 ))}
//                             </motion.div>
//                         </div>


//                     </div>
//                 </motion.div>
//             </AnimatePresence>

//             {/* --- 3. Bottom Controls (Indicators) --- */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 md:gap-3 z-20">
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

const SLIDES = [
    {
        id: 1,
        theme: "olive",
        mediaSrcDesktop: "/hero/mktbanner2d.webp",
        mediaSrcMobile: "/hero/mkt2bannermobileview.webp",
        textColor: "text-white",
        eyebrow: "Established 2009 • Dubai, UAE",
        title: ["Dubai's One-Stop", "FMCG Hub"],
        description: "MKT General Trading exports Dubai food, cleaning, & household brands to GCC, Africa, & global wholesalers/importers with mixed-container & competitive pricing.",
        buttons: [
            { text: "WhatsApp Now", href: "https://wa.me/97142255765", style: "primary" },
            { text: "Get a Quote", href: "/contact", style: "secondary" },
        ],
        type: "image"
    },
    {
        id: 2,
        theme: "teal",
        mediaSrcDesktop: "/hero/mktdesk.webp",
        mediaSrcMobile: "/hero/mktbanner1d.webp",
        textColor: "text-white",
        eyebrow: "Dubai Global FMCG Hub",
        title: ["Your FMCG Trading ", "Partner in Dubai"],
        description: "We source, consolidate and ship quality food, cleaning and household products to importers and distributors across the GCC, Africa and beyond.",
        buttons: [
            { text: "View Products", href: "/category", style: "primary" },

        ],
        type: "image"
    },
    {
        id: 3,
        theme: "photo",
        mediaSrcDesktop: "/dummy-image/Gemini_Generated_Image_bepfdobepfdobepf.webp",
        mediaSrcMobile: "/dummy-image/1e247ecc-b255-405b-ba27-2c3edeb12e53ii.webp",
        textColor: "text-white",
        eyebrow: "Connect Importers & Brands",
        title: ["Premium Produce", "Global Reach"],
        description: "MKT General Trading provides Dubai food, fresh produce, and household brands. We connect GCC/Africa importers with competitive mixed-container export solutions.",
        buttons: [
            { text: "View Products", href: "/category", style: "primary" },
        ],
        type: "image"
    },
];

const AUTOPLAY_DELAY = 5000;

// --- Helper Component for Media ---
const MediaElement = ({
    desktopSrc,
    mobileSrc,
    type
}: {
    desktopSrc: string;
    mobileSrc: string;
    type: string
}) => {
    const commonClasses = "absolute inset-0 w-full h-full object-cover";

    if (type === "video") {
        return (
            <>
                <video src={mobileSrc} autoPlay loop muted playsInline className={`${commonClasses} md:hidden`} />
                <video src={desktopSrc} autoPlay loop muted playsInline className={`${commonClasses} hidden md:block`} />
            </>
        );
    }

    if (type === "image") {
        return (
            <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet={desktopSrc} />
                <img src={mobileSrc} alt="Hero Background" className={commonClasses} />
            </picture>
        );
    }

    return null;
};

// --- Main Hero Component ---
export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, AUTOPLAY_DELAY);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const currentSlide = SLIDES[currentIndex];

    const getButtonStyle = (style: string, textColor: string) => {
        const isWhiteText = textColor === "text-white";
        if (style === "primary") {
            return `bg-white text-black border-white hover:bg-transparent ${isWhiteText ? "hover:text-white hover:border-white/50" : "hover:text-black hover:border-black/20"}`;
        }
        return `bg-transparent ${isWhiteText ? "border-white/50 text-white hover:bg-white hover:text-black hover:border-white" : "border-black/20 text-black hover:bg-black/10"}`;
    }

    return (
        <main className="relative w-full h-screen overflow-hidden bg-black">

            {/* FIX: Added initial={false} 
               This tells framer-motion: "Do NOT animate the first slide when the page loads. Just show it immediately."
               Animations will still work when you switch slides.
            */}
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={currentSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full flex flex-col justify-center items-center"
                >
                    <MediaElement
                        desktopSrc={currentSlide.mediaSrcDesktop}
                        mobileSrc={currentSlide.mediaSrcMobile}
                        type={currentSlide.type === "bg-video-only" ? "video" : currentSlide.type}
                    />

                    <div className="absolute inset-0 bg-black/20" />

                    <div className="relative w-full templateContainer h-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 pt-20 items-center z-10">
                        <div className="md:col-span-7 flex flex-col justify-center h-full pb-28 md:pb-0 order-2 md:order-1">

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className={`text-sm md:text-base tracking-widest uppercase mb-4 ${currentSlide.textColor}`}
                            >
                                {currentSlide.eyebrow}
                            </motion.p>

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

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                                className="flex gap-4"
                            >
                                {currentSlide.buttons.map((button, index) => (
                                    <a
                                        key={index}
                                        href={button.href}
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

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1 md:gap-3 z-20">
                {SLIDES.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => handleDotClick(index)}
                        className="group relative h-[2.3px] w-9 md:w-12 bg-white/30 rounded-full transition-all overflow-hidden"
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        {currentIndex === index && (
                            <motion.div
                                layoutId="active-indicator"
                                className="absolute inset-0 w-full h-full bg-transparent rounded-full overflow-hidden"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <motion.div
                                    className="w-full h-full bg-white"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
                                />
                            </motion.div>
                        )}
                    </button>
                ))}
            </div>
        </main>
    );
}