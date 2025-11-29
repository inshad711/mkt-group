// import React from 'react';
// import Image from 'next/image';

// // --- Types & Data ---

// interface BenefitTagProps {
//     text: string;
//     subText?: string;
//     position: string; // Tailwind absolute position classes
//     delay?: string;
// }

// const BENEFIT_TAGS: BenefitTagProps[] = [
//     {
//         text: "Calms",
//         subText: "The Mind",
//         position: "top-[15%] left-[5%] md:left-[10%]",
//         delay: "0s"
//     },
//     {
//         text: "Revitalizes",
//         subText: "Energy",
//         position: "top-[20%] right-[5%] md:right-[10%]",
//         delay: "0.1s"
//     },
//     {
//         text: "Enhances",
//         subText: "Focus",
//         position: "bottom-[30%] left-[2%] md:left-[5%]",
//         delay: "0.2s"
//     },
//     {
//         text: "Promotes",
//         subText: "Sleep",
//         position: "bottom-[35%] right-[2%] md:right-[5%]",
//         delay: "0.3s"
//     },
//     {
//         text: "Supports",
//         subText: "Intimacy",
//         position: "bottom-[10%] right-[10%] md:right-[15%]",
//         delay: "0.4s"
//     },
// ];

// // --- Sub-Components ---

// const BenefitTag = ({ text, subText, position }: BenefitTagProps) => (
//     <div
//         className={`absolute ${position} flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-full pr-5 pl-2 py-2 z-10 hover:scale-105 transition-transform duration-300 cursor-default`}
//     >
//         <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-inner overflow-hidden relative">
//             {/* Extracted Icon URL from your snippet */}
//             <Image
//                 src="https://framerusercontent.com/images/MrZ44yk4GuAtBSt7zv0RyDjZP8.png"
//                 alt="icon"
//                 width={32}
//                 height={32}
//                 className="object-cover opacity-80"
//             />
//         </div>
//         <div className="flex flex-col leading-tight">
//             <span className="text-xs font-semibold text-[#574F48]">{text}</span>
//             {subText && <span className="text-xs text-[#574F48]">{subText}</span>}
//         </div>
//     </div>
// );

// const FeatureCard = ({ title, imageSrc, colSpan = "col-span-1" }: { title: string, imageSrc: string, colSpan?: string }) => (
//     <div className={`relative group overflow-hidden rounded-2xl ${colSpan} h-64 md:h-auto`}>
//         <Image
//             src={imageSrc}
//             alt={title}
//             fill
//             className="object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         {/* Gradient Overlay for text readability */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#574F48]/90 via-transparent to-transparent opacity-80" />

//         <div className="absolute bottom-6 left-0 right-0 text-center">
//             <h3 className="text-white font-serif text-xl md:text-2xl tracking-wide">{title}</h3>
//         </div>
//     </div>
// );

// // --- Main Component ---

// export default function AshwagandhaSection() {
//     return (
//         <section className="w-full py-20 px-4 md:px-8 bg-[#FAF9F6]">
//             <div className="max-w-7xl mx-auto space-y-12">

//                 {/* Header Section */}
//                 <div className="text-center space-y-6 max-w-3xl mx-auto">
//                     <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A]">
//                         Where potency meets <span className="italic font-light">purity</span>
//                     </h2>
//                     <p className="text-[#574F48] text-lg leading-relaxed">
//                         Crafted with the gold standard of ashwagandha — full-spectrum,
//                         root-only, and clinically backed for unmatched efficacy.
//                     </p>
//                 </div>

//                 {/* Content Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[700px]">

//                     {/* Left Column: Product Showcase (Spans 7 columns) */}
//                     <div className="lg:col-span-7 relative bg-[#EBE5DE] rounded-3xl overflow-hidden flex items-center justify-center min-h-[500px]">

//                         {/* Background Pattern Overlay (Extracted from code) */}
//                         <div
//                             className="absolute inset-0 opacity-5 pointer-events-none"
//                             style={{
//                                 backgroundImage: `url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')`,
//                                 backgroundSize: '64px'
//                             }}
//                         />

//                         {/* Main Bottle Image */}
//                         <div className="relative w-[300px] md:w-[450px] aspect-square z-0">
//                             <Image
//                                 src="https://framerusercontent.com/images/de8SabF5ws7UplSjMEK09JPPts.png"
//                                 alt="AshwagandHi Bottle"
//                                 fill
//                                 className="object-contain drop-shadow-2xl"
//                                 priority
//                             />
//                         </div>

