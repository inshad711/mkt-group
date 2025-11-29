// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// // --- Data Configuration ---
// const sections = [
//     {
//         tagline: "About our collections",
//         title: "Experience new way of designing",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet.",
//         imageSrc:
//             "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-1.jpg",
//         inverse: false, // Image on Left
//     },
//     {
//         tagline: "About our shop",
//         title: "Experience the shop",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet nunc.",
//         imageSrc:
//             "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-2.jpg",
//         inverse: true, // Image on Right
//     },
//     {
//         tagline: "About used materials",
//         title: "Experience wood-work items",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet nunc.",
//         imageSrc:
//             "https://umea.qodeinteractive.com/wp-content/uploads/2020/12/p1-img-3.jpg",
//         inverse: false, // Image on Left
//     },
// ];

// // --- Sub-Component: Image Reveal Animation ---
// const RevealImage = ({ src, alt }: { src: string; alt: string }) => {
//     return (
//         <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden bg-gray-50">
//             {/* The 'Curtain' Effect:
//         The wrapper animates width from 0% -> 100%.
//         The internal image is forced to be full width relative to the container.
//       */}
//             <motion.div
//                 initial={{ width: "0%" }}
//                 whileInView={{ width: "100%" }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} // "Ease Out Quart" feel
//                 className="absolute inset-0 h-full overflow-hidden z-10"
//             >
//                 <div className="relative w-full h-full">
//                     <Image
//                         src={src}
//                         alt={alt}
//                         fill
//                         className="object-cover"
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                         priority={false}
//                     />
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// // --- Sub-Component: Text & Layout Section ---
// const ContentSection = ({
//     data,
//     inverse,
// }: {
//     data: (typeof sections)[0];
//     inverse: boolean;
// }) => {
//     return (
//         <section className="w-full py-16 md:py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
//             <div
//                 className={`flex flex-col gap-12 md:gap-20 items-center ${inverse ? "md:flex-row-reverse" : "md:flex-row"
//                     }`}
//             >
//                 {/* Image Column */}
//                 <div className="w-full md:w-1/2">
//                     <RevealImage src={data.imageSrc} alt={data.title} />
//                 </div>

//                 {/* Content Column */}
//                 <div className="w-full md:w-1/2 flex flex-col justify-center">
//                     {/* Add extra padding depending on side to breathe */}
//                     <div className={inverse ? "md:pr-16" : "md:pl-16"}>
//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
//                         >
//                             {/* Tagline */}
//                             <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
//                                 {data.tagline}
//                             </span>

//                             {/* Title */}
//                             <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6 leading-[1.15]">
//                                 {data.title}
//                             </h2>

//                             {/* Separator Line */}
//                             <div className="w-full h-[1px] bg-gray-200 mb-8 max-w-[100px]"></div>

//                             {/* Description */}
//                             <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-md">
//                                 {data.description}
//                             </p>

//                             {/* Button */}
//                             <a
//                                 href="#"
//                                 className="group inline-flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-gray-900 hover:text-gray-600 transition-colors"
//                             >
//                                 <span>Read More</span>
//                                 <span className="relative flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full group-hover:border-gray-900 transition-colors duration-300">
//                                     <ArrowRight className="w-4 h-4" />
//                                 </span>
//                             </a>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // --- Main Page Component ---
// export default function ParallexSection() {
//     return (
//         <main className="min-h-screen bg-white">
//             {/* Top Spacer for visual breathing room */}
//             <div className="h-24 w-full" />

//             {sections.map((section, index) => (
//                 <ContentSection
//                     key={index}
//                     data={section}
//                     inverse={section.inverse}
//                 />
//             ))}

//             {/* Bottom Spacer */}
//             <div className="h-24 w-full" />
//         </main>
//     );
// }


// "use client";

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import Image from "next/image";

// // --- Types ---
// interface SectionData {
//     tagline: string;
//     title: string;
//     description: string;
//     imageSrc: string;
//     inverse?: boolean; // false = Image Left, true = Image Right
// }

