// "use client";

// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const GlobalColab = () => {
//     return (
//         <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden font-sans">
//             {/* Background Map Pattern (Subtle Watermark) */}
//             <div className="relative w-full h-auto"> {/* Assuming this is the banner container */}
//                 {/* 1. The actual image banner */}
//                 <img src="https://drfurithemes.com/farmart/wp-content/uploads/sites/18/2020/05/home_busines_banner.jpg"
//                     alt="Home Business Banner"
//                     className="w-full h-full object-cover" />

//                 {/* 2. The texture overlay (must be placed AFTER the image) */}
//                 <div className="absolute inset-0 pointer-events-none opacity-[0.03]" aria-hidden="true">
//                     {/* ... Your texture code goes here ... */}
//                 </div>
//             </div>

//             <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
//                 {/* Top Content Section */}
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 items-start">

//                     {/* Left Column: Headings */}
//                     <div className="lg:w-1/2">
//                         <h6 className="text-[#86bc42] font-bold uppercase tracking-wider text-sm mb-4">
//                             global Collaboration
//                         </h6>
//                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                             Collaborating With Top<br className="hidden md:block" /> Organic Organization.
//                         </h2>
//                     </div>

//                     {/* Right Column: Text & Link */}
//                     <div className="lg:w-1/2">
//                         <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                             <strong className="text-gray-900 font-semibold">To keep things organized,</strong> we do not work with individual
//                             farmers. Instead, once we identify a state or location, we reach
//                             out to the farmers association or community leaders to help us
//                             identify experienced and committed farmers.
//                         </p>
//                         <a
//                             href="https://drfurithemes.com/farmart/about-us/"
//                             className="inline-flex items-center text-[#86bc42] font-semibold hover:text-[#6da32e] transition-colors group"
//                         >
//                             Read more
//                             <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Bottom Section: Brand Grid */}
//                 <div className="w-full border border-gray-200 bg-white">
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y md:divide-y-0 divide-gray-200">
//                         {/* Logo Items */}
//                         <BrandItem
//                             name="envato"
//                             src="https://drfurithemes.com/farmart/wp-content/uploads/sites/18/2020/05/01.jpg"
//                             height={50}
//                             width={124}
//                         />
//                         <BrandItem
//                             name="codecanyon"
//                             src="https://drfurithemes.com/farmart/wp-content/uploads/sites/18/2020/05/03.jpg"
//                             height={50}
//                             width={149}
//                         />
//                         <BrandItem
//                             name="themeforest"
//                             src="https://drfurithemes.com/farmart/wp-content/uploads/sites/18/2020/05/02.jpg"
//                             height={50}
//                             width={160}
//                         />
//                         <BrandItem
//                             name="envatotuts+"
//                             src="https://drfurithemes.com/farmart/wp-content/uploads/sites/18/2020/05/05.jpg"
//                             height={50}
//                             width={162}
//                         />
//                         <BrandItem
//                             name="audiojungle"
//                             src="https://drfurithemes.com/farmart/wp-content/uploads/sites/18/2020/05/04.jpg"
//                             height={50}
//                             width={153}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // Helper component for Brand Items to handle loading/error states gracefully
// const BrandItem = ({ name, src, width, height }: { name: string, src: string, width: number, height: number }) => {
//     return (
//         <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//             {/* We use an img tag here to match the user's request, but in real Next.js, use <Image /> */}
//             <img
//                 src={src}
//                 alt={`${name} logo`}
//                 width={width}
//                 height={height}
//                 loading="lazy"
//                 className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 filter"
//                 // Fallback if the specific user URL breaks (showing text instead)
//                 onError={(e) => {
//                     e.currentTarget.style.display = 'none';
//                     e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-400 font-bold text-lg uppercase">${name}</span>`;
//                 }}
//             />
//         </div>
//     );
// };

// export default GlobalColab;

// D:\mktgroup\app\components\GlobalColab.tsx
"use client";


import { ArrowRight } from 'lucide-react';

