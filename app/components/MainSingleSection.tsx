

// // D:\mktgroup\app\components\MainSingleSection.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Heart, Minus, Plus, ChevronDown } from 'lucide-react';


// const PRODUCT_DATA = {
//     category: "HOUSEHOLD CLEANING",
//     title: "Harpic Power Plus 10X Toilet Cleaner",
//     price: 3.50, // Example price
//     description: "Harpic Power Plus 10X is a powerful toilet cleaner that kills 99.9% of germs and removes tough stains, leaving your toilet sparkling clean and fresh. Its unique formula is 10 times better than ordinary cleaners for a superior clean.",
//     images: [
//         "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
//         "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
//         "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png",
//         "/dummy-image/Gemini_Generated_Image_w2e04qw2e04qw2e0.png"
//     ],
//     sizes: ["500 ml", "750 ml", "1 L"],
//     accordions: [
//         {
//             id: "info",
//             title: "Product Information",
//             content: "Harpic Power Plus 10X is a one-stop solution for all your toilet cleaning needs. It gives you 10 times better cleaning benefits versus ordinary cleaners: 1. Tough Stain Removal 2. 99.9% Germ Kill 3. Malodor Control 4. Sparkling Clean Toilet 5. Better Viscosity 6. Faster Action 7. Easy to Use 8. Longer Shelf Life 9. Kills Disease Causing Bacteria 10. Removes Yellowish Stains."
//         },
//         {
//             id: "benefits",
//             title: "Key Benefits",
//             content: "Kills 99.9% of germs, Removes tough stains, Leaves a fresh fragrance, 10X superior cleaning power."
//         },
//         {
//             id: "ingredients",
//             title: "Ingredients",
//             content: "Hydrochloric Acid 10.5% w/w, Hydroxy Ethyl Oleyl Amine, Alkyl Trimethyl Ammonium Chloride, Methyl Salicylate, De-ionized Water."
//         }
//     ]
// };

// export default function MainSingleSection() {
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
//         <div className="bg-white text-gray-900 py-4 md:py-8 lg:py-12">

//             <div className="templateContainer grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

//                 {/* Left Column: Gallery 
//           sticky top-8: Makes the entire gallery stick to the top of the screen when scrolling.
//         */}
//                 <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 lg:sticky lg:top-8">

//                     {/* Thumbnails */}
//                     <div className="hidden md:flex flex-col gap-3 order-1 md:order-1 w-20">
//                         {PRODUCT_DATA.images.map((img, idx) => (
//                             <div
//                                 key={idx}
//                                 // Changed to onMouseEnter for hover effect
//                                 onMouseEnter={() => setActiveImageIndex(idx)}
//                                 className={`relative w-full aspect-square rounded-lg overflow-hidden border cursor-pointer transition-all duration-200 ${activeImageIndex === idx
//                                     ? 'border-black opacity-100 ring-1 ring-black'
//                                     : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
//                                     }`}
//                             >
//                                 <Image
//                                     src={img}
//                                     alt={`Thumbnail ${idx}`}
//                                     fill
//                                     className="object-cover"
//                                 />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Main Image */}
//                     {/* Added h-[600px] to enforce a fixed height so it doesn't jump around */}
//                     <div className="flex-1 order-2 md:order-2 relative bg-[#F4F4F4] rounded-xl overflow-hidden aspect-[4/5] md:h-[600px] w-full">
//                         <Image
//                             src={PRODUCT_DATA.images[activeImageIndex]}
//                             alt="Product Main"
//                             fill
//                             className="object-cover object-center transition-opacity duration-300 ease-in-out"
//                             priority
//                         />
//                     </div>

//                     {/* Mobile Thumbnails */}
//                     <div className="flex md:hidden gap-2 order-3 overflow-x-auto pb-2 no-scrollbar">
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

//                     </div>

//                     <h1 className="text-[32px] font-normal tracking-normal text-gray-900 mb-2">
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
//                                         ? 'border-gray-200 bg-white text-black ring-1 ring-black shadow-sm'
//                                         : 'border-gray-200 text-gray-600 hover:border-gray-300'
//                                         }`}
//                                 >
//                                     {size}
//                                 </button>
//                             ))}
//                         </div>
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
//                                             {/* Switched to Plus/Minus icon to match video exactly if needed, but chevron is standard. 
//                             If you want Plus/Minus like typical Accordions: */}
//                                             {isOpen ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-gray-400" />}
//                                         </div>
//                                     </button>
//                                     <div
//                                         className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'
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