//                         {/* Floating Tags */}
//                         {BENEFIT_TAGS.map((tag, idx) => (
//                             <BenefitTag key={idx} {...tag} />
//                         ))}
//                     </div>

//                     {/* Right Column: Feature Grid (Spans 5 columns) */}
//                     <div className="lg:col-span-5 grid grid-cols-2 grid-rows-2 gap-4 h-full min-h-[500px]">

//                         {/* Card 1: Fully Vegan */}
//                         <FeatureCard
//                             title="Fully Vegan"
//                             imageSrc="https://framerusercontent.com/images/M62zwY9RmbRkkXizgioIeZivKIE.png"
//                         />

//                         {/* Card 2: Amber Glass */}
//                         <FeatureCard
//                             title="Amber Glass"
//                             imageSrc="https://framerusercontent.com/images/XIlBCWHPMNAtyBDns51UtZOBGm8.png"
//                         />

//                         {/* Card 3: Root Extraction (Spans full width of right column) */}
//                         <FeatureCard
//                             title="Root-Only Extraction"
//                             imageSrc="https://framerusercontent.com/images/qmFupwxjKMl0J8GDKg7dnDOFSdo.png"
//                             colSpan="col-span-2"
//                         />
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }


// "use client";
// import React, { useState } from 'react';
// import { Leaf, Moon, Zap, Heart, Brain, ArrowUpRight } from 'lucide-react';

// // Using Google Fonts for that serif "Editorial" look
// const fontLink = document.createElement("link");
// fontLink.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap";
// fontLink.rel = "stylesheet";
// document.head.appendChild(fontLink);

// const App = () => {
//     return (
//         <div className="min-h-screen bg-[#F9F8F6] text-[#3e3630] font-sans selection:bg-[#C5B3A4] selection:text-white pb-20">

//             {/* Header Section */}
//             <header className="pt-20 pb-12 px-6 text-center max-w-4xl mx-auto">
//                 <h1 className="text-4xl md:text-6xl mb-6 font-serif tracking-tight text-[#1a1510]">
//                     Where potency meets <span className="italic font-light">purity</span>
//                 </h1>
//                 <p className="text-[#574F48] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
//                     Crafted with the gold standard of ashwagandha — full-spectrum, root-only, and clinically backed for unmatched efficacy.
//                 </p>
//             </header>

//             {/* Main Grid Layout */}
//             <main className="max-w-7xl mx-auto px-4 md:px-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//                     {/* Left Column: Hero Product Image with Floating Tags */}
//                     <div className="lg:col-span-7 relative group">
//                         <div className="relative bg-gradient-to-b from-[#EBE5DE] to-[#DAD0C6] rounded-[32px] overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[700px] border border-white/40 shadow-sm">

//                             {/* Subtle Noise Texture Overlay */}
//                             <div
//                                 className="absolute inset-0 opacity-[0.05] pointer-events-none"
//                                 style={{ backgroundImage: `url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')`, backgroundSize: '64px' }}
//                             />

//                             {/* Main Bottle Image */}
//                             <div className="absolute inset-0 flex items-center justify-center translate-y-12 md:translate-y-0">
//                                 <img
//                                     src="https://framerusercontent.com/images/de8SabF5ws7UplSjMEK09JPPts.png"
//                                     alt="AshwagandHi Bottle"
//                                     className="w-[80%] md:w-[65%] max-w-[500px] object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105"
//                                 />
//                             </div>

//                             {/* Floating Feature Tags */}
//                             {/* Use absolute positioning percentages to place them around the bottle */}

//                             {/* Top Left */}
//                             <FeatureTag
//                                 icon={<Leaf className="w-4 h-4" />}
//                                 label="Calms"
//                                 sub="The Mind"
//                                 position="top-[15%] left-[5%] md:top-[20%] md:left-[10%]"
//                                 delay="0"
//                             />

//                             {/* Top Right */}
//                             <FeatureTag
//                                 icon={<Zap className="w-4 h-4" />}
//                                 label="Revitalizes"
//                                 sub="Energy"
//                                 position="top-[15%] right-[5%] md:top-[20%] md:right-[10%]"
//                                 delay="100"
//                             />

//                             {/* Middle Left */}
//                             <FeatureTag
//                                 icon={<Brain className="w-4 h-4" />}
//                                 label="Enhances"
//                                 sub="Focus"
//                                 position="top-[55%] left-[2%] md:top-[55%] md:left-[5%]"
//                                 delay="200"
//                             />

//                             {/* Middle Right */}
//                             <FeatureTag
//                                 icon={<Moon className="w-4 h-4" />}
//                                 label="Promotes"
//                                 sub="Sleep"
//                                 position="top-[50%] right-[2%] md:top-[50%] md:right-[5%]"
//                                 delay="300"
//                             />

//                             {/* Bottom Right */}
//                             <FeatureTag
//                                 icon={<Heart className="w-4 h-4" />}
//                                 label="Supports"
//                                 sub="Intimacy"
//                                 position="bottom-[15%] right-[10%] md:bottom-[20%] md:right-[12%]"
//                                 delay="400"
//                             />

//                         </div>
//                     </div>

//                     {/* Right Column: Bento Grid Features */}
//                     <div className="lg:col-span-5 flex flex-col gap-6">

//                         {/* Top Row: 2 Small Cards */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full min-h-[300px]">

//                             {/* Fully Vegan Card */}
//                             <div className="relative rounded-[32px] overflow-hidden h-64 sm:h-auto group">
//                                 <img
//                                     src="https://framerusercontent.com/images/M62zwY9RmbRkkXizgioIeZivKIE.png"
//                                     alt="Vegan Capsules"
//                                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
//                                 <div className="absolute bottom-6 left-0 right-0 text-center">
//                                     <span className="text-white font-serif text-2xl drop-shadow-md">Fully Vegan</span>
//                                 </div>
//                             </div>

//                             {/* Amber Glass Card */}
//                             <div className="relative rounded-[32px] overflow-hidden h-64 sm:h-auto group">
//                                 <img
//                                     src="https://framerusercontent.com/images/XIlBCWHPMNAtyBDns51UtZOBGm8.png"
//                                     alt="Amber Glass Bottle"
//                                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
//                                 <div className="absolute bottom-6 left-0 right-0 text-center">
//                                     <span className="text-white font-serif text-2xl drop-shadow-md">Amber Glass</span>
//                                 </div>
//                             </div>

//                         </div>

//                         {/* Bottom Row: Wide Card */}
//                         <div className="relative rounded-[32px] overflow-hidden h-64 sm:h-[340px] group">
//                             <img
//                                 src="https://framerusercontent.com/images/qmFupwxjKMl0J8GDKg7dnDOFSdo.png"
//                                 alt="Ashwagandha Roots"
//                                 className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
//                             <div className="absolute bottom-8 left-0 right-0 text-center">
//                                 <span className="text-white font-serif text-3xl drop-shadow-lg">Root-Only Extraction</span>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//                 {/* CTA Button */}
//                 <div className="flex justify-center mt-12">
//                     <button className="group relative bg-[#C5B3A4]/50 hover:bg-[#C5B3A4]/70 text-[#1a1510] pl-8 pr-2 py-2 rounded-full flex items-center gap-4 transition-all duration-300 backdrop-blur-sm border border-[#C5B3A4]/30">
//                         <span className="font-medium text-lg tracking-wide">Experience ashwagandHi</span>
//                         <div className="w-10 h-10 bg-[#C5B3A4] rounded-full flex items-center justify-center group-hover:bg-[#b09b89] transition-colors">
//                             <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-45" />
//                         </div>
//                     </button>
//                 </div>

//             </main>
//         </div>
//     );
// };

// // Component for the Floating Tags
// const FeatureTag = ({ icon, label, sub, position, delay }) => (
//     <div
//         className={`absolute ${position} z-10 animate-fade-in-up`}
//         style={{ animationDelay: `${delay}ms` }}
//     >
//         <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white/50 p-2 pr-4 rounded-full shadow-lg hover:bg-white/80 transition-all cursor-default group/tag">
//             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#574F48]">
//                 {icon}
//             </div>
//             <div className="flex flex-col leading-tight">
//                 <span className="text-xs font-semibold uppercase tracking-wider text-[#8A8178] mb-0.5">{label}</span>
//                 <span className="text-sm font-bold text-[#3e3630] font-serif">{sub}</span>
//             </div>
//         </div>
//     </div>
// );

// export default App;


import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react'; // simple icon library, or use svg

