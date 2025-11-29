
"use client";
import React from 'react';
import { Package, Star, Truck, Tag, Cherry, FileBadge } from 'lucide-react';

interface FeatureItem {
    id: string;
    number: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

export default function ReasonToChoose() {
    const features: FeatureItem[] = [
        {
            id: '01',
            number: '01',
            icon: <Package strokeWidth={1.5} />,
            title: 'Products Range',
            description: 'At Smart logistics service, there are no exception to the standard of quality we are committed to provide.',
        },
        {
            id: '02',
            number: '02',
            icon: <Star strokeWidth={1.5} />,
            title: 'Quality Matters',
            description: 'The production proceses at source are assesed to ensure treatment of both the enviroment and the people who work on it.',
        },
        {
            id: '03',
            number: '03',
            icon: <Truck strokeWidth={1.5} />,
            title: 'Smart Logistics',
            description: 'At Smart logistics service, there are no exception to the standard of quality we are committed to provide.',
        },
        {
            id: '04',
            number: '04',
            icon: <Tag strokeWidth={1.5} />,
            title: 'Fair Price For All',
            description: 'Offer afforfable price for high-quality farm product to provide maximum people with healthy food.',
        },
        {
            id: '05',
            number: '05',
            icon: <Cherry strokeWidth={1.5} />,
            title: 'Guaranteed 100% Organic',
            description: 'We are dedicated to bringing you expectational quality products and services.',
        },
        {
            id: '06',
            number: '06',
            icon: <FileBadge strokeWidth={1.5} />,
            title: 'Certified Organic',
            description: (
                <>
                    Certified organic foods are produced according to federal standards set by the{' '}
                    <span className=" font-medium">USDA National Organic Program.</span>
                </>
            ),
        },
    ];

    return (
        <section className="w-full bg-white">
            <div className="templateContainer space-y-8">
                {/* Header Section */}
                {/* <div className="text-center mb-12">
                    <span className="text-[#84cc16] text-sm font-semibold tracking-widest uppercase mb-2 block">
                        Why choose our business
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Why choose our business
                    </h2>
                </div> */}

                {/* Header Section */}
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                        Why choose our business
                    </h2>
                    <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                        Why choose our business
                    </h3>
                </div>

                {/* Grid Layout Strategy:
          We use a gray background on the container with a 1px gap to create 
          the internal border effect perfectly between cells.
        */}
                <div className="border border-gray-100 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-white p-8 md:p-10 relative group hover:bg-gray-50 transition-colors duration-300"
                        >
                            {/* Background Number */}
                            <span className="absolute top-6 right-8 text-6xl font-bold text-gray-100 select-none pointer-events-none group-hover:text-gray-200 transition-colors">
                                {feature.number}
                            </span>

                            {/* Icon */}
                            <div className="text-[#D4AF37] w-12 h-12 mb-6 [&>svg]:w-full [&>svg]:h-full">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h4 className="text-xl font-normal text-gray-900 mb-4">
                                    {feature.title}
                                </h4>
                                <div className="text-gray-500 leading-relaxed text-[15px]">
                                    {feature.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}