// 'use client';

// import React, { useState, useRef } from 'react';
// import Image from 'next/image';

// interface Solution {
//     id: number;
//     title: string;
//     image: string; // Using placeholder URLs for demo, replace with your actual paths
// }

// const solutions: Solution[] = [
//     {
//         id: 1,
//         title: "Residential",
//         image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop"
//     },
//     {
//         id: 2,
//         title: "Bathroom & Kitchen",
//         image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop"
//     },
//     {
//         id: 3,
//         title: "Commercial / Office",
//         image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
//     },
//     {
//         id: 4,
//         title: "Hospitality / Retail / Restaurant",
//         image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
//     },
//     {
//         id: 5,
//         title: "Industrial / Institutional",
//         image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
//     },
// ];

// const CardSection = () => {
//     // Optional: State for dots if you want them interactive
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <section className="w-full py-10 px-4 md:px-10 bg-white">
//             <div className="max-w-[1600px] mx-auto space-y-8">

//                 {/* Header Section */}
//                 <div className="space-y-2">
//                     <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
//                         Responsive Solutions
//                     </h2>
//                     <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
//                         for Modern Living / From concept to Finish - Responsively Built Include spaces, effects and colors in a similar way
//                     </h3>
//                 </div>

//                 {/* Carousel Container */}
//                 {/* We use overflow-x-auto for horizontal scrolling and snap-x for carousel behavior */}
//                 <div className="overflow-hidden">
//                     <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">

//                         {solutions.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="
//                   relative 
//                   min-w-[70%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[20%] 
//                   snap-start 
//                   group cursor-pointer
//                 "
//                             >
//                                 {/* Card Wrapper with Aspect Ratio */}
//                                 <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-md">

//                                     {/* Background Image */}
//                                     <Image
//                                         src={item.image}
//                                         alt={item.title}
//                                         fill
//                                         className="
//                       object-cover 
//                       transition-transform duration-500 ease-in-out 
//                       group-hover:scale-110
//                     "
//                                         sizes="(max-width: 768px) 70vw, (max-width: 1200px) 33vw, 20vw"
//                                     />

//                                     {/* Gradient Overlay & Text */}
//                                     {/* Changed bg-linear-to-t to bg-gradient-to-t for standard Tailwind */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
//                                         <p className="text-white text-center font-light tracking-wide text-sm md:text-base px-2">
//                                             {item.title}
//                                         </p>
//                                     </div>

//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                 </div>

//                 {/* Navigation Dots (Visual Representation) */}
//                 <div className="flex justify-center gap-3 mt-2">
//                     {/* Example of active/inactive dots based on the image style */}
//                     <button className="w-2.5 h-2.5 rounded-full bg-gray-300 transition hover:bg-gray-400"></button>
//                     <button className="w-2.5 h-2.5 rounded-full bg-gray-300 transition hover:bg-gray-400"></button>
//                     <button className="w-2.5 h-2.5 rounded-full bg-black transition"></button>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default CardSection;

///////////////////// static version /////////////////////

// // D:\mktgroup\app\components\CardSection.tsx
// 'use client';

// import React from 'react';
// import Image from 'next/image';

// interface Solution {
//     id: number;
//     title: string;
//     image: string;
// }

// const solutions: Solution[] = [
//     {
//         id: 1,
//         title: "Retail",
//         image: "/dummy-image/Gemini_Generated_Image_yhujcsyhujcsyhuj.png"
//     },
//     {
//         id: 2,
//         title: "Food",
//         image: "/category/Gemini_Generated_Image_cczy10cczy10cczy.png"
//     },
//     {
//         id: 3,
//         title: "Non Food",
//         image: "/category/Gemini_Generated_Image_3joxeu3joxeu3jox.png"
//     },
//     {
//         id: 4,
//         title: "Commodities",
//         image: "/category/Gemini_Generated_Image_vw0wrzvw0wrzvw0w.png"
//     },
//     {
//         id: 5,
//         title: "Disposable",
//         image: "/category/Gemini_Generated_Image_c9cxf2c9cxf2c9cx.png"
//     },
// ];

// const CardSection = () => {
//     return (
//         <section className="w-full py-10  pt-48 bg-white">
//             <div className="templateContainer space-y-8">

//                 {/* Header Section */}
//                 <div className="space-y-2 text-center">
//                     <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
//                         Categories of Our Solutions
//                     </h2>
//                     <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
//                         for Modern effects and colors in a similar way
//                     </h3>
//                 </div>

//                 {/* Responsive Card Grid Container */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

//                     {solutions.map((item) => (
//                         <div
//                             key={item.id}
//                             className="
//                                 relative
//                                 group cursor-pointer
//                             "
//                         >
//                             {/* Card Wrapper with Aspect Ratio */}
//                             <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-md">

//                                 {/* Background Image */}
//                                 <Image
//                                     src={item.image}
//                                     alt={item.title}
//                                     fill
//                                     className="
//                                         object-cover
//                                         transition-transform duration-[1.6s] ease-[cubic-bezier(0.22, 1, 0.36, 1)]
//                                         group-hover:scale-110
//                                     "
//                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
//                                 />

//                                 {/* Gradient Overlay & Text */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
//                                     <p className="text-white text-center font-light tracking-wide text-sm md:text-sm px-2">
//                                         {item.title}
//                                     </p>
//                                 </div>

//                             </div>
//                         </div>
//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default CardSection;



///////// dynamic version /////////

// 'use client';

// import React from 'react';
// import Image from 'next/image';

// // Use the data structure from the API response
// interface Category {
//     name: string;
//     slug: string;
//     image: string;
// }

// // 1. Define the base URL from the environment variable for client-side usage (though fetching will be server-side)
// // The API URL is constructed from the base URL and the endpoint.
// const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

// /**
//  * Server-side data fetching function.
//  * This function will be called directly inside the component (or the page component calling it)
//  * to fetch data before rendering.
//  */
// const fetchCategories = async (): Promise<Category[]> => {
//     // Construct the full API URL
//     const apiUrl = `${API_BASE_URL}/wp-json/custom/v1/getAllCategories`;

//     try {
//         // Fetch data. 'no-cache' ensures fresh data on every request in development, 
//         // though Next.js usually handles caching intelligently.
//         const res = await fetch(apiUrl, { next: { revalidate: 3600 } }); // Revalidate every hour

//         if (!res.ok) {
//             // Throw an error if the response status is not OK (e.g., 404, 500)
//             throw new Error(`Failed to fetch categories: ${res.statusText}`);
//         }

//         const data = await res.json();

//         // The API returns an object with a 'categories' array
//         if (data && data.categories) {
//             // Map the structure to our Category interface
//             const categories: Category[] = data.categories.map((cat: any) => ({
//                 name: cat.name,
//                 slug: cat.slug,
//                 // Construct the full image URL by prepending the base URL
//                 // We'll use the original image URL from the API for now, 
//                 // as the structure of the API URL (https://mktgroupaebck.demo-web.live/wp-content/...) 
//                 // seems to already be a full URL. If it were a relative path, you'd prepend the base URL.
//                 // Assuming `cat.image` is already the full URL as seen in the uploaded JSON.
//                 image: cat.image,
//             }));
//             return categories;
//         }

//         return []; // Return an empty array if categories are not found
//     } catch (error) {
//         console.error("Error fetching categories:", error);
//         // In a real application, you might want to return an empty array or cached data
//         return [];
//     }
// };

// const CardSection = async () => {
//     // 2. Fetch data dynamically before rendering the component
//     const solutions = await fetchCategories();

//     // The component remains 'use client' because of the event listeners/hooks you might add later, 
//     // but the data fetching is done via an 'async' component, which executes on the server.

//     return (
//         <section className="w-full py-10 pt-48 bg-white">
//             <div className="templateContainer space-y-8">

//                 {/* Header Section */}
//                 <div className="space-y-2 text-center">
//                     <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
//                         Categories of Our Solutions
//                     </h2>
//                     <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
//                         for Modern effects and colors in a similar way
//                     </h3>
//                 </div>

//                 {/* Responsive Card Grid Container */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