const AshwagandhaFeature = () => {
    return (
        <section className="w-full bg-[#fdfbf7] py-16 px-4 md:px-8 text-[#2b2118]">
            <div className="templateContainer space-y-12">

                {/* --- Header Section --- */}
                <div className="text-center space-y-4 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight">
                        Where potency meets <span className="italic font-light">purity</span>
                    </h2>
                    <p className="text-gray-600 md:text-lg leading-relaxed">
                        Crafted with the gold standard of ashwagandha — full-spectrum,
                        root-only, and clinically backed for unmatched efficacy.
                    </p>
                </div>

                {/* --- Bento Grid Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">

                    {/* Left Column: Bottle Product Shot (Span 7) */}
                    <div className="lg:col-span-7 relative bg-[#e3ddd5] rounded-3xl overflow-hidden flex items-center justify-center min-h-[500px] lg:min-h-0">

                        {/* Background Pattern (Optional subtle noise) */}
                        <div className="absolute inset-0 opacity-5 bg-[url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')] bg-repeat bg-[length:64px]"></div>

                        {/* Bottle Image */}
                        <div className="relative z-10 w-64 md:w-80 lg:w-96 h-auto transform transition-transform hover:scale-105 duration-500">
                            {/* Note: In a real Next.js app, add width/height to Image component */}
                            <img
                                src="https://framerusercontent.com/images/de8SabF5ws7UplSjMEK09JPPts.png"
                                alt="AshwagandHi Bottle"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Feature Tags */}
                        <FeatureTag
                            text="Calms"
                            sub="The Mind"
                            className="absolute top-[15%] left-[5%] md:left-[10%]"
                        />
                        <FeatureTag
                            text="Enhances"
                            sub="Focus"
                            className="absolute bottom-[25%] left-[2%] md:left-[5%]"
                        />
                        <FeatureTag
                            text="Revitalizes"
                            sub="Energy"
                            className="absolute top-[20%] right-[5%] md:right-[10%]"
                        />
                        <FeatureTag
                            text="Promotes"
                            sub="Sleep"
                            className="absolute top-[50%] right-[2%] md:right-[5%]"
                        />
                        <FeatureTag
                            text="Supports"
                            sub="Intimacy"
                            className="absolute bottom-[20%] right-[8%] md:right-[12%]"
                        />
                    </div>

                    {/* Right Column: Feature Grid (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col gap-6 h-full">

                        {/* Top Row: 2 Small Cards */}
                        <div className="grid grid-cols-2 gap-6 h-1/2">
                            {/* Card 1: Vegan */}
                            <FeatureCard
                                title="Fully Vegan"
                                image="https://framerusercontent.com/images/M62zwY9RmbRkkXizgioIeZivKIE.png"
                            />
                            {/* Card 2: Amber Glass */}
                            <FeatureCard
                                title="Amber Glass"
                                image="https://framerusercontent.com/images/XIlBCWHPMNAtyBDns51UtZOBGm8.png"
                            />
                        </div>

                        {/* Bottom Row: Wide Card */}
                        <div className="h-1/2 w-full">
                            <FeatureCard
                                title="Root-Only Extraction"
                                image="https://framerusercontent.com/images/qmFupwxjKMl0J8GDKg7dnDOFSdo.png"
                                wide
                            />
                        </div>
                    </div>
                </div>

                {/* --- Footer CTA --- */}
                <div className="flex justify-center pt-8">
                    <button className="group flex items-center gap-3 bg-[#dcd3ca] hover:bg-[#d4c8bd] text-[#2b2118] px-8 py-4 rounded-full transition-all duration-300">
                        <span className="text-lg font-medium">Experience ashwagandHi</span>
                        <span className="bg-[#2b2118] text-[#dcd3ca] rounded-full p-1 transition-transform group-hover:rotate-45">
                            <ArrowUpRight size={18} />
                        </span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default AshwagandhaFeature;

// --- Sub Components ---

const FeatureTag = ({ text, sub, className }: { text: string, sub: string, className?: string }) => (
    <div className={`flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform cursor-default ${className}`}>
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
            <img
                src="https://framerusercontent.com/images/MrZ44yk4GuAtBSt7zv0RyDjZP8.png"
                alt="icon"
                className="w-5 h-5 opacity-80"
            />
        </div>
        <div className="flex flex-col leading-none">
            <span className="text-xs font-semibold text-gray-800 uppercase tracking-wide">{text}</span>
            <span className="text-[10px] text-gray-600 font-medium">{sub}</span>
        </div>
    </div>
);

const FeatureCard = ({ title, image, wide = false }: { title: string, image: string, wide?: boolean }) => (
    <div className="relative w-full h-full rounded-2xl overflow-hidden group">
        <img
            src={image}
            alt={title}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${wide ? 'object-[center_60%]' : ''}`}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />

        <div className="absolute bottom-6 left-0 right-0 text-center z-10">
            <h3 className="text-white font-serif text-2xl md:text-3xl tracking-wide drop-shadow-md">
                {title}
            </h3>
        </div>
    </div>
);