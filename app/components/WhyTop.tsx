

// D:\mktgroup\app\components\WhyTop.tsx
import React from 'react';
import { HeartPulse, Apple, BadgeCheck, Sprout } from 'lucide-react';

const WhyTop = () => {
    return (
        <section className="w-full bg-white overflow-hidden">
            <div className=" templateContainer pb-12 pt:8 md:pb-20 md:pt-16">

                {/* Header Section */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                        Why Choose Our Organic Produce?
                    </h2>
                    <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                        Taste the Difference: 100% Natural, 100% Organic Goodness.
                    </h3>
                </div>

                {/* Main Content Grid */}
                {/* Structure: 25% Left | 50% Center | 25% Right (Matches Elementor col-25/col-50/col-25) */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

                    {/* LEFT COLUMN (25%) - MODIFIED FOR HORIZONTAL LAYOUT ON MD SCREENS */}
                    <div className="lg:col-span-1 flex flex-col gap-12 lg:gap-16 order-2 lg:order-1 
                    sm:flex-row sm:justify-around sm:gap-4 lg:flex-col" // Added classes here
                    >
                        {/* Item 1: Good for Health */}
                        <div className="flex flex-col items-center text-center lg:text-left group cursor-pointer">
                            <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                                <HeartPulse strokeWidth={1} size={64} />
                            </div>
                            <h3 className="text-xl text-gray-700 font-normal mb-3 tracking-wide">
                                Good for Health
                            </h3>
                            <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
                                Fuel your body naturally. Our produce is rich in essential vitamins, antioxidants, and fiber, supporting your immune system and overall well-being.
                            </p>
                        </div>

                        {/* Item 2: Always Fresh */}
                        <div className="flex flex-col items-center text-center lg:text-left group cursor-pointer">
                            <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                                <Apple strokeWidth={1} size={64} />
                            </div>
                            <h3 className="text-xl text-gray-700 text-center font-normal mb-3 tracking-wide">
                                Always Fresh
                            </h3>
                            <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
                                Straight from the farm to your table. We pick our selection at the peak of ripeness to guarantee the most vibrant, flavorful, and nutrient-dense fruits possible.
                            </p>
                        </div>
                    </div>

                    {/* MIDDLE COLUMN (50%) - Central Image - NO CHANGE */}
                    <div className="lg:col-span-2 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0 relative">

                        <div className="absolute w-[70%] h-[70%] rounded-full blur-3xl opacity-30 -z-10"></div>

                        <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
                            <img
                                src="/dummy-image/Gemini_Generated_Image_l7rdbbl7rdbbl7rd (1).png"
                                alt="Organic Mango and Oil Product"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* RIGHT COLUMN (25%) - Aligned Right - NO CHANGE */}
                    <div className="lg:col-span-1 flex flex-col gap-12 lg:gap-16 order-3 sm:flex-row sm:justify-around sm:gap-4 lg:flex-col">
                        {/* Item 3: High Nutrition */}
                        <div className="flex flex-col items-center  text-center lg:text-right group cursor-pointer">
                            <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                                <BadgeCheck strokeWidth={1} size={64} />
                            </div>
                            <h3 className="text-xl text-gray-700  text-center font-normal mb-3 tracking-wide">
                                High Nutrition
                            </h3>
                            <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
                                Nature’s powerhouse in every bite. Our organic farming methods ensure higher concentrations of beneficial nutrients and superior, authentic flavor.
                            </p>
                        </div>

                        {/* Item 4: No Fertilizer */}
                        <div className="flex flex-col items-center  text-center lg:text-right group cursor-pointer">
                            <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                                <Sprout strokeWidth={1} size={64} />
                            </div>
                            <h3 className="text-xl text-gray-700 font-normal mb-3 tracking-wide">
                                No Synthetic Fertilizers
                            </h3>
                            <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
                                We use only natural, compost-based soil amendments. This sustainable approach is better for the planet and results in cleaner, safer, and better-tasting food.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyTop;