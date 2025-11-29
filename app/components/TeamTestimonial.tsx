import React from 'react';
import { ArrowDownRight, ArrowDownLeft } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    quote: string;
    image: string;
    position: 'left' | 'center' | 'right';
}

const TeamTestimonial = () => {
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "James Miller",
            quote: "“Fast delivery, fresh items, and amazing service. I shop here every week!”",
            image: "https://nvb.nirmanavisual.com/electromart/wp-content/uploads/sites/2/2025/07/Testimoni-1-1.png",
            position: "left",
        },
        {
            id: 2,
            name: "Daniel Brooks",
            quote: "“Super easy to shop and the prices are great. I love how smooth the whole experience is!”",
            image: "https://nvb.nirmanavisual.com/electromart/wp-content/uploads/sites/2/2025/07/Testimoni-2-1.png",
            position: "center",
        },
        {
            id: 3,
            name: "Ethan Parker",
            quote: "“Fresh products, fast delivery, and super easy to shop. Always a great experience!”",
            image: "https://nvb.nirmanavisual.com/electromart/wp-content/uploads/sites/2/2025/07/Testimoni-3-1.png",
            position: "right",
        },
    ];

    return (
        <section className="w-full bg-[#F4F4F4] py-16 flex flex-col items-center justify-center font-sans overflow-hidden">
            <div className='templateContainer'>
                {/* --- Section Header --- */}
                {/* <div className="text-center mb-16 md:mb-28 z-10">
                <h2 className="text-4xl md:text-5xl font-normal text-[#2A2A35] tracking-tight">
                    Leadership
                </h2>
            </div> */}

                <div className="space-y-2 text-center mb-22 md:mb-28 z-10">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                        Our Members
                    </h2>
                    <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                        Meet the team driving global trade
                    </h3>
                </div>

                {/* --- Main Grid --- */}
                <div className=" w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">

                    {/* =======================
            LEFT CARD (James)
           ======================= */}
                    <div className="lg:col-span-3 flex flex-col items-center text-center relative order-2 lg:order-1 mt-8 lg:mt-0">
                        {/* Card Container - Floating look */}
                        <div className="group relative w-full max-w-xs">

                            {/* Image Wrapper */}
                            <div className="relative w-full h-64 md:h-72 mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                                <img
                                    src={testimonials[0].image}
                                    alt={testimonials[0].name}
                                    className="w-full h-full object-contain object-bottom"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                                    }}
                                />
                            </div>

                            {/* Text Content */}
                            <div className="bg-[#f9f9f6] rounded-[2rem] p-6 lg:bg-transparent lg:p-0">
                                <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-4">
                                    {testimonials[0].quote}
                                </p>
                                <h3 className="text-[#2A2A35] font-bold text-lg">
                                    {testimonials[0].name}
                                </h3>
                            </div>

                            {/* Arrow - Bottom Right */}
                            <button className="hidden lg:flex absolute bottom-0 -right-8 bg-[#2a2a35] text-white w-12 h-12 rounded-full items-center justify-center shadow-lg transition-transform hover:scale-110 hover:bg-black z-20 cursor-pointer">
                                <ArrowDownRight size={24} strokeWidth={2} />
                            </button>
                        </div>
                    </div>


                    {/* =======================
            CENTER CARD (Daniel)
           ======================= */}
                    <div className="lg:col-span-6 flex justify-center order-1 lg:order-2 z-10">
                        <div className="relative w-full max-w-md lg:max-w-lg bg-[#f4f2ed] rounded-[3rem] px-8 pt-0 pb-12 text-center shadow-sm transition-transform duration-500 hover:scale-[1.02]">

                            {/* Center Image - Larger & Breaking out of container */}
                            <div className="relative w-full h-80 md:h-[26rem] -mt-20 md:-mt-24 mb-2">
                                <img
                                    src={testimonials[1].image}
                                    alt={testimonials[1].name}
                                    className="w-full h-full object-contain object-bottom"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                                    }}
                                />
                            </div>

                            {/* Center Text Content */}
                            <div className="space-y-6 px-4">
                                <p className="text-gray-600 text-sm md:text-lg font-medium leading-relaxed">
                                    {testimonials[1].quote}
                                </p>
                                <h3 className="text-[#2A2A35] font-bold text-xl md:text-xl">
                                    {testimonials[1].name}
                                </h3>
                            </div>
                        </div>
                    </div>


                    {/* =======================
            RIGHT CARD (Ethan)
           ======================= */}
                    <div className="lg:col-span-3 flex flex-col items-center text-center relative order-3 mt-8 lg:mt-0">
                        {/* Card Container - Floating look */}
                        <div className="group relative w-full max-w-xs">

                            {/* Arrow - Bottom Left */}
                            <button className="hidden lg:flex absolute bottom-0 -left-8 bg-[#2a2a35] text-white w-12 h-12 rounded-full items-center justify-center shadow-lg transition-transform hover:scale-110 hover:bg-black z-20 cursor-pointer">
                                <ArrowDownLeft size={24} strokeWidth={2} />
                            </button>

                            {/* Image Wrapper */}
                            <div className="relative w-full h-64 md:h-72 mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                                <img
                                    src={testimonials[2].image}
                                    alt={testimonials[2].name}
                                    className="w-full h-full object-contain object-bottom"
                                    style={{
                                        maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                                    }}
                                />
                            </div>

                            {/* Text Content */}
                            <div className="bg-[#f9f9f6] rounded-[2rem] p-6 lg:bg-transparent lg:p-0">
                                <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-4">
                                    {testimonials[2].quote}
                                </p>
                                <h3 className="text-[#2A2A35] font-bold text-lg">
                                    {testimonials[2].name}
                                </h3>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default TeamTestimonial;