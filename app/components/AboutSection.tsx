// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const ArrowRightIcon = () => (
//     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
//         <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//         <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
//     </svg>
// );

// const AboutSection = () => {
//     return (
//         <section className="relative isolate overflow-hidden bg-white/60 backdrop-blur-xl px-6 py-16 md:px-10 md:py-24 lg:py-32" aria-labelledby="aboutpeacepower-title">




//             {/* --- Background Gradient Blobs --- */}
//             <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full opacity-70 blur-3xl"
//                 style={{ background: 'radial-gradient(50% 50%, rgba(124, 230, 175, 0.45) 0%, rgba(124, 230, 175, 0.15) 50%, rgba(124, 230, 175, 0) 100%)' }}
//             ></div>
//             <div
//                 aria-hidden="true"
//                 className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full opacity-60 blur-3xl"
//                 style={{ background: 'radial-gradient(50% 50%, rgba(244, 114, 182, 0.45) 0%, rgba(244, 114, 182, 0.12) 45%, rgba(244, 114, 182, 0) 100%)' }}
//             ></div>

//             <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">

//                 {/* === LEFT COLUMN: Image Area === */}
//                 <div className="relative z-10 mb-20 md:mb-0">
//                     {/* Main Image Container */}
//                     <div className="relative rounded-2xl border border-black/5 bg-white/70 p-1 md:p-2 shadow-xl backdrop-blur-md">
//                         <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
//                             {/* Top Left Tag */}
//                             <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 shadow-sm backdrop-blur-sm">

//                                 <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-[#967d46] ring-1 ring-inset ring-green-200">
//                                     ✦
//                                 </span>
//                                 <p className="text-sm font-medium text-[#967d46] tracking-wide">Peace Power</p>
//                             </div>

//                             {/* Main Image */}
//                             <Image
//                                 alt="Peace Power global reach"

//                                 src="https://mktgroup.ae/images/Retail.png"
//                                 width={800}
//                                 height={600}
//                                 className="h-full w-full object-cover rounded-xl"
//                                 priority
//                             />
//                         </div>

//                         {/* Floating "Did you know" Card */}
//                         {/* यहाँ 'animate-float-custom' क्लास का उपयोग किया है जो ऊपर define की गई है */}
//                         <div className="absolute -bottom-16 left-4 md:-bottom-20 md:left-8 w-[90%] md:w-[80%] rounded-2xl border border-black/5 bg-white/85 p-5 shadow-2xl backdrop-blur animate-float-custom z-30">
//                             <p className="mb-2 text-sm font-medium text-zinc-800">Did you know?</p>
//                             <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
//                                 Peace Power products are installed in <span className="font-semibold text-[#967d46]">over 25 countries</span>, supporting reliable energy transmission and distribution for major infrastructure projects.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* === RIGHT COLUMN: Content Area === */}
//                 <div className="space-y-6">
//                     {/* Pill Tag */}
//                     <div className="inline-flex items-center gap-2 rounded-lg border border-green-200/60 bg-green-50 px-3 py-1 text-sm font-medium text-green-700 ring-1 ring-inset ring-white/70">
//                         PEACE POWER PVT LTD
//                     </div>

//                     {/* Heading */}
//                     <h2 id="aboutpeacepower-title" className="text-pretty text-3xl md:text-4xl font-semibold leading-tight text-zinc-900">
//                         Powering Connections with Precision & Reliability
//                     </h2>

//                     {/* Paragraph */}
//                     <p className="max-w-xl text-base text-zinc-600 leading-relaxed">
//                         At Peace Power, we are dedicated to designing and manufacturing high-quality cable accessories that meet global standards. From Link Boxes to Surge Voltage Limiters, every product reflects our passion for safety, innovation, and long-lasting performance in power networks.
//                     </p>

//                     {/* Stats Grid */}
//                     <div className="grid max-w-md grid-cols-2 gap-4 py-4">
//                         <div className="rounded-2xl border border-black/5 bg-white/60 p-5 text-zinc-800 shadow-sm backdrop-blur transition hover:bg-white/80">
//                             <div className="text-4xl font-semibold text-zinc-900">25+</div>
//                             <p className="mt-2 text-sm font-medium text-zinc-600">Countries we supply to</p>
//                         </div>
//                         <div className="rounded-2xl border border-black/5 bg-white/60 p-5 text-zinc-800 shadow-sm backdrop-blur transition hover:bg-white/80">
//                             <div className="text-4xl font-semibold text-zinc-900">15+</div>
//                             <p className="mt-2 text-sm font-medium text-zinc-600">Years of manufacturing excellence</p>
//                         </div>
//                     </div>

//                     {/* CTA Button */}
//                     <div className="pt-2">
//                         <Link href="/about-us" className="inline-flex items-center gap-2 rounded-full border border-green-300/70 bg-white/80 px-6 py-3 text-sm font-semibold text-green-700 shadow-sm backdrop-blur transition-all hover:bg-green-50 hover:border-green-400 hover:shadow-md group">
//                             Learn More About Peace Power
//                             <span className="transition-transform group-hover:translate-x-1">
//                                 <ArrowRightIcon />
//                             </span>
//                         </Link>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default AboutSection;


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArrowRightIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
    </svg>
);

const AboutSection = () => {
    return (
        <div className='templateContainer'>
            <section className=" isolate overflow-hidden bg-white/60 backdrop-blur-xl mt-22 py-16 md:py-24 lg:pt-32 lg:pb-24" aria-labelledby="about-mkt-title">

                {/* --- Background Gradient Blobs --- */}
                {/* <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full opacity-70 blur-3xl"
                style={{ background: 'radial-gradient(50% 50%, rgba(124, 230, 175, 0.45) 0%, rgba(124, 230, 175, 0.15) 50%, rgba(124, 230, 175, 0) 100%)' }}
            ></div>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full opacity-60 blur-3xl"
                style={{ background: 'radial-gradient(50% 50%, rgba(244, 114, 182, 0.45) 0%, rgba(244, 114, 182, 0.12) 45%, rgba(244, 114, 182, 0) 100%)' }}
            ></div> */}

                <div className=" grid grid-cols-1 items-center gap-12 md:grid-cols-2">

                    {/* === LEFT COLUMN: Image Area === */}
                    <div className="relative z-10 mb-20 md:mb-0">
                        {/* Main Image Container */}
                        <div className="relative rounded-2xl border border-black/5 bg-white/70 p-1 md:p-2 shadow-xl backdrop-blur-md">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/4]">
                                {/* Top Left Tag */}
                                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-[5px] bg-white/90 px-3 py-1 shadow-sm backdrop-blur-sm">

                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F4F4F4] text-black ring-1 ring-inset ring-black/20">
                                        ✦
                                    </span>
                                    <p className="text-sm font-light text-black tracking-wide">MKT GENERAL TRADING LLC</p>
                                </div>

                                {/* Main Image */}
                                <Image
                                    alt="MKT General Trading Retail Distribution"
                                    // Source URL is kept the same as in the original component
                                    src="https://mktgroup.ae/images/Retail.png"
                                    width={800}
                                    height={600}
                                    className="h-full w-full object-cover rounded-xl"
                                    priority
                                />
                            </div>

                            {/* Floating "Did you know" Card */}
                            {/* Note: 'animate-float-custom' class is assumed to be defined in your global CSS */}
                            <div className="absolute -bottom-16 right-4 md:-bottom-8 md:right-8 w-[90%] md:w-[80%] rounded-2xl border border-black/5 bg-white/85 p-5 shadow-2xl backdrop-blur animate-float-custom z-30">
                                <p className="mb-2 text-sm font-medium text-zinc-800">Did you know?</p>
                                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed">
                                    MKT GENERALTRADING LLC was organized in such a way that it is exposed to the emerging product and services and thereby enabling itself to face the new business challenges by not forgetting the primary objective i.e. maximum satisfaction to the customers and clients.


                                </p>
                            </div>
                        </div>
                    </div>

                    {/* === RIGHT COLUMN: Content Area === */}
                    <div className="space-y-6">
                        {/* Pill Tag */}
                        <div className="inline-flex items-center gap-2 rounded-lg bg-[#F4F4F4] px-3 py-1 text-sm font-light text-black ring-1 ring-inset ring-white/70">
                            Introduction
                        </div>

                        {/* Heading */}
                        <h2 id="about-mkt-title" className="text-pretty text-3xl md:text-4xl font-normal leading-tight text-zinc-900">
                            MKT GENERAL TRADING LLC
                        </h2>

                        {/* Paragraph */}
                        <p className="max-w-xl text-base font-light text-zinc-600 leading-relaxed">
                            Earlier part of 40 years old MOHIDEEN group. During the initial growth period itself, the company was able to establish a good and strong working relationship with its principal suppliers, clients and most importantly our customers by maintaining a strong foundation of trust and mutual respect.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid max-w-md grid-cols-2 gap-3 py-2">
                            <div className="rounded-2xl border border-black/5 bg-white/60 p-5 text-zinc-800 shadow-sm backdrop-blur transition hover:bg-white/80">
                                <div className="text-4xl font-semibold text-zinc-900">400+</div>
                                <p className="mt-2 text-sm font-medium text-zinc-600">Groceries & Supermarkets served</p>
                            </div>
                            <div className="rounded-2xl border border-black/5 bg-white/60 p-5 text-zinc-800 shadow-sm backdrop-blur transition hover:bg-white/80">
                                <div className="text-4xl font-semibold text-zinc-900">700+</div>
                                <p className="mt-2 text-sm font-medium text-zinc-600">Dedicated delivery trucks</p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <Link href="/retail" className="inline-flex items-center gap-2 rounded-[5px] border border-[#D4AF37]/70 bg-white/80 px-6 py-3 text-sm font-semibold text-[#D4AF37] shadow-sm backdrop-blur transition-all hover:text-black hover:bg-[#F4F4F4] hover:border-black hover:shadow-md group">
                                Explore Retail Services
                                <span className="transition-transform group-hover:translate-x-1">
                                    <ArrowRightIcon />
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    );
};

export default AboutSection;