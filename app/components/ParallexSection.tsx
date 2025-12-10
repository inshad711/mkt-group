
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// --- Types ---
interface SectionData {
    tagline: string;
    title: string;
    description: string | string[]; // Changed to accept string[] for list items
    imageSrc: string;
    inverse?: boolean; // false = Image Left, true = Image Right
}

// --- Data (Updated with bullet points) ---
const sections: SectionData[] = [
    {
        tagline: "About our collections",
        title: "RETAIL DISTRIBUTION",
        description: [
            "Recent addition to our business module Retail Distribution Channel.",
            "Managed by customer oriented and well experienced sales team.",
            "Working round the clock generating revenue by outbound calls almost 24 hours and 7 days a week.",
            "Having customer base of more than 400 groceries and small/medium supermarkets we are growing in number of customers every new day.",
        ],
        imageSrc: '/dummy-image/68645.jpg',
        inverse: false,
    },
    {
        tagline: "About our shop",
        title: "WAREHOUSE",
        description: [
            "Recent addition to our business module Retail Distribution Channel.",
            "Managed by customer oriented and well experienced sales team.",
            "Working round the clock generating revenue by outbound calls almost 24 hours and 7 days a week.",
            "Having customer base of more than 400 groceries and small/medium supermarkets we are growing in number of customers every new day.",
        ],
        imageSrc: 'https://mktgroup.ae/images/warehouse.jpg',
        inverse: true,
    },
    {
        tagline: "About used materials",
        title: "TRANSPORTING",
        description: [
            "Logistics and delivery go hand in hand, our main aim being customer satisfaction.",
            "We make sure the orders are delivered same day 'BEFORE THE SUNSETS.'",
            "Our fleet of 7 delivery trucks and professional drivers help us achieve our aim.",
            "Our reach is not limited to Dubai only, we deliver to all emirates and to the remote areas of UAE like (Sajja, Dhaid, Khorfakkan, etc.)",
        ],
        imageSrc: '/dummy-image/v2-39md0-2ac7j.jpg',
        inverse: false,
    },
];

// --- New Component: IconList (Renders bullet points with an icon) ---
const IconList = ({ items }: { items: string[] }) => {
    return (
        <ul className="space-y-4 text-gray-700 text-sm leading-relaxed mb-8">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    {/* Checkmark Icon (or any other SVG icon) */}
                    <span className="flex-shrink-0 mr-3 mt-[2px] text-[#D4AF37]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </span>
                    {/* List Item Text */}
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
};

// --- Component: RevealImage (No changes) ---
// Handles the "Open Left-to-Right" animation
const RevealImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
        // The Container defines the maximum space
        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-50">
            <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} // "Power4.out" style easing
                className="absolute top-0 left-0 h-full overflow-hidden z-10"
            >

                <div className="relative w-full h-full">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover object-left"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                    />
                </div>
            </motion.div>
        </div>
    );
};

// --- Component: TextContent (Updated to use IconList) ---
// Handles the text fade-in animation
const TextContent = ({
    tagline,
    title,
    description,
}: {
    tagline: string;
    title: string;
    description: string | string[]; // Accepts string or string[]
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // Determine if description is a list or a single string
    const isList = Array.isArray(description);

    const descriptionContent = isList ? (
        <IconList items={description} />
    ) : (
        <p className="text-gray-500 text-lg leading-relaxed mb-8">
            {description}
        </p>
    );

    return (
        <div
            ref={ref}
            className="flex flex-col justify-center items-start md:px-12 py-8"
        >
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-sm font-normal tracking-[0.2em] text-gray-400 uppercase mb-4"
            >
                {tagline}
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-4xl font-normal text-gray-900 mb-6 leading-[1.1]"
            >
                {title}
            </motion.h2>

            {/* The small separator line */}
            <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-24 h-[1px] bg-gray-300 mb-6"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {descriptionContent}
            </motion.div>



        </div>
    );
};

// --- Main Page Component (No changes) ---
export default function ParallexSection() {
    return (
        <main id="retail" className=" bg-white w-full overflow-x-hidden">



            <div className="flex flex-col  pb-12 md:pb-12 ">
                {sections.map((section, idx) => (
                    <section
                        key={idx}
                        className="w-full templateContainer px-6 md:px-12"
                    >
                        <div
                            className={`flex flex-col ${section.inverse ? "md:flex-row-reverse" : "md:flex-row"
                                } items-center gap-8 md:gap-0`}
                        >
                            {/* Image Column */}
                            <div className="w-full md:w-1/2">
                                <RevealImage src={section.imageSrc} alt={section.title} />
                            </div>

                            {/* Content Column */}
                            <div className="w-full md:w-1/2">
                                <TextContent
                                    tagline={section.tagline}
                                    title={section.title}
                                    description={section.description}
                                />
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}