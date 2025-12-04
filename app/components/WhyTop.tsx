// import React from 'react';
// import Image from 'next/image';
// import { HeartPulse, Apple, ThumbsUp, Droplets, LucideIcon } from 'lucide-react';

// // --- REUSABLE COMPONENT FOR INDIVIDUAL FEATURES ---
// interface FeatureItemProps {
//     Icon: LucideIcon;
//     title: string;
//     description: string;
//     // Helper prop to center items on mobile but align left/right on desktop
//     className?: string;
// }

// const FeatureItem: React.FC<FeatureItemProps> = ({ Icon, title, description, className = '' }) => {
//     return (
//         // Using 'group' to allow hovering effects later if desired, though none are present in the design.
//         <div className={`flex flex-col ${className}`}>
//             {/* Icon Wrapper - matching the gold/beige color */}
//             <div className="text-[#CDB599] mb-5 inline-flex">
//                 <Icon size={54} strokeWidth={1.25} />
//             </div>

//             {/* Title */}
//             <h3 className="text-[26px] leading-tight text-[#333333] font-normal mb-4">
//                 {title}
//             </h3>

//             {/* Description text */}
//             <p className="text-[#777777] text-[15px] leading-relaxed max-w-[280px]">
//                 {description}
//             </p>
//         </div>
//     );
// };


// // --- MAIN SECTION COMPONENT ---
// const WhyTop = () => {
//     // The source image from the provided HTML snippet
//     const bannerImageSrc = "https://d-themes.com/wordpress/panda/demo1/wp-content/uploads/sites/6/2021/09/banner1.jpg";
//     const placeholderText = "Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore.";

//     return (
//         <section className="bg-[#FFFCF7] py-24 px-4 overflow-hidden relative">
//             <div className="container mx-auto max-w-[1240px]">

//                 {/* --- HEADERS SECTION --- */}
//                 <div className="text-center mb-20 relative z-10">
//                     {/* Kicker with custom underline */}
//                     <h3 className="inline-block text-sm font-bold tracking-[0.2em] text-[#333333] uppercase mb-5 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-[#E8D5B5] after:mx-auto after:mt-3">
//                         Why Top Products?
//                     </h3>
//                     {/* Main Heading */}
//                     <h2 className="text-4xl md:text-[44px] font-light text-[#333333] tracking-tight">
//                         100% Natural, 100% Organic
//                     </h2>
//                 </div>


//                 {/* --- MAIN GRID CONTENT --- */}
//                 {/* We use a 12-column grid to replicate the 25% - 50% - 25% layout */}
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-8 items-center relative z-10">

//                     {/* --- LEFT COLUMN (Features 1 & 2) --- */}
//                     {/* Spans 3 cols on large screens. Aligns right on desktop, centers on mobile. */}
//                     <div className="lg:col-span-3 flex flex-col gap-16 items-center lg:items-end text-center lg:text-right order-2 lg:order-1">
//                         <FeatureItem
//                             Icon={HeartPulse}
//                             title="Good for Health"
//                             description={placeholderText}
//                             // On desktop, we ensure the icon wrapper is aligned to the right end of the flex container
//                             className="items-center lg:items-end"
//                         />
//                         <FeatureItem
//                             Icon={Apple}
//                             title="Always Fresh"
//                             description={placeholderText}
//                             className="items-center lg:items-end"
//                         />
//                     </div>


//                     {/* --- CENTER COLUMN (Image) --- */}
//                     {/* Spans 6 cols on large screens. */}
//                     <div className="lg:col-span-6 flex justify-center relative order-1 lg:order-2 mb-8 lg:mb-0">
//                         {/* Using Next/Image for optimization. Ensure the domain is allowed in next.config.js if fetching remotely */}
//                         <div className="relative w-full max-w-[600px] aspect-[4/3]">
//                             <Image
//                                 src={bannerImageSrc}
//                                 alt="Natural mango products and oil"
//                                 fill
//                                 className="object-contain"
//                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
//                                 priority
//                             />
//                         </div>
//                     </div>


