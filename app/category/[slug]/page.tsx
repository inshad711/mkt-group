// import FullCard from '@/app/components/FullCard'
// import React from 'react'

// const page = () => {
//     return (
//         <div>
//             <FullCard />
//         </div>
//     )
// }

// export default page





// // D:\mktgroup\app\category\[slug]\page.tsx
// "use client"; // Required for using React hooks like useState and useEffect

// import React, { useState, useEffect } from 'react';


// // Define the structure for the product data
// interface Product {
//     id: number;
//     title: string;
//     category: string;
//     image: string;
//     hoverImage: string;
// }

// /**
//  * Transforms the raw API product data into the structured 'Product' interface.
//  * NOTE: All price and discount fields have been removed as requested.
//  */
// const transformApiData = (apiProducts: any[]): Product[] => {
//     return apiProducts.map((p, index) => {
//         // Extracting product title, image URLs, and creating a temporary ID
//         const title = p.title.split(' - ')[0]; // Use first part of the title for a cleaner look

//         // --- Use the full URL directly from the API response ---
//         // The API returns the full URL, not just a slug, so no need for prefixing.
//         const primaryImageURL = p.product_gallery_images[0] || '';
//         // Use the second image as hover, or the first if only one exists
//         const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';

//         const image = primaryImageURL;
//         const hoverImage = hoverImageURL;
//         // -----------------------------------------------------------

//         return {
//             id: index + 1, // Using index as a temporary ID
//             title: title || 'Unknown Product',
//             category: 'Household', // Category from the API's top level is "Household Cleaning"
//             image: image,
//             hoverImage: hoverImage,
//         };
//     });
// };

// // 2. ProductCard Component (Updated to remove price/discount and standardize hover text)
// const ProductCard = ({ product }: { product: Product }) => {
//     return (
//         <div className="group flex flex-col gap-3 cursor-pointer">

//             {/* Image Container with Hover Swap */}
//             <div className="relative w-full aspect-[4/5] bg-[#F4F4F4] rounded-[5px] overflow-hidden">

//                 {/* Discount Badge - REMOVED */}

//                 {/* Main Product Image (Visible by default, fades out on hover) */}
//                 <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
//                     <img
//                         src={product.image}
//                         alt={product.title}
//                         // Use key to force image re-render if src changes (good practice for dynamic images)
//                         key={product.image}
//                         className="w-full h-full object-cover object-center mix-blend-multiply"
//                     />
//                 </div>


//                 {/* Hover Image (Slides in and scales up) */}
//                 <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
//                     <img
//                         src={product.hoverImage}
//                         alt={`${product.title} texture`}
//                         key={product.hoverImage}
//                         className="w-full h-full object-cover object-center mix-blend-multiply"
//                     />
//                 </div>
//             </div>

//             {/* Product Details with "Quick Add" Animation */}
//             <div className="flex justify-between items-end px-1 h-10">
//                 <div className="flex flex-col gap-1">
//                     <p className="text-[12px] font-medium text-gray-400 uppercase tracking-wide">
//                         {product.category}
//                     </p>
//                     <h3 className="text-[11px] md:text-[12px] font-medium text-gray-900 leading-tight">
//                         {product.title}
//                     </h3>

//                 </div>

//                 {/* Price / Quick Add Swap Area - Simplified to only show Quick Add */}
//                 <div className="relative h-5 overflow-hidden w-24 text-right">
//                     {/* Quick Add: Slides in from bottom on hover */}
//                     {/* Note: The old price element was removed, leaving only the 'Quick Add' element. */}
//                     <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
//                         <span className="text-[13px] font-normal text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
//                             View
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // 1. Updated FullCard component to fetch data dynamically
// const FullCardAll = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             const apiEndpoint = '/wp-json/custom/v1/getProductByCategory/household-cleaning';
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();

//                 // Check if data is an object and contains a 'products' array
//                 if (data && data.products && Array.isArray(data.products)) {
//                     // Transform and set the fetched data
//                     const transformedProducts = transformApiData(data.products);
//                     setProducts(transformedProducts);
//                 } else {
//                     // This handles the case where the API call succeeds but returns unexpected data
//                     throw new Error('Invalid product data structure received from API.');
//                 }
//             } catch (err: any) {
//                 console.error("Error fetching products:", err);
//                 // Use a more user-friendly error message for the UI
//                 setError(`Failed to load products. Check the network connection and API endpoint.`);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     // --- Loading, Error, and Empty States ---

//     if (loading) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center">
//                 <p>Loading products...</p>
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center text-red-600">
//                 <p>{error}</p>
//             </section>
//         );
//     }

//     if (products.length === 0) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center">
//                 <p>No products found in this category.</p>
//             </section>
//         );
//     }

//     // --- Main Render ---

//     return (
//         <section className="w-full templateContainer px-6 py-12">

//             {/* Header Section */}
//             <div className="flex flex-row justify-between items-baseline mb-8 border-b border-transparent">
//                 <div className="flex items-baseline gap-6">
//                     <button className="text-2xl font-medium text-black cursor-pointer">
//                         Trending
//                     </button>

//                 </div>


//             </div>

//             {/* Product Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//                 {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>

//             <div className="mt-8 sm:hidden flex justify-center">
//                 <a href="/all" className="text-sm font-medium text-black underline underline-offset-4">
//                     Shop all
//                 </a>
//             </div>
//         </section>
//     );
// };

// export default FullCardAll;



// // D:\mktgroup\app\category\[slug]\page.tsx
// "use client"; // Required for using React hooks and next/navigation hooks

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'; // <-- Import useParams for dynamic route segments


// // Define the structure for the product data
// interface Product {
//     id: number;
//     title: string;
//     category: string;
//     image: string;
//     hoverImage: string;
//     categoryproduct_specification: string;
// }

// /**
//  * Transforms the raw API product data into the structured 'Product' interface.
//  */
// const transformApiData = (apiProducts: any[]): Product[] => {
//     return apiProducts.map((p, index) => {
//         // Use first part of the title for a cleaner look
//         const title = p.title.split(' - ')[0];

//         // Use the full URL directly from the API response
//         const primaryImageURL = p.product_gallery_images[0] || '';
//         // Use the second image as hover, or the first if only one exists
//         const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';

//         const image = primaryImageURL;
//         const hoverImage = hoverImageURL;

//         const categoryLabel = 'Category Products'; // Placeholder, as the actual category name isn't in the product item

//         return {
//             id: index + 1, // Using index as a temporary ID
//             title: title || 'Unknown Product',
//             category: categoryLabel,
//             image: image,
//             hoverImage: hoverImage,
//         };
//     });
// };

// // ProductCard Component (No change)
// const ProductCard = ({ product }: { product: Product }) => {
//     return (
//         <div className="group flex flex-col gap-3 cursor-pointer">

//             {/* Image Container with Hover Swap */}
//             <div className="relative w-full aspect-[4/5] bg-[#F4F4F4] rounded-[5px] overflow-hidden">