// // --- Data (Extracted from your request) ---
// const sections: SectionData[] = [
//     {
//         tagline: "About our collections",
//         title: "RETAIL DISTRIBUTION",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet.",
//         imageSrc: 'https://mktgroup.ae/images/Retail.png',
//         inverse: false,
//     },
//     {
//         tagline: "About our shop",
//         title: "WAREHOUSE",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet nunc.",
//         imageSrc: 'https://mktgroup.ae/images/warehouse.jpg',
//         inverse: true,
//     },
//     {
//         tagline: "About used materials",
//         title: "TRANSPORTING",
//         description:
//             "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet nunc.",
//         imageSrc: 'https://mktgroup.ae/images/transport.jpg',
//         inverse: false,
//     },
// ];

// // --- Component: RevealImage ---
// // Handles the "Open Left-to-Right" animation
// const RevealImage = ({ src, alt }: { src: string; alt: string }) => {
//     return (
//         // The Container defines the maximum space
//         <div className="relative w-full h-[400px] md:h-[500px] bg-gray-50">
//             <motion.div
//                 initial={{ width: "0%" }}
//                 whileInView={{ width: "100%" }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} // "Power4.out" style easing
//                 className="absolute top-0 left-0 h-full overflow-hidden z-10"
//             >

//                 <div className="relative w-full h-full">
//                     <Image
//                         src={src}
//                         alt={alt}
//                         fill
//                         className="object-cover object-left"
//                         sizes="(max-width: 768px) 100vw, 50vw"
//                         priority={false}
//                     />
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// // --- Component: TextContent ---
// // Handles the text fade-in animation
// const TextContent = ({
//     tagline,
//     title,
//     description,
// }: {
//     tagline: string;
//     title: string;
//     description: string;
// }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, amount: 0.5 });

//     return (
//         <div
//             ref={ref}
//             className="flex flex-col justify-center items-start md:px-12 py-8"
//         >
//             <motion.span
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4"
//             >
//                 {tagline}
//             </motion.span>

//             <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]"
//             >
//                 {title}
//             </motion.h2>

//             {/* The small separator line */}
//             <motion.div
//                 initial={{ scaleX: 0, originX: 0 }}
//                 animate={isInView ? { scaleX: 1 } : {}}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="w-24 h-[1px] bg-gray-300 mb-6"
//             />

//             <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.3 }}
//                 className="text-gray-500 text-lg leading-relaxed mb-8"
//             >
//                 {description}
//             </motion.p>

//             <motion.button
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : {}}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 className="group flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-black hover:opacity-70 transition-all"
//             >
//                 Read More
//                 <span className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 group-hover:border-black transition-colors duration-300">
//                     {/* Custom Arrow SVG */}
//                     <svg
//                         width="12"
//                         height="12"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                     >
//                         <path d="M5 12h14" />
//                         <path d="m12 5 7 7-7 7" />
//                     </svg>
//                 </span>
//             </motion.button>
//         </div>
//     );
// };

// // --- Main Page Component ---
// export default function ParallexSection() {
//     return (
//         <main className="min-h-screen bg-white w-full overflow-x-hidden">
//             {/* Navbar Spacer */}
//             <div className="h-24 md:h-32" />

//             <div className="flex flex-col  pb-32">
//                 {sections.map((section, idx) => (
//                     <section
//                         key={idx}
//                         className="w-full templateContainer px-6 md:px-12"
//                     >
//                         <div
//                             className={`flex flex-col ${section.inverse ? "md:flex-row-reverse" : "md:flex-row"
//                                 } items-center gap-8 md:gap-0`}
//                         >
//                             {/* Image Column */}
//                             <div className="w-full md:w-1/2">
//                                 <RevealImage src={section.imageSrc} alt={section.title} />
//                             </div>

//                             {/* Content Column */}
//                             <div className="w-full md:w-1/2">
//                                 <TextContent
//                                     tagline={section.tagline}
//                                     title={section.title}
//                                     description={section.description}
//                                 />
//                             </div>
//                         </div>
//                     </section>
//                 ))}
//             </div>
//         </main>
//     );
// }


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
        imageSrc: 'https://mktgroup.ae/images/Retail.png',
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
        imageSrc: 'https://mktgroup.ae/images/transport.jpg',
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
                className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4"
            >
                {tagline}
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]"
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
        <main id="retail" className="min-h-screen bg-white w-full overflow-x-hidden">
            {/* Navbar Spacer */}
            <div className="h-24 md:h-32" />

            <div className="flex flex-col  pb-12 md:pb-20">
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