

// D:\mktgroup\app\components\FreeService.tsx

"use client"; // Ensure client-side rendering for animation
import React from 'react';
import { Truck, Headset, Undo2, CreditCard } from 'lucide-react';
// 1. Import Framer Motion AND the Variants type
import { motion, Variants } from 'framer-motion'; // <--- **Import Variants here**

// Define the interface for the feature data
interface Feature {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

// 2. Define Animation Variants with the explicit Variants type
const containerVariants: Variants = { // <--- **Added Variants type**
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Slightly slower stagger for distinct effect
            when: "beforeChildren",
        },
    },
};

const itemVariants: Variants = { // <--- **Added Variants type**
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    },
};

const FreeService = () => {
    // Data derived from your original HTML content
    const features: Feature[] = [
        {
            id: 1,
            title: "Free Shipping",
            description: "Product are free shipping.",
            icon: <Truck className="w-10 h-10 text-gray-800" strokeWidth={1.5} />,
        },
        {
            id: 2,
            title: "Customer Support",
            description: "24x7 Customer Support",
            icon: <Headset className="w-10 h-10 text-gray-800" strokeWidth={1.5} />,
        },
        {
            id: 3,
            title: "Easy Return",
            description: "Easy Return For 7 Days",
            icon: <Undo2 className="w-10 h-10 text-gray-800" strokeWidth={1.5} />,
        },
        {
            id: 4,
            title: "Secure Payment",
            description: "Most Secure Payment.",
            icon: <CreditCard className="w-10 h-10 text-gray-800" strokeWidth={1.5} />,
        },
    ];

    return (
        <div className="w-full py-2 bg-white">
            <div className="templateContainer">
                {/* 3. Grid Container with Motion */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Triggers when scrolled into view
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature) => (
                        // 4. Item Wrapper with Motion
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            className="flex items-start gap-4 group"
                        >
                            {/* Icon Section */}
                            <div className="flex-shrink-0 mt-1">
                                {feature.icon}
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col">
                                <h4 className="text-lg font-normal text-[#242424] leading-tight">
                                    {feature.title}
                                </h4>

                                {/* The visual underline element */}
                                <div className="w-8 h-0.5 bg-[#D4AF37] my-2"></div>

                                <p className="text-sm text-[#757575]">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default FreeService;