//                     {/* 3. Render the dynamically fetched solutions */}
//                     {solutions.map((item, index) => (
//                         <div
//                             // Use index as key if 'slug' or 'name' is not guaranteed unique/stable
//                             // Using a slug or name from the API is generally better if they're unique.
//                             key={item.slug || index}
//                             className="
//                                 relative
//                                 group cursor-pointer
//                             "
//                         >
//                             {/* Card Wrapper with Aspect Ratio */}
//                             <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-md">

//                                 {/* Background Image */}
//                                 {/* 4. Use the dynamic image URL from the API */}
//                                 <Image
//                                     src={item.image}
//                                     alt={item.name}
//                                     fill
//                                     className="
//                                         object-cover
//                                         transition-transform duration-[1.6s] ease-[cubic-bezier(0.22, 1, 0.36, 1)]
//                                         group-hover:scale-110
//                                     "
//                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
//                                 />

//                                 {/* Gradient Overlay & Text */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
//                                     {/* 5. Use the dynamic title/name from the API */}
//                                     <p className="text-white text-center font-light tracking-wide text-sm md:text-sm px-2">
//                                         {item.name}
//                                     </p>
//                                 </div>

//                             </div>
//                         </div>
//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default CardSection;


///////////////////////////////////////////////


// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

// // 1. New interface for the data fetched from the API
// interface Category {
//     name: string;
//     slug: string;
//     image: string;
// }

// const CardSection = () => {
//     // 2. State to store the fetched categories and loading status
//     const [categories, setCategories] = useState<Category[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // Get the base URL from the environment variable defined in .env.local
//     const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

//     useEffect(() => {
//         const fetchCategories = async () => {
//             if (!API_BASE_URL) {
//                 setError("API Base URL is not configured.");
//                 setIsLoading(false);
//                 return;
//             }

//             try {
//                 // Construct the full API URL
//                 const apiUrl = `${API_BASE_URL}/wp-json/custom/v1/getAllCategories`;

//                 const response = await fetch(apiUrl);

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 // The API response is an object with a "categories" array
//                 const data = await response.json();

//                 // Set the fetched categories
//                 setCategories(data.categories || []);
//             } catch (err) {
//                 console.error("Failed to fetch categories:", err);
//                 setError("Failed to load categories.");
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchCategories();
//     }, [API_BASE_URL]); // Dependency on the base URL

//     // Conditional rendering for loading and error states
//     if (isLoading) {
//         return (
//             <section className="w-full py-10 pt-48 bg-white">
//                 <div className="templateContainer text-center">
//                     <p className="text-gray-500">Loading categories...</p>
//                 </div>
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full py-10 pt-48 bg-white">
//                 <div className="templateContainer text-center">
//                     <p className="text-red-500">{error}</p>
//                 </div>
//             </section>
//         );
//     }

//     return (
//         <section className="w-full py-10 pt-48 bg-white">
//             <div className="templateContainer space-y-8">

//                 {/* Header Section */}
//                 <div className="space-y-2 text-center">
//                     <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
//                         Categories of Our Solutions
//                     </h2>
//                     <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
//                         for Modern effects and colors in a similar way
//                     </h3>
//                 </div>

//                 {/* Responsive Card Grid Container */}
//                 {/* 3. Map over the fetched 'categories' data instead of the old 'solutions' array */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

//                     {categories.map((item) => (
//                         <div
//                             key={item.slug} // Using slug as key since it should be unique
//                             className="
//                                 relative
//                                 group cursor-pointer
//                             "
//                         >
//                             {/* Card Wrapper with Aspect Ratio */}
//                             <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-md">

//                                 {/* Background Image */}
//                                 <Image
//                                     // Use item.image for the URL
//                                     src={item.image}
//                                     // Use item.name for the alt text
//                                     alt={item.name}
//                                     fill
//                                     className="
//                                         object-cover
//                                         transition-transform duration-[1.6s] ease-[cubic-bezier(0.22, 1, 0.36, 1)]
//                                         group-hover:scale-110
//                                     "
//                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
//                                     // Add unoptimized prop for external URLs if you don't configure Next.js image domains
//                                     unoptimized
//                                 />