//                 {/* Main Product Image (Visible by default, fades out on hover) */}
//                 <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
//                     <img
//                         src={product.image}
//                         alt={product.title}
//                         key={product.image}
//                         className="w-full h-full object-cover object-center mix-blend-multiply"
//                     />
//                 </div>


//                 {/* Hover Image (Slides in and scales up) */}
//                 <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
//                     <img
//                         src={product.hoverImage}
//                         alt={`${product.title} texture`}
//                         key={product.hoverImage}
//                         className="w-full h-full object-cover object-center mix-blend-multiply"
//                     />
//                 </div>
//             </div>

//             {/* Product Details with "Quick Add" Animation */}
//             <div className="flex justify-between items-end px-1 h-10">
//                 <div className="flex flex-col gap-1">
//                     <p className="text-[12px] font-medium text-gray-400 uppercase tracking-wide">
//                         {product.category}
//                     </p>
//                     <h3 className="text-[11px] md:text-[12px] font-medium text-gray-900 leading-tight">
//                         {product.title}
//                     </h3>

//                 </div>

//                 <div className="relative h-5 overflow-hidden w-24 text-right">

//                     {/* Price: Slides up on hover */}
//                     <div className="absolute right-0 bottom-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full flex flex-col items-end">
//                         {product.categoryproduct_specification}
//                     </div>

//                     {/* Quick Add: Slides in from bottom on hover */}
//                     <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
//                         <span className="text-[13px] font-bold text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
//                             QUICK ADD
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             );
// };

// // The main page component
// const FullCardAll = () => {
//     // 1. Get the slug from the URL using the useParams hook
//     const params = useParams();
//             // Ensure slug is a string (handle potential string[] from catch-all routes)
//             const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//             const [products, setProducts] = useState<Product[]>([]);
//             const [loading, setLoading] = useState(true);
//             const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//                 // Reset state on slug change before fetching
//                 setLoading(true);
//             setError(null);
//             setProducts([]);

//         const fetchProducts = async () => {
//             if (!slug) {
//                 setError("Category slug is missing.");
//             setLoading(false);
//             return;
//             }

//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError("API Base URL is not configured in .env.local.");
//             setLoading(false);
//             return;
//             }

//             // 2. DYNAMICALLY construct the API endpoint using the slug
//             const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//             if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//             const data = await response.json();

//             if (data && data.products && Array.isArray(data.products)) {
//                     // Transform and set the fetched data
//                     const transformedProducts = transformApiData(data.products);
//             setProducts(transformedProducts);
//                 } else {
//                 // Handle case where API returns success but no product array
//                 setProducts([]);
//                     // throw new Error('No product data received from API.');
//                 }
//             } catch (err: any) {
//                 console.error("Error fetching products:", err);
//             setError(`Failed to load products for category: ${slug}. Check connection and API endpoint.`);
//             } finally {
//                 setLoading(false);
//             }
//         };

//             fetchProducts();
//     }, [slug]); // DEPENDENCY: Rerun the effect whenever the slug changes

//             // --- Loading, Error, and Empty States ---

//             if (loading) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p className="text-gray-500">Loading products for category: **{slug || '...'}**...</p>
//             </section>
//             );
//     }

//             if (error) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error}</p>
//             </section>
//             );
//     }

//             if (products.length === 0) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p>No products found in the category **{slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}**.</p>
//             </section>
//             );
//     }

//     // --- Main Render ---

//     // Function to format slug for display (e.g., "household-cleaning" -> "Household Cleaning")
//     const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


//             return (
//             <section className="w-full templateContainer px-6 py-12 pt-36">

//                 {/* Header Section - Dynamically show the category name or slug */}
//                 <div className="flex flex-row justify-between items-baseline mb-8 border-b border-transparent">
//                     <div className="flex items-baseline gap-6">
//                         <h2 className="text-2xl font-medium text-black">
//                             Products in: {formattedSlug}
//                         </h2>
//                     </div>
//                 </div>

//                 {/* Product Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//                     {products.map((product) => (
//                         <ProductCard key={product.id} product={product} />
//                     ))}
//                 </div>

//                 <div className="mt-8 sm:hidden flex justify-center">
//                     <a href="/all" className="text-sm font-medium text-black underline underline-offset-4">
//                         Shop all
//                     </a>
//                 </div>
//             </section>
//             );
// };

//             export default FullCardAll;



// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'; // <-- Import useParams for dynamic route segments


// // Define the structure for the product data
// interface Product {
//     id: number;
//     title: string;
//     category: string;
//     image: string;
//     hoverImage: string;
//     // ADDED: New field for product specification
//     product_specification: string;
// }

// /**
//  * Transforms the raw API product data into the structured 'Product' interface.
//  */
// const transformApiData = (apiProducts: any[]): Product[] => {
//     return apiProducts.map((p, index) => {
//         // Use first part of the title for a cleaner look
//         const title = p.title.split(' - ')[0];

//         // Use the full URL directly from the API response
//         const primaryImageURL = p.product_gallery_images[0] || '';
//         // Use the second image as hover, or the first if only one exists
//         const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';

//         const image = primaryImageURL;
//         const hoverImage = hoverImageURL;

//         const categoryLabel = 'Household Cleaning'; // Placeholder, as the actual category name isn't in the product item

//         return {
//             id: index + 1, // Using index as a temporary ID
//             title: title || 'Unknown Product',
//             category: categoryLabel,
//             image: image,
//             hoverImage: hoverImage,
//             // MODIFIED: Map the product_specification from API to the product object
//             product_specification: p.product_specification || '',
//         };
//     });
// };

// // ProductCard Component (MODIFIED to use dynamic specification)
// const ProductCard = ({ product }: { product: Product }) => {
//     return (
//         <div className="group flex flex-col gap-3 cursor-pointer">

//             {/* Image Container with Hover Swap */}
//             <div className="relative w-full aspect-[4/5] bg-[#F4F4F4] rounded-[5px] overflow-hidden">

//                 {/* Main Product Image (Visible by default, fades out on hover) */}
//                 <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
//                     <img
//                         src={product.image}
//                         alt={product.title}
//                         key={product.image}
//                         className="w-full h-full object-cover object-center mix-blend-multiply"
//                     />
//                 </div>


//                 {/* Hover Image (Slides in and scales up) */}
//                 <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
//                     <img
//                         src={product.hoverImage}
//                         alt={`${product.title} texture`}
//                         key={product.hoverImage}
//                         className="w-full h-full object-cover object-center mix-blend-multiply"
//                     />
//                 </div>
//             </div>

//             {/* Product Details with "Quick Add" Animation */}
//             <div className="flex justify-between items-end px-1 h-10">
//                 <div className="flex flex-col gap-1">
//                     <p className="text-[12px] font-medium text-gray-400 uppercase tracking-wide">
//                         {product.category}
//                     </p>
//                     <h3 className="text-[11px] md:text-[12px] font-medium text-gray-900 leading-tight">
//                         {product.title}
//                     </h3>

//                 </div>

//                 <div className="relative h-5 overflow-hidden w-24 text-right">

