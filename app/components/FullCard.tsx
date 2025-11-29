// import React from 'react';
// import Image from 'next/image';
// import { Heart } from 'lucide-react';

// // 1. Define the interface for Type Safety
// interface Product {
//     id: number;
//     name: string;
//     category: string;
//     price: number;
//     originalPrice?: number;
//     discountBadge?: string;
//     imageUrl: string;
// }

// // 2. Mock Data (Images extracted from your provided snippet)
// const products: Product[] = [
//     {
//         id: 1,
//         name: 'Hair Hydrator',
//         category: 'HAIR',
//         price: 89.00,
//         imageUrl: 'https://framerusercontent.com/images/haTPDEBDjcCQE1YvU4EI6E9Hs.jpg',
//     },
//     {
//         id: 2,
//         name: 'Eye Serum',
//         category: 'BODY',
//         price: 79.00,
//         imageUrl: 'https://framerusercontent.com/images/tLWQUQ7LXVGayExnXkaLg7unZQ4.jpg',
//     },
//     {
//         id: 3,
//         name: 'Face Toner',
//         category: 'SKIN',
//         price: 69.00,
//         imageUrl: 'https://framerusercontent.com/images/PxvRuzUwt40NkSmiLNI1rrsww.jpg',
//     },
//     {
//         id: 4,
//         name: 'Eye Repair',
//         category: 'BODY',
//         price: 63.20,
//         originalPrice: 79.00,
//         discountBadge: '-20%',
//         imageUrl: 'https://framerusercontent.com/images/DD0hW7OaQsoVyuTn3q354thdfWA.jpg',
//     },
// ];

// const FullCard = () => {
//     return (
//         <section className="max-w-7xl mx-auto px-4 py-12 font-sans">
//             {/* --- Header Section --- */}
//             <div className="flex flex-col md:flex-row justify-between items-end mb-8">
//                 <div className="flex space-x-6 text-xl">
//                     <button className="font-semibold text-black">Trending</button>
//                     <button className="text-gray-400 hover:text-black transition-colors">Bestsellers</button>
//                     <button className="text-gray-400 hover:text-black transition-colors">Kits</button>
//                 </div>

//                 <a href="#" className="group flex flex-col items-start mt-4 md:mt-0">
//                     <span className="text-sm font-medium text-black">Shop all</span>
//                     <span className="h-[1px] w-full bg-black mt-0.5 group-hover:w-full transition-all duration-300"></span>
//                 </a>
//             </div>

//             {/* --- Product Grid --- */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>
//         </section>
//     );
// };

// // 3. Reusable Product Card Component
// const ProductCard = ({ product }: { product: Product }) => {
//     return (
//         <div className="group cursor-pointer flex flex-col gap-3">
//             {/* Image Container */}
//             <div className="relative aspect-[4/5] bg-[#F4F4F4] rounded-lg overflow-hidden">
//                 {/* Discount Badge */}
//                 {product.discountBadge && (
//                     <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded text-[10px] font-bold text-red-600 z-10 shadow-sm">
//                         {product.discountBadge}
//                     </div>
//                 )}

//                 {/* Wishlist Icon */}
//                 <button className="absolute top-3 right-3 z-10 p-1 rounded-full hover:bg-white/50 transition-colors">
//                     <Heart className="w-5 h-5 text-gray-400 hover:text-black transition-colors" />
//                 </button>

//                 {/* Product Image */}
//                 <div className="relative w-full h-full p-6 flex items-center justify-center">
//                     {/* Note: In a real Next.js app, configure 'framerusercontent.com' in next.config.js */}
//                     <Image
//                         src={product.imageUrl}
//                         alt={product.name}
//                         fill
//                         className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
//                     />
//                 </div>
//             </div>

//             {/* Product Details */}
//             <div className="space-y-1">
//                 <div className="flex justify-between items-baseline">
//                     <h3 className="text-[15px] font-medium text-gray-900">{product.name}</h3>

//                     {/* Price Logic */}
//                     <div className="text-right">
//                         {product.originalPrice ? (
//                             <div className="flex flex-col items-end">
//                                 <span className="text-[13px] text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
//                                 <span className="text-[13px] font-medium text-black">${product.price.toFixed(2)}</span>
//                             </div>
//                         ) : (
//                             <span className="text-[13px] font-medium text-black">${product.price.toFixed(2)}</span>
//                         )}
//                     </div>
//                 </div>

//                 <p className="text-[11px] uppercase tracking-wide text-gray-500 font-medium">
//                     {product.category}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default FullCard;


// import React from 'react';
// import Image from 'next/image';
// import { Heart } from 'lucide-react';

