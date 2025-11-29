"use client";


import Image from 'next/image';

const CorparateCard = () => {
    return (

        <div className='bg-[#F4F4F4]'>
            <div className=' templateContainer'>
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                        FMCG Sourcing Hub
                    </h2>
                    <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                        Mission, Vision, and Values
                    </h3>
                </div>
                <div className=" flex items-center justify-center py-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl w-full">

                        {/* --- Card 1: Mission --- */}
                        <div className="bg-white rounded-[15px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-96 relative overflow-hidden group">
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
                                <h3 className=" text-2xl md:text-3xl font-normal text-gray-900 mb-3 capitalize">Mission</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To deliver reliable FMCG products, competitive pricing and professional export services to our customers, building long-term, mutually beneficial partnerships.
                                </p>
                            </div>
                        </div>

                        {/* --- Card 2: Vision (Inverted Layout) --- */}
                        <div className="bg-white rounded-[15px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-96 relative overflow-hidden group">
                            {/* Content Area (Top for Vision) */}
                            <div className="mb-6 z-10">
                                <div className="w-8 h-1 bg-black mb-4"></div>
                                <h3 className=" text-2xl md:text-3xl font-normal text-gray-900 mb-3 capitalize">Vision</h3>
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
                        </div>

                        {/* --- Card 3: Core Value --- */}
                        <div className="bg-white rounded-[15px] p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-96 relative overflow-hidden group">
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
                                <h3 className=" text-2xl md:text-3xl font-normal text-gray-900 mb-3 capitalize">Core Value</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We commit to unwavering Reliability and absolute Transparency, building lasting partnerships through Speed and Responsiveness, all while ensuring the highest Quality and Compliance.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorparateCard;