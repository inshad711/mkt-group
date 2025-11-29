// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Heart, Minus, Plus, ChevronDown } from 'lucide-react';

// // Data extracted from your HTML snippet
// const PRODUCT_DATA = {
//     category: "SKIN",
//     title: "Face Toner",
//     price: 69.00,
//     description: "This all natural face toner effectively balances and refreshes the skin, leaving it feeling rejuvenated and revitalized. Formulated with natural ingredients, it gently cleanses and tightens pores for a healthier and more radiant complexion. Clinically proven to provide noticeable results, this toner is a must-have for any skincare routine.",
//     images: [
//         "https://framerusercontent.com/images/PxvRuzUwt40NkSmiLNI1rrsww.jpg",
//         "https://framerusercontent.com/images/V5sK2Rr93Pu0le6vED3i268vB8.jpg",
//         "https://framerusercontent.com/images/mqMc04xOLVx7hSro662BEPYUhc.jpg",
//         "https://framerusercontent.com/images/2q9b5dbTm4I4HKd8kLavq2KwL4.jpg"
//     ],
//     sizes: ["100 ml", "200 ml"],
//     accordions: [
//         {
//             id: "info",
//             title: "Information",
//             content: "Balance and refresh your skin with our Face Toner, an alcohol-free formula that hydrates and preps the skin for better absorption of serums and moisturizers. Infused with witch hazel, green tea extract, and rose water, it refines pores, soothes irritation, and enhances skin’s natural glow. Perfect for all skin types, it provides a burst of hydration while removing residual impurities."
//         },
//         {
//             id: "benefits",
//             title: "Benefits",
//             content: "Balances pH, Refreshes, Hydrates, Preps Skin for Moisturizer"
//         },
//         {
//             id: "ingredients",
//             title: "Ingredients",
//             content: "Water/Aqua/Eau, Hamamelis Virginiana (Witch Hazel) Water, Camellia Sinensis (Green Tea) Leaf Extract, Rosa Damascena Flower Water, Glycerin, Aloe Barbadensis Leaf Juice, Sodium Hyaluronate, Citric Acid, Phenoxyethanol, Sodium Benzoate."
//         }
//     ]
// };

// export default function SingleProduct() {
//     const [selectedSize, setSelectedSize] = useState("100 ml");
//     const [quantity, setQuantity] = useState(1);
//     const [activeImageIndex, setActiveImageIndex] = useState(0);
//     const [openAccordion, setOpenAccordion] = useState<string | null>("ingredients");

//     const handleQuantityChange = (type: 'inc' | 'dec') => {
//         if (type === 'dec' && quantity > 1) setQuantity(quantity - 1);
//         if (type === 'inc') setQuantity(quantity + 1);
//     };

//     const toggleAccordion = (id: string) => {
//         setOpenAccordion(openAccordion === id ? null : id);
//     };

//     return (
//         <div className="min-h-screen bg-white text-gray-900 font-sans p-4 md:p-8 lg:p-12">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

//                 {/* Left Column: Gallery */}
//                 <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
//                     {/* Thumbnails (Desktop: Left, Mobile: Bottom/Hidden depending on pref) */}
//                     <div className="hidden md:flex flex-col gap-3 order-1 md:order-1 w-20">
//                         {PRODUCT_DATA.images.map((img, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setActiveImageIndex(idx)}
//                                 className={`relative w-full aspect-square rounded-lg overflow-hidden border transition-all ${activeImageIndex === idx
//                                     ? 'border-black opacity-100'
//                                     : 'border-transparent opacity-50 hover:opacity-100'
//                                     }`}
//                             >
//                                 <Image
//                                     src={img}
//                                     alt={`Thumbnail ${idx}`}
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </button>
//                         ))}
//                     </div>

//                     {/* Main Image */}
//                     <div className="flex-1 order-2 md:order-2 relative bg-gray-50 rounded-xl overflow-hidden aspect-[4/5] md:aspect-auto">
//                         <Image
//                             src={PRODUCT_DATA.images[activeImageIndex]}
//                             alt="Product Main"
//                             fill
//                             className="object-cover object-center"
//                             priority
//                         />
//                     </div>

//                     {/* Mobile Thumbnails (Optional row) */}
//                     <div className="flex md:hidden gap-2 order-3 overflow-x-auto pb-2">
//                         {PRODUCT_DATA.images.map((img, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setActiveImageIndex(idx)}
//                                 className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border ${activeImageIndex === idx ? 'border-black' : 'border-transparent'
//                                     }`}
//                             >
//                                 <Image src={img} alt="thumb" fill className="object-cover" />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Column: Product Details */}
//                 <div className="lg:col-span-5 flex flex-col pt-2">

//                     {/* Header */}
//                     <div className="flex justify-between items-start mb-2">
//                         <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                             {PRODUCT_DATA.category}
//                         </span>
//                         <button className="text-gray-400 hover:text-black transition-colors">
//                             <Heart className="w-6 h-6" />
//                         </button>
//                     </div>

//                     <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">
//                         {PRODUCT_DATA.title}
//                     </h1>

//                     <p className="text-lg font-medium text-gray-900 mb-8">
//                         ${PRODUCT_DATA.price.toFixed(2)}
//                     </p>

//                     <div className="h-px w-full bg-gray-200 mb-8" />

//                     {/* Description */}
//                     <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
//                         {PRODUCT_DATA.description}
//                     </p>

//                     {/* Variants */}
//                     <div className="mb-8">
//                         <label className="block text-sm font-medium text-gray-900 mb-3">Size</label>
//                         <div className="flex gap-3">
//                             {PRODUCT_DATA.sizes.map((size) => (
//                                 <button
//                                     key={size}
//                                     onClick={() => setSelectedSize(size)}
//                                     className={`px-5 py-3 rounded-lg text-sm font-medium border transition-all ${selectedSize === size
//                                         ? 'border-black bg-white text-black ring-1 ring-black'
//                                         : 'border-gray-200 text-gray-600 hover:border-gray-300'
//                                         }`}
//                                 >
//                                     {size}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Actions: Quantity & Add to Cart */}
//                     <div className="flex gap-4 mb-4 h-12">
//                         {/* Quantity */}
//                         <div className="flex items-center justify-between w-32 border border-gray-200 rounded-lg px-2">
//                             <button
//                                 onClick={() => handleQuantityChange('dec')}
//                                 className={`p-2 transition-colors ${quantity <= 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:text-black'}`}
//                                 disabled={quantity <= 1}
//                             >
//                                 <Minus className="w-4 h-4" />
//                             </button>
//                             <span className="text-sm font-semibold">{quantity}</span>
//                             <button
//                                 onClick={() => handleQuantityChange('inc')}
//                                 className="p-2 text-gray-600 hover:text-black transition-colors"
//                             >
//                                 <Plus className="w-4 h-4" />
//                             </button>
//                         </div>

//                         {/* Add to Cart Button */}
//                         <button className="flex-1 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
//                             Add to cart
//                         </button>
//                     </div>

//                     {/* Shipping Link */}
//                     <div className="mb-10">
//                         <button className="text-sm text-gray-400 hover:text-gray-600 hover:underline transition-colors">
//                             Shipping, Exchange and Returns
//                         </button>
//                     </div>

//                     {/* Accordions */}
//                     <div className="border-t border-gray-200">
//                         {PRODUCT_DATA.accordions.map((item) => {
//                             const isOpen = openAccordion === item.id;
//                             return (
//                                 <div key={item.id} className="border-b border-gray-200">
//                                     <button
//                                         onClick={() => toggleAccordion(item.id)}
//                                         className="w-full py-5 flex justify-between items-center text-left group"
//                                     >
//                                         <span className="text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
//                                             {item.title}
//                                         </span>
//                                         <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
//                                             {/* Using standard chevron, or you can use Plus/Minus logic if preferred */}
//                                             <ChevronDown className="w-4 h-4 text-gray-400" />
//                                         </div>
//                                     </button>
//                                     <div
//                                         className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'
//                                             }`}
//                                     >
//                                         <p className="text-sm text-gray-600 leading-relaxed">
//                                             {item.content}
//                                         </p>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }



// D:\mktgroup\app\components\SingleProduct.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Minus, Plus, ChevronDown } from 'lucide-react';

// Data extracted from your video/snippet
// const PRODUCT_DATA = {
//     category: "SKIN",
//     title: "Hair Hydrator",
//     price: 69.00,
//     description: "This all natural face toner effectively balances and refreshes the skin, leaving it feeling rejuvenated and revitalized. Formulated with natural ingredients, it gently cleanses and tightens pores for a healthier and more radiant complexion. Clinically proven to provide noticeable results, this toner is a must-have for any skincare routine.",
//     images: [
//         "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
//         "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
//         "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
//         "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png"
//     ],
//     sizes: ["100 ml", "200 ml"],
//     accordions: [
//         {
//             id: "info",
//             title: "Information",
//             content: "Balance and refresh your skin with our Face Toner, an alcohol-free formula that hydrates and preps the skin for better absorption of serums and moisturizers. Infused with witch hazel, green tea extract, and rose water, it refines pores, soothes irritation, and enhances skin’s natural glow. Perfect for all skin types, it provides a burst of hydration while removing residual impurities."
//         },
//         {
//             id: "benefits",
//             title: "Benefits",
//             content: "Balances pH, Refreshes, Hydrates, Preps Skin for Moisturizer"
//         },
//         {
//             id: "ingredients",
//             title: "Ingredients",
//             content: "Water/Aqua/Eau, Hamamelis Virginiana (Witch Hazel) Water, Camellia Sinensis (Green Tea) Leaf Extract, Rosa Damascena Flower Water, Glycerin, Aloe Barbadensis Leaf Juice, Sodium Hyaluronate, Citric Acid, Phenoxyethanol, Sodium Benzoate."
//         }
//     ]
// };

const PRODUCT_DATA = {
    category: "HOUSEHOLD CLEANING",
    title: "Harpic Power Plus 10X Toilet Cleaner",
    price: 3.50, // Example price
    description: "Harpic Power Plus 10X is a powerful toilet cleaner that kills 99.9% of germs and removes tough stains, leaving your toilet sparkling clean and fresh. Its unique formula is 10 times better than ordinary cleaners for a superior clean.",
    images: [
        "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
        "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
        "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
        "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png"
    ],
    sizes: ["500 ml", "750 ml", "1 L"],
    accordions: [
        {
            id: "info",
            title: "Product Information",
            content: "Harpic Power Plus 10X is a one-stop solution for all your toilet cleaning needs. It gives you 10 times better cleaning benefits versus ordinary cleaners: 1. Tough Stain Removal 2. 99.9% Germ Kill 3. Malodor Control 4. Sparkling Clean Toilet 5. Better Viscosity 6. Faster Action 7. Easy to Use 8. Longer Shelf Life 9. Kills Disease Causing Bacteria 10. Removes Yellowish Stains."
        },
        {
            id: "benefits",
            title: "Key Benefits",
            content: "Kills 99.9% of germs, Removes tough stains, Leaves a fresh fragrance, 10X superior cleaning power."
        },
        {
            id: "ingredients",
            title: "Ingredients",
            content: "Hydrochloric Acid 10.5% w/w, Hydroxy Ethyl Oleyl Amine, Alkyl Trimethyl Ammonium Chloride, Methyl Salicylate, De-ionized Water."
        }
    ]
};

export default function SingleProduct() {
    const [selectedSize, setSelectedSize] = useState("100 ml");
    const [quantity, setQuantity] = useState(1);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [openAccordion, setOpenAccordion] = useState<string | null>("ingredients");

    const handleQuantityChange = (type: 'inc' | 'dec') => {
        if (type === 'dec' && quantity > 1) setQuantity(quantity - 1);
        if (type === 'inc') setQuantity(quantity + 1);
    };

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="bg-white text-gray-900 py-4 md:py-8 lg:py-12">

            <div className="templateContainer grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left Column: Gallery 
          sticky top-8: Makes the entire gallery stick to the top of the screen when scrolling.
        */}
                <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 lg:sticky lg:top-8">

                    {/* Thumbnails */}
                    <div className="hidden md:flex flex-col gap-3 order-1 md:order-1 w-20">
                        {PRODUCT_DATA.images.map((img, idx) => (
                            <div
                                key={idx}
                                // Changed to onMouseEnter for hover effect
                                onMouseEnter={() => setActiveImageIndex(idx)}
                                className={`relative w-full aspect-square rounded-lg overflow-hidden border cursor-pointer transition-all duration-200 ${activeImageIndex === idx
                                    ? 'border-black opacity-100 ring-1 ring-black'
                                    : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${idx}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Image */}
                    {/* Added h-[600px] to enforce a fixed height so it doesn't jump around */}
                    <div className="flex-1 order-2 md:order-2 relative bg-[#F4F4F4] rounded-xl overflow-hidden aspect-[4/5] md:h-[600px] w-full">
                        <Image
                            src={PRODUCT_DATA.images[activeImageIndex]}
                            alt="Product Main"
                            fill
                            className="object-cover object-center transition-opacity duration-300 ease-in-out"
                            priority
                        />
                    </div>

                    {/* Mobile Thumbnails */}
                    <div className="flex md:hidden gap-2 order-3 overflow-x-auto pb-2 no-scrollbar">
                        {PRODUCT_DATA.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImageIndex(idx)}
                                className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border ${activeImageIndex === idx ? 'border-black' : 'border-transparent'
                                    }`}
                            >
                                <Image src={img} alt="thumb" fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Product Details */}
                <div className="lg:col-span-5 flex flex-col pt-2">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {PRODUCT_DATA.category}
                        </span>

                    </div>

                    <h1 className="text-[32px] font-normal tracking-normal text-gray-900 mb-2">
                        {PRODUCT_DATA.title}
                    </h1>

                    <p className="text-lg font-medium text-gray-900 mb-8">
                        ${PRODUCT_DATA.price.toFixed(2)}
                    </p>

                    <div className="h-px w-full bg-gray-200 mb-8" />

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                        {PRODUCT_DATA.description}
                    </p>

                    {/* Variants */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-900 mb-3">Size</label>
                        <div className="flex gap-3">
                            {PRODUCT_DATA.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-5 py-3 rounded-lg text-sm font-medium border transition-all ${selectedSize === size
                                        ? 'border-gray-200 bg-white text-black ring-1 ring-black shadow-sm'
                                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>





                    {/* Accordions */}
                    <div className="border-t border-gray-200">
                        {PRODUCT_DATA.accordions.map((item) => {
                            const isOpen = openAccordion === item.id;
                            return (
                                <div key={item.id} className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full py-5 flex justify-between items-center text-left group"
                                    >
                                        <span className="text-sm font-medium text-gray-500 group-hover:text-black transition-colors">
                                            {item.title}
                                        </span>
                                        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                            {/* Switched to Plus/Minus icon to match video exactly if needed, but chevron is standard. 
                            If you want Plus/Minus like typical Accordions: */}
                                            {isOpen ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-gray-400" />}
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}