// // 1. Data Structure based on your HTML snippet
// const products = [
//     {
//         id: 1,
//         title: 'Hair Hydrator',
//         category: 'HAIR',
//         price: 89.00,
//         originalPrice: null,
//         image: 'https://framerusercontent.com/images/haTPDEBDjcCQE1YvU4EI6E9Hs.jpg',
//         discount: null,
//     },
//     {
//         id: 2,
//         title: 'Eye Serum',
//         category: 'BODY',
//         price: 79.00,
//         originalPrice: null,
//         image: 'https://framerusercontent.com/images/tLWQUQ7LXVGayExnXkaLg7unZQ4.jpg',
//         discount: null,
//     },
//     {
//         id: 3,
//         title: 'Face Toner',
//         category: 'SKIN',
//         price: 69.00,
//         originalPrice: null,
//         image: 'https://framerusercontent.com/images/PxvRuzUwt40NkSmiLNI1rrsww.jpg',
//         discount: null,
//     },
//     {
//         id: 4,
//         title: 'Eye Repair',
//         category: 'BODY',
//         price: 63.20,
//         originalPrice: 79.00, // This triggers the strikethrough logic
//         image: 'https://framerusercontent.com/images/DD0hW7OaQsoVyuTn3q354thdfWA.jpg',
//         discount: '-20%', // This triggers the badge
//     },
// ];

// const TrendingSection = () => {
//     return (
//         <section className="w-full max-w-7xl mx-auto px-6 py-12 font-sans">

//             {/* 2. Header Section (Tabs + Shop All) */}
//             <div className="flex flex-row justify-between items-baseline mb-8 border-b border-transparent">
//                 <div className="flex items-baseline gap-6">
//                     <button className="text-2xl font-medium text-black cursor-pointer">
//                         Trending
//                     </button>
//                     <button className="text-2xl font-medium text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
//                         Bestsellers
//                     </button>
//                     <button className="text-2xl font-medium text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
//                         Kits
//                     </button>
//                 </div>

//                 <a href="/all" className="hidden sm:block text-sm font-medium text-black underline underline-offset-4 hover:text-gray-600">
//                     Shop all
//                 </a>
//             </div>

//             {/* 3. Product Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>

//             {/* Mobile "Shop all" (optional, shows at bottom on small screens) */}
//             <div className="mt-8 sm:hidden flex justify-center">
//                 <a href="/all" className="text-sm font-medium text-black underline underline-offset-4">
//                     Shop all
//                 </a>
//             </div>
//         </section>
//     );
// };

// // 4. Individual Product Card Component
// const ProductCard = ({ product }: { product: typeof products[0] }) => {
//     return (
//         <div className="group flex flex-col gap-3 cursor-pointer">

//             {/* Image Container */}
//             <div className="relative w-full aspect-[4/5] bg-[#F4F4F4] rounded-xl overflow-hidden">

//                 {/* Discount Badge */}
//                 {product.discount && (
//                     <div className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded-md shadow-sm">
//                         <span className="text-[11px] font-medium text-red-600">
//                             {product.discount}
//                         </span>
//                     </div>
//                 )}

//                 {/* Favorite Icon */}
//                 <button className="absolute top-3 right-3 z-10 p-1 text-gray-400 hover:text-red-500 transition-colors">
//                     <Heart className="w-5 h-5" />
//                 </button>

//                 {/* Product Image */}
//                 <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
//                     {/* Using regular img tag here to use the external URLs directly without Next.js config setup. 
//                In production, use <Image /> component. */}
//                     <img
//                         src={product.image}
//                         alt={product.title}
//                         className="w-full h-full object-cover object-center mix-blend-multiply"
//                     />
//                 </div>
//             </div>

//             {/* Product Details */}
//             <div className="flex justify-between items-end px-1">
//                 <div className="flex flex-col gap-1">
//                     <h3 className="text-[15px] font-medium text-gray-900 leading-tight">
//                         {product.title}
//                     </h3>
//                     <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">
//                         {product.category}
//                     </p>
//                 </div>

//                 <div className="text-right">
//                     {product.originalPrice ? (
//                         <div className="flex flex-col items-end">
//                             <span className="text-[13px] text-gray-400 line-through decoration-gray-400">
//                                 ${product.originalPrice.toFixed(2)}
//                             </span>
//                             <span className="text-[13px] font-medium text-black">
//                                 ${product.price.toFixed(2)}
//                             </span>
//                         </div>
//                     ) : (
//                         <span className="text-[13px] font-medium text-black">
//                             ${product.price.toFixed(2)}
//                         </span>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TrendingSection;



// D:\mktgroup\app\components\FullCard.tsx
import React from 'react';
import { Heart } from 'lucide-react';

// 1. Updated Data Structure with 'hoverImage' URLs extracted from your HTML
const products = [
    {
        id: 1,
        title: 'Ariel',
        category: 'Household',
        price: 89.00,
        originalPrice: null,
        image: '/houseclean/Gemini_Generated_Image_wi1zz9wi1zz9wi1z.png',
        hoverImage: '/dummy-image/images.jpg',
        discount: null,
    },
    {
        id: 2,
        title: 'Ariel',
        category: 'Household',
        price: 79.00,
        originalPrice: null,
        image: '/houseclean/Gemini_Generated_Image_j6xodxj6xodxj6xo.png',
        hoverImage: '/dummy-image/images.jpg',
        discount: null,
    },
    {
        id: 3,
        title: 'Ariel',
        category: 'Household',
        price: 69.00,
        originalPrice: null,
        image: '/houseclean/Gemini_Generated_Image_6wxkh6wxkh6wxkh6.png',
        hoverImage: '/dummy-image/images.jpg',
        discount: null,
    },
    {
        id: 4,
        title: 'Ariel',
        category: 'Household',
        price: 63.20,
        originalPrice: 79.00,
        image: '/houseclean/ChatGPT Image Nov 29, 2025, 11_12_24 AM.png',
        hoverImage: '/dummy-image/images.jpg',
        discount: '-20%',
    },
];

const FullCard = () => {
    return (
        <section className="w-full templateContainer px-6 py-12">

            {/* Header Section */}
            <div className="flex flex-row justify-between items-baseline mb-8 border-b border-transparent">
                <div className="flex items-baseline gap-6">
                    <button className="text-2xl font-medium text-black cursor-pointer">
                        Trending
                    </button>
                    <button className="text-xl md:text-2xl font-medium text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                        Bestsellers
                    </button>

                </div>

                <a href="/all" className="hidden sm:block text-sm font-medium text-black underline underline-offset-4 hover:text-gray-600">
                    Shop all
                </a>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-8 sm:hidden flex justify-center">
                <a href="/all" className="text-sm font-medium text-black underline underline-offset-4">
                    Shop all
                </a>
            </div>
        </section>
    );
};

// 2. Updated Component with Hover Logic
const ProductCard = ({ product }: { product: typeof products[0] }) => {
    return (
        <div className="group  flex flex-col gap-3 cursor-pointer">

            {/* Image Container with Hover Swap */}
            <div className="relative w-full aspect-[4/5] bg-[#F4F4F4] rounded-[5px] overflow-hidden">

                {/* Discount Badge */}
                {product.discount && (
                    <div className="absolute top-3 left-3 z-20 bg-white px-2 py-1 rounded-md shadow-sm">
                        <span className="text-[11px] font-medium text-red-600">
                            {product.discount}
                        </span>
                    </div>
                )}

                {/* Favorite Icon */}
                {/* <button className="absolute top-3 right-3 z-20 p-1 text-gray-400 hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5" />
                </button> */}

                {/* Main Product Image (Visible by default, fades out on hover) */}
                <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover object-center mix-blend-multiply"
                    />
                </div>


                {/* We add scale-110 to give it that slight zoom effect from the video */}
                <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
                    <img
                        src={product.hoverImage}
                        alt={`${product.title} texture`}
                        className="w-full h-full object-cover object-center mix-blend-multiply"
                    />
                </div>
            </div>

            {/* Product Details with "Quick Add" Animation */}
            <div className="flex justify-between items-end px-1 h-10">
                <div className="flex flex-col gap-1">
                    <h3 className="text-[11px] md:text-[15px] font-medium text-gray-900 leading-tight">
                        {product.title}
                    </h3>
                    <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">
                        {product.category}
                    </p>
                </div>

                {/* Price / Quick Add Swap Area */}
                <div className="relative h-5 overflow-hidden w-24 text-right">

                    {/* Price: Slides up on hover */}
                    <div className="absolute right-0 bottom-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full flex flex-col items-end">
                        {product.originalPrice ? (
                            <>
                                <span className="text-[13px] text-gray-400 line-through decoration-gray-400 mr-1">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                                <span className="text-[13px] font-medium text-black">
                                    ${product.price.toFixed(2)}
                                </span>
                            </>
                        ) : (
                            <span className="text-[13px] font-medium text-black">
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                    </div>

                    {/* Quick Add: Slides in from bottom on hover */}
                    <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                        <span className="text-[13px] font-bold text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
                            QUICK ADD
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FullCard;