//                     {/* Price/Specification: Slides up on hover */}
//                     <div className="absolute right-0 bottom-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full flex flex-col items-end">
//                         {/* MODIFIED: Display the dynamic product_specification */}
//                         <span className="text-[11px] font-medium text-gray-500">
//                             {product.product_specification}
//                         </span>
//                     </div>

//                     {/* Quick Add: Slides in from bottom on hover */}
//                     <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
//                         <span className="text-[13px] font-bold text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
//                             View
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div> // Added closing tag for ProductCard
//     );
// };

// // The main page component (No changes needed here for specification logic)
// const FullCardAll = () => {
//     // 1. Get the slug from the URL using the useParams hook
//     const params = useParams();
//     // Ensure slug is a string (handle potential string[] from catch-all routes)
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         // Reset state on slug change before fetching
//         setLoading(true);
//         setError(null);
//         setProducts([]);

//         const fetchProducts = async () => {
//             if (!slug) {
//                 setError("Category slug is missing.");
//                 setLoading(false);
//                 return;
//             }

//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError("API Base URL is not configured in .env.local.");
//                 setLoading(false);
//                 return;
//             }

//             // 2. DYNAMICALLY construct the API endpoint using the slug
//             const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();

//                 if (data && data.products && Array.isArray(data.products)) {
//                     // Transform and set the fetched data
//                     const transformedProducts = transformApiData(data.products);
//                     setProducts(transformedProducts);
//                 } else {
//                     // Handle case where API returns success but no product array
//                     setProducts([]);
//                     // throw new Error('No product data received from API.');
//                 }
//             } catch (err: any) {
//                 console.error("Error fetching products:", err);
//                 setError(`Failed to load products for category: ${slug}. Check connection and API endpoint.`);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [slug]); // DEPENDENCY: Rerun the effect whenever the slug changes

//     // --- Loading, Error, and Empty States ---

//     if (loading) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p className="text-gray-500">Loading products for category: {slug || '...'}...</p>
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error}</p>
//             </section>
//         );
//     }

//     if (products.length === 0) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p>No products found in the category **{slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}**.</p>
//             </section>
//         );
//     }

//     // --- Main Render ---

//     // Function to format slug for display (e.g., "household-cleaning" -> "Household Cleaning")
//     const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


//     return (
//         <section className="w-full templateContainer px-6 py-12 pt-36">

//             {/* Header Section - Dynamically show the category name or slug */}
//             <div className="flex flex-row justify-between items-baseline mb-8 border-b border-transparent">
//                 <div className="flex items-baseline gap-6">
//                     <h2 className="text-2xl font-medium text-black">
//                         Products in: {formattedSlug}
//                     </h2>
//                 </div>
//             </div>

//             {/* Product Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//                 {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>

//             <div className="mt-8 sm:hidden flex justify-center">
//                 <a href="/all" className="text-sm font-medium text-black underline underline-offset-4">
//                     Shop all
//                 </a>
//             </div>
//         </section>
//     );
// };

// export default FullCardAll;


// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';

// // Define the structure for the product data
// interface Product {
//     id: number;
//     title: string;
//     category: string;
//     image: string;
//     hoverImage: string;
//     // ADDED: New field for product specification
//     product_specification: string;
// }

// // 💡 NEW INTERFACE: Define the expected structure for a raw API product item.
// // This is the best way to eliminate the 'any' type in transformApiData.
// // Based on the usage, it needs these properties:
// interface ApiProduct {
//     title: string;
//     product_gallery_images: string[];
//     product_specification?: string; // Assuming it might be optional
//     // Add any other properties you access from the raw data here
// }

// /**
//  * Transforms the raw API product data into the structured 'Product' interface.
//  * @param apiProducts - Array of raw product objects from the API.
//  */
// // 1. FIX: Changed 'any[]' to 'ApiProduct[]' for type safety.
// const transformApiData = (apiProducts: ApiProduct[]): Product[] => {
//     return apiProducts.map((p, index) => {
//         // Use first part of the title for a cleaner look
//         const title = p.title.split(' - ')[0];

//         // Use the full URL directly from the API response
//         const primaryImageURL = p.product_gallery_images[0] || '';
//         // Use the second image as hover, or the first if only one exists
//         const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';

//         const image = primaryImageURL;
//         const hoverImage = hoverImageURL;

//         const categoryLabel = 'Household Cleaning'; // Placeholder, as the actual category name isn't in the product item

//         return {
//             id: index + 1, // Using index as a temporary ID
//             title: title || 'Unknown Product',
//             category: categoryLabel,
//             image: image,
//             hoverImage: hoverImage,
//             // MODIFIED: Map the product_specification from API to the product object
//             product_specification: p.product_specification || '',
//         };
//     });
// };

// // ProductCard Component (MODIFIED to use dynamic specification)
// const ProductCard = ({ product }: { product: Product }) => {
//     return (
//         <div className="group flex flex-col gap-3 cursor-pointer">

//             {/* Image Container with Hover Swap */}
//             <div className="relative w-full aspect-[3/4] bg-white rounded-[5px] overflow-hidden">

//                 {/* Main Product Image (Visible by default, fades out on hover) */}
//                 <div className="absolute inset-0 transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
//                     <img
//                         src={product.image}
//                         alt={product.title}
//                         key={product.image}
//                         className="w-full h-full object-contain object-center "
//                     />
//                 </div>


//                 {/* Hover Image (Slides in and scales up) */}
//                 <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
//                     <img
//                         src={product.hoverImage}
//                         alt={`${product.title} texture`}
//                         key={product.hoverImage}
//                         className="w-full h-full object-contain object-center "
//                     />
//                 </div>
//             </div>

//             {/* Product Details with "Quick Add" Animation */}
//             <div className="flex justify-between items-end px-1 h-10">
//                 <div className="flex flex-col gap-1">
//                     <p className="text-[12px] font-normal text-gray-600 uppercase tracking-wide">
//                         {product.category}
//                     </p>
//                     <h3 className="text-[11px] md:text-[13px] font-normal text-gray-900 leading-tight">
//                         {product.title}
//                     </h3>

//                 </div>

//                 <div className="relative h-5 overflow-hidden w-24 text-right">



//                     {/* Quick Add: Slides in from bottom on hover */}
//                     <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
//                         <span className="text-[13px] font-normal text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
//                             View
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // The main page component (No changes needed here for specification logic)
// const FullCardAll = () => {
//     // 1. Get the slug from the URL using the useParams hook
//     const params = useParams();
//     // Ensure slug is a string (handle potential string[] from catch-all routes)
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         // Reset state on slug change before fetching
//         setLoading(true);
//         setError(null);
//         setProducts([]);

//         const fetchProducts = async () => {
//             if (!slug) {
//                 setError("Category slug is missing.");
//                 setLoading(false);
//                 return;
//             }

//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError("API Base URL is not configured in .env.local.");
//                 setLoading(false);
//                 return;
//             }

//             // 2. DYNAMICALLY construct the API endpoint using the slug
//             const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();