//                     {/* --- RIGHT COLUMN (Features 3 & 4) --- */}
//                     {/* Spans 3 cols on large screens. Aligns left on desktop, centers on mobile. */}
//                     <div className="lg:col-span-3 flex flex-col gap-16 items-center lg:items-start text-center lg:text-left order-3">
//                         <FeatureItem
//                             Icon={ThumbsUp}
//                             title="High Nutrition"
//                             description={placeholderText}
//                             className="items-center lg:items-start"
//                         />
//                         <FeatureItem
//                             Icon={Droplets}
//                             title="No Fertilizer"
//                             description={placeholderText}
//                             className="items-center lg:items-start"
//                         />
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WhyTop;


// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { HeartPulse, Apple, ThumbsUp, Droplet } from 'lucide-react';

// // --- Types ---
// interface FeatureBlockProps {
//     icon: React.ReactNode;
//     title: string;
//     description: string;
// }

// // --- Helper Component: FeatureBlock ---
// const FeatureBlock: React.FC<FeatureBlockProps> = ({ icon, title, description }) => {
//     return (
//         <div className="flex flex-col items-center text-center p-4 group">
//             {/* Icon with hover effect */}
//             <div className="text-[#C7A17A] mb-5 transition-transform duration-300 group-hover:-translate-y-2">
//                 {icon}
//             </div>

//             {/* Title */}
//             <h3 className="text-2xl font-medium text-gray-800 mb-3 font-sans">
//                 {title}
//             </h3>

//             {/* Description */}
//             <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
//                 {description}
//             </p>
//         </div>
//     );
// };

// // --- Main Component ---
// const WhyChooseSection = () => {
//     const loremText = "Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore.";

//     // Image URL from your request
//     const imageUrl = "https://d-themes.com/wordpress/panda/demo1/wp-content/uploads/sites/6/2021/09/banner1.jpg";

//     // Icon configuration
//     const iconSize = 48;
//     const strokeWidth = 1.5;

//     return (
//         <section className="py-20 bg-white overflow-hidden font-sans">
//             <div className="container mx-auto px-4 relative">

//                 {/* --- Header Section --- */}
//                 <div className="text-center mb-12 md:mb-20 z-10 relative">
//                     {/* Subheading with underline */}
//                     <div className="inline-block relative mb-4">
//                         <h4 className="text-sm uppercase tracking-[0.15em] text-gray-900 font-bold z-10 relative">
//                             Why Top Products?
//                         </h4>
//                         {/* Custom underline effect */}
//                         <div className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#F4E3CC] -z-0 opacity-70"></div>
//                     </div>

//                     {/* Main Heading */}
//                     <h2 className="text-3xl md:text-5xl font-light text-gray-700 mt-2">
//                         100% Natural, 100% Organic
//                     </h2>
//                 </div>

//                 {/* --- Main Content Grid --- */}
//                 <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">

//                     {/* Left Column */}
//                     <div className="flex flex-col gap-12 flex-1 order-2 lg:order-1 w-full lg:w-auto">
//                         <FeatureBlock
//                             icon={<HeartPulse size={iconSize} strokeWidth={strokeWidth} />}
//                             title="Good for Health"
//                             description={loremText}
//                         />
//                         <FeatureBlock
//                             icon={<Apple size={iconSize} strokeWidth={strokeWidth} />}
//                             title="Always Fresh"
//                             description={loremText}
//                         />
//                     </div>

//                     {/* Center Column (Image) */}
//                     <div className="flex-[1.5] order-1 lg:order-2 flex justify-center items-center w-full py-6 lg:py-0">
//                         {/* Added a custom style tag just for the floating animation to keep this in one file */}
//                         <style jsx>{`
//               @keyframes float {
//                 0%, 100% { transform: translateY(0px); }
//                 50% { transform: translateY(-15px); }
//               }
//               .animate-float {
//                 animation: float 4s ease-in-out infinite;
//               }
//             `}</style>