// // D:\mktgroup\app\components\MainSingleSection.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Minus, Plus } from 'lucide-react'; // Removed ChevronDown if not used


// interface MainSingleSectionProps {
//     category: string;
//     title: string;
//     price: number;
//     description: string;
//     images: string[];
//     sizes: string[];
//     accordions: Array<{
//         id: string;
//         title: string;
//         content: string;
//     }>;
// }

// export default function MainSingleSection({
//     category,
//     title,

//     description,
//     images,
//     sizes,
//     accordions,
// }: MainSingleSectionProps) {
//     const [selectedSize, setSelectedSize] = useState(sizes[0] || ''); // Default to first size

//     const [activeImageIndex, setActiveImageIndex] = useState(0);
//     const [openAccordion, setOpenAccordion] = useState<string | null>(accordions[0]?.id || null); // Default to first accordion



//     const toggleAccordion = (id: string) => {
//         setOpenAccordion(openAccordion === id ? null : id);
//     };

//     return (
//         <div className="bg-white text-gray-900 py-4 md:py-8 lg:pt-52">
//             <div className="templateContainer grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//                 {/* Left Column: Gallery */}
//                 <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 lg:sticky lg:top-8">
//                     {/* Thumbnails */}
//                     <div className="hidden md:flex flex-col gap-3 order-1 md:order-1 w-20">
//                         {images.map((img, idx) => (
//                             <div
//                                 key={idx}
//                                 onMouseEnter={() => setActiveImageIndex(idx)}
//                                 className={`relative w-full aspect-square rounded-lg overflow-hidden border cursor-pointer transition-all duration-200 ${activeImageIndex === idx
//                                     ? 'border-black opacity-100 ring-1 ring-black'
//                                     : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
//                                     }`}
//                             >
//                                 <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" unoptimized />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Main Image */}
//                     <div className="flex-1 order-2 md:order-2 relative bg-[#F4F4F4] rounded-xl overflow-hidden aspect-[4/5] md:h-[600px] w-full">
//                         <Image
//                             src={images[activeImageIndex]}
//                             alt={`${title} main image`}
//                             fill
//                             className="object-cover object-center transition-opacity duration-300 ease-in-out"
//                             priority
//                             unoptimized // For external URLs
//                         />
//                     </div>

//                     {/* Mobile Thumbnails */}
//                     <div className="flex md:hidden gap-2 order-3 overflow-x-auto pb-2 no-scrollbar">
//                         {images.map((img, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setActiveImageIndex(idx)}
//                                 className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border ${activeImageIndex === idx ? 'border-black' : 'border-transparent'
//                                     }`}
//                             >
//                                 <Image src={img} alt="Thumbnail" fill className="object-cover" unoptimized />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Column: Product Details */}
//                 <div className="lg:col-span-5 flex flex-col pt-2">
//                     {/* Header */}
//                     <div className="flex justify-between items-start mb-2">
//                         <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                             {category}
//                         </span>
//                     </div>

//                     <h1 className="text-[32px] font-normal tracking-normal text-gray-900 mb-2">{title}</h1>

//                     <div className="h-px w-full bg-gray-200 mb-8" />

//                     {/* Description */}
//                     <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">{description}</p>

//                     {/* Variants (Sizes) */}
//                     {sizes.length > 0 && (
//                         <div className="mb-8">
//                             <label className="block text-sm font-medium text-gray-900 mb-3">Size</label>
//                             <div className="flex gap-3">
//                                 {sizes.map((size) => (
//                                     <button
//                                         key={size}
//                                         onClick={() => setSelectedSize(size)}
//                                         className={`px-5 py-3 rounded-lg text-sm font-medium border transition-all ${selectedSize === size
//                                             ? 'border-gray-200 bg-white text-black ring-1 ring-black shadow-sm'
//                                             : 'border-gray-200 text-gray-600 hover:border-gray-300'
//                                             }`}
//                                     >
//                                         {size}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}




//                     {/* Accordions */}
//                     <div className="border-t border-gray-200">
//                         {accordions.map((item) => {
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
//                                             {isOpen ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-gray-400" />}
//                                         </div>
//                                     </button>
//                                     <div
//                                         className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'
//                                             }`}
//                                     >
//                                         <p className="text-sm text-gray-600 leading-relaxed px-2">{item.content}</p>
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


//////////////////////////////////////


// // D:\mktgroup\app\components\MainSingleSection.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Minus, Plus } from 'lucide-react';


// interface MainSingleSectionProps {
//     category: string;
//     title: string;

//     description: string;
//     images: string[];
//     sizes: string[];
//     accordions: Array<{
//         id: string;
//         title: string;
//         content: string;
//     }>;
// }

// export default function MainSingleSection({
//     category,
//     title,

//     description,
//     images,
//     sizes,
//     accordions,
// }: MainSingleSectionProps) {
//     const [selectedSize, setSelectedSize] = useState(sizes[0] || ''); // Default to first size

//     const [activeImageIndex, setActiveImageIndex] = useState(0);
//     const [openAccordion, setOpenAccordion] = useState<string | null>(accordions[0]?.id || null); // Default to first accordion



//     const toggleAccordion = (id: string) => {
//         setOpenAccordion(openAccordion === id ? null : id);
//     };

//     return (
//         <div className="bg-white text-gray-900 py-4 md:py-8 lg:pt-52">
//             <div className="templateContainer grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//                 {/* Left Column: Gallery */}
//                 <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 lg:sticky lg:top-8">
//                     {/* Thumbnails */}
//                     <div className="hidden md:flex flex-col gap-3 order-1 md:order-1 w-20">
//                         {images.map((img, idx) => (
//                             <div
//                                 key={idx}
//                                 onMouseEnter={() => setActiveImageIndex(idx)}
//                                 className={`relative w-full aspect-square rounded-lg overflow-hidden border cursor-pointer transition-all duration-200 ${activeImageIndex === idx
//                                     ? 'border-black opacity-100 ring-1 ring-black'
//                                     : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
//                                     }`}
//                             >
//                                 <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" unoptimized />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Main Image */}
//                     <div className="flex-1 order-2 md:order-2 relative bg-[#F4F4F4] rounded-xl overflow-hidden aspect-[4/5] md:h-[600px] w-full">
//                         <Image
//                             src={images[activeImageIndex]}
//                             alt={`${title} main image`}
//                             fill
//                             className="object-cover object-center transition-opacity duration-300 ease-in-out"
//                             priority
//                             unoptimized // For external URLs
//                         />
//                     </div>

//                     {/* Mobile Thumbnails */}
//                     <div className="flex md:hidden gap-2 order-3 overflow-x-auto pb-2 no-scrollbar">
//                         {images.map((img, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setActiveImageIndex(idx)}
//                                 className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border ${activeImageIndex === idx ? 'border-black' : 'border-transparent'
//                                     }`}
//                             >
//                                 <Image src={img} alt="Thumbnail" fill className="object-cover" unoptimized />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Column: Product Details */}
//                 <div className="lg:col-span-5 flex flex-col pt-2">
//                     {/* Header */}
//                     <div className="flex justify-between items-start mb-2">
//                         <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                             {category}
//                         </span>
//                     </div>

//                     <h1 className="text-[32px] font-normal tracking-normal text-gray-900 mb-2">{title}</h1>


//                     {/* END ADDED PRICE DISPLAY */}

//                     <div className="h-px w-full bg-gray-200 mb-8" />

//                     {/* Description */}
//                     <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">{description}</p>

//                     {/* Variants (Sizes) */}
//                     {sizes.length > 0 && (
//                         <div className="mb-8">
//                             <label className="block text-sm font-medium text-gray-900 mb-3">Size</label>
//                             <div className="flex gap-3">
//                                 {sizes.map((size) => (
//                                     <button
//                                         key={size}
//                                         onClick={() => setSelectedSize(size)}
//                                         className={`px-5 py-3 rounded-lg text-sm font-medium border transition-all ${selectedSize === size
//                                             ? 'border-gray-200 bg-white text-black ring-1 ring-black shadow-sm'
//                                             : 'border-gray-200 text-gray-600 hover:border-gray-300'
//                                             }`}
//                                     >
//                                         {size}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}

