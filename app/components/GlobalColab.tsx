

/////////////////// static version ///////////////////


// // D:\mktgroup\app\components\GlobalColab.tsx
// "use client";


// import { ArrowRight } from 'lucide-react';

// const GlobalColab = () => {
//     return (

//         <section id="brand" className="relative w-full py-16 md:py-24 bg-white overflow-hidden">

//             {/* 1. Full-Cover Background Image Layer (Positioned ABSOLUTE) */}
//             {/* We will use a dedicated container for the image and its overlay */}
//             <div className="absolute inset-0 z-0">


//                 {/* 2. Texture Overlay (Placed on top of the image) */}
//                 <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" aria-hidden="true">
//                     {/* Placeholder for the texture code (SVG or Gradient) */}
//                     <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
//                 </div>


//             </div>


//             {/* Main Content Container (Positioned RELATIVE, z-index above image) */}
//             <div className="templateContainer px-4 md:px-6 relative z-20">
//                 {/* Top Content Section - Ensure text has good contrast over the image if needed */}
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
//                     {/* Left Column: Headings */}
//                     <div className="lg:w-1/2">
//                         <h6 className="text-[#D4AF37] uppercase tracking-wider text-sm mb-4">
//                             global Collaboration
//                         </h6>
//                         <h2 className="text-3xl md:text-4xl lg:text-[44px] font-normal text-gray-900 leading-tight">
//                             Collaborating With Top<br className="hidden md:block" /> Organic Organization.
//                         </h2>
//                     </div>

//                     {/* Right Column: Text & Link */}
//                     <div className="lg:w-1/2">
//                         <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-light">
//                             <strong className="text-gray-900 ">To keep things organized,</strong> we do not work with individual
//                             farmers. Instead, once we identify a state or location, we reach
//                             out to the farmers association or community leaders to help us
//                             identify experienced and committed farmers.
//                         </p>
//                         <a
//                             href="https://drfurithemes.com/farmart/about-us/"
//                             className="inline-flex items-center text-[#D4AF37] font-normal hover:text-[##D4AF37]/60 transition-colors group"
//                         >
//                             Read more
//                             <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Bottom Section: Brand Grid */}
//                 {/* Brand Grid is kept inside the main content container */}
//                 <div className="w-full border border-gray-200 bg-white">
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y  divide-gray-200">
//                         {/* Logo Items (BrandItem component definition remains the same) */}
//                         <BrandItem name="envato" src="/brand-logo/Col.jpg" height={50} width={124} />
//                         <BrandItem name="codecanyon" src="/brand-logo/Com.jpg" height={50} width={149} />
//                         <BrandItem name="themeforest" src="/brand-logo/clo.png" height={50} width={160} />
//                         <BrandItem name="envatotuts+" src="/brand-logo/dab.jpg" height={50} width={162} />
//                         <BrandItem name="audiojungle" src="/brand-logo/det.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/Dov.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/fa.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/gar.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/gil.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/har.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/hea.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/joh.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/lif.jpg" height={50} width={153} />
//                         {/* <BrandItem name="audiojungle" src="/brand-logo/lip.jpg" height={50} width={153} /> */}
//                         <BrandItem name="audiojungle" src="/brand-logo/nes.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/pam.jpg" height={50} width={153} />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // ... BrandItem component remains unchanged ...

// const BrandItem = ({ name, src, width, height }: { name: string, src: string, width: number, height: number }) => {
//     return (
//         <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//             <img
//                 src={src}
//                 alt={`${name} logo`}
//                 width={width}
//                 height={height}
//                 loading="lazy"
//                 className="max-h-12 w-auto "
//                 onError={(e) => {
//                     e.currentTarget.style.display = 'none';
//                     e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-400 font-bold text-lg uppercase">${name}</span>`;
//                 }}
//             />
//         </div>
//     );
// };

// export default GlobalColab;





// // D:\mktgroup\app\components\GlobalColab.tsx
// "use client";


// import { ArrowRight } from 'lucide-react';

// const GlobalColab = () => {
//     return (

//         <section id="brand" className="relative w-full py-16 md:py-24 bg-white overflow-hidden">


//             <div className="absolute inset-0 z-0">


//                 {/* 2. Texture Overlay (Placed on top of the image) */}
//                 <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" aria-hidden="true">
//                     {/* Placeholder for the texture code (SVG or Gradient) */}
//                     <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
//                 </div>


//             </div>


//             {/* Main Content Container (Positioned RELATIVE, z-index above image) */}
//             <div className="templateContainer px-4 md:px-6 relative z-20">
//                 {/* Top Content Section - Ensure text has good contrast over the image if needed */}
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
//                     {/* Left Column: Headings */}
//                     <div className="lg:w-1/2">
//                         <h6 className="text-[#D4AF37] uppercase tracking-wider text-sm mb-4">
//                             global Collaboration
//                         </h6>
//                         <h2 className="text-3xl md:text-4xl lg:text-[44px] font-normal text-gray-900 leading-tight">
//                             Collaborating With Top<br className="hidden md:block" /> Organic Organization.
//                         </h2>
//                     </div>

//                     {/* Right Column: Text & Link */}
//                     <div className="lg:w-1/2">
//                         <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-light">
//                             <strong className="text-gray-900 ">To keep things organized,</strong> we do not work with individual
//                             farmers. Instead, once we identify a state or location, we reach
//                             out to the farmers association or community leaders to help us
//                             identify experienced and committed farmers.
//                         </p>
//                         <a
//                             href="https://drfurithemes.com/farmart/about-us/"
//                             className="inline-flex items-center text-[#D4AF37] font-normal hover:text-[##D4AF37]/60 transition-colors group"
//                         >
//                             Read more
//                             <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Bottom Section: Brand Grid */}
//                 {/* Brand Grid is kept inside the main content container */}
//                 <div className="w-full border border-gray-200 bg-white">
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y  divide-gray-200">
//                         {/* Logo Items (BrandItem component definition remains the same) */}
//                         <BrandItem name="envato" src="/brand-logo/Col.jpg" height={50} width={124} />
//                         <BrandItem name="codecanyon" src="/brand-logo/Com.jpg" height={50} width={149} />
//                         <BrandItem name="themeforest" src="/brand-logo/clo.png" height={50} width={160} />
//                         <BrandItem name="envatotuts+" src="/brand-logo/dab.jpg" height={50} width={162} />
//                         <BrandItem name="audiojungle" src="/brand-logo/det.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/Dov.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/fa.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/gar.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/gil.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/har.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/hea.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/joh.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/lif.jpg" height={50} width={153} />
//                         {/* <BrandItem name="audiojungle" src="/brand-logo/lip.jpg" height={50} width={153} /> */}
//                         <BrandItem name="audiojungle" src="/brand-logo/nes.jpg" height={50} width={153} />
//                         <BrandItem name="audiojungle" src="/brand-logo/pam.jpg" height={50} width={153} />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // ... BrandItem component remains unchanged ...

// const BrandItem = ({ name, src, width, height }: { name: string, src: string, width: number, height: number }) => {
//     return (
//         <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//             <img
//                 src={src}
//                 alt={`${name} logo`}
//                 width={width}
//                 height={height}
//                 loading="lazy"
//                 className="max-h-12 w-auto "
//                 onError={(e) => {
//                     e.currentTarget.style.display = 'none';
//                     e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-400 font-bold text-lg uppercase">${name}</span>`;
//                 }}
//             />
//         </div>
//     );
// };

// export default GlobalColab;


/// dyncamic version /////////////////////////

// // D:\mktgroup\app\components\GlobalColab.tsx
// "use client";

// import { useState, useEffect } from 'react';
// import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';


// interface RawDataResponse {
//     [key: string]: unknown;
// }