//                         <div className="relative w-full max-w-[500px] lg:max-w-[650px] h-[350px] md:h-[450px] lg:h-[550px]">
//                             <Image
//                                 src={imageUrl}
//                                 alt="Organic mango slices and oil"
//                                 fill
//                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
//                                 className="object-contain animate-float"
//                                 priority
//                             />
//                         </div>
//                     </div>

//                     {/* Right Column */}
//                     <div className="flex flex-col gap-12 flex-1 order-3 w-full lg:w-auto">
//                         <FeatureBlock
//                             icon={<ThumbsUp size={iconSize} strokeWidth={strokeWidth} />}
//                             title="High Nutrition"
//                             description={loremText}
//                         />
//                         <FeatureBlock
//                             icon={<Droplet size={iconSize} strokeWidth={strokeWidth} />}
//                             title="No Fertilizer"
//                             description={loremText}
//                         />
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WhyChooseSection;


// import React from 'react';
// import { HeartPulse, Apple, BadgeCheck, Sprout } from 'lucide-react';

// const ProductShowcase = () => {
//     return (
//         <section className="w-full bg-white overflow-hidden">
//             <div className=" templateContainer">

//                 {/* Header Section */}


//                 <div className="space-y-2 text-center">
//                     <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
//                         Why Top Products?
//                     </h2>
//                     <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
//                         100% Natural, 100% Organic
//                     </h3>
//                 </div>

//                 {/* Main Content Grid */}
//                 {/* Structure: 25% Left | 50% Center | 25% Right (Matches Elementor col-25/col-50/col-25) */}
//                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

//                     {/* LEFT COLUMN (25%) - Aligned Left */}
//                     <div className="lg:col-span-1 flex flex-col gap-12 lg:gap-16 order-2 lg:order-1">
//                         {/* Item 1 */}
//                         <div className="flex flex-col items-center text-center lg:text-left group cursor-pointer">
//                             <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
//                                 <HeartPulse strokeWidth={1} size={64} />
//                             </div>
//                             <h3 className="text-xl text-gray-700 font-normal mb-3 tracking-wide">
//                                 Good for Health
//                             </h3>
//                             <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
//                                 Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore.
//                             </p>
//                         </div>

//                         {/* Item 2 */}
//                         <div className="flex flex-col items-center text-center lg:text-left group cursor-pointer">
//                             <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
//                                 <Apple strokeWidth={1} size={64} />
//                             </div>
//                             <h3 className="text-xl text-gray-700 text-center font-normal mb-3 tracking-wide">
//                                 Always Fresh
//                             </h3>
//                             <p className="text-gray-400 text-sm  text-center leading-relaxed max-w-[260px]">
//                                 Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore.
//                             </p>
//                         </div>
//                     </div>

//                     {/* MIDDLE COLUMN (50%) - Central Image */}
//                     <div className="lg:col-span-2 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0 relative">

//                         <div className="absolute w-[70%] h-[70%] rounded-full blur-3xl opacity-30 -z-10"></div>

//                         <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
//                             <img
//                                 src="/category/Gemini_Generated_Image_tx6memtx6memtx6m.png"
//                                 alt="Organic Mango and Oil Product"
//                                 className="w-full h-auto object-contain"
//                             />
//                         </div>
//                     </div>

//                     {/* RIGHT COLUMN (25%) - Aligned Right */}
//                     <div className="lg:col-span-1 flex flex-col gap-12 lg:gap-16 order-3">
//                         {/* Item 3 */}
//                         <div className="flex flex-col items-center  text-center lg:text-right group cursor-pointer">
//                             <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
//                                 <BadgeCheck strokeWidth={1} size={64} />
//                             </div>
//                             <h3 className="text-xl text-gray-700 font-normal mb-3 tracking-wide">
//                                 High Nutrition
//                             </h3>
//                             <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
//                                 Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore.
//                             </p>
//                         </div>

//                         {/* Item 4 */}
//                         <div className="flex flex-col items-center  text-center lg:text-right group cursor-pointer">
//                             <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
//                                 <Sprout strokeWidth={1} size={64} />
//                             </div>
//                             <h3 className="text-xl text-gray-700 font-normal mb-3 tracking-wide">
//                                 No Fertilizer
//                             </h3>
//                             <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
//                                 Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore.
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductShowcase;