//                     {/* Enquire Now  */}

//                     {/* Accordions */}
//                     <div className="border-t border-gray-200 cursor-pointer">
//                         {accordions.map((item) => {
//                             const isOpen = openAccordion === item.id;
//                             return (
//                                 <div key={item.id} className="border-b  border-gray-200">
//                                     <button
//                                         onClick={() => toggleAccordion(item.id)}
//                                         className="w-full py-5 flex justify-between items-center text-left group"
//                                     >
//                                         <span className="text-sm cursor-pointer font-medium text-gray-500 group-hover:text-black transition-colors">
//                                             {item.title}
//                                         </span>
//                                         <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
//                                             {isOpen ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-gray-400" />}
//                                         </div>
//                                     </button>
//                                     <div
//                                         className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'
//                                             }`}
//                                     >
//                                         <p className="text-sm text-gray-600 leading-relaxed px-2">{item.content}</p>
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


// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Minus, Plus, Mail, Phone, MessageCircle } from 'lucide-react'; // Added icons

// // Define structure for contact info
// interface ContactInfo {
//     whatsappNumber: string;
//     emailAddress: string;
//     phoneNumber: string;
// }

// interface MainSingleSectionProps {
//     category: string;
//     title: string;
//     description: string;
//     images: string[];
//     sizes: string[];
//     accordions: Array<{
//         id: string;
//         title: string;
//         content: string;
//     }>;
//     contactInfo: ContactInfo; // ADDED
// }

// // Component for the Enquire Now section
// const EnquireNowSection = ({ title, contactInfo }: { title: string, contactInfo: ContactInfo }) => {
//     // Generate Pre-filled Message for WhatsApp/Email
//     const defaultMessage = `Hello, I'm interested in the product: ${title}. Could you please share more details?`;
//     const encodedMessage = encodeURIComponent(defaultMessage);

//     // WhatsApp Link (remove non-digits from number)
//     const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`;

//     // Email Link
//     const emailLink = `mailto:${contactInfo.emailAddress}?subject=Inquiry%20about%20${encodeURIComponent(title)}&body=${encodedMessage}`;

//     // Phone Link
//     const phoneLink = `tel:${contactInfo.phoneNumber}`;


//     return (
//         <div className=" mb-10">
//             <h2 className="text-xl font-normal text-[#D4AF37] mb-4 inline-block after:content-[''] after:block after:h-[1px] after:w-16 after:bg-gray-300">
//                 Enquire Now
//             </h2>
//             <div className="flex gap-4">
//                 {/* Email Icon */}
//                 <a
//                     href={emailLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
//                     aria-label={`Enquire about ${title} via email`}
//                 >
//                     <Mail className="w-7 h-7 text-white" />
//                 </a>

//                 {/* WhatsApp Icon */}
//                 <a
//                     href={whatsappLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
//                     aria-label={`Enquire about ${title} via WhatsApp`}
//                 >
//                     <MessageCircle className="w-7 h-7 text-white" />
//                 </a>

//                 {/* Phone Icon */}
//                 <a
//                     href={phoneLink}
//                     className="w-14 h-14 bg-gray-500 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
//                     aria-label={`Call to enquire about ${title}`}
//                 >
//                     <Phone className="w-7 h-7 text-white" />
//                 </a>
//             </div>
//         </div>
//     );
// };


// export default function MainSingleSection({
//     category,
//     title,
//     description,
//     images,
//     sizes,
//     accordions,
//     contactInfo, // DESTRUCTURED
// }: MainSingleSectionProps) {
//     const [selectedSize, setSelectedSize] = useState(sizes[0] || ''); // Default to first size

//     const [activeImageIndex, setActiveImageIndex] = useState(0);
//     const [openAccordion, setOpenAccordion] = useState<string | null>(accordions[0]?.id || null); // Default to first accordion



//     const toggleAccordion = (id: string) => {
//         setOpenAccordion(openAccordion === id ? null : id);
//     };