// /**
//  * Type alias for an error object, ensuring it has a message property.
//  * This is used to safely handle errors caught in the catch block.
//  */
// type FetchError = Error & { message: string };

// // --- UPDATED API URL DEFINITION ---
// // 1. Define the endpoint path
// const API_ENDPOINT_PATH = "/wp-json/api/getAllBrandLogos";

// const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

// // 3. Construct the full URL, with a hardcoded fallback just in case
// const API_URL = API_BASE_URL
//     ? `${API_BASE_URL}${API_ENDPOINT_PATH}`
//     : `https://mktgroupaebck.demo-web.live${API_ENDPOINT_PATH}`;
// // ----------------------------------

// const GlobalColab = () => {
//     // State stores an array of full URL strings
//     const [brandLogosUrls, setBrandLogosUrls] = useState<string[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // This is the key we expect based on previous information. It is currently failing.
//     const EXPECTED_KEY = "desktop_images";

//     // Data Fetching and Structure Validation
//     useEffect(() => {
//         const fetchBrandLogos = async () => {
//             // Check if API_URL is valid before fetching
//             if (!API_URL.startsWith('http')) {
//                 console.error("API URL is invalid or missing environment variable.");
//                 setError("Configuration Error: API base URL not set.");
//                 setIsLoading(false);
//                 return;
//             }

//             try {
//                 const response = await fetch(API_URL);

//                 // 1. Check for HTTP errors (e.g., 404, 500)
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 // Cast to our defined type to allow property access in the next step
//                 const rawData = await response.json() as RawDataResponse;

//                 // 🛑 2. CRITICAL DEBUGGING STEP: Log the raw data structure
//                 console.log("--- DEBUG: RAW API DATA RECEIVED ---");
//                 console.log(rawData);

//                 // --- 3. STRUCTURE CHECK LOGIC ---
//                 // We'll try to find the array of image URLs
//                 let imageUrls: string[] = [];
//                 let foundKey = null;

//                 // Check for the previously expected key
//                 const expectedKeyData = rawData[EXPECTED_KEY];
//                 if (Array.isArray(expectedKeyData)) {
//                     // Check if it's an array of strings (optional, but good practice)
//                     if (expectedKeyData.every((item: unknown) => typeof item === 'string')) {
//                         imageUrls = expectedKeyData as string[];
//                         foundKey = EXPECTED_KEY;
//                     }
//                 } else {
//                     // Fallback check: Iterate through all keys in the response object
//                     // to find the array of strings
//                     const keys = Object.keys(rawData || {});
//                     for (const key of keys) {
//                         const value = rawData[key];
//                         // FIX #1: Replaced 'any' with 'unknown' for safer array iteration
//                         if (Array.isArray(value) && value.every((item: unknown) => typeof item === 'string')) {
//                             imageUrls = value as string[];
//                             foundKey = key;
//                             break; // Stop at the first array of strings found
//                         }
//                     }
//                 }

//                 if (imageUrls.length > 0 && foundKey) {
//                     setBrandLogosUrls(imageUrls);
//                     setError(null);
//                     console.log(`--- DEBUG: Found logo array under key: ${foundKey} ---`);
//                 } else {
//                     // This is the error path you are currently hitting
//                     throw new Error(`Invalid response format. No array of image URLs found. Raw keys: ${Object.keys(rawData || {}).join(', ')}`);
//                 }
//                 // FIX #2: Replaced 'any' with 'unknown' and safely assert the type for message access
//             } catch (err: unknown) {
//                 const fetchError = err as FetchError;
//                 const errorMessage = fetchError.message || "An unknown error occurred during fetch.";
//                 console.error("Failed to fetch brand logos:", errorMessage);
//                 setError(`Failed to load collaboration partners. (${errorMessage})`);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchBrandLogos();
//     }, []);

//     // Helper function to extract a simple name for the alt text/fallback
//     const getBrandNameFromUrl = (url: string) => {
//         try {
//             const urlParts = new URL(url).pathname.split('/');
//             const filename = urlParts[urlParts.length - 1];
//             return filename.split('.')[0].replace(/[-_]/g, ' ').toUpperCase();
//         } catch {
//             return 'BRAND LOGO';
//         }
//     };


//     return (
//         <section id="brand" className="relative w-full pt-16 md:pt-24 bg-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" aria-hidden="true">
//                     <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px]"></div>
//                 </div>
//             </div>

//             <div className="templateContainer px-4 md:px-6 relative z-20">
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
//                     {/* Left Column: Headings */}
//                     <div className="lg:w-1/2">
//                         <h6 className="text-[#D4AF37] uppercase tracking-wider text-sm mb-4">
//                             global Collaboration
//                         </h6>
//                         <h2 className="text-3xl md:text-4xl lg:text-[39px] font-normal text-gray-900 leading-tight">
//                             Partnering for Ethical & <br className="hidden md:block" /> Sustainable Organic Growth
//                         </h2>
//                     </div>

//                     {/* Right Column: Text & Link */}
//                     <div className="lg:w-1/2">
//                         <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-light">
//                             <strong className="text-gray-900 ">To keep things organized,</strong> we do not work with individual
//                             farmers. Instead, once we identify a state or location, we reach
//                             out to the farmers association or community leaders to help us
//                             identify experienced and committed farmers.
//                         </p>
//                         <a
//                             href="https://drfurithemes.com/farmart/about-us/"
//                             className="inline-flex items-center text-[#D4AF37] font-normal hover:text-[##D4AF37]/60 transition-colors group"
//                         >
//                             Read more
//                             <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Bottom Section: Brand Grid */}
//                 <div className="w-full border border-gray-200 bg-white">
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-gray-200">
//                         {isLoading ? (
//                             <div className="col-span-full p-8 text-center text-gray-500">Loading logos...</div>
//                         ) : error ? (
//                             // Display the detailed error message for easier debugging
//                             <div className="col-span-full p-8 text-center text-red-500 font-medium">{error}</div>
//                         ) : brandLogosUrls.length === 0 ? (
//                             <div className="col-span-full p-8 text-center text-gray-500">No collaboration partners found.</div>
//                         ) : (
//                             // Map over the array of full URLs
//                             brandLogosUrls.map((fullUrl, index) => (
//                                 <BrandItem
//                                     key={index}
//                                     name={getBrandNameFromUrl(fullUrl)}
//                                     src={fullUrl}
//                                     // Use sensible default dimensions (required by next/image)
//                                     width={180}
//                                     height={50}
//                                 />
//                             ))
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // BrandItem component
// const BrandItem = ({ name, src, width, height }: { name: string, src: string, width: number, height: number }) => {
//     const [imgError, setImgError] = useState(false);

//     if (imgError) {
//         return (
//             <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//                 <span className="text-gray-400 font-bold text-lg uppercase">{name}</span>
//             </div>
//         );
//     }

//     return (
//         <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//             <Image
//                 src={src}
//                 alt={`${name} logo`}
//                 width={width}
//                 height={height}
//                 loading="lazy"
//                 className="max-h-12 w-auto object-contain"
//                 onError={() => setImgError(true)}
//             />
//         </div>
//     );
// };

// export default GlobalColab;


// // D:\mktgroup\app\components\GlobalColab.tsx
// "use client";

// import { useState, useEffect } from 'react';
// import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';


// interface RawDataResponse {
//     [key: string]: unknown;
// }

// /**
//  * Type alias for an error object, ensuring it has a message property.
//  * This is used to safely handle errors caught in the catch block.
//  */
// type FetchError = Error & { message: string };

// // --- UPDATED API URL DEFINITION ---
// // 1. Define the endpoint path
// const API_ENDPOINT_PATH = "/wp-json/api/getAllBrandLogos";

// const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

// // 3. Construct the full URL, with a hardcoded fallback just in case
// const API_URL = API_BASE_URL
//     ? `${API_BASE_URL}${API_ENDPOINT_PATH}`
//     : `https://mktgroupaebck.demo-web.live${API_ENDPOINT_PATH}`;
// // ----------------------------------

// const GlobalColab = () => {
//     // State stores an array of full URL strings
//     const [brandLogosUrls, setBrandLogosUrls] = useState<string[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // This is the key we expect based on previous information. It is currently failing.
//     const EXPECTED_KEY = "desktop_images";

//     // Data Fetching and Structure Validation
//     useEffect(() => {
//         const fetchBrandLogos = async () => {
//             // Check if API_URL is valid before fetching
//             if (!API_URL.startsWith('http')) {
//                 console.error("API URL is invalid or missing environment variable.");
//                 setError("Configuration Error: API base URL not set.");
//                 setIsLoading(false);
//                 return;
//             }

//             try {
//                 const response = await fetch(API_URL);

//                 // 1. Check for HTTP errors (e.g., 404, 500)
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 // Cast to our defined type to allow property access in the next step
//                 const rawData = await response.json() as RawDataResponse;

//                 // 🛑 2. CRITICAL DEBUGGING STEP: Log the raw data structure
//                 console.log("--- DEBUG: RAW API DATA RECEIVED ---");
//                 console.log(rawData);

//                 // --- 3. STRUCTURE CHECK LOGIC ---
//                 // We'll try to find the array of image URLs
//                 let imageUrls: string[] = [];
//                 let foundKey = null;

//                 // Check for the previously expected key
//                 const expectedKeyData = rawData[EXPECTED_KEY];
//                 if (Array.isArray(expectedKeyData)) {
//                     // Check if it's an array of strings (optional, but good practice)
//                     if (expectedKeyData.every((item: unknown) => typeof item === 'string')) {
//                         imageUrls = expectedKeyData as string[];
//                         foundKey = EXPECTED_KEY;
//                     }
//                 } else {
//                     // Fallback check: Iterate through all keys in the response object
//                     // to find the array of strings
//                     const keys = Object.keys(rawData || {});
//                     for (const key of keys) {
//                         const value = rawData[key];
//                         // FIX #1: Replaced 'any' with 'unknown' for safer array iteration
//                         if (Array.isArray(value) && value.every((item: unknown) => typeof item === 'string')) {
//                             imageUrls = value as string[];
//                             foundKey = key;
//                             break; // Stop at the first array of strings found
//                         }
//                     }
//                 }

//                 if (imageUrls.length > 0 && foundKey) {
//                     setBrandLogosUrls(imageUrls);
//                     setError(null);
//                     console.log(`--- DEBUG: Found logo array under key: ${foundKey} ---`);
//                 } else {
//                     // This is the error path you are currently hitting
//                     throw new Error(`Invalid response format. No array of image URLs found. Raw keys: ${Object.keys(rawData || {}).join(', ')}`);
//                 }
//                 // FIX #2: Replaced 'any' with 'unknown' and safely assert the type for message access
//             } catch (err: unknown) {
//                 const fetchError = err as FetchError;
//                 const errorMessage = fetchError.message || "An unknown error occurred during fetch.";
//                 console.error("Failed to fetch brand logos:", errorMessage);
//                 setError(`Failed to load collaboration partners. (${errorMessage})`);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchBrandLogos();
//     }, []);

//     // Helper function to extract a simple name for the alt text/fallback
//     const getBrandNameFromUrl = (url: string) => {
//         try {
//             const urlParts = new URL(url).pathname.split('/');
//             const filename = urlParts[urlParts.length - 1];
//             return filename.split('.')[0].replace(/[-_]/g, ' ').toUpperCase();
//         } catch {
//             return 'BRAND LOGO';
//         }
//     };


//     return (
//         <section id="brand" className="relative w-full pt-16 md:pt-24 bg-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" aria-hidden="true">
//                     <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px]"></div>
//                 </div>
//             </div>

//             <div className="templateContainer px-4 md:px-6 relative z-20">
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
//                     {/* Left Column: Headings */}
//                     <div className="lg:w-1/2">
//                         <h6 className="text-[#D4AF37] uppercase tracking-wider text-sm mb-4">
//                             global Collaboration
//                         </h6>
//                         <h2 className="text-3xl md:text-4xl lg:text-[39px] font-normal text-gray-900 leading-tight">
//                             Partnering for Ethical & <br className="hidden md:block" /> Sustainable Organic Growth
//                         </h2>
//                     </div>

//                     {/* Right Column: Text & Link */}
//                     <div className="lg:w-1/2">
//                         <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-light">
//                             <strong className="text-gray-900 ">To keep things organized,</strong> we do not work with individual
//                             farmers. Instead, once we identify a state or location, we reach
//                             out to the farmers association or community leaders to help us
//                             identify experienced and committed farmers.
//                         </p>
//                         <a
//                             href="https://drfurithemes.com/farmart/about-us/"
//                             className="inline-flex items-center text-[#D4AF37] font-normal hover:text-[##D4AF37]/60 transition-colors group"
//                         >
//                             Read more
//                             <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Bottom Section: Brand Grid */}
//                 <div className="w-full border border-gray-200 bg-white">
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-gray-200">
//                         {isLoading ? (
//                             <div className="col-span-full p-8 text-center text-gray-500">Loading logos...</div>
//                         ) : error ? (
//                             // Display the detailed error message for easier debugging
//                             <div className="col-span-full p-8 text-center text-red-500 font-medium">{error}</div>
//                         ) : brandLogosUrls.length === 0 ? (
//                             <div className="col-span-full p-8 text-center text-gray-500">No collaboration partners found.</div>
//                         ) : (
//                             // Map over the array of full URLs
//                             brandLogosUrls.map((fullUrl, index) => (
//                                 <div
//                                     // 👇 The new logic is here to apply the centering class to the last item
//                                     className={index === brandLogosUrls.length - 1
//                                         ? "col-span-full flex items-center justify-center"
//                                         : undefined}
//                                     key={index}
//                                 >
//                                     <BrandItem
//                                         name={getBrandNameFromUrl(fullUrl)}
//                                         src={fullUrl}
//                                         // Use sensible default dimensions (required by next/image)
//                                         width={180}
//                                         height={50}
//                                     />
//                                 </div>
//                             ))
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // BrandItem component
// // NOTE: I moved the wrapper div from BrandItem back to GlobalColab's map function
// // to apply the necessary grid-spanning classes for centering.
// const BrandItem = ({ name, src, width, height }: { name: string, src: string, width: number, height: number }) => {
//     const [imgError, setImgError] = useState(false);

//     if (imgError) {
//         return (
//             <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//                 <span className="text-gray-400 font-bold text-lg uppercase">{name}</span>
//             </div>
//         );
//     }

//     return (
//         // The p-8, h-32, hover:bg-gray-50 classes were moved here from the old BrandItem wrapper
//         <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//             <Image
//                 src={src}
//                 alt={`${name} logo`}
//                 width={width}
//                 height={height}
//                 loading="lazy"
//                 className="max-h-12 w-auto object-contain"
//                 onError={() => setImgError(true)}
//             />
//         </div>
//     );
// };

// export default GlobalColab;



// // D:\mktgroup\app\components\GlobalColab.tsx
// "use client";

// import { useState, useEffect } from 'react';
// import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';


// interface RawDataResponse {
//     [key: string]: unknown;
// }

// /**
//  * Type alias for an error object, ensuring it has a message property.
//  * This is used to safely handle errors caught in the catch block.
//  */
// type FetchError = Error & { message: string };

// // --- UPDATED API URL DEFINITION ---
// // 1. Define the endpoint path
// const API_ENDPOINT_PATH = "/wp-json/api/getAllBrandLogos";

// const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

// // 3. Construct the full URL, with a hardcoded fallback just in case
// const API_URL = API_BASE_URL
//     ? `${API_BASE_URL}${API_ENDPOINT_PATH}`
//     : `https://mktgroupaebck.demo-web.live${API_ENDPOINT_PATH}`;
// // ----------------------------------

// const GlobalColab = () => {
//     // State stores an array of full URL strings
//     const [brandLogosUrls, setBrandLogosUrls] = useState<string[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // This is the key we expect based on previous information. It is currently failing.
//     const EXPECTED_KEY = "desktop_images";

//     // Data Fetching and Structure Validation
//     useEffect(() => {
//         const fetchBrandLogos = async () => {
//             // Check if API_URL is valid before fetching
//             if (!API_URL.startsWith('http')) {
//                 console.error("API URL is invalid or missing environment variable.");
//                 setError("Configuration Error: API base URL not set.");
//                 setIsLoading(false);
//                 return;
//             }

//             try {
//                 const response = await fetch(API_URL);

//                 // 1. Check for HTTP errors (e.g., 404, 500)
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 // Cast to our defined type to allow property access in the next step
//                 const rawData = await response.json() as RawDataResponse;

//                 // 🛑 2. CRITICAL DEBUGGING STEP: Log the raw data structure
//                 console.log("--- DEBUG: RAW API DATA RECEIVED ---");
//                 console.log(rawData);

//                 // --- 3. STRUCTURE CHECK LOGIC ---
//                 // We'll try to find the array of image URLs
//                 let imageUrls: string[] = [];
//                 let foundKey = null;

//                 // Check for the previously expected key
//                 const expectedKeyData = rawData[EXPECTED_KEY];
//                 if (Array.isArray(expectedKeyData)) {
//                     // Check if it's an array of strings (optional, but good practice)
//                     if (expectedKeyData.every((item: unknown) => typeof item === 'string')) {
//                         imageUrls = expectedKeyData as string[];
//                         foundKey = EXPECTED_KEY;
//                     }
//                 } else {
//                     // Fallback check: Iterate through all keys in the response object
//                     // to find the array of strings
//                     const keys = Object.keys(rawData || {});
//                     for (const key of keys) {
//                         const value = rawData[key];
//                         // FIX #1: Replaced 'any' with 'unknown' for safer array iteration
//                         if (Array.isArray(value) && value.every((item: unknown) => typeof item === 'string')) {
//                             imageUrls = value as string[];
//                             foundKey = key;
//                             break; // Stop at the first array of strings found
//                         }
//                     }
//                 }

//                 if (imageUrls.length > 0 && foundKey) {
//                     setBrandLogosUrls(imageUrls);
//                     setError(null);
//                     console.log(`--- DEBUG: Found logo array under key: ${foundKey} ---`);
//                 } else {
//                     // This is the error path you are currently hitting
//                     throw new Error(`Invalid response format. No array of image URLs found. Raw keys: ${Object.keys(rawData || {}).join(', ')}`);
//                 }
//                 // FIX #2: Replaced 'any' with 'unknown' and safely assert the type for message access
//             } catch (err: unknown) {
//                 const fetchError = err as FetchError;
//                 const errorMessage = fetchError.message || "An unknown error occurred during fetch.";
//                 console.error("Failed to fetch brand logos:", errorMessage);
//                 setError(`Failed to load collaboration partners. (${errorMessage})`);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchBrandLogos();
//     }, []);

//     // Helper function to extract a simple name for the alt text/fallback
//     const getBrandNameFromUrl = (url: string) => {
//         try {
//             const urlParts = new URL(url).pathname.split('/');
//             const filename = urlParts[urlParts.length - 1];
//             return filename.split('.')[0].replace(/[-_]/g, ' ').toUpperCase();
//         } catch {
//             return 'BRAND LOGO';
//         }
//     };


//     return (
//         <section id="brand" className="relative w-full pt-16 md:pt-24 bg-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" aria-hidden="true">
//                     <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px]"></div>
//                 </div>
//             </div>

//             <div className="templateContainer px-4 md:px-6 relative z-20">
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
//                     {/* Left Column: Headings */}
//                     <div className="lg:w-1/2">
//                         <h6 className="text-[#D4AF37] uppercase tracking-wider text-sm mb-4">
//                             global Collaboration
//                         </h6>
//                         <h2 className="text-3xl md:text-4xl lg:text-[39px] font-normal text-gray-900 leading-tight">
//                             Partnering for Ethical & <br className="hidden md:block" /> Sustainable Organic Growth
//                         </h2>
//                     </div>

//                     {/* Right Column: Text & Link */}
//                     <div className="lg:w-1/2">
//                         <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-light">
//                             <strong className="text-gray-900 ">To keep things organized,</strong> we do not work with individual
//                             farmers. Instead, once we identify a state or location, we reach
//                             out to the farmers association or community leaders to help us
//                             identify experienced and committed farmers.
//                         </p>
//                         <a
//                             href="https://drfurithemes.com/farmart/about-us/"
//                             className="inline-flex items-center text-[#D4AF37] font-normal hover:text-[##D4AF37]/60 transition-colors group"
//                         >
//                             Read more
//                             <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Bottom Section: Brand Grid */}
//                 <div className="w-full border border-gray-200 bg-white">
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-gray-200">
//                         {isLoading ? (
//                             <div className="col-span-full p-8 text-center text-gray-500">Loading logos...</div>
//                         ) : error ? (
//                             // Display the detailed error message for easier debugging
//                             <div className="col-span-full p-8 text-center text-red-500 font-medium">{error}</div>
//                         ) : brandLogosUrls.length === 0 ? (
//                             <div className="col-span-full p-8 text-center text-gray-500">No collaboration partners found.</div>
//                         ) : (
//                             // Map over the array of full URLs
//                             brandLogosUrls.map((fullUrl, index) => (
//                                 <BrandItem
//                                     key={index}
//                                     name={getBrandNameFromUrl(fullUrl)}
//                                     src={fullUrl}
//                                     // Use sensible default dimensions (required by next/image)
//                                     width={180}
//                                     height={50}
//                                 />
//                             ))
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // BrandItem component
// const BrandItem = ({ name, src, width, height }: { name: string, src: string, width: number, height: number }) => {
//     const [imgError, setImgError] = useState(false);

//     if (imgError) {
//         return (
//             <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//                 <span className="text-gray-400 font-bold text-lg uppercase">{name}</span>
//             </div>
//         );
//     }

//     return (
//         <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//             <Image
//                 src={src}
//                 alt={`${name} logo`}
//                 width={width}
//                 height={height}
//                 loading="lazy"
//                 className="max-h-12 w-auto object-contain"
//                 onError={() => setImgError(true)}
//             />
//         </div>
//     );
// };

// export default GlobalColab;


// // D:\mktgroup\app\components\GlobalColab.tsx
// "use client";

// import { useState, useEffect } from 'react';
// import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';


// interface RawDataResponse {
//     [key: string]: unknown;
// }

// /**
//  * Type alias for an error object, ensuring it has a message property.
//  * This is used to safely handle errors caught in the catch block.
//  */
// type FetchError = Error & { message: string };

// // --- UPDATED API URL DEFINITION ---
// // 1. Define the endpoint path
// const API_ENDPOINT_PATH = "/wp-json/api/getAllBrandLogos";

// const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

// // 3. Construct the full URL, with a hardcoded fallback just in case
// const API_URL = API_BASE_URL
//     ? `${API_BASE_URL}${API_ENDPOINT_PATH}`
//     : `https://mktgroupaebck.demo-web.live${API_ENDPOINT_PATH}`;
// // ----------------------------------

