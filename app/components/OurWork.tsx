

"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// --- Types ---
type PortfolioItem = {
    id: number;
    category: string;
    title: string;
    description: string;
    authorName: string;
    authorHandle: string;
    authorImage: string;
    projectImage: string;
    align: 'left' | 'right'; // Controls the layout
};

// --- Data ---
const portfolioData: PortfolioItem[] = [
    {
        id: 1,
        category: 'Web Design',
        title: 'RETAIL DISTRIBUTION',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        authorName: 'Jamie Jonson',
        authorHandle: 'avo',
        authorImage: 'https://preview.colorlib.com/theme/avo/images/person_1.jpg.webp',
        projectImage: 'https://mktgroup.ae/images/Retail.png',
        align: 'left',
    },
    {
        id: 2,
        category: 'Application',
        title: 'WAREHOUSE',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        authorName: 'Jamie Jonson',
        authorHandle: 'avo',
        authorImage: 'https://preview.colorlib.com/theme/avo/images/person_2.jpg.webp',
        projectImage: 'https://mktgroup.ae/images/warehouse.jpg',
        align: 'right',
    },
    {
        id: 3,
        category: 'Web Design',
        title: 'TRANSPORTING',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
        authorName: 'Jamie Jonson',
        authorHandle: 'avo',
        authorImage: 'https://preview.colorlib.com/theme/avo/images/person_1.jpg.webp',
        projectImage: 'https://mktgroup.ae/images/transport.jpg',
        align: 'left',
    },
];


const RevealImage = ({ src, alt, minHeightClass = 'min-h-[400px] lg:min-h-[500px]' }: { src: string; alt: string; minHeightClass?: string }) => {
    // The Container defines the maximum space
    return (
        <div className={`relative w-full ${minHeightClass} bg-gray-50`}>
            {/* The animated overlay/clipping mask */}
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


// --------------------------------------------------------------------------------
// --- Sub-component for a single Portfolio Item (Modified) ---
// --------------------------------------------------------------------------------

interface PortfolioItemProps {
    item: PortfolioItem;
}

const PortfolioItemCard: React.FC<PortfolioItemProps> = ({ item }) => {
    const isRightAligned = item.align === 'right';

    // The text content needs its own fade-in animation, similar to the first example's TextContent
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // Animation variants for the text elements
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center overflow-hidden">
                {/* Image using RevealImage */}
                <div
                    className={`w-full md:w-5/12 ${isRightAligned ? 'md:order-last' : ''
                        }`}
                >
                    <RevealImage
                        src={item.projectImage}
                        alt={item.title}
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-7/12" ref={ref}>
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className={isRightAligned ? 'md:text-right' : ''}>
                            {/* Top */}
                            <div>
                                <motion.span
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="text-xs font-semibold uppercase tracking-wider text-gray-500"
                                >
                                    {item.category}
                                </motion.span>

                                <motion.h2
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-2xl lg:text-3xl font-medium text-gray-900 my-2"
                                >
                                    <a href="#" className="hover:text-gray-600 transition-colors">
                                        {item.title}
                                    </a>
                                </motion.h2>
                            </div>

                            {/* Main Content */}
                            <div className="mt-4">
                                <motion.p
                                    variants={textVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="text-gray-600 leading-relaxed"
                                >
                                    {item.description}
                                </motion.p>

                                {/* Link */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={isInView ? { opacity: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="mt-6"
                                >
                                    <a
                                        href="#"
                                        className="text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-gray-600 transition-colors"
                                    >
                                        View Portfolio
                                    </a>
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --------------------------------------------------------------------------------
// --- Main App Component ---
// --------------------------------------------------------------------------------

const OurWork: React.FC = () => {
    return (
        <section className="bg-gray-50 py-16 sm:py-24">
            {/* Section Header */}
            <div className="mb-12 text-center">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-600">
                    Our RETAIL
                </h2>
            </div>

            {/* Portfolio Items Container */}
            <div className="templateContainer px-4">
                <div className="flex flex-col">
                    {portfolioData.map((item) => (
                        <PortfolioItemCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;