const GlobalColab = () => {
    return (

        <section id="brand" className="relative w-full py-16 md:py-24 bg-white overflow-hidden">

            {/* 1. Full-Cover Background Image Layer (Positioned ABSOLUTE) */}
            {/* We will use a dedicated container for the image and its overlay */}
            <div className="absolute inset-0 z-0">


                {/* 2. Texture Overlay (Placed on top of the image) */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" aria-hidden="true">
                    {/* Placeholder for the texture code (SVG or Gradient) */}
                    <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                </div>


            </div>


            {/* Main Content Container (Positioned RELATIVE, z-index above image) */}
            <div className="templateContainer px-4 md:px-6 relative z-20">
                {/* Top Content Section - Ensure text has good contrast over the image if needed */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
                    {/* Left Column: Headings */}
                    <div className="lg:w-1/2">
                        <h6 className="text-[#D4AF37] uppercase tracking-wider text-sm mb-4">
                            global Collaboration
                        </h6>
                        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-normal text-gray-900 leading-tight">
                            Collaborating With Top<br className="hidden md:block" /> Organic Organization.
                        </h2>
                    </div>

                    {/* Right Column: Text & Link */}
                    <div className="lg:w-1/2">
                        <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-light">
                            <strong className="text-gray-900 ">To keep things organized,</strong> we do not work with individual
                            farmers. Instead, once we identify a state or location, we reach
                            out to the farmers association or community leaders to help us
                            identify experienced and committed farmers.
                        </p>
                        <a
                            href="https://drfurithemes.com/farmart/about-us/"
                            className="inline-flex items-center text-[#D4AF37] font-normal hover:text-[##D4AF37]/60 transition-colors group"
                        >
                            Read more
                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Bottom Section: Brand Grid */}
                {/* Brand Grid is kept inside the main content container */}
                <div className="w-full border border-gray-200 bg-white">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y  divide-gray-200">
                        {/* Logo Items (BrandItem component definition remains the same) */}
                        <BrandItem name="envato" src="/brand-logo/Col.jpg" height={50} width={124} />
                        <BrandItem name="codecanyon" src="/brand-logo/Com.jpg" height={50} width={149} />
                        <BrandItem name="themeforest" src="/brand-logo/clo.png" height={50} width={160} />
                        <BrandItem name="envatotuts+" src="/brand-logo/dab.jpg" height={50} width={162} />
                        <BrandItem name="audiojungle" src="/brand-logo/det.jpg" height={50} width={153} />
                        <BrandItem name="audiojungle" src="/brand-logo/Dov.jpg" height={50} width={153} />
                        <BrandItem name="audiojungle" src="/brand-logo/fa.jpg" height={50} width={153} />
                        <BrandItem name="audiojungle" src="/brand-logo/gar.jpg" height={50} width={153} />
                        <BrandItem name="audiojungle" src="/brand-logo/gil.jpg" height={50} width={153} />
                        <BrandItem name="audiojungle" src="/brand-logo/har.jpg" height={50} width={153} />
                        <BrandItem name="audiojungle" src="/brand-logo/hea.jpg" height={50} width={153} />
                        <BrandItem name="audiojungle" src="/brand-logo/joh.jpg" height={50} width={153} />
                        <BrandItem name="audiojungle" src="/brand-logo/lif.jpg" height={50} width={153} />
                        {/* <BrandItem name="audiojungle" src="/brand-logo/lip.jpg" height={50} width={153} /> */}
                        <BrandItem name="audiojungle" src="/brand-logo/nes.jpg" height={50} width={153} />
                        <BrandItem name="audiojungle" src="/brand-logo/pam.jpg" height={50} width={153} />
                    </div>
                </div>
            </div>
        </section>
    );
};

// ... BrandItem component remains unchanged ...

const BrandItem = ({ name, src, width, height }: { name: string, src: string, width: number, height: number }) => {
    return (
        <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
            <img
                src={src}
                alt={`${name} logo`}
                width={width}
                height={height}
                loading="lazy"
                className="max-h-12 w-auto "
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-400 font-bold text-lg uppercase">${name}</span>`;
                }}
            />
        </div>
    );
};

export default GlobalColab;