// const GlobalColab = () => {
//     // State stores an array of full URL strings
//     const [brandLogosUrls, setBrandLogosUrls] = useState<string[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // This is the key we expect based on previous information. It is currently failing.
//     const EXPECTED_KEY = "desktop_images";

//     // Data Fetching and Structure Validation
//     useEffect(() => {
//         const fetchBrandLogos = async () => {
//             // Check if API_URL is valid before fetching
//             if (!API_URL.startsWith('http')) {
//                 console.error("API URL is invalid or missing environment variable.");
//                 setError("Configuration Error: API base URL not set.");
//                 setIsLoading(false);
//                 return;
//             }

//             try {
//                 const response = await fetch(API_URL);

//                 // 1. Check for HTTP errors (e.g., 404, 500)
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 // Cast to our defined type to allow property access in the next step
//                 const rawData = await response.json() as RawDataResponse;

//                 // 🛑 2. CRITICAL DEBUGGING STEP: Log the raw data structure
//                 console.log("--- DEBUG: RAW API DATA RECEIVED ---");
//                 console.log(rawData);

//                 // --- 3. STRUCTURE CHECK LOGIC ---
//                 // We'll try to find the array of image URLs
//                 let imageUrls: string[] = [];
//                 let foundKey = null;

//                 // Check for the previously expected key
//                 const expectedKeyData = rawData[EXPECTED_KEY];
//                 if (Array.isArray(expectedKeyData)) {
//                     // Check if it's an array of strings (optional, but good practice)
//                     if (expectedKeyData.every((item: unknown) => typeof item === 'string')) {
//                         imageUrls = expectedKeyData as string[];
//                         foundKey = EXPECTED_KEY;
//                     }
//                 } else {
//                     // Fallback check: Iterate through all keys in the response object
//                     // to find the array of strings
//                     const keys = Object.keys(rawData || {});
//                     for (const key of keys) {
//                         const value = rawData[key];
//                         // FIX #1: Replaced 'any' with 'unknown' for safer array iteration
//                         if (Array.isArray(value) && value.every((item: unknown) => typeof item === 'string')) {
//                             imageUrls = value as string[];
//                             foundKey = key;
//                             break; // Stop at the first array of strings found
//                         }
//                     }
//                 }

//                 if (imageUrls.length > 0 && foundKey) {
//                     // Limit to 15 logos using .slice(0, 15)
//                     const limitedUrls = imageUrls.slice(0, 15);
//                     setBrandLogosUrls(limitedUrls);
//                     setError(null);
//                     console.log(`--- DEBUG: Found logo array under key: ${foundKey} (showing ${limitedUrls.length} logos) ---`);
//                 } else {
//                     // This is the error path you are currently hitting
//                     throw new Error(`Invalid response format. No array of image URLs found. Raw keys: ${Object.keys(rawData || {}).join(', ')}`);
//                 }
//                 // FIX #2: Replaced 'any' with 'unknown' and safely assert the type for message access
//             } catch (err: unknown) {
//                 const fetchError = err as FetchError;
//                 const errorMessage = fetchError.message || "An unknown error occurred during fetch.";
//                 console.error("Failed to fetch brand logos:", errorMessage);
//                 setError(`Failed to load collaboration partners. (${errorMessage})`);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchBrandLogos();
//     }, []);

//     // Helper function to extract a simple name for the alt text/fallback
//     const getBrandNameFromUrl = (url: string) => {
//         try {
//             const urlParts = new URL(url).pathname.split('/');
//             const filename = urlParts[urlParts.length - 1];
//             return filename.split('.')[0].replace(/[-_]/g, ' ').toUpperCase();
//         } catch {
//             return 'BRAND LOGO';
//         }
//     };


//     return (
//         <section id="brand" className="relative w-full pt-16 md:pt-24 bg-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" aria-hidden="true">
//                     <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px]"></div>
//                 </div>
//             </div>

//             <div className="templateContainer px-4 md:px-6 relative z-20">
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
//                     {/* Left Column: Headings */}
//                     <div className="lg:w-1/2">
//                         <h6 className="text-[#D4AF37] uppercase tracking-wider text-sm mb-4">
//                             global Collaboration
//                         </h6>
//                         <h2 className="text-3xl md:text-4xl lg:text-[39px] font-normal text-gray-900 leading-tight">
//                             Partnering for Ethical & <br className="hidden md:block" /> Sustainable Organic Growth
//                         </h2>
//                     </div>

//                     {/* Right Column: Text & Link */}
//                     <div className="lg:w-1/2">
//                         <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-light">
//                             <strong className="text-gray-900 ">To keep things organized,</strong> we do not work with individual
//                             farmers. Instead, once we identify a state or location, we reach
//                             out to the farmers association or community leaders to help us
//                             identify experienced and committed farmers.
//                         </p>
//                         <a
//                             href="https://drfurithemes.com/farmart/about-us/"
//                             className="inline-flex items-center text-[#D4AF37] font-normal hover:text-[##D4AF37]/60 transition-colors group"
//                         >
//                             Read more
//                             <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Bottom Section: Brand Grid */}
//                 <div className="w-full border border-gray-200 bg-white">
//                     {/* The grid layout uses 5 columns for large screens (lg:grid-cols-5), which can accommodate 15 logos perfectly (3 rows of 5). */}
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-gray-200">
//                         {isLoading ? (
//                             <div className="col-span-full p-8 text-center text-gray-500">Loading logos...</div>
//                         ) : error ? (
//                             // Display the detailed error message for easier debugging
//                             <div className="col-span-full p-8 text-center text-red-500 font-medium">{error}</div>
//                         ) : brandLogosUrls.length === 0 ? (
//                             <div className="col-span-full p-8 text-center text-gray-500">No collaboration partners found.</div>
//                         ) : (
//                             // Map over the array of full URLs (now max 15)
//                             brandLogosUrls.map((fullUrl, index) => (
//                                 <BrandItem
//                                     key={index}
//                                     name={getBrandNameFromUrl(fullUrl)}
//                                     src={fullUrl}
//                                     // Use sensible default dimensions (required by next/image)
//                                     width={180}
//                                     height={50}
//                                 />
//                             ))
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // BrandItem component
// const BrandItem = ({ name, src, width, height }: { name: string, src: string, width: number, height: number }) => {
//     const [imgError, setImgError] = useState(false);

//     if (imgError) {
//         return (
//             <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//                 <span className="text-gray-400 font-bold text-lg uppercase">{name}</span>
//             </div>
//         );
//     }

//     return (
//         <div className="flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300">
//             <Image
//                 src={src}
//                 alt={`${name} logo`}
//                 width={width}
//                 height={height}
//                 loading="lazy"
//                 className="max-h-12 w-auto object-contain"
//                 onError={() => setImgError(true)}
//             />
//         </div>
//     );
// };

// export default GlobalColab;

// // D:\mktgroup\app\components\GlobalColab.tsx
// "use client";

// import { useState, useEffect } from 'react';
// import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';


// interface RawDataResponse {
//     [key: string]: unknown;
// }

// /**
//  * Type alias for an error object, ensuring it has a message property.
//  * This is used to safely handle errors caught in the catch block.
//  */
// type FetchError = Error & { message: string };

// // --- API URL DEFINITION ---
// const API_ENDPOINT_PATH = "/wp-json/api/getAllBrandLogos";
// const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

// const API_URL = API_BASE_URL
//     ? `${API_BASE_URL}${API_ENDPOINT_PATH}`
//     : `https://mktgroupaebck.demo-web.live${API_ENDPOINT_PATH}`;
// // --------------------------

// const GlobalColab = () => {
//     // State stores an array of full URL strings
//     const [brandLogosUrls, setBrandLogosUrls] = useState<string[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // This is the key we expect based on previous information. It is currently failing.
//     const EXPECTED_KEY = "desktop_images";