//                                 {/* Gradient Overlay & Text */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
//                                     <p className="text-white text-center font-light tracking-wide text-sm md:text-sm px-2">
//                                         {/* Use item.name for the title */}
//                                         {item.name}
//                                     </p>
//                                 </div>

//                             </div>
//                         </div>
//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default CardSection;



// // D:\mktgroup\app\components\CardSection.tsx

// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

// // 1. New interface for the data fetched from the API
// interface Category {
//     name: string;
//     slug: string;
//     image: string;
// }

// const CardSection = () => {
//     // 2. State to store the fetched categories and loading status
//     const [categories, setCategories] = useState<Category[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // Get the base URL from the environment variable defined in .env.local
//     const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

//     useEffect(() => {
//         const fetchCategories = async () => {
//             if (!API_BASE_URL) {
//                 setError("API Base URL is not configured.");
//                 setIsLoading(false);
//                 return;
//             }

//             try {
//                 // Construct the full API URL
//                 const apiUrl = `${API_BASE_URL}/wp-json/custom/v1/getAllCategories`;

//                 const response = await fetch(apiUrl);

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 // The API response is an object with a "categories" array
//                 const data = await response.json();

//                 // Set the fetched categories
//                 setCategories(data.categories || []);
//             } catch (err) {
//                 console.error("Failed to fetch categories:", err);
//                 setError("Failed to load categories.");
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchCategories();
//     }, [API_BASE_URL]); // Dependency on the base URL

//     // Conditional rendering for loading and error states
//     if (isLoading) {
//         return (
//             <section className="w-full py-10 pt-48 bg-white">
//                 <div className="templateContainer text-center">
//                     <p className="text-gray-500">Loading categories...</p>
//                 </div>
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full py-10 pt-48 bg-white">
//                 <div className="templateContainer text-center">
//                     <p className="text-red-500">{error}</p>
//                 </div>
//             </section>
//         );
//     }

//     return (
//         <section className="w-full py-10 pt-48 bg-white">
//             <div className="templateContainer space-y-8">

//                 {/* Header Section */}
//                 <div className="space-y-2 text-center">
//                     <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
//                         Categories of Our Solutions
//                     </h2>
//                     <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
//                         for Modern effects and colors in a similar way
//                     </h3>
//                 </div>

//                 {/* Responsive Card Grid Container */}
//                 {/* 3. Map over the fetched 'categories' data instead of the old 'solutions' array */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

//                     {categories.map((item) => (
//                         <div
//                             key={item.slug} // Using slug as key since it should be unique
//                             className="
//                                 relative
//                                 group cursor-pointer
//                             "
//                         >
//                             {/* Card Wrapper with Aspect Ratio */}
//                             <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-md">

//                                 {/* Background Image */}
//                                 <Image
//                                     // Use item.image for the URL
//                                     src={item.image}
//                                     // Use item.name for the alt text
//                                     alt={item.name}
//                                     fill
//                                     className="
//                                         object-cover
//                                         transition-transform duration-[1.6s] ease-[cubic-bezier(0.22, 1, 0.36, 1)]
//                                         group-hover:scale-110
//                                     "
//                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
//                                     // Add unoptimized prop for external URLs if you don't configure Next.js image domains
//                                     unoptimized
//                                 />

//                                 {/* Gradient Overlay & Text */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
//                                     <p className="text-white text-center font-light tracking-wide text-sm md:text-sm px-2">
//                                         {/* Use item.name for the title */}
//                                         {item.name}
//                                     </p>
//                                 </div>

//                             </div>
//                         </div>
//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default CardSection;


///////////////////////////////////////////////////

// // D:\mktgroup\app\components\CardSection.tsx

// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// // *** 1. IMPORT Link from next/link ***
// import Link from 'next/link';

// // 1. New interface for the data fetched from the API
// interface Category {
//     name: string;
//     slug: string;
//     image: string;
// }

// const CardSection = () => {
//     // 2. State to store the fetched categories and loading status
//     const [categories, setCategories] = useState<Category[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // Get the base URL from the environment variable defined in .env.local
//     const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

