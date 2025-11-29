import React from 'react';
import { Truck, Headset, Undo2, CreditCard } from 'lucide-react';

// Define the interface for the feature data
interface Feature {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const FreeService = () => {
    // Data derived from your original HTML content
    const features: Feature[] = [
        {
            id: 1,
            title: "Free Shipping",
            description: "Product are free shipping.",
            icon: <Truck className="w-10 h-10 text-gray-800" strokeWidth={1.5} />,
        },
        {
            id: 2,
            title: "Customer Support",
            description: "24x7 Customer Support",
            icon: <Headset className="w-10 h-10 text-gray-800" strokeWidth={1.5} />,
        },
        {
            id: 3,
            title: "Easy Return",
            description: "Easy Return For 7 Days",
            icon: <Undo2 className="w-10 h-10 text-gray-800" strokeWidth={1.5} />,
        },
        {
            id: 4,
            title: "Secure Payment",
            description: "Most Secure Payment.",
            icon: <CreditCard className="w-10 h-10 text-gray-800" strokeWidth={1.5} />,
        },
    ];

    return (
        <div className="w-full py-2 bg-white">
            <div className="templateContainer">
                {/* Grid Container matching the row/col logic but with modern CSS Grid */}
                <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex items-start gap-4 group"
                        >
                            {/* Icon Section */}
                            <div className="flex-shrink-0 mt-1">
                                {feature.icon}
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col">
                                <h4 className="text-lg font-bold text-[#242424] leading-tight">
                                    {feature.title}
                                </h4>

                                {/* The visual underline element from the image */}
                                <div className="w-8 h-0.5 bg-slate-500 my-2"></div>

                                <p className="text-sm text-[#757575]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FreeService;