//     // Data Fetching and Structure Validation
//     useEffect(() => {
//         const fetchBrandLogos = async () => {
//             // Check if API_URL is valid before fetching
//             if (!API_URL.startsWith('http')) {
//                 console.error("API URL is invalid or missing environment variable.");
//                 setError("Configuration Error: API base URL not set.");
//                 setIsLoading(false);
//                 return;
//             }

//             try {
//                 const response = await fetch(API_URL);

//                 // 1. Check for HTTP errors (e.g., 404, 500)
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 // Cast to our defined type to allow property access in the next step
//                 const rawData = await response.json() as RawDataResponse;

//                 // 🛑 2. CRITICAL DEBUGGING STEP: Log the raw data structure
//                 console.log("--- DEBUG: RAW API DATA RECEIVED ---");
//                 console.log(rawData);

//                 // --- 3. STRUCTURE CHECK LOGIC ---
//                 let imageUrls: string[] = [];
//                 let foundKey = null;

//                 // Check for the previously expected key
//                 const expectedKeyData = rawData[EXPECTED_KEY];
//                 if (Array.isArray(expectedKeyData)) {
//                     // Check if it's an array of strings (optional, but good practice)
//                     if (expectedKeyData.every((item: unknown) => typeof item === 'string')) {
//                         imageUrls = expectedKeyData as string[];
//                         foundKey = EXPECTED_KEY;
//                     }
//                 } else {
//                     // Fallback check: Iterate through all keys in the response object
//                     // to find the array of strings
//                     const keys = Object.keys(rawData || {});
//                     for (const key of keys) {
//                         const value = rawData[key];
//                         // Replaced 'any' with 'unknown' for safer array iteration
//                         if (Array.isArray(value) && value.every((item: unknown) => typeof item === 'string')) {
//                             imageUrls = value as string[];
//                             foundKey = key;
//                             break; // Stop at the first array of strings found
//                         }
//                     }
//                 }

//                 if (imageUrls.length > 0 && foundKey) {
//                     // Limit to 15 logos using .slice(0, 15)
//                     const limitedUrls = imageUrls.slice(0, 15);
//                     setBrandLogosUrls(limitedUrls);
//                     setError(null);
//                     console.log(`--- DEBUG: Found logo array under key: ${foundKey} (showing ${limitedUrls.length} logos) ---`);
//                 } else {
//                     // This is the error path you are currently hitting
//                     throw new Error(`Invalid response format. No array of image URLs found. Raw keys: ${Object.keys(rawData || {}).join(', ')}`);
//                 }
//             } catch (err: unknown) {
//                 const fetchError = err as FetchError;
//                 const errorMessage = fetchError.message || "An unknown error occurred during fetch.";
//                 console.error("Failed to fetch brand logos:", errorMessage);
//                 setError(`Failed to load collaboration partners. (${errorMessage})`);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchBrandLogos();
//     }, []);

//     // Helper function to extract a simple name for the alt text/fallback
//     const getBrandNameFromUrl = (url: string) => {
//         try {
//             const urlParts = new URL(url).pathname.split('/');
//             const filename = urlParts[urlParts.length - 1];
//             return filename.split('.')[0].replace(/[-_]/g, ' ').toUpperCase();
//         } catch {
//             return 'BRAND LOGO';
//         }
//     };


//     return (
//         <section id="brand" className="relative w-full pt-16 md:pt-24 bg-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" aria-hidden="true">
//                     <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px]"></div>
//                 </div>
//             </div>

//             <div className="templateContainer px-4 md:px-6 relative z-20">
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
//                     {/* Left Column: Headings */}
//                     <div className="lg:w-1/2">
//                         <h6 className="text-[#D4AF37] uppercase tracking-wider text-sm mb-4">
//                             global Collaboration
//                         </h6>
//                         <h2 className="text-3xl md:text-4xl lg:text-[39px] font-normal text-gray-900 leading-tight">
//                             Partnering for Ethical & <br className="hidden md:block" /> Sustainable Organic Growth
//                         </h2>
//                     </div>

//                     {/* Right Column: Text & Link */}
//                     <div className="lg:w-1/2">
//                         <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-light">
//                             <strong className="text-gray-900 ">To keep things organized,</strong> we do not work with individual
//                             farmers. Instead, once we identify a state or location, we reach
//                             out to the farmers association or community leaders to help us
//                             identify experienced and committed farmers.
//                         </p>
//                         <a
//                             href="https://drfurithemes.com/farmart/about-us/"
//                             className="inline-flex items-center text-[#D4AF37] font-normal hover:text-[##D4AF37]/60 transition-colors group"
//                         >
//                             Read more
//                             <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Bottom Section: Brand Grid */}
//                 {/* 1. Applying border-t and border-l to the wrapper to form the top/left edge. */}
//                 <div className="w-full bg-white border-t border-l border-gray-200">
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//                         {isLoading || error || brandLogosUrls.length === 0 ? (
//                             // Use col-span-full to ensure it fills the space
//                             <div className="col-span-full p-8 text-center text-gray-500">
//                                 {isLoading ? "Loading logos..." : error ? error : "No collaboration partners found."}
//                             </div>
//                         ) : (
//                             // 2. Wrap the logo mapping in a Flexbox container for centering the last row.
//                             // The 'justify-center' applies when there are fewer than the max column count.
//                             <div className="col-span-full flex flex-wrap justify-start lg:justify-center">
//                                 {brandLogosUrls.map((fullUrl, index) => (
//                                     <BrandItem
//                                         key={index}
//                                         name={getBrandNameFromUrl(fullUrl)}
//                                         src={fullUrl}
//                                         // Pass index for border calculation
//                                         index={index}
//                                         // Use sensible default dimensions (required by next/image)
//                                         width={180}
//                                         height={50}
//                                     />
//                                 ))}
//                             </div>
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // BrandItem component
// const BrandItem = ({ name, src, width, height, index }: { name: string, src: string, width: number, height: number, index: number }) => {
//     const [imgError, setImgError] = useState(false);

//     // Function to calculate the border classes for the grid item.
//     // The parent container provides border-t and border-l.
//     // The item provides border-r and border-b to form the internal divisions and close the box.
//     const getDynamicBorderClasses = () => {
//         const borderClasses = "border-gray-200";
//         // Applying border-r and border-b ensures every cell has a full line around it,
//         // using the wrapper's border-t/border-l and the item's border-r/border-b.
//         return `border-r border-b ${borderClasses} flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5`;
//     };

//     if (imgError) {
//         return (
//             // Apply flex-shrink-0 and width utility classes to ensure the items take up the correct column width
//             <div className={`flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300 ${getDynamicBorderClasses()}`}>
//                 <span className="text-gray-400 font-bold text-lg uppercase">{name}</span>
//             </div>
//         );
//     }

//     return (
//         // Apply the border classes and width utilities to the item container
//         <div className={`flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300 ${getDynamicBorderClasses()}`}>
//             <Image
//                 src={src}
//                 alt={`${name} logo`}
//                 width={width}
//                 height={height}
//                 loading="lazy"
//                 className="max-h-12 w-auto object-contain"
//                 onError={() => setImgError(true)}
//             />
//         </div>
//     );
// };

// export default GlobalColab;


// "use client";

// import { useState, useEffect } from 'react';
// import { ArrowRight } from 'lucide-react';
// // Changed 'next/image' import to standard img tag usage below.
// // import Image from 'next/image'; 


// interface RawDataResponse {
//     [key: string]: unknown;
// }

// /**
//  * Type alias for an error object, ensuring it has a message property.
//  * This is used to safely handle errors caught in the catch block.
//  */
// type FetchError = Error & { message: string };

// // --- API URL DEFINITION ---
// const API_ENDPOINT_PATH = "/wp-json/api/getAllBrandLogos";
// const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

// const API_URL = API_BASE_URL
//     ? `${API_BASE_URL}${API_ENDPOINT_PATH}`
//     : `https://mktgroupaebck.demo-web.live${API_ENDPOINT_PATH}`;
// // --------------------------

// const GlobalColab = () => {
//     // State stores an array of full URL strings
//     const [brandLogosUrls, setBrandLogosUrls] = useState<string[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // This is the key we expect based on previous information. It is currently failing.
//     const EXPECTED_KEY = "desktop_images";

//     // Data Fetching and Structure Validation
//     useEffect(() => {
//         const fetchBrandLogos = async () => {
//             // Check if API_URL is valid before fetching
//             if (!API_URL.startsWith('http')) {
//                 console.error("API URL is invalid or missing environment variable.");
//                 setError("Configuration Error: API base URL not set.");
//                 setIsLoading(false);
//                 return;
//             }

//             try {
//                 const response = await fetch(API_URL);

//                 // 1. Check for HTTP errors (e.g., 404, 500)
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }

//                 // Cast to our defined type to allow property access in the next step
//                 const rawData = await response.json() as RawDataResponse;

//                 // 🛑 2. CRITICAL DEBUGGING STEP: Log the raw data structure
//                 console.log("--- DEBUG: RAW API DATA RECEIVED ---");
//                 console.log(rawData);

//                 // --- 3. STRUCTURE CHECK LOGIC ---
//                 let imageUrls: string[] = [];
//                 let foundKey = null;

//                 // Check for the previously expected key
//                 const expectedKeyData = rawData[EXPECTED_KEY];
//                 if (Array.isArray(expectedKeyData)) {
//                     // Check if it's an array of strings (optional, but good practice)
//                     if (expectedKeyData.every((item: unknown) => typeof item === 'string')) {
//                         imageUrls = expectedKeyData as string[];
//                         foundKey = EXPECTED_KEY;
//                     }
//                 } else {
//                     // Fallback check: Iterate through all keys in the response object
//                     // to find the array of strings
//                     const keys = Object.keys(rawData || {});
//                     for (const key of keys) {
//                         const value = rawData[key];
//                         // Replaced 'any' with 'unknown' for safer array iteration
//                         if (Array.isArray(value) && value.every((item: unknown) => typeof item === 'string')) {
//                             imageUrls = value as string[];
//                             foundKey = key;
//                             break; // Stop at the first array of strings found
//                         }
//                     }
//                 }

//                 if (imageUrls.length > 0 && foundKey) {
//                     // MODIFICATION: Removing the .slice(0, 15) limit to show all logos.
//                     const allUrls = imageUrls;
//                     setBrandLogosUrls(allUrls);
//                     setError(null);
//                     console.log(`--- DEBUG: Found logo array under key: ${foundKey} (showing ${allUrls.length} logos) ---`);
//                 } else {
//                     // This is the error path you are currently hitting
//                     throw new Error(`Invalid response format. No array of image URLs found. Raw keys: ${Object.keys(rawData || {}).join(', ')}`);
//                 }
//             } catch (err: unknown) {
//                 const fetchError = err as FetchError;
//                 const errorMessage = fetchError.message || "An unknown error occurred during fetch.";
//                 console.error("Failed to fetch brand logos:", errorMessage);
//                 setError(`Failed to load collaboration partners. (${errorMessage})`);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchBrandLogos();
//     }, []);

//     // Helper function to extract a simple name for the alt text/fallback
//     const getBrandNameFromUrl = (url: string) => {
//         try {
//             const urlParts = new URL(url).pathname.split('/');
//             const filename = urlParts[urlParts.length - 1];
//             return filename.split('.')[0].replace(/[-_]/g, ' ').toUpperCase();
//         } catch {
//             return 'BRAND LOGO';
//         }
//     };


//     return (
//         <section id="brand" className="relative w-full pt-16 md:pt-24 bg-white overflow-hidden">
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" aria-hidden="true">
//                     <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px]"></div>
//                 </div>
//             </div>

//             <div className="templateContainer px-4 md:px-6 relative z-20">
//                 <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
//                     {/* Left Column: Headings */}
//                     <div className="lg:w-1/2">
//                         <h6 className="text-[#D4AF37] uppercase tracking-wider text-sm mb-4">
//                             global Collaboration
//                         </h6>
//                         <h2 className="text-3xl md:text-4xl lg:text-[39px] font-normal text-gray-900 leading-tight">
//                             Partnering for Ethical & <br className="hidden md:block" /> Sustainable Organic Growth
//                         </h2>
//                     </div>

//                     {/* Right Column: Text & Link */}
//                     <div className="lg:w-1/2">
//                         <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-light">
//                             <strong className="text-gray-900 ">To keep things organized,</strong> we do not work with individual
//                             farmers. Instead, once we identify a state or location, we reach
//                             out to the farmers association or community leaders to help us
//                             identify experienced and committed farmers.
//                         </p>
//                         <a
//                             href="https://drfurithemes.com/farmart/about-us/"
//                             className="inline-flex items-center text-[#D4AF37] font-normal hover:text-[##D4AF37]/60 transition-colors group"
//                         >
//                             Read more
//                             <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Bottom Section: Brand Grid */}
//                 {/* 1. Applying border-t and border-l to the wrapper to form the top/left edge. */}
//                 <div className="w-full bg-white border-t border-l border-gray-200">
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//                         {isLoading || error || brandLogosUrls.length === 0 ? (
//                             // Use col-span-full to ensure it fills the space
//                             <div className="col-span-full p-8 text-center text-gray-500">
//                                 {isLoading ? "Loading logos..." : error ? error : "No collaboration partners found."}
//                             </div>
//                         ) : (
//                             // 2. Wrap the logo mapping in a Flexbox container for centering the last row.
//                             // The 'justify-center' applies when there are fewer than the max column count.
//                             <div className="col-span-full flex flex-wrap justify-start lg:justify-center">
//                                 {brandLogosUrls.map((fullUrl, index) => (
//                                     <BrandItem
//                                         key={index}
//                                         name={getBrandNameFromUrl(fullUrl)}
//                                         src={fullUrl}
//                                         // Pass index for border calculation
//                                         index={index}
//                                         // Use sensible default dimensions
//                                         width={180}
//                                         height={50}
//                                     />
//                                 ))}
//                             </div>
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// // BrandItem component
// const BrandItem = ({ name, src, width, height, index }: { name: string, src: string, width: number, height: number, index: number }) => {
//     const [imgError, setImgError] = useState(false);

//     // Function to calculate the border classes for the grid item.
//     // The parent container provides border-t and border-l.
//     // The item provides border-r and border-b to form the internal divisions and close the box.
//     const getDynamicBorderClasses = () => {
//         const borderClasses = "border-gray-200";
//         // Applying border-r and border-b ensures every cell has a full line around it,
//         // using the wrapper's border-t/border-l and the item's border-r/border-b.
//         return `border-r border-b ${borderClasses} flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5`;
//     };

//     if (imgError) {
//         return (
//             // Apply flex-shrink-0 and width utility classes to ensure the items take up the correct column width
//             <div className={`flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300 ${getDynamicBorderClasses()}`}>
//                 <span className="text-gray-400 font-bold text-lg uppercase">{name}</span>
//             </div>
//         );
//     }

//     return (
//         // Apply the border classes and width utilities to the item container
//         <div className={`flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300 ${getDynamicBorderClasses()}`}>
//             {/* Replaced Next.js Image component with standard HTML <img> tag */}
//             <img
//                 src={src}
//                 alt={`${name} logo`}
//                 width={width}
//                 height={height}
//                 loading="lazy"
//                 className="max-h-12 w-auto object-contain"
//                 onError={() => setImgError(true)}
//             />
//         </div>
//     );
// };