//                 if (data && data.products && Array.isArray(data.products)) {
//                     // Transform and set the fetched data
//                     // 💡 NOTE: The raw data is passed to transformApiData which now expects ApiProduct[]
//                     const transformedProducts = transformApiData(data.products);
//                     setProducts(transformedProducts);
//                 } else {
//                     // Handle case where API returns success but no product array
//                     setProducts([]);
//                     // throw new Error('No product data received from API.');
//                 }
//             }
//             // 2. FIX: The 'any' type on the catch error is changed to 'unknown'.
//             // This requires a type check when using the error object (err).
//             catch (err) { // err is implicitly of type 'unknown'
//                 console.error("Error fetching products:", err);
//                 // Type check 'err' before assuming it has a 'message' property
//                 const errorMessage = err instanceof Error
//                     ? err.message
//                     : `Failed to load products for category: ${slug}. Check connection and API endpoint.`;

//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [slug]); // DEPENDENCY: Rerun the effect whenever the slug changes

//     // --- Loading, Error, and Empty States ---

//     if (loading) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p className="text-gray-500">Loading products for category: {slug || '...'}...</p>
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error}</p>
//             </section>
//         );
//     }

//     if (products.length === 0) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p>No products found in the category **{slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}**.</p>
//             </section>
//         );
//     }

//     // --- Main Render ---

//     // Function to format slug for display (e.g., "household-cleaning" -> "Household Cleaning")
//     const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


//     return (
//         <section className="w-full templateContainer px-6 py-12 pt-36">

//             {/* Header Section - Dynamically show the category name or slug */}
//             <div className="flex flex-row justify-between items-baseline mb-8 border-b border-transparent">
//                 <div className="flex items-baseline gap-6">
//                     <h2 className="text-[22px] font-normal text-black">
//                         Products : {formattedSlug}
//                     </h2>
//                 </div>
//             </div>

//             {/* Product Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//                 {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>

//             <div className="mt-8 sm:hidden flex justify-center">
//                 <a href="/all" className="text-sm font-medium text-black underline underline-offset-4">
//                     Shop all
//                 </a>
//             </div>
//         </section>
//     );
// };

// export default FullCardAll;

////////////////////////////////////////// working ///

// // D:\mktgroup\app\category\[slug]\page.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// // 💡 MODIFIED: Import the Next.js Image component
// import Image from 'next/image';

// // Define the structure for the product data
// interface Product {
//     id: number;
//     title: string;
//     category: string;
//     image: string;
//     hoverImage: string;
//     // ADDED: New field for product specification
//     product_specification: string;
// }

// // 💡 NEW INTERFACE: Define the expected structure for a raw API product item.
// interface ApiProduct {
//     title: string;
//     product_gallery_images: string[];
//     product_specification?: string; // Assuming it might be optional
//     // Add any other properties you access from the raw data here
// }

// /**
//  * Transforms the raw API product data into the structured 'Product' interface.
//  * @param apiProducts - Array of raw product objects from the API.
//  */
// const transformApiData = (apiProducts: ApiProduct[]): Product[] => {
//     return apiProducts.map((p, index) => {
//         // Use first part of the title for a cleaner look
//         const title = p.title.split(' - ')[0];

//         // Use the full URL directly from the API response
//         const primaryImageURL = p.product_gallery_images[0] || '';
//         // Use the second image as hover, or the first if only one exists
//         const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';

//         const image = primaryImageURL;
//         const hoverImage = hoverImageURL;

//         const categoryLabel = 'Household Cleaning'; // Placeholder, as the actual category name isn't in the product item

//         return {
//             id: index + 1, // Using index as a temporary ID
//             title: title || 'Unknown Product',
//             category: categoryLabel,
//             image: image,
//             hoverImage: hoverImage,
//             // MODIFIED: Map the product_specification from API to the product object
//             product_specification: p.product_specification || '',
//         };
//     });
// };

// // ProductCard Component (MODIFIED to use Next.js Image with explicit width and height)
// const ProductCard = ({ product }: { product: Product }) => {
//     // 💡 Defined a proportional size (3:4 aspect ratio)
//     const IMAGE_WIDTH = 400;
//     const IMAGE_HEIGHT = 533;

//     return (
//         <div className="group flex flex-col gap-3 cursor-pointer">

//             {/* Image Container with Hover Swap */}
//             {/* 💡 MODIFIED: Removed 'aspect-[3/4]' class. The Image component's dimensions
//                will now dictate the space reservation, using intrinsic/responsive layout. */}
//             <div className="relative w-full bg-white rounded-[5px] overflow-hidden">

//                 {/* Main Product Image (Visible by default, fades out on hover) */}

//                 <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
//                     <Image
//                         src={product.image}
//                         alt={product.title}
//                         key={product.image}
//                         // 💡 ADDED: Explicit width and height
//                         width={IMAGE_WIDTH}
//                         height={IMAGE_HEIGHT}
//                         // 💡 MODIFIED: 'className' to ensure the image scales correctly within the responsive grid column
//                         className="w-full h-full object-contain object-center"
//                     />
//                 </div>


//                 {/* Hover Image (Slides in and scales up) */}

//                 <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
//                     <Image
//                         src={product.hoverImage}
//                         alt={`${product.title} texture`}
//                         key={product.hoverImage}
//                         // 💡 ADDED: Explicit width and height
//                         width={IMAGE_WIDTH}
//                         height={IMAGE_HEIGHT}
//                         // 💡 MODIFIED: 'className'
//                         className="w-full h-full object-contain object-center"
//                     />
//                 </div>
//             </div>

//             {/* Product Details with "Quick Add" Animation */}
//             <div className="flex justify-between items-end px-1">
//                 <div className="flex flex-col py-2 gap-1">
//                     <p className="text-[10px] md:text-[12px] font-normal text-gray-500 uppercase tracking-wide">
//                         {product.category}
//                     </p>
//                     <h3 className="text-[11px] md:text-[13px] font-normal text-gray-900 leading-tight">
//                         {product.title}
//                     </h3>

//                 </div>

//                 <div className="relative h-5 overflow-hidden w-24 text-right">



//                     {/* Quick Add: Slides in from bottom on hover */}
//                     <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
//                         <span className="text-[13px] font-normal text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
//                             View
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// // The main page component (No changes needed here for specification logic)
// const FullCardAll = () => {
//     // 1. Get the slug from the URL using the useParams hook
//     const params = useParams();
//     // Ensure slug is a string (handle potential string[] from catch-all routes)
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         // Reset state on slug change before fetching
//         setLoading(true);
//         setError(null);
//         setProducts([]);

//         const fetchProducts = async () => {
//             if (!slug) {
//                 setError("Category slug is missing.");
//                 setLoading(false);
//                 return;
//             }

//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError("API Base URL is not configured in .env.local.");
//                 setLoading(false);
//                 return;
//             }

//             // 2. DYNAMICALLY construct the API endpoint using the slug
//             const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();

