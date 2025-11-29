import React from 'react';
import Image from 'next/image';

const FollowUs = () => {
    // Data for the images to make the code clean
    // I have added specific rotation classes to match your reference image
    const items = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", // Portrait
            alt: "Fashion Portrait",
            className: "-rotate-3 hover:rotate-0 z-10",
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&w=800&auto=format&fit=crop", // Coat detail
            alt: "Coat Detail",
            className: "rotate-6 translate-y-4 hover:rotate-0 z-0",
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop", // Beige outfit
            alt: "Casual Outfit",
            className: "-rotate-3 hover:rotate-0 z-10",
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1512353087810-25dfcd100962?q=80&w=800&auto=format&fit=crop", // Hoodie
            alt: "Streetwear",
            className: "rotate-6 translate-y-4 hover:rotate-0 z-0",
        },
    ];

    return (
        <section className="w-full bg-[#F9F8F4] py-24 overflow-hidden">
            <div className="templateContainer px-4">
                {/* Title Section */}
                <div className="mb-16 text-center">
                    <h2 className=" text-4xl md:text-5xl text-[#2D2D2D] tracking-tight">
                        Follow us
                    </h2>
                </div>

                {/* Image Grid Section */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-12">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`relative w-64 h-72 md:w-72 md:h-80 flex-shrink-0 transition-all duration-500 ease-out transform ${item.className} hover:scale-105 hover:z-20 cursor-pointer shadow-xl`}
                        >
                            <div className="w-full h-full relative overflow-hidden bg-gray-200">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover object-center"
                                />

                                {/* Optional: Subtle overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FollowUs;