// export default GlobalColab;


"use client";

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
// Changed 'next/image' import to standard img tag usage below.
// import Image from 'next/image'; 


interface RawDataResponse {
    [key: string]: unknown;
}

/**
 * Type alias for an error object, ensuring it has a message property.
 * This is used to safely handle errors caught in the catch block.
 */
type FetchError = Error & { message: string };

// --- API URL DEFINITION ---
const API_ENDPOINT_PATH = "/wp-json/api/getAllBrandLogos";
const API_BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

const API_URL = API_BASE_URL
    ? `${API_BASE_URL}${API_ENDPOINT_PATH}`
    : `https://mktgroupaebck.demo-web.live${API_ENDPOINT_PATH}`;
// --------------------------

const GlobalColab = () => {
    // State stores an array of full URL strings
    const [brandLogosUrls, setBrandLogosUrls] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // This is the key we expect based on previous information. It is currently failing.
    const EXPECTED_KEY = "desktop_images";

    // Data Fetching and Structure Validation
    useEffect(() => {
        const fetchBrandLogos = async () => {
            // Check if API_URL is valid before fetching
            if (!API_URL.startsWith('http')) {
                console.error("API URL is invalid or missing environment variable.");
                setError("Configuration Error: API base URL not set.");
                setIsLoading(false);
                return;
            }

            try {
                const response = await fetch(API_URL);

                // 1. Check for HTTP errors (e.g., 404, 500)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Cast to our defined type to allow property access in the next step
                const rawData = await response.json() as RawDataResponse;

                // 🛑 2. CRITICAL DEBUGGING STEP: Log the raw data structure
                console.log("--- DEBUG: RAW API DATA RECEIVED ---");
                console.log(rawData);

                // --- 3. STRUCTURE CHECK LOGIC ---
                let imageUrls: string[] = [];
                let foundKey = null;

                // Check for the previously expected key
                const expectedKeyData = rawData[EXPECTED_KEY];
                if (Array.isArray(expectedKeyData)) {
                    // Check if it's an array of strings (optional, but good practice)
                    if (expectedKeyData.every((item: unknown) => typeof item === 'string')) {
                        imageUrls = expectedKeyData as string[];
                        foundKey = EXPECTED_KEY;
                    }
                } else {
                    // Fallback check: Iterate through all keys in the response object
                    // to find the array of strings
                    const keys = Object.keys(rawData || {});
                    for (const key of keys) {
                        const value = rawData[key];
                        // Replaced 'any' with 'unknown' for safer array iteration
                        if (Array.isArray(value) && value.every((item: unknown) => typeof item === 'string')) {
                            imageUrls = value as string[];
                            foundKey = key;
                            break; // Stop at the first array of strings found
                        }
                    }
                }

                if (imageUrls.length > 0 && foundKey) {
                    // MODIFICATION: Removing the .slice(0, 15) limit to show all logos.
                    const allUrls = imageUrls;
                    setBrandLogosUrls(allUrls);
                    setError(null);
                    console.log(`--- DEBUG: Found logo array under key: ${foundKey} (showing ${allUrls.length} logos) ---`);
                } else {
                    // This is the error path you are currently hitting
                    throw new Error(`Invalid response format. No array of image URLs found. Raw keys: ${Object.keys(rawData || {}).join(', ')}`);
                }
            } catch (err: unknown) {
                const fetchError = err as FetchError;
                const errorMessage = fetchError.message || "An unknown error occurred during fetch.";
                console.error("Failed to fetch brand logos:", errorMessage);
                setError(`Failed to load collaboration partners. (${errorMessage})`);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBrandLogos();
    }, []);

    // Helper function to extract a simple name for the alt text/fallback
    const getBrandNameFromUrl = (url: string) => {
        try {
            const urlParts = new URL(url).pathname.split('/');
            const filename = urlParts[urlParts.length - 1];
            return filename.split('.')[0].replace(/[-_]/g, ' ').toUpperCase();
        } catch {
            return 'BRAND LOGO';
        }
    };


    return (
        <section id="brand" className="relative w-full pt-16 md:pt-24 bg-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10" aria-hidden="true">
                    <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [bg-size:16px_16px]"></div>
                </div>
            </div>

            <div className="templateContainer px-4 md:px-6 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 md:mb-16 items-start">
                    {/* Left Column: Headings */}
                    <div className="lg:w-1/2">
                        <h6 className="text-[#D4AF37] uppercase tracking-wider text-sm mb-4">
                            global Collaboration
                        </h6>
                        <h2 className="text-3xl md:text-4xl lg:text-[39px] font-normal text-gray-900 leading-tight">
                            Partnering for Ethical & <br className="hidden md:block" /> Sustainable Organic Growth
                        </h2>
                    </div>

                    {/* Right Column: Text & Link */}
                    <div className="lg:w-1/2">
                        <p className="text-gray-600 text-[17px] leading-relaxed mb-6 font-light ">
                            <strong className="text-gray-900 ">To keep things organized,</strong> we do not work with individual
                            farmers. Instead, once we identify a state or location, we reach
                            out to the farmers association or community leaders to help us
                            identify experienced and committed farmers.
                        </p>
                        <a
                            href="/about"
                            className="inline-flex items-center text-[#D4AF37] font-normal hover:text-[##D4AF37]/60 transition-colors group"
                        >
                            Read more
                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Bottom Section: Brand Grid */}
                {/* MODIFICATION 1: Removed 'border-l' from this wrapper. It now only provides border-t. */}
                <div className="w-full bg-white border-t border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {isLoading || error || brandLogosUrls.length === 0 ? (
                            // Use col-span-full to ensure it fills the space
                            <div className="col-span-full p-8 text-center text-gray-500">
                                {isLoading ? "Loading logos..." : error ? error : "No collaboration partners found."}
                            </div>
                        ) : (
                            // Wrap the logo mapping in a Flexbox container for centering the last row.
                            <div className="col-span-full flex flex-wrap justify-start lg:justify-center">
                                {brandLogosUrls.map((fullUrl, index) => (
                                    <BrandItem
                                        key={index}
                                        name={getBrandNameFromUrl(fullUrl)}
                                        src={fullUrl}
                                        // Pass index for border calculation
                                        index={index}
                                        // Use sensible default dimensions
                                        width={180}
                                        height={50}
                                    />
                                ))}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
};

// BrandItem component
const BrandItem = ({ name, src, width, height, index }: { name: string, src: string, width: number, height: number, index: number }) => {
    const [imgError, setImgError] = useState(false);

    // Function to calculate the border classes for the grid item.
    const getDynamicBorderClasses = () => {
        const borderClasses = "border-gray-200";

        // MODIFICATION 2: Added 'border-l' to ensure every item has a left border.
        // Combined with border-r and border-b, this completes the grid lines.
        return `border-l border-r border-b ${borderClasses} flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5`;
    };

    if (imgError) {
        return (
            // Apply flex-shrink-0 and width utility classes to ensure the items take up the correct column width
            <div className={`flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300 ${getDynamicBorderClasses()}`}>
                <span className="text-gray-400 font-bold text-lg uppercase">{name}</span>
            </div>
        );
    }

    return (
        // Apply the border classes and width utilities to the item container
        <div className={`flex items-center justify-center p-8 h-32 hover:bg-gray-50 transition-colors duration-300 ${getDynamicBorderClasses()}`}>
            {/* Replaced Next.js Image component with standard HTML <img> tag */}
            <img
                src={src}
                alt={`${name} logo`}
                width={width}
                height={height}
                loading="lazy"
                className="max-h-12 w-auto object-contain"
                onError={() => setImgError(true)}
            />
        </div>
    );
};

export default GlobalColab;