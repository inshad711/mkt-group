// app/components/Skeletons.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// 1. Skeleton for Categories (CardSection)
export const CategorySkeleton = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="templateContainer space-y-8">
                {/* Header Skeleton */}
                <div className="space-y-2 text-center">
                    <Skeleton width={300} height={40} />
                    <Skeleton width={200} height={20} />
                </div>

                {/* Grid Skeleton */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    {Array(8).fill(0).map((_, index) => (
                        <div key={index} className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden">
                            <Skeleton height="100%" className="absolute inset-0" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// 2. Skeleton for Product List (Category Slug Page)
export const ProductListSkeleton = () => {
    return (
        <div className="templateContainer">
            {/* Title Skeleton */}
            <div className="flex justify-center py-10 mb-8 border-b border-transparent">
                <Skeleton width={250} height={35} />
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {Array(8).fill(0).map((_, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        {/* Image Area */}
                        <div className="relative w-full aspect-[3/4] rounded-[5px] overflow-hidden">
                            <Skeleton height="100%" className="absolute inset-0" />
                        </div>
                        {/* Text Details */}
                        <div className="flex justify-between items-end px-1">
                            <div className="flex flex-col gap-1 w-3/4">
                                <Skeleton width="50%" height={10} /> {/* Category */}
                                <Skeleton width="90%" height={15} /> {/* Title */}
                            </div>
                            <Skeleton width={40} height={15} /> {/* View Link */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 3. Skeleton for Single Product (Product Detail Page)
export const ProductDetailSkeleton = () => {
    return (
        <div className="bg-white py-4 md:py-8">
            <div className="templateContainer grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left Column: Images */}
                <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
                    {/* Thumbnails (Desktop) */}
                    <div className="hidden md:flex flex-col gap-3 w-20">
                        {Array(4).fill(0).map((_, i) => (
                            <Skeleton key={i} width={80} height={80} className="rounded-lg" />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="flex-1 aspect-[4/5] md:h-[600px] w-full rounded-xl overflow-hidden">
                        <Skeleton height="100%" />
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="lg:col-span-5 flex flex-col pt-2">
                    {/* Category */}
                    <Skeleton width={100} height={15} className="mb-2" />

                    {/* Title */}
                    <Skeleton width="80%" height={40} className="mb-2" />

                    {/* Divider */}
                    <div className="my-8">
                        <Skeleton height={1} />
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <Skeleton count={4} />
                    </div>

                    {/* Sizes */}
                    <div className="mb-8">
                        <Skeleton width={50} height={20} className="mb-3" />
                        <div className="flex gap-3">
                            <Skeleton width={80} height={45} className="rounded-lg" />
                            <Skeleton width={80} height={45} className="rounded-lg" />
                        </div>
                    </div>

                    {/* Enquire Buttons */}
                    <div className="mb-10">
                        <Skeleton width={120} height={25} className="mb-4" />
                        <div className="flex gap-4">
                            <Skeleton width={56} height={56} className="rounded-lg" />
                            <Skeleton width={56} height={56} className="rounded-lg" />
                            <Skeleton width={56} height={56} className="rounded-lg" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};