// // D:\mktgroup\app\components\WhyTop.tsx
// import React from 'react';
// import { HeartPulse, Apple, BadgeCheck, Sprout } from 'lucide-react';

// const ProductShowcase = () => {
//     return (
//         <section className="w-full bg-white overflow-hidden">
//             <div className=" templateContainer pb-12 md:pb-20">

//                 {/* Header Section */}
//                 <div className="space-y-2 text-center">
//                     <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
//                         Why Top Products?
//                     </h2>
//                     <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
//                         100% Natural, 100% Organic
//                     </h3>
//                 </div>

//                 {/* Main Content Grid */}
//                 {/* Structure: 25% Left | 50% Center | 25% Right (Matches Elementor col-25/col-50/col-25) */}
//                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">

//                     {/* LEFT COLUMN (25%) - MODIFIED FOR HORIZONTAL LAYOUT ON MD SCREENS */}
//                     <div className="lg:col-span-1 flex flex-col gap-12 lg:gap-16 order-2 lg:order-1 
//                   sm:flex-row sm:justify-around sm:gap-4 lg:flex-col" // Added classes here
//                     >
//                         {/* Item 1 */}
//                         <div className="flex flex-col items-center text-center lg:text-left group cursor-pointer">
//                             <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
//                                 <HeartPulse strokeWidth={1} size={64} />
//                             </div>
//                             <h3 className="text-xl text-gray-700 font-normal mb-3 tracking-wide">
//                                 Good for Health
//                             </h3>
//                             <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
//                                 Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore.
//                             </p>
//                         </div>

//                         {/* Item 2 */}
//                         <div className="flex flex-col items-center text-center lg:text-left group cursor-pointer">
//                             <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
//                                 <Apple strokeWidth={1} size={64} />
//                             </div>
//                             <h3 className="text-xl text-gray-700 text-center font-normal mb-3 tracking-wide">
//                                 Always Fresh
//                             </h3>
//                             <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
//                                 Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore.
//                             </p>
//                         </div>
//                     </div>

//                     {/* MIDDLE COLUMN (50%) - Central Image - NO CHANGE */}
//                     <div className="lg:col-span-2 flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0 relative">

//                         <div className="absolute w-[70%] h-[70%] rounded-full blur-3xl opacity-30 -z-10"></div>

//                         <div className="relative w-full max-w-[560px] aspect-square flex items-center justify-center">
//                             <img
//                                 src="/category/Gemini_Generated_Image_tx6memtx6memtx6m.png"
//                                 alt="Organic Mango and Oil Product"
//                                 className="w-full h-auto object-contain"
//                             />
//                         </div>
//                     </div>

//                     {/* RIGHT COLUMN (25%) - Aligned Right - NO CHANGE */}
//                     <div className="lg:col-span-1 flex flex-col gap-12 lg:gap-16 order-3 sm:flex-row sm:justify-around sm:gap-4 lg:flex-col">
//                         {/* Item 3 */}
//                         <div className="flex flex-col items-center  text-center lg:text-right group cursor-pointer">
//                             <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
//                                 <BadgeCheck strokeWidth={1} size={64} />
//                             </div>
//                             <h3 className="text-xl text-gray-700  text-center font-normal mb-3 tracking-wide">
//                                 High Nutrition
//                             </h3>
//                             <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
//                                 Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore.
//                             </p>
//                         </div>

//                         {/* Item 4 */}
//                         <div className="flex flex-col items-center  text-center lg:text-right group cursor-pointer">
//                             <div className="mb-4 text-[#D4AF37] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">
//                                 <Sprout strokeWidth={1} size={64} />
//                             </div>
//                             <h3 className="text-xl text-gray-700 font-normal mb-3 tracking-wide">
//                                 No Fertilizer
//                             </h3>
//                             <p className="text-gray-400 text-sm text-center leading-relaxed max-w-[260px]">
//                                 Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore.
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProductShowcase;


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