

// D:\mktgroup\app\components\CorparateCard.tsx

"use client";

import Image from 'next/image';
// 1. Import Framer Motion AND the Variants type
import { motion, Variants } from 'framer-motion'; // <--- **Import Variants here**

// 2. Define Animation Variants with the explicit Variants type
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            when: "beforeChildren",
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 15 }
    },
};

const CorparateCard = () => {
    return (

        <div className='bg-white'>
            <div className=' templateContainer pt-10'>
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                        FMCG Sourcing Hub
                    </h2>
                    <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                        Mission, Vision, and Values
                    </h3>
                </div>
                <div className=" flex items-center justify-center py-8">

                    {/* 3. Apply Motion to Container Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl w-full"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible" // Animation triggers when scrolled into view
                        viewport={{ once: true, margin: "-100px" }}
                    >

                        {/* --- Card 1: Mission --- */}
                        {/* 4. Convert div to motion.div and apply cardVariants */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white rounded-[8px] p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-96 relative overflow-hidden group"
                        >
                            {/* Illustration Area */}
                            <div className="flex-1 flex items-center justify-center relative">
                                {/* Custom SVG composition for Target/Dart */}

                                <Image
                                    src="/brand-logo/Our_Mission-300x218.png"
                                    alt="Target Illustration"
                                    fill
                                    className="object-contain"
                                />

                            </div>

                            {/* Content Area */}
                            <div className="mt-6">
                                <div className="w-8 h-1 bg-black mb-4"></div>
                                <h3 className=" text-2xl md:text-3xl font-normal text-[#D4AF37] mb-3 capitalize">Mission</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To deliver reliable FMCG products, competitive pricing and professional export services to our customers, building long-term, mutually beneficial partnerships.
                                </p>
                            </div>
                        </motion.div>

                        {/* --- Card 2: Vision (Inverted Layout) --- */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white rounded-[8px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-96 relative overflow-hidden group"
                        >
                            {/* Content Area (Top for Vision) */}
                            <div className="mb-6 z-10">
                                <div className="w-8 h-1 bg-black mb-4"></div>
                                <h3 className=" text-2xl md:text-3xl font-normal text-[#D4AF37] mb-3 capitalize">Vision</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To become a preferred FMCG sourcing hub in Dubai for importers and distributors across the GCC, Africa and other global markets.
                                </p>
                            </div>

                            {/* Illustration Area (Bottom for Vision) */}
                            <div className="flex-1 flex items-center justify-center relative">
                                {/* Custom SVG composition for Target/Dart */}

                                <Image
                                    src="/brand-logo/Gemini_Generated_Image_mxewoamxewoamxew.png"
                                    alt="Target Illustration"
                                    fill
                                    className="object-contain"
                                />

                            </div>
                        </motion.div>

                        {/* --- Card 3: Core Value --- */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white rounded-[8px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-96 relative overflow-hidden group"
                        >
                            {/* Illustration Area */}
                            <div className="flex-1 flex items-center justify-center relative">
                                {/* Custom SVG composition for Target/Dart */}

                                <Image
                                    src="/brand-logo/1582781815505023.jpg"
                                    alt="Target Illustration"
                                    fill
                                    className="object-contain"
                                />

                            </div>

                            {/* Content Area */}
                            <div className="mt-6">
                                <div className="w-8 h-1 bg-black mb-4"></div>
                                <h3 className=" text-2xl md:text-3xl font-normal text-[#D4AF37] mb-3 capitalize">Core Value</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We commit to unwavering Reliability and absolute Transparency, building lasting partnerships through Speed and Responsiveness, all while ensuring the highest Quality and Compliance.
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CorparateCard;