//     return (
//         <div className="bg-white text-gray-900 py-4 md:py-8 lg:pt-52">
//             <div className="templateContainer grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//                 {/* Left Column: Gallery (No change here) */}
//                 <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 lg:sticky lg:top-8">
//                     {/* Thumbnails */}
//                     <div className="hidden md:flex flex-col gap-3 order-1 md:order-1 w-20">
//                         {images.map((img, idx) => (
//                             <div
//                                 key={idx}
//                                 onMouseEnter={() => setActiveImageIndex(idx)}
//                                 className={`relative w-full aspect-square rounded-lg overflow-hidden border cursor-pointer transition-all duration-200 ${activeImageIndex === idx
//                                     ? 'border-black opacity-100 ring-1 ring-black'
//                                     : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
//                                     }`}
//                             >
//                                 <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" unoptimized />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Main Image */}
//                     <div className="flex-1 order-2 md:order-2 relative bg-[#F4F4F4] rounded-xl overflow-hidden aspect-[4/5] md:h-[600px] w-full">
//                         <Image
//                             src={images[activeImageIndex]}
//                             alt={`${title} main image`}
//                             fill
//                             className="object-cover object-center transition-opacity duration-300 ease-in-out"
//                             priority
//                             unoptimized // For external URLs
//                         />
//                     </div>

//                     {/* Mobile Thumbnails */}
//                     <div className="flex md:hidden gap-2 order-3 overflow-x-auto pb-2 no-scrollbar">
//                         {images.map((img, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setActiveImageIndex(idx)}
//                                 className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border ${activeImageIndex === idx ? 'border-black' : 'border-transparent'
//                                     }`}
//                             >
//                                 <Image src={img} alt="Thumbnail" fill className="object-cover" unoptimized />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Column: Product Details */}
//                 <div className="lg:col-span-5 flex flex-col pt-2">
//                     {/* Header */}
//                     <div className="flex justify-between items-start mb-2">
//                         <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                             {category}
//                         </span>
//                     </div>

//                     <h1 className="text-[32px] font-normal tracking-normal text-gray-900 mb-2">{title}</h1>


//                     {/* END ADDED PRICE DISPLAY */}

//                     <div className="h-px w-full bg-gray-200 mb-8" />

//                     {/* Description */}
//                     <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">{description}</p>

//                     {/* Variants (Sizes) */}
//                     {sizes.length > 0 && (
//                         <div className="mb-8">
//                             <label className="block text-sm font-medium text-gray-900 mb-3">Size</label>
//                             <div className="flex gap-3">
//                                 {sizes.map((size) => (
//                                     <button
//                                         key={size}
//                                         onClick={() => setSelectedSize(size)}
//                                         className={`px-5 py-3 rounded-lg text-sm font-medium border transition-all ${selectedSize === size
//                                             ? 'border-gray-200 bg-white text-black ring-1 ring-black shadow-sm'
//                                             : 'border-gray-200 text-gray-600 hover:border-gray-300'
//                                             }`}
//                                     >
//                                         {size}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}



//                     {/* Accordions */}
//                     <div className="border-t border-gray-200 cursor-pointer">
//                         {accordions.map((item) => {
//                             const isOpen = openAccordion === item.id;
//                             return (
//                                 <div key={item.id} className="border-b  border-gray-200">
//                                     <button
//                                         onClick={() => toggleAccordion(item.id)}
//                                         className="w-full py-5 flex justify-between items-center text-left group"
//                                     >
//                                         <span className="text-sm cursor-pointer font-medium text-gray-500 group-hover:text-black transition-colors">
//                                             {item.title}
//                                         </span>
//                                         <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
//                                             {isOpen ? <Minus className="w-4 h-4 text-black" /> : <Plus className="w-4 h-4 text-gray-400" />}
//                                         </div>
//                                     </button>
//                                     <div
//                                         className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'
//                                             }`}
//                                     >
//                                         <p className="text-sm text-gray-600 leading-relaxed px-2">{item.content}</p>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>

//                     {/* Enquire Now Component - ADDED HERE */}
//                     <EnquireNowSection title={title} contactInfo={contactInfo} />
//                 </div>
//             </div>
//         </div>
//     );
// }



