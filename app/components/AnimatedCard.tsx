
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 1. Type Definitions
interface Tea {
    src: string;
    alt: string;
    rotate: number;
    top: number;
    left: number;
}

interface AnimatedImageProps {
    tea: Tea;
    index: number;
}

interface StaticImageProps {
    tea: Tea;
    className: string;
    index: number;
}

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
    </svg>
);

// 2. Data (Ensure 'teas' matches the Tea interface)
const teas: Tea[] = [
    { src: '/dummy-image/75895.jpg', alt: 'Tea 1', rotate: -15, top: -80, left: 20 },
    { src: '/dummy-image/75158.jpg', alt: 'Tea 2', rotate: 10, top: 10, left: 200 },
    { src: '/dummy-image/69130.jpg', alt: 'Tea 3', rotate: -5, top: 130, left: 100 },
];

// Helper component for repeated motion.img logic on large screens
// 3. Type applied to props
const AnimatedImage = ({ tea, index }: AnimatedImageProps) => (
    <motion.img
        key={index}
        src={tea.src}
        alt={tea.alt}
        className="absolute h-[350px] w-[350px] border-[7px] border-white object-cover shadow-[0_8px_15px_rgba(0,0,0,0.2)] rounded-xl"
        style={{
            left: tea.left,
            zIndex: index + 1
        }}
        // 2. Animation States
        initial={{
            opacity: 0,
            y: 150,
            rotate: 0,
            scale: 0.8
        }}
        whileInView={{
            opacity: 1,
            y: tea.top,
            rotate: tea.rotate,
            scale: 1
        }}
        transition={{
            duration: 0.6,
            delay: index * 0.4,
            type: "spring",
            stiffness: 100,
            damping: 15
        }}
        viewport={{ once: true, amount: 0.3 }}
    />
);

// Helper component for static images (under XL)
// Uses aspect-square and object-cover for responsive sizing
// 3. Type applied to props
const StaticImage = ({ tea, className, index }: StaticImageProps) => (
    <img
        key={index}
        src={tea.src}
        alt={tea.alt}
        className={`w-full aspect-square object-cover ${className}`}
    />
);


const AnimatedCard = () => {
    // Check if teas array has enough elements
    const hasImage1 = teas.length > 0;
    const hasImage2 = teas.length > 1;
    const hasImage3 = teas.length > 2;

    // Common styling for the image frame
    const imageFrameClass = "border-[2px] border-white shadow-[0_4px_8px_rgba(0,0,0,0.2)] rounded-lg";


    return (
        <div className="relative w-full bg-white">

            {/* Container to center content */}
            <div className="flex templateContainer flex-col items-center justify-center gap-10 px-6 pb-24 xl:flex-row lg:px-24">

                {/* 1. Animated Images (Visible only on xl and above) */}
                <div className="relative hidden xl:flex min-h-[660px] w-full flex-1 items-center justify-center">
                    {hasImage1 && <AnimatedImage tea={teas[0]} index={0} />}
                    {hasImage2 && <AnimatedImage tea={teas[1]} index={1} />}
                    {hasImage3 && <AnimatedImage tea={teas[2]} index={2} />}
                </div>

                {/* 2. Simple, Static Images (Visible on screens smaller than xl, i.e., sm, md, lg) */}
                <div className="flex xl:hidden w-full flex-1 items-center justify-center py-10">

                    {/* A. 2x1 Layout (Mobile: < md) - Hidden on md and up */}
                    <div className="flex relative flex-col items-center gap-2 px-2 md:hidden w-full max-w-xl">



                        {/* Row 2: Third image centered. Use w-1/2 for visual balance */}
                        {hasImage3 && (
                            <div className="flex justify-center w-full">
                                <div className="w-1/2">
                                    <StaticImage tea={teas[2]} index={2} className={`${imageFrameClass} rotate-0 `} />
                                </div>
                            </div>
                        )}

                        {/* Row 1: First two images side-by-side. Each is w-1/2 of their container */}
                        <div className="flex absolute top-32 justify-center  gap-2 w-full">
                            {hasImage1 && <div className="w-1/2">
                                <StaticImage tea={teas[0]} index={0} className={`${imageFrameClass} -rotate-10 `} />
                            </div>}
                            {hasImage2 && <div className="w-1/2">
                                <StaticImage tea={teas[1]} index={1} className={`${imageFrameClass} rotate-10 `} />
                            </div>}
                        </div>
                    </div>

                    {/* B. 1x3 Layout (Tablet & Small Desktop: md to xl) - Visible on md, hidden on xl */}
                    <div className="hidden md:flex  justify-center gap-4 w-full px-4">
                        {hasImage1 && <div className="w-1/3">
                            <StaticImage tea={teas[0]} index={0} className={imageFrameClass} />
                        </div>}
                        {hasImage2 && <div className="w-1/3">
                            <StaticImage tea={teas[1]} index={1} className={imageFrameClass} />
                        </div>}
                        {hasImage3 && <div className="w-1/3">
                            <StaticImage tea={teas[2]} index={2} className={imageFrameClass} />
                        </div>}
                    </div>

                </div>

                {/* Right Side: Content */}
                <motion.div
                    className="flex flex-1 flex-col mt-[120px] md:mt-0 gap-6 text-center xl:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Heading - Corrected typo from 'OUR' + 'story' to 'Our' + 'Story' */}
                    <motion.h1
                        className={` text-3xl md:text-4xl font-normal leading-tight text-zinc-900`}
                    >
                        Our {" "}
                        <span>
                            story at <br />
                        </span>{" "}
                        MKT General Trading L.L.C
                    </motion.h1>

                    {/* Paragraphs */}
                    <motion.div
                        className="flex flex-col gap-6"
                    >
                        <p className="leading-relaxed lg:w-[90%] text-base font-light text-zinc-600">
                            Our story at MKT General Trading L.L.C. starts in Dubai, where we began our journey in FMCG trading over 40 years. What started with a few products and a handful of customers has grown into a one-stop FMCG hub supplying food, cleaning and household products to multiple markets across the GCC and Africa.
                        </p>

                        <p className="leading-relaxed lg:w-[90%] text-base font-light text-zinc-600">
                            We’ve learned our business the practical way – on the warehouse floor, at the loading bay and in constant contact with our customers. Over the years, we’ve seen markets change, prices move and demand shift, but one thing has stayed the same: buyers need a partner they can trust to deliver the right goods, at the right time, with the right documentation.
                        </p>

                        <p className="leading-relaxed lg:w-[90%] text-base font-light text-zinc-600">
                            That’s why we stay personally involved. Whether it’s choosing the right mix of items for a price-sensitive market, planning a mixed container or checking cartons before loading, our team treats every shipment like it’s our own. Many of our customers started with a single trial container and today ship with us regularly – not just because of price, but because of the relationship and reliability we’ve built together.
                        </p>
                    </motion.div>

                    {/* Button */}
                    <motion.div>
                        <div className="">
                            <Link href="/contact" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
                                Contact Us
                                <span className="transition-transform group-hover:translate-x-1">
                                    <ArrowRightIcon />
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default AnimatedCard;