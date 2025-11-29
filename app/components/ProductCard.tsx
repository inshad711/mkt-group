import Image from "next/image";
import React from "react";

const ProductCard = () => {
    return (
        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden bg-[#FFFFFF] ">
            <div className="templateContainer px-4">

                {/* --- BACKGROUND TEXT LAYER --- */}
                {/* This is the large "Hydrating Lotion" text behind the bottle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] select-none z-0 font-sans">
                    <h1 className="whitespace-nowrap text-[120px] md:text-[160px] lg:text-[160px] font-medium leading-none text-transparent bg-clip-text bg-gradient-to-t from-gray-200/0 via-gray-200/80 to-gray-300 text-center">
                        Dry {"-"}  {"-"} Fruits
                    </h1>
                </div>

                {/* --- MAIN PRODUCT IMAGE LAYER --- */}
                <div className="relative z-10 -mt-20 scale-90 md:scale-100 transition-transform duration-500 hover:scale-101">
                    {/* Using the image source from your provided code snippet */}
                    <Image
                        src="/brand-logo/Food.png"
                        alt="Liqua Hydrating Lotion"
                        width={500}
                        height={400}
                        className="h-auto w-auto  object-cover drop-shadow-2xl"
                        priority
                    />
                </div>

                {/* --- FROSTED GLASS CARD LAYER --- */}
                {/* <div className="absolute bottom-12 md:bottom-12 z-20">
                    <div className="w-[320px] rounded-[8px] border border-white/20 bg-gray-100/30 p-5 shadow-xl backdrop-blur-xl md:w-[380px]">


                        <div className="flex flex-col gap-2 ">


                            <div className="border-b border-black/5 pb-1">
                                <span className="mb-1 block text-xs font-semibold tracking-wider text-black/60 uppercase">
                                    Dry Fruits
                                </span>
                                <h2 className="text-2xl font-medium text-black">Dry Fruits</h2>
                            </div>


                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-black/80">
                                    from 1 Kg
                                </p>

                                <button className="group cursor-pointer relative overflow-hidden rounded-[4px] border border-black bg-transparent px-6 py-2 text-sm font-medium text-black transition-all hover:bg-black hover:text-white hover:shadow-lg">
                                    <span className="relative z-10">Contact Us</span>
                                </button>
                            </div>
                        </div>

                    </div> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default ProductCard;