// // D:\mktgroup\app\components\MainSingleSection.tsx
// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { Mail, Phone, MessageCircle } from 'lucide-react'; // Added icons

// // Define structure for contact info
// interface ContactInfo {
//     whatsappNumber: string;
//     emailAddress: string;
//     phoneNumber: string;
// }

// interface MainSingleSectionProps {
//     category: string;
//     title: string;
//     description: string;
//     images: string[];
//     sizes: string[];
//     accordions: Array<{
//         id: string;
//         title: string;
//         content: string;
//     }>;
//     contactInfo: ContactInfo; // ADDED
// }

// // Component for the Enquire Now section
// const EnquireNowSection = ({ title, contactInfo }: { title: string, contactInfo: ContactInfo }) => {
//     // Generate Pre-filled Message for WhatsApp/Email
//     const defaultMessage = `Hello, I'm interested in the product: ${title}. Could you please share more details?`;
//     const encodedMessage = encodeURIComponent(defaultMessage);

//     // WhatsApp Link (remove non-digits from number)
//     const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`;

//     // Email Link
//     const emailLink = `mailto:${contactInfo.emailAddress}?subject=Inquiry%20about%20${encodeURIComponent(title)}&body=${encodedMessage}`;

//     // Phone Link
//     const phoneLink = `tel:${contactInfo.phoneNumber}`;


//     return (
//         <div className=" mb-10">
//             <h2 className="text-xl font-normal text-[#D4AF37] mb-4 inline-block after:content-[''] after:block after:h-[1px] after:w-16 after:bg-gray-300">
//                 Enquire Now
//             </h2>
//             <div className="flex gap-4">
//                 {/* Email Icon */}
//                 <a
//                     href={emailLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
//                     aria-label={`Enquire about ${title} via email`}
//                 >
//                     <Mail className="w-7 h-7 text-white" />
//                 </a>

//                 {/* WhatsApp Icon */}
//                 <a
//                     href={whatsappLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
//                     aria-label={`Enquire about ${title} via WhatsApp`}
//                 >
//                     <MessageCircle className="w-7 h-7 text-white" />
//                 </a>

//                 {/* Phone Icon */}
//                 <a
//                     href={phoneLink}
//                     className="w-14 h-14 bg-gray-500 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
//                     aria-label={`Call to enquire about ${title}`}
//                 >
//                     <Phone className="w-7 h-7 text-white" />
//                 </a>
//             </div>
//         </div>
//     );
// };


// export default function MainSingleSection({
//     category,
//     title,
//     description,
//     images,
//     sizes,

//     contactInfo, // DESTRUCTURED
// }: MainSingleSectionProps) {
//     const [selectedSize, setSelectedSize] = useState(sizes[0] || ''); // Default to first size

//     const [activeImageIndex, setActiveImageIndex] = useState(0);




//     return (
//         <div className="bg-white text-gray-900 py-4 md:py-8 lg:pt-52">
//             <div className="templateContainer grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
//                 {/* Left Column: Gallery (No change here) */}
//                 <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 lg:sticky lg:top-8">
//                     {/* Thumbnails */}
//                     <div className="hidden md:flex flex-col gap-3 order-1 md:order-1 w-20">
//                         {images.map((img, idx) => (
//                             <div
//                                 key={idx}
//                                 onMouseEnter={() => setActiveImageIndex(idx)}
//                                 className={`relative w-full aspect-square rounded-lg overflow-hidden border cursor-pointer transition-all duration-200 ${activeImageIndex === idx
//                                     ? 'border-black opacity-100 ring-1 ring-black'
//                                     : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
//                                     }`}
//                             >
//                                 <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" unoptimized />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Main Image */}
//                     <div className="flex-1 order-2 md:order-2 relative bg-[#F4F4F4] rounded-xl overflow-hidden aspect-[4/5] md:h-[600px] w-full">
//                         <Image
//                             src={images[activeImageIndex]}
//                             alt={`${title} main image`}
//                             fill
//                             className="object-cover object-center transition-opacity duration-300 ease-in-out"
//                             priority
//                             unoptimized // For external URLs
//                         />
//                     </div>