//                 if (data && data.products && Array.isArray(data.products)) {
//                     // Transform and set the fetched data
//                     // 💡 NOTE: The raw data is passed to transformApiData which now expects ApiProduct[]
//                     const transformedProducts = transformApiData(data.products);
//                     setProducts(transformedProducts);
//                 } else {
//                     // Handle case where API returns success but no product array
//                     setProducts([]);
//                     // throw new Error('No product data received from API.');
//                 }
//             }
//             // 2. FIX: The 'any' type on the catch error is changed to 'unknown'.
//             // This requires a type check when using the error object (err).
//             catch (err) { // err is implicitly of type 'unknown'
//                 console.error("Error fetching products:", err);
//                 // Type check 'err' before assuming it has a 'message' property
//                 const errorMessage = err instanceof Error
//                     ? err.message
//                     : `Failed to load products for category: ${slug}. Check connection and API endpoint.`;

//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [slug]); // DEPENDENCY: Rerun the effect whenever the slug changes

//     // --- Loading, Error, and Empty States ---

//     if (loading) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p className="text-gray-500">Loading products for category: {slug || '...'}...</p>
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error}</p>
//             </section>
//         );
//     }

//     if (products.length === 0) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p>No products found in the category **{slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}**.</p>
//             </section>
//         );
//     }

//     // --- Main Render ---

//     // Function to format slug for display (e.g., "household-cleaning" -> "Household Cleaning")
//     const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


//     return (
//         <section className="w-full templateContainer px-6 py-12 pt-36">

//             {/* Header Section - Dynamically show the category name or slug */}
//             <div className="flex flex-row justify-between items-baseline mb-8 border-b border-transparent">
//                 <div className="flex items-baseline gap-6">
//                     <h2 className="text-[22px] font-normal text-black">
//                         Products : {formattedSlug}
//                     </h2>
//                 </div>
//             </div>

//             {/* Product Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//                 {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>

//             <div className="mt-8  flex justify-center">
//                 <a href="/all" className="text-sm font-medium text-black underline underline-offset-4">
//                     Shop all
//                 </a>
//             </div>
//         </section>
//     );
// };

// export default FullCardAll;


// // D:\mktgroup\app\category\[slug]\page.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link'; // Import Link
// import NewBreadCrumb from '@/app/components/NewBreadCrumb';

// // Define the structure for the product data
// interface Product {
//     id: number;
//     title: string;
//     slug: string; // Crucial for linking
//     category: string;
//     image: string;
//     hoverImage: string;
//     product_specification: string;
// }

// // Define the expected structure for a raw API product item.
// interface ApiProduct {
//     title: string;
//     slug: string;
//     product_gallery_images: string[];
//     product_specification?: string;
// }

// /**
//  * Transforms the raw API product data into the structured 'Product' interface.
//  * @param apiProducts - Array of raw product objects from the API.
//  */
// const transformApiData = (apiProducts: ApiProduct[]): Product[] => {
//     return apiProducts.map((p, index) => {
//         const title = p.title.split(' - ')[0];

//         const primaryImageURL = p.product_gallery_images[0] || '';
//         const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';

//         const image = primaryImageURL;
//         const hoverImage = hoverImageURL;

//         const categoryLabel = 'Household Cleaning'; // Placeholder

//         return {
//             id: index + 1,
//             title: title || 'Unknown Product',
//             slug: p.slug,
//             category: categoryLabel,
//             image: image,
//             hoverImage: hoverImage,
//             product_specification: p.product_specification || '',
//         };
//     });
// };

// // ProductCard Component (Uses Link to go to /product/[slug])
// const ProductCard = ({ product }: { product: Product }) => {
//     const IMAGE_WIDTH = 400;
//     const IMAGE_HEIGHT = 533;

//     return (
//         <Link
//             href={`/product/${product.slug}`}
//             className="group flex flex-col gap-3 cursor-pointer"
//         >

//             {/* Image Container with Hover Swap */}
//             <div className="relative w-full bg-white rounded-[5px] overflow-hidden">

//                 {/* Main Product Image */}
//                 <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
//                     <Image
//                         src={product.image}
//                         alt={product.title}
//                         key={product.image}
//                         width={IMAGE_WIDTH}
//                         height={IMAGE_HEIGHT}
//                         className="w-full h-full object-contain object-center"
//                         unoptimized
//                     />
//                 </div>


//                 {/* Hover Image */}
//                 <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
//                     <Image
//                         src={product.hoverImage}
//                         alt={`${product.title} texture`}
//                         key={product.hoverImage}
//                         width={IMAGE_WIDTH}
//                         height={IMAGE_HEIGHT}
//                         className="w-full h-full object-contain object-center"
//                         unoptimized
//                     />
//                 </div>
//             </div>

//             {/* Product Details with "Quick Add" Animation */}
//             <div className="flex justify-between items-end px-1">
//                 <div className="flex flex-col py-2 gap-1">
//                     <p className="text-[10px] md:text-[12px] font-normal text-gray-500 uppercase tracking-wide">
//                         {product.category}
//                     </p>
//                     <h3 className="text-[11px] md:text-[13px] font-normal text-gray-900 leading-tight">
//                         {product.title}
//                     </h3>
//                 </div>

//                 <div className="relative h-5 overflow-hidden w-24 text-right">
//                     {/* Quick Add: Slides in from bottom on hover */}
//                     <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
//                         <span className="text-[13px] font-normal text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
//                             View
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// // The main page component
// const FullCardAll = () => {
//     const params = useParams();
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         setLoading(true);
//         setError(null);
//         setProducts([]);

//         const fetchProducts = async () => {
//             if (!slug) {
//                 setError("Category slug is missing.");
//                 setLoading(false);
//                 return;
//             }

//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError("API Base URL is not configured in .env.local.");
//                 setLoading(false);
//                 return;
//             }

//             // API endpoint to fetch products by category slug
//             const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();

//                 if (data && data.products && Array.isArray(data.products)) {
//                     const transformedProducts = transformApiData(data.products);
//                     setProducts(transformedProducts);
//                 } else {
//                     setProducts([]);
//                 }
//             }
//             catch (err) {
//                 console.error("Error fetching products:", err);
//                 const errorMessage = err instanceof Error
//                     ? err.message
//                     : `Failed to load products for category: ${slug}. Check connection and API endpoint.`;

//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [slug]);

//     if (loading) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p className="text-gray-500">Loading products for category: {slug || '...'}...</p>
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error}</p>
//             </section>
//         );
//     }

//     if (products.length === 0) {
//         const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p>No products found in the category **{formattedSlug}**.</p>
//             </section>
//         );
//     }

//     const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');


//     return (
//         <section className="w-full templateContainer px-6 py-12 pt-36">
//             <NewBreadCrumb
//                 title={data?.title}
//                 page={data?.title}
//                 img="/dummy-image/aboutbanner.jpg"
//                 version2={false}
//             />
//             {/* Header Section - Dynamically show the category name or slug */}
//             <div className="flex flex-row justify-between items-baseline mb-8 border-b border-transparent">
//                 <div className="flex items-baseline gap-6">
//                     <h2 className="text-[22px] font-normal text-black">
//                         Products : {formattedSlug}
//                     </h2>
//                 </div>
//             </div>


