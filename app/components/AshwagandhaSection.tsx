

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