//                     {/* Mobile Thumbnails */}
//                     <div className="flex md:hidden gap-2 order-3 overflow-x-auto pb-2 no-scrollbar">
//                         {images.map((img, idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setActiveImageIndex(idx)}
//                                 className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border ${activeImageIndex === idx ? 'border-black' : 'border-transparent'
//                                     }`}
//                             >
//                                 <Image src={img} alt="Thumbnail" fill className="object-cover" unoptimized />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right Column: Product Details */}
//                 <div className="lg:col-span-5 flex flex-col pt-2">
//                     {/* Header */}
//                     <div className="flex justify-between items-start mb-2">
//                         <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
//                             {category}
//                         </span>
//                     </div>

//                     <h1 className="text-[32px] font-normal tracking-normal text-gray-900 mb-2">{title}</h1>


//                     {/* END ADDED PRICE DISPLAY */}

//                     <div className="h-px w-full bg-gray-200 mb-8" />

//                     {/* Description */}
//                     <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">{description}</p>

//                     {/* Variants (Sizes) */}
//                     {sizes.length > 0 && (
//                         <div className="mb-8">
//                             <label className="block text-sm font-medium text-gray-900 mb-3">Size</label>
//                             <div className="flex gap-3">
//                                 {sizes.map((size) => (
//                                     <button
//                                         key={size}
//                                         onClick={() => setSelectedSize(size)}
//                                         className={`px-5 py-3 rounded-lg text-sm font-medium border transition-all ${selectedSize === size
//                                             ? 'border-gray-200 bg-white text-black ring-1 ring-black shadow-sm'
//                                             : 'border-gray-200 text-gray-600 hover:border-gray-300'
//                                             }`}
//                                     >
//                                         {size}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>
//                     )}





//                     {/* Enquire Now Component - ADDED HERE */}
//                     <EnquireNowSection title={title} contactInfo={contactInfo} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// D:\mktgroup\app\components\MainSingleSection.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, X } from 'lucide-react'; // Added X icon for modal close
import EnquireNow from './EnquireNow'; // Import EnquireNow component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


// Define structure for contact info
interface ContactInfo {
    whatsappNumber: string;
    emailAddress: string;
    phoneNumber: string;
}

interface MainSingleSectionProps {
    category: string;
    title: string;
    description: string;
    images: string[];
    sizes: string[];
    accordions: Array<{
        id: string;
        title: string;
        content: string;
    }>;
    contactInfo: ContactInfo;
}

// Minimal Modal Component
const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center py-4"
            onClick={onClose} // Close modal on backdrop click
        >
            <div
                className="bg-white rounded-xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <div className="flex justify-between  max-w-lg mx-auto items-center p-4 border-b">
                    <h3 className="text-xl font-normal text-[#D4AF37]">
                        Enquire about: <span className="text-black ">{title}</span>
                    </h3>
                    <button onClick={onClose} className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};