//             {/* Product Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//                 {products.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>


//         </section>
//     );
// };

// export default FullCardAll;


/////////////////////////////////////////////////////////

// // D:\mktgroup\app\category\[slug]\page.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link'; // Import Link
// import NewBreadCrumb from '@/app/components/NewBreadCrumb';

// // Define the structure for the product data
// interface Product {
//     id: number;
//     title: string;
//     slug: string; // Crucial for linking
//     category: string;
//     image: string;
//     hoverImage: string;
//     product_specification: string;
// }

// // Define the expected structure for a raw API product item.
// interface ApiProduct {
//     title: string;
//     slug: string;
//     product_gallery_images: string[];
//     product_specification?: string;
// }

// /**
//  * Transforms the raw API product data into the structured 'Product' interface.
//  * @param apiProducts - Array of raw product objects from the API.
//  */
// const transformApiData = (apiProducts: ApiProduct[]): Product[] => {
//     return apiProducts.map((p, index) => {
//         const title = p.title.split(' - ')[0];

//         const primaryImageURL = p.product_gallery_images[0] || '';
//         const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';

//         const image = primaryImageURL;
//         const hoverImage = hoverImageURL;

//         const categoryLabel = 'Household Cleaning'; // Placeholder

//         return {
//             id: index + 1,
//             title: title || 'Unknown Product',
//             slug: p.slug,
//             category: categoryLabel,
//             image: image,
//             hoverImage: hoverImage,
//             product_specification: p.product_specification || '',
//         };
//     });
// };

// // ProductCard Component (Uses Link to go to /product/[slug])
// const ProductCard = ({ product }: { product: Product }) => {
//     const IMAGE_WIDTH = 400;
//     const IMAGE_HEIGHT = 533;

//     return (
//         <Link
//             href={`/product/${product.slug}`}
//             className="group flex flex-col gap-3 cursor-pointer"
//         >

//             {/* Image Container with Hover Swap */}
//             <div className="relative w-full bg-white rounded-[5px] overflow-hidden">

//                 {/* Main Product Image */}
//                 <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
//                     <Image
//                         src={product.image}
//                         alt={product.title}
//                         key={product.image}
//                         width={IMAGE_WIDTH}
//                         height={IMAGE_HEIGHT}
//                         className="w-full h-full object-contain object-center"
//                         unoptimized
//                     />
//                 </div>


//                 {/* Hover Image */}
//                 <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
//                     <Image
//                         src={product.hoverImage}
//                         alt={`${product.title} texture`}
//                         key={product.hoverImage}
//                         width={IMAGE_WIDTH}
//                         height={IMAGE_HEIGHT}
//                         className="w-full h-full object-contain object-center"
//                         unoptimized
//                     />
//                 </div>
//             </div>

//             {/* Product Details with "Quick Add" Animation */}
//             <div className="flex justify-between items-end px-1">
//                 <div className="flex flex-col py-2 gap-1">
//                     <p className="text-[10px] md:text-[12px] font-normal text-gray-500 uppercase tracking-wide">
//                         {product.category}
//                     </p>
//                     <h3 className="text-[11px] md:text-[13px] font-normal text-gray-900 leading-tight">
//                         {product.title}
//                     </h3>
//                 </div>

//                 <div className="relative h-5 overflow-hidden w-24 text-right">
//                     {/* Quick Add: Slides in from bottom on hover */}
//                     <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
//                         <span className="text-[13px] font-normal text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
//                             View
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// // The main page component
// const FullCardAll = () => {
//     const params = useParams();
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         setLoading(true);
//         setError(null);
//         setProducts([]);

//         const fetchProducts = async () => {
//             if (!slug) {
//                 setError("Category slug is missing.");
//                 setLoading(false);
//                 return;
//             }

//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError("API Base URL is not configured in .env.local.");
//                 setLoading(false);
//                 return;
//             }

//             // API endpoint to fetch products by category slug
//             const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();

//                 if (data && data.products && Array.isArray(data.products)) {
//                     const transformedProducts = transformApiData(data.products);
//                     setProducts(transformedProducts);
//                 } else {
//                     setProducts([]);
//                 }
//             }
//             catch (err) {
//                 console.error("Error fetching products:", err);
//                 const errorMessage = err instanceof Error
//                     ? err.message
//                     : `Failed to load products for category: ${slug}. Check connection and API endpoint.`;

//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [slug]);

//     if (loading) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p className="text-gray-500">Loading products for category: {slug || '...'}...</p>
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error}</p>
//             </section>
//         );
//     }

//     if (products.length === 0) {
//         const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p>No products found in the category **{formattedSlug}**.</p>
//             </section>
//         );
//     }

//     const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//     if (products.length === 0) {
//         return (
//             // Re-use formattedSlug here for a consistent no-products message
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p>No products found in the category **{formattedSlug}**.</p>
//             </section>
//         );
//     }

//     return (
//         <section className="w-full">
//             <NewBreadCrumb
//                 title={formattedSlug} // Use the formatted category name
//                 page={formattedSlug}  // Use the formatted category name
//                 img="/dummy-image/Gemini_Generated_Image_74iw4t74iw4t74iw.png"
//                 version2={false}
//             />
//             <div className='templateContainer'>

//                 {/* Header Section - Dynamically show the category name or slug */}
//                 <div className="flex flex-row justify-center py-10 items-baseline mb-8 border-b border-transparent">
//                     <div className="flex items-baseline gap-6">
//                         <h2 className="text-[22px] font-normal text-black">
//                             {formattedSlug}
//                         </h2>
//                     </div>
//                 </div>


//                 {/* Product Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
//                     {products.map((product) => (
//                         <ProductCard key={product.id} product={product} />
//                     ))}
//                 </div>
//             </div>


//         </section>
//     );
// };

// export default FullCardAll;


// // D:\mktgroup\app\category\[slug]\page.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import NewBreadCrumb from '@/app/components/NewBreadCrumb';
// // 1. Import Framer Motion
// import { motion } from 'framer-motion';
// import { ProductListSkeleton } from '@/app/components/Skeletons';

// // --- Interfaces & Transform Functions (No Change) ---
// interface Product {
//     id: number;
//     title: string;
//     slug: string;
//     category: string;
//     image: string;
//     hoverImage: string;
//     product_specification: string;
// }

// interface ApiProduct {
//     title: string;
//     slug: string;
//     product_gallery_images: string[];
//     product_specification?: string;
// }

// const transformApiData = (apiProducts: ApiProduct[]): Product[] => {
//     return apiProducts.map((p, index) => {
//         const title = p.title.split(' - ')[0];
//         const primaryImageURL = p.product_gallery_images[0] || '';
//         const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';
//         const image = primaryImageURL;
//         const hoverImage = hoverImageURL;
//         const categoryLabel = 'Household Cleaning';