//     useEffect(() => {
//         const fetchCategories = async () => {
//             if (!API_BASE_URL) {
//                 setError("API Base URL is not configured.");
//                 setIsLoading(false);
//                 return;
//             }

//             try {
//                 // Construct the full API URL
//                 const apiUrl = `${API_BASE_URL}/wp-json/custom/v1/getAllCategories`;

//                 const response = await fetch(apiUrl);

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 // The API response is an object with a "categories" array
//                 const data = await response.json();

//                 // Set the fetched categories
//                 setCategories(data.categories || []);
//             } catch (err) {
//                 console.error("Failed to fetch categories:", err);
//                 setError("Failed to load categories.");
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchCategories();
//     }, [API_BASE_URL]); // Dependency on the base URL

//     // Conditional rendering for loading and error states
//     if (isLoading) {
//         return (
//             <section className="w-full py-10 pt-48 bg-white">
//                 <div className="templateContainer text-center">
//                     <p className="text-gray-500">Loading categories...</p>
//                 </div>
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full py-10 pt-48 bg-white">
//                 <div className="templateContainer text-center">
//                     <p className="text-red-500">{error}</p>
//                 </div>
//             </section>
//         );
//     }

//     return (
//         <section className="w-full py-10 bg-white">
//             <div className="templateContainer space-y-8">

//                 {/* Header Section */}
//                 <div className="space-y-2 text-center">
//                     <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
//                         Categories of Our Solutions
//                     </h2>
//                     <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
//                         for Modern effects and colors in a similar way
//                     </h3>
//                 </div>

//                 {/* Responsive Card Grid Container */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

//                     {categories.map((item) => (
//                         // *** 2. Use the Link component here ***
//                         // The href points to your dynamic page structure: /category/[slug]
//                         <Link
//                             key={item.slug}
//                             href={`/category/${item.slug}`}
//                             className="
//                                 relative
//                                 group cursor-pointer
//                             "
//                         >
//                             {/* Card Wrapper with Aspect Ratio */}
//                             <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-md">

//                                 {/* Background Image */}
//                                 <Image
//                                     // Use item.image for the URL
//                                     src={item.image}
//                                     // Use item.name for the alt text
//                                     alt={item.name}
//                                     fill
//                                     className="
//                                         object-cover
//                                         transition-transform duration-[1.6s] ease-[cubic-bezier(0.22, 1, 0.36, 1)]
//                                         group-hover:scale-110
//                                     "
//                                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
//                                     // Add unoptimized prop for external URLs if you don't configure Next.js image domains
//                                     unoptimized
//                                 />

//                                 {/* Gradient Overlay & Text */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
//                                     <p className="text-white text-center font-light tracking-wide text-sm md:text-sm px-2">
//                                         {/* Use item.name for the title */}
//                                         {item.name}
//                                     </p>
//                                 </div>

//                             </div>
//                         </Link>
//                         // *** END of Link component ***
//                     ))}

//                 </div>

//             </div>
//         </section>
//     );
// };

// export default CardSection;

// // D:\mktgroup\app\components\CardSection.tsx
// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// // 1. Import Framer Motion
// import { motion } from 'framer-motion';

// interface Category {
//     name: string;
//     slug: string;
//     image: string;
// }

// // 2. Define Animation Variants
// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.15,
//             when: "beforeChildren",
//         },
//     },
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { type: "spring", stiffness: 50, damping: 15 }
//     },
// };

// const CardSection = () => {
//     const [categories, setCategories] = useState<Category[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

//     useEffect(() => {
//         const fetchCategories = async () => {
//             if (!API_BASE_URL) {
//                 setError("API Base URL is not configured.");
//                 setIsLoading(false);
//                 return;
//             }

//             try {
//                 const apiUrl = `${API_BASE_URL}/wp-json/custom/v1/getAllCategories`;
//                 const response = await fetch(apiUrl);

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const data = await response.json();
//                 setCategories(data.categories || []);
//             } catch (err) {
//                 console.error("Failed to fetch categories:", err);
//                 setError("Failed to load categories.");
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchCategories();
//     }, [API_BASE_URL]);