// Component for the Enquire Now section
const EnquireNowSection = ({ title, contactInfo, onEmailClick }: { title: string, contactInfo: ContactInfo, onEmailClick: () => void }) => {
    // Generate Pre-filled Message for WhatsApp/Email
    const defaultMessage = `Hello, I'm interested in the product: ${title}. Could you please share more details?`;
    const encodedMessage = encodeURIComponent(defaultMessage);

    // WhatsApp Link (remove non-digits from number)
    const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodedMessage}`;

    // Phone Link
    const phoneLink = `tel:${contactInfo.phoneNumber}`;

    // Original Email Link (Used if we don't open a modal)
    // const emailLink = `mailto:${contactInfo.emailAddress}?subject=Inquiry%20about%20${encodeURIComponent(title)}&body=${encodedMessage}`;


    return (
        <div className=" mb-10">
            <h2 className="text-xl font-normal text-[#D4AF37] mb-4 inline-block after:content-[''] after:block after:h-[1px] after:w-16 after:bg-gray-300">
                Enquire Now
            </h2>
            <div className="flex gap-4">
                {/* Email Icon - MODIFIED TO OPEN MODAL */}
                <button
                    onClick={onEmailClick} // Use onClick to trigger modal
                    className="w-14 h-14 bg-red-600 rounded-lg cursor-pointer flex items-center justify-center transition-opacity hover:opacity-80"
                    aria-label={`Enquire about ${title} via email form`}
                >
                    <Mail className="w-7 h-7 text-white" />
                </button>

                {/* WhatsApp Icon - NO CHANGE */}

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-green-500 rounded-lg cursor-pointer flex items-center justify-center transition-opacity hover:opacity-80"
                    aria-label={`Enquire about ${title} via WhatsApp`}
                >

                    <FontAwesomeIcon icon={faWhatsapp} size="2xl" className="text-white" />
                </a>
                {/* Phone Icon - NO CHANGE */}
                <a
                    href={phoneLink}
                    className="w-14 h-14 bg-gray-500 rounded-lg cursor-pointer flex items-center justify-center transition-opacity hover:opacity-80"
                    aria-label={`Call to enquire about ${title}`}
                >
                    <Phone className="w-7 h-7 text-white" />
                </a>
            </div>
        </div>
    );
};


export default function MainSingleSection({
    category,
    title,
    description,
    images,
    sizes,
    accordions, // Removed from destructuring as it's not used here, but kept in props type
    contactInfo, // DESTRUCTURED
}: MainSingleSectionProps) {
    const [selectedSize, setSelectedSize] = useState(sizes[0] || ''); // Default to first size
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="bg-white text-gray-900 py-4 md:py-8">
                <div className="templateContainer grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Gallery (No change here) */}
                    <div className="lg:col-span-7 flex flex-col md:flex-row gap-4 lg:sticky lg:top-8">
                        {/* Thumbnails */}
                        <div className="hidden md:flex flex-col gap-3 order-1 md:order-1 w-20">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setActiveImageIndex(idx)}
                                    className={`relative w-full aspect-square rounded-lg overflow-hidden border cursor-pointer transition-all duration-200 ${activeImageIndex === idx
                                        ? 'border-black opacity-100 border'
                                        : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
                                        }`}
                                >
                                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" unoptimized />
                                </div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 order-2 md:order-2 relative bg-[#F4F4F4] rounded-xl overflow-hidden aspect-[4/5] md:h-[600px] w-full">
                            <Image
                                src={images[activeImageIndex]}
                                alt={`${title} main image`}
                                fill
                                className="object-cover object-center transition-opacity duration-300 ease-in-out"
                                priority
                                unoptimized // For external URLs
                            />
                        </div>

                        {/* Mobile Thumbnails */}
                        <div className="flex md:hidden gap-2 order-3 overflow-x-auto pb-2 no-scrollbar">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImageIndex(idx)}
                                    className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border ${activeImageIndex === idx ? 'border-black' : 'border-transparent'
                                        }`}
                                >
                                    <Image src={img} alt="Thumbnail" fill className="object-cover" unoptimized />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="lg:col-span-5 flex flex-col pt-2">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                {category}
                            </span>
                        </div>

                        <h1 className="text-[25px] md:text-[32px] font-normal tracking-normal text-gray-900 mb-2">{title}</h1>


                        <div className="h-px w-full bg-gray-200 mb-8" />

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">{description}</p>

                        {/* Variants (Sizes) */}
                        {sizes.length > 0 && (

                            <div className="mb-4 flex items-start gap-1"> {/* Added: flex, items-start, gap-8 */}
                                <label className="block text-sm font-medium text-gray-900 mt-3">Size:</label> {/* Removed: mb-3, Added: mt-3 for vertical alignment */}
                                <div className="flex">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`py-3 rounded-lg text-sm font-medium  transition-all ${selectedSize === size
                                                ? ' bg-white text-black'
                                                : ' text-gray-600 '
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Enquire Now Component - PASSED openModal HANDLER */}
                        <EnquireNowSection title={title} contactInfo={contactInfo} onEmailClick={openModal} />
                    </div>
                </div>
            </div>

            {/* Modal for Email Enquiry */}
            <Modal isOpen={isModalOpen} onClose={closeModal} title={title}>
                {/* Render EnquireNow component inside the modal, passing isModal=true and the product title */}
                <EnquireNow isModal={true} title={title} />
            </Modal>
        </>
    );
}