//         return {
//             id: index + 1,
//             title: title || 'Unknown Product',
//             slug: p.slug,
//             category: categoryLabel,
//             image: image,
//             hoverImage: hoverImage,
//             product_specification: p.product_specification || '',
//         };
//     });
// };


// const ProductCard = ({ product }: { product: Product }) => {
//     const IMAGE_WIDTH = 400;
//     const IMAGE_HEIGHT = 533;

//     return (
//         <Link
//             href={`/product/${product.slug}`}
//             className="group flex flex-col gap-3 cursor-pointer"
//         >
//             <div className="relative w-full bg-white rounded-[5px] overflow-hidden">
//                 <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
//                     <Image
//                         src={product.image}
//                         alt={product.title}
//                         key={product.image}
//                         width={IMAGE_WIDTH}
//                         height={IMAGE_HEIGHT}
//                         className="w-full h-full object-contain object-center"
//                         unoptimized
//                     />
//                 </div>
//                 <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
//                     <Image
//                         src={product.hoverImage}
//                         alt={`${product.title} texture`}
//                         key={product.hoverImage}
//                         width={IMAGE_WIDTH}
//                         height={IMAGE_HEIGHT}
//                         className="w-full h-full object-contain object-center"
//                         unoptimized
//                     />
//                 </div>
//             </div>

//             <div className="flex justify-between items-end px-1">
//                 <div className="flex flex-col py-2 gap-1">
//                     <p className="text-[10px] md:text-[12px] font-normal text-gray-500 uppercase tracking-wide">
//                         {formattedSlug}
//                     </p>
//                     <h3 className="text-[11px] md:text-[13px] font-normal text-gray-900 leading-tight">
//                         {product.title}
//                     </h3>
//                 </div>
//                 <div className="relative h-5 overflow-hidden w-24 text-right">
//                     <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
//                         <span className="text-[13px] font-normal text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
//                             View
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// // 2. Define Animation Variants
// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.1, // Faster stagger for products
//             when: "beforeChildren",
//         },
//     },
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.4 }
//     },
// };

// const FullCardAll = () => {
//     const params = useParams();
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         setLoading(true);
//         setError(null);
//         setProducts([]);

//         const fetchProducts = async () => {
//             if (!slug) {
//                 setError("Category slug is missing.");
//                 setLoading(false);
//                 return;
//             }

//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError("API Base URL is not configured in .env.local.");
//                 setLoading(false);
//                 return;
//             }

//             const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();

//                 if (data && data.products && Array.isArray(data.products)) {
//                     const transformedProducts = transformApiData(data.products);
//                     setProducts(transformedProducts);
//                 } else {
//                     setProducts([]);
//                 }
//             }
//             catch (err) {
//                 console.error("Error fetching products:", err);
//                 const errorMessage = err instanceof Error
//                     ? err.message
//                     : `Failed to load products for category: ${slug}. Check connection and API endpoint.`;

//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [slug]);

//     if (loading) {
//         return (
//             <section className="w-full pt-36">
//                 {/* Keep breadcrumb or header if you want, or just the skeleton */}
//                 <ProductListSkeleton />
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error}</p>
//             </section>
//         );
//     }

//     const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

//     if (products.length === 0) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p>No products found in the category **{formattedSlug}**.</p>
//             </section>
//         );
//     }

//     return (
//         <section className="w-full">
//             <NewBreadCrumb
//                 title={formattedSlug}
//                 page={formattedSlug}
//                 img="/dummy-image/Gemini_Generated_Image_74iw4t74iw4t74iw.png"
//                 version2={false}
//             />
//             <div className='templateContainer pb-10'>

//                 <div className="flex flex-row justify-center py-10 items-baseline mb-8 border-b border-transparent">
//                     <div className="flex items-baseline gap-6">
//                         <h2 className="text-[22px] font-normal text-black">
//                             {formattedSlug}
//                         </h2>
//                     </div>
//                 </div>

//                 {/* 3. Apply Animation to Product Grid */}
//                 <motion.div
//                     className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                 >
//                     {products.map((product) => (
//                         // 4. Wrap item in motion.div (key goes here)
//                         <motion.div key={product.id} variants={cardVariants}>
//                             <ProductCard product={product} />
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default FullCardAll;


///////////////////////////////////////////////////////////////////

// // D:\mktgroup\app\category\[slug]\page.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import NewBreadCrumb from '@/app/components/NewBreadCrumb';
// // 1. Import Framer Motion
// import { motion } from 'framer-motion';
// import { ProductListSkeleton } from '@/app/components/Skeletons';

// // --- Interfaces & Transform Functions (No Change) ---
// interface Product {
//     id: number;
//     title: string;
//     slug: string;
//     category: string;
//     image: string;
//     hoverImage: string;
//     product_specification: string;
// }

// interface ApiProduct {
//     title: string;
//     slug: string;
//     product_gallery_images: string[];
//     product_specification?: string;
// }

// const transformApiData = (apiProducts: ApiProduct[]): Product[] => {
//     return apiProducts.map((p, index) => {
//         const title = p.title.split(' - ')[0];
//         const primaryImageURL = p.product_gallery_images[0] || '';
//         const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';
//         const image = primaryImageURL;
//         const hoverImage = hoverImageURL;
//         const categoryLabel = 'Household Cleaning';

//         return {
//             id: index + 1,
//             title: title || 'Unknown Product',
//             slug: p.slug,
//             category: categoryLabel,
//             image: image,
//             hoverImage: hoverImage,
//             product_specification: p.product_specification || '',
//         };
//     });
// };

// // --- START: Updated ProductCard Component ---
// interface ProductCardProps {
//     product: Product;
//     // Added new prop to receive the formatted slug from the parent
//     categoryTitle: string;
// }

// // Updated component signature to accept categoryTitle
// const ProductCard = ({ product, categoryTitle }: ProductCardProps) => {
//     const IMAGE_WIDTH = 400;
//     const IMAGE_HEIGHT = 533;

//     return (
//         <Link
//             href={`/product/${product.slug}`}
//             className="group flex flex-col gap-3 cursor-pointer"
//         >
//             <div className="relative w-full bg-white rounded-[5px] overflow-hidden">
//                 <div className="transition-opacity duration-500 ease-in-out group-hover:opacity-0 z-10">
//                     <Image
//                         src={product.image}
//                         alt={product.title}
//                         key={product.image}
//                         width={IMAGE_WIDTH}
//                         height={IMAGE_HEIGHT}
//                         className="w-full h-full object-contain object-center"
//                         unoptimized
//                     />
//                 </div>
//                 <div className="absolute inset-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-105 z-0">
//                     <Image
//                         src={product.hoverImage}
//                         alt={`${product.title} texture`}
//                         key={product.hoverImage}
//                         width={IMAGE_WIDTH}
//                         height={IMAGE_HEIGHT}
//                         className="w-full h-full object-contain object-center"
//                         unoptimized
//                     />
//                 </div>
//             </div>