//     if (isLoading) {
//         return (
//             <section className="w-full py-10 pt-48 bg-white">
//                 <div className="templateContainer text-center">
//                     <p className="text-gray-500">Loading categories...</p>
//                 </div>
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full py-10 pt-48 bg-white">
//                 <div className="templateContainer text-center">
//                     <p className="text-red-500">{error}</p>
//                 </div>
//             </section>
//         );
//     }

//     return (
//         <section className="w-full py-10 bg-white">
//             <div className="templateContainer space-y-8">

//                 <div className="space-y-2 text-center">
//                     <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
//                         Categories of Our Solutions
//                     </h2>
//                     <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
//                         for Modern effects and colors in a similar way
//                     </h3>
//                 </div>

//                 {/* 3. Apply Motion to Container Grid */}
//                 <motion.div
//                     className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible" // Animates when scrolled into view
//                     viewport={{ once: true, margin: "-100px" }}
//                 >

//                     {categories.map((item) => (
//                         // 4. Wrap Link in motion.div and apply card variants
//                         // Note: key moved here
//                         <motion.div key={item.slug} variants={cardVariants}>
//                             <Link
//                                 href={`/category/${item.slug}`}
//                                 className="relative group cursor-pointer block h-full"
//                             >
//                                 <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-md">
//                                     <Image
//                                         src={item.image}
//                                         alt={item.name}
//                                         fill
//                                         className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22, 1, 0.36, 1)] group-hover:scale-110"
//                                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
//                                         unoptimized
//                                     />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
//                                         <p className="text-white text-center font-light tracking-wide text-sm md:text-sm px-2">
//                                             {item.name}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </Link>
//                         </motion.div>
//                     ))}

//                 </motion.div>

//             </div>
//         </section>
//     );
// };

// export default CardSection;


// D:\mktgroup\app\components\CardSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// 1. Import Framer Motion AND Variants type
import { motion, Variants } from 'framer-motion';
import { CategorySkeleton } from './Skeletons';

interface Category {
    name: string;
    slug: string;
    image: string;
}

// 2. Define Animation Variants with the explicit Variants type
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            when: "beforeChildren",
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 15 }
    },
};

const CardSection = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

    useEffect(() => {
        const fetchCategories = async () => {
            if (!API_BASE_URL) {
                setError("API Base URL is not configured.");
                setIsLoading(false);
                return;
            }

            try {
                const apiUrl = `${API_BASE_URL}/wp-json/custom/v1/getAllCategories`;
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setCategories(data.categories || []);
            } catch (err) {
                console.error("Failed to fetch categories:", err);
                setError("Failed to load categories.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, [API_BASE_URL]);

    if (isLoading) {
        // UPDATED: Return Skeleton
        return <CategorySkeleton />;
    }

    if (error) {
        return (
            <section className="w-full py-10 pt-48 bg-white">
                <div className="templateContainer text-center">
                    <p className="text-red-500">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="w-full py-10 bg-white">
            <div className="templateContainer space-y-8">

                <div className="space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
                        Categories of Our Solutions
                    </h2>
                    <h3 className="text-sm lg:text-[15px] font-light tracking-wide text-gray-600">
                        for Modern effects and colors in a similar way
                    </h3>
                </div>

                {/* 3. Apply Motion to Container Grid */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Animates when scrolled into view
                    viewport={{ once: true, margin: "-100px" }}
                >

                    {categories.map((item) => (
                        // 4. Wrap Link in motion.div and apply card variants
                        // Note: key moved here
                        <motion.div key={item.slug} variants={cardVariants}>
                            <Link
                                href={`/category/${item.slug}`}
                                className="relative group cursor-pointer block h-full"
                            >
                                <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden shadow-md">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22, 1, 0.36, 1)] group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end justify-center pb-6 transition-all duration-300 group-hover:from-black/60">
                                        <p className="text-white text-center font-light tracking-wide text-sm md:text-sm px-2">
                                            {item.name}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
};

export default CardSection;