//             <div className="flex justify-between items-end px-1">
//                 <div className="flex flex-col py-2 gap-1">
//                     <p className="text-[10px] md:text-[12px] font-normal text-gray-500 uppercase tracking-wide">
//                         {/* Use the new prop here */}
//                         {categoryTitle}
//                     </p>
//                     <h3 className="text-[11px] md:text-[13px] font-normal text-gray-900 leading-tight">
//                         {product.title}
//                     </h3>
//                 </div>
//                 <div className="relative h-5 overflow-hidden w-24 text-right">
//                     <div className="absolute right-0 bottom-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
//                         <span className="text-[13px] font-normal text-gray-900 underline decoration-gray-300 underline-offset-4 hover:text-black hover:decoration-black">
//                             View
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     );
// };
// // --- END: Updated ProductCard Component ---

// // 2. Define Animation Variants
// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.1, // Faster stagger for products
//             when: "beforeChildren",
//         },
//     },
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.4 }
//     },
// };

// const FullCardAll = () => {
//     const params = useParams();
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         setLoading(true);
//         setError(null);
//         setProducts([]);

//         const fetchProducts = async () => {
//             if (!slug) {
//                 setError("Category slug is missing.");
//                 setLoading(false);
//                 return;
//             }

//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError("API Base URL is not configured in .env.local.");
//                 setLoading(false);
//                 return;
//             }

//             const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();

//                 if (data && data.products && Array.isArray(data.products)) {
//                     const transformedProducts = transformApiData(data.products);
//                     setProducts(transformedProducts);
//                 } else {
//                     setProducts([]);
//                 }
//             }
//             catch (err) {
//                 console.error("Error fetching products:", err);
//                 const errorMessage = err instanceof Error
//                     ? err.message
//                     : `Failed to load products for category: ${slug}. Check connection and API endpoint.`;

//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [slug]);

//     if (loading) {
//         return (
//             <section className="w-full pt-36">
//                 {/* Keep breadcrumb or header if you want, or just the skeleton */}
//                 <ProductListSkeleton />
//             </section>
//         );
//     }

//     if (error) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error}</p>
//             </section>
//         );
//     }

//     // formattedSlug is calculated here
//     const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

//     if (products.length === 0) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p>No products found in the category {formattedSlug}.</p>
//             </section>
//         );
//     }

//     return (
//         <section className="w-full">
//             <NewBreadCrumb
//                 title={formattedSlug}
//                 page={formattedSlug}
//                 img="/dummy-image/Gemini_Generated_Image_74iw4t74iw4t74iw.png"
//                 version2={false}
//             />
//             <div className='templateContainer pb-10'>

//                 <div className="flex flex-row justify-center py-10 items-baseline mb-8 border-b border-transparent">
//                     <div className="flex items-baseline gap-6">
//                         <h2 className="text-[22px] font-normal border-b-2 border-black text-black">
//                             {formattedSlug}
//                         </h2>
//                     </div>
//                 </div>

//                 {/* 3. Apply Animation to Product Grid */}
//                 <motion.div
//                     className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                 >
//                     {products.map((product) => (
//                         // 4. Wrap item in motion.div (key goes here)
//                         <motion.div key={product.id} variants={cardVariants}>
//                             <ProductCard
//                                 product={product}
//                                 // Pass the formattedSlug variable to the child component
//                                 categoryTitle={formattedSlug}
//                             />
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default FullCardAll;


// D:\mktgroup\app\category\[slug]\page.tsx
import { Metadata } from 'next';
import FullCardAll from './FullCardAll';
import NewBreadCrumb from '@/app/components/NewBreadCrumb';
// import { ProductListSkeleton } from '@/app/components/Skeletons';

// --- Interfaces & Transform Functions (No Change) ---
interface Product {
    id: number;
    title: string;
    slug: string;
    category: string;
    image: string;
    hoverImage: string;
    product_specification: string;
}

interface ApiProduct {
    title: string;
    slug: string;
    product_gallery_images: string[];
    product_specification?: string;
}

interface ApiCategoryResponse {
    category_slug: string;
    category_name: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    products: ApiProduct[];
}

const transformApiData = (apiProducts: ApiProduct[]): Product[] => {
    return apiProducts.map((p, index) => {
        const title = p.title.split(' - ')[0];
        const primaryImageURL = p.product_gallery_images[0] || '';
        const hoverImageURL = p.product_gallery_images[1] || p.product_gallery_images[0] || '';
        const image = primaryImageURL;
        const hoverImage = hoverImageURL;
        const categoryLabel = 'Household Cleaning';

        return {
            id: index + 1,
            title: title || 'Unknown Product',
            slug: p.slug,
            category: categoryLabel,
            image: image,
            hoverImage: hoverImage,
            product_specification: p.product_specification || '',
        };
    });
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
    const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${slug}`;
    const fullUrl = `${baseUrl}${apiEndpoint}`;

    try {
        const response = await fetch(fullUrl);
        if (!response.ok) throw new Error('Failed');
        const data: ApiCategoryResponse = await response.json();
        const { meta_title, meta_description, meta_keywords, category_name } = data;
        return {
            title: meta_title || `${category_name} | MKT Group`,
            description: meta_description || `Explore ${category_name} products and solutions.`,
            keywords: meta_keywords || `${category_name.toLowerCase()}, category, products`,
            metadataBase: new URL(baseUrl || 'http://localhost:3000'),
            alternates: {
                canonical: `${baseUrl}/category/${slug}`,
            },
        };
    } catch (e) {
        const formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        return {
            title: `${formattedSlug} | MKT Group`,
            description: `Explore ${formattedSlug} category.`,
            keywords: `${formattedSlug.toLowerCase()}, category, products`,
            metadataBase: new URL(baseUrl || 'http://localhost:3000'),
            alternates: {
                canonical: `${baseUrl}/category/${slug}`,
            },
        };
    }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let products: Product[] = [];
    let error: string | null = null;
    let formattedSlug = '';

    const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
    if (!slug) {
        error = "Category slug is missing.";
    } else if (!baseUrl) {
        error = "API Base URL is not configured in .env.local.";
    } else {
        try {
            const apiEndpoint = `/wp-json/custom/v1/getProductByCategory/${slug}`;
            const fullUrl = `${baseUrl}${apiEndpoint}`;

            const response = await fetch(fullUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data: ApiCategoryResponse = await response.json();

            if (data && data.products && Array.isArray(data.products)) {
                products = transformApiData(data.products);
                formattedSlug = data.category_name || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            } else {
                formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                error = 'No products found.';
            }
        } catch (err) {
            console.error("Error fetching products:", err);
            formattedSlug = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            error = err instanceof Error ? err.message : `Failed to load products for category: ${slug}. Check connection and API endpoint.`;
        }
    }

    if (error) {
        return (
            <>
                <NewBreadCrumb
                    title={formattedSlug}
                    page={formattedSlug}
                    img="/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.webp"
                    version2={false}
                />
                <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
                    <p>{error}</p>
                </section>
            </>
        );
    }

    return <FullCardAll products={products} error={null} formattedSlug={formattedSlug} />;
}