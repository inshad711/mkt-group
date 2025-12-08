// // D:\mktgroup\app\product\[slug]\page.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import MainSingleSection from '../../components/MainSingleSection'; // Adjust path as needed

// // Define the structure for the raw API product data
// interface ApiProduct {
//     id: number;
//     title: string;
//     slug: string;
//     product_description: string; // HTML string
//     product_image: string;
//     product_gallery_images: string[];
//     product_specification: string;
//     categories: Array<{ name: string; slug: string }>;
//     // Add price if available in API; otherwise, handle as placeholder
//     price?: number; // Optional, as it's not in the sample data
// }

// // Define the structure for the transformed product data (matching MainSingleSection props)
// interface ProductDetail {
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


// const transformApiData = (apiProduct: ApiProduct): ProductDetail => {
//     // Extract category
//     const category = apiProduct.categories[0]?.name || 'Unknown Category';

//     // Title (as is)
//     const title = apiProduct.title;

//     // Price: Placeholder since not in API; replace with real fetch if needed
//     const price = apiProduct.price || 3.50; // Default from hardcoded

//     // Description: Strip HTML tags from the main paragraph (simplistic regex; use a library for robustness)
//     const description = apiProduct.product_description
//         .replace(/<[^>]*>/g, '') // Strip all tags
//         .replace(/\s+/g, ' ') // Normalize whitespace
//         .trim()
//         .split('\n')[0] || ''; // Take first sentence/para as description

//     // Images: Use product_gallery_images, fallback to product_image
//     const images = apiProduct.product_gallery_images.length > 0
//         ? apiProduct.product_gallery_images
//         : [apiProduct.product_image];

//     // Sizes: Placeholder derived from product_specification (e.g., split by spaces or commas)
//     // In sample: "4x1.8ltr Liquid" -> derive possible sizes
//     const sizes = apiProduct.product_specification
//         ? apiProduct.product_specification.split(/[\s,]+/).filter(Boolean) // Simple split
//         : ['500 ml', '750 ml', '1 L']; // Fallback to hardcoded

//     // Accordions: Parse product_description for features (look for "Key Features" section)
//     // Simplistic: Split by <h4>Key Features:</h4> and extract ul/li content
//     const featuresMatch = apiProduct.product_description.match(/<h4[^>]*>Key Features:<\/h4>[\s\S]*?<\/ul>/i);
//     let featuresContent = '';
//     if (featuresMatch) {
//         featuresContent = featuresMatch[0]
//             .replace(/<[^>]*>/g, '') // Strip tags
//             .replace(/\s+/g, ' ') // Normalize
//             .trim();
//     }

//     // Build accordions: One for description/features, add hardcoded if needed
//     const accordions = [
//         {
//             id: 'info',
//             title: 'Product Information',
//             content: 'Kills 99.9% of germs, Removes tough stains, Leaves a fresh fragrance, 10X superior cleaning power.',
//         },
//         // Add more dynamically if parsed sections exist, or keep hardcoded
//         {
//             id: 'benefits',
//             title: 'Key Benefits',
//             content: 'Powerful cleaning, Stain removal, Fresh fragrance.', // Placeholder; derive from data
//         },
//         {
//             id: 'ingredients',
//             title: 'Ingredients',
//             content: 'Contact manufacturer for full list.', // Placeholder; add if API has it
//         },
//     ];

//     return { category, title, price, description, images, sizes, accordions };
// };

// // Main page component
// const ProductDetailPage = () => {
//     const params = useParams();
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         if (!slug) {
//             setError('Product slug is missing.');
//             setLoading(false);
//             return;
//         }

//         const fetchProduct = async () => {
//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError('API Base URL is not configured in .env.local.');
//                 setLoading(false);
//                 return;
//             }

//             // API endpoint for single product (note: custom-api vs custom/v1; use as provided)
//             const apiEndpoint = `/wp-json/custom-api/getProductBySlug/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const apiData: ApiProduct = await response.json();

//                 if (apiData && apiData.title) {
//                     const transformedData = transformApiData(apiData);
//                     setProductDetail(transformedData);
//                 } else {
//                     setError('Product not found.');
//                 }
//             } catch (err) {
//                 console.error('Error fetching product:', err);
//                 const errorMessage = err instanceof Error ? err.message : 'Failed to load product details.';
//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProduct();
//     }, [slug]);

//     if (loading) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p className="text-gray-500">Loading product details...</p>
//             </section>
//         );
//     }

//     if (error || !productDetail) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error || 'Product not found.'}</p>
//             </section>
//         );
//     }

//     return <MainSingleSection {...productDetail} />;
// };

// export default ProductDetailPage;

/////////////////////////////////////////////////////////////


// // D:\mktgroup\app\product\[slug]\page.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import MainSingleSection from '../../components/MainSingleSection'; // Adjust path as needed

// // Define the structure for the raw API product data
// interface ApiProduct {
//     id: number;
//     title: string;
//     slug: string;
//     product_description: string; // HTML string
//     product_image: string;
//     product_gallery_images: string[];
//     product_specification: string;
//     categories: Array<{ name: string; slug: string }>;
//     // Add price if available in API; otherwise, handle as placeholder
//     price?: number; // Optional, as it's not in the sample data
// }

// // Define the structure for the transformed product data (matching MainSingleSection props)
// interface ProductDetail {
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


// const transformApiData = (apiProduct: ApiProduct): ProductDetail => {
//     // Extract category
//     const category = apiProduct.categories[0]?.name || 'Unknown Category';

//     // Title (as is)
//     const title = apiProduct.title;


//     // Description: Strip HTML tags from the main paragraph (simplistic regex; use a library for robustness)
//     const description = apiProduct.product_description
//         .replace(/<[^>]*>/g, '') // Strip all tags
//         .replace(/\s+/g, ' ') // Normalize whitespace
//         .trim()
//         .split('\n')[0] || ''; // Take first sentence/para as description

//     // Images: Use product_gallery_images, fallback to product_image
//     const images = apiProduct.product_gallery_images.length > 0
//         ? apiProduct.product_gallery_images
//         : [apiProduct.product_image];

//     // Sizes: Updated to derive from product_specification or use fallback
//     const sizes = apiProduct.product_specification
//         ? [apiProduct.product_specification] // Use specification as the single size option
//         : ['500 ml', '750 ml', '1 L']; // Fallback to hardcoded

//     // Accordions: **PRESERVED ORIGINAL HARDCODED LOGIC**
//     const accordions = [
//         {
//             id: 'info',
//             title: 'Product Information',
//             content: 'Kills 99.9% of germs, Removes tough stains, Leaves a fresh fragrance, 10X superior cleaning power.',
//         },
//         {
//             id: 'benefits',
//             title: 'Key Benefits',
//             content: 'Powerful cleaning, Stain removal, Fresh fragrance.', // Placeholder; derive from data
//         },
//         {
//             id: 'ingredients',
//             title: 'Ingredients',
//             content: 'Contact manufacturer for full list.', // Placeholder; add if API has it
//         },
//     ];

//     return { category, title, description, images, sizes, accordions };
// };

// // Main page component
// const ProductDetailPage = () => {
//     const params = useParams();
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         if (!slug) {
//             setError('Product slug is missing.');
//             setLoading(false);
//             return;
//         }

//         const fetchProduct = async () => {
//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError('API Base URL is not configured in .env.local.');
//                 setLoading(false);
//                 return;
//             }

//             // API endpoint for single product (note: custom-api vs custom/v1; use as provided)
//             const apiEndpoint = `/wp-json/custom-api/getProductBySlug/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const apiData: ApiProduct = await response.json();

//                 if (apiData && apiData.title) {
//                     const transformedData = transformApiData(apiData);
//                     setProductDetail(transformedData);
//                 } else {
//                     setError('Product not found.');
//                 }
//             } catch (err) {
//                 console.error('Error fetching product:', err);
//                 const errorMessage = err instanceof Error ? err.message : 'Failed to load product details.';
//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProduct();
//     }, [slug]);

//     if (loading) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p className="text-gray-500">Loading product details...</p>
//             </section>
//         );
//     }

//     if (error || !productDetail) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error || 'Product not found.'}</p>
//             </section>
//         );
//     }

//     return <MainSingleSection {...productDetail} />;
// };

// export default ProductDetailPage;


////////////////////////////////////////////////////

// // D:\mktgroup\app\product\[slug]\page.tsx
// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import MainSingleSection from '../../components/MainSingleSection'; // Adjust path as needed
// import NewBreadCrumb from '@/app/components/NewBreadCrumb';

// // ... (ApiProduct interface remains the same)
// interface ApiProduct {
//     id: number;
//     title: string;
//     slug: string;
//     product_description: string; // HTML string
//     product_image: string;
//     product_gallery_images: string[];
//     product_specification: string;
//     categories: Array<{ name: string; slug: string }>;
//     price?: number; // Optional, as it's not in the sample data
// }

// // Define structure for contact info
// interface ContactInfo {
//     whatsappNumber: string;
//     emailAddress: string;
//     phoneNumber: string;
// }

// // Define the structure for the transformed product data (matching MainSingleSection props)
// // Updated to include contactInfo
// interface ProductDetail {
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


// const transformApiData = (apiProduct: ApiProduct, contactInfo: ContactInfo): ProductDetail => {
//     // Extract category
//     const category = apiProduct.categories[0]?.name || 'Unknown Category';

//     // Title (as is)
//     const title = apiProduct.title;


//     // Description: Strip HTML tags from the main paragraph (simplistic regex; use a library for robustness)
//     const description = apiProduct.product_description
//         .replace(/<[^>]*>/g, '') // Strip all tags
//         .replace(/\s+/g, ' ') // Normalize whitespace
//         .trim()
//         .split('\n')[0] || ''; // Take first sentence/para as description

//     // Images: Use product_gallery_images, fallback to product_image
//     const images = apiProduct.product_gallery_images.length > 0
//         ? apiProduct.product_gallery_images
//         : [apiProduct.product_image];

//     // Sizes: Updated to derive from product_specification or use fallback
//     const sizes = apiProduct.product_specification
//         ? [apiProduct.product_specification] // Use specification as the single size option
//         : ['500 ml', '750 ml', '1 L']; // Fallback to hardcoded

//     // Accordions: **PRESERVED ORIGINAL HARDCODED LOGIC**
//     const accordions = [
//         {
//             id: 'info',
//             title: 'Product Information',
//             content: 'Kills 99.9% of germs, Removes tough stains, Leaves a fresh fragrance, 10X superior cleaning power.',
//         },
//         {
//             id: 'benefits',
//             title: 'Key Benefits',
//             content: 'Powerful cleaning, Stain removal, Fresh fragrance.', // Placeholder; derive from data
//         },
//         {
//             id: 'ingredients',
//             title: 'Ingredients',
//             content: 'Contact manufacturer for full list.', // Placeholder; add if API has it
//         },
//     ];

//     return { category, title, description, images, sizes, accordions, contactInfo };
// };

// // Main page component
// const ProductDetailPage = () => {
//     const params = useParams();
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // Dynamic Contact Info from ENV - **ENSURE THESE ARE CONFIGURED IN YOUR .env.local**
//     const contactInfo: ContactInfo = {
//         whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+918604297055',
//         emailAddress: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'aliinshad711@gmail.com',
//         phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+918604297055',
//     };

//     useEffect(() => {
//         if (!slug) {
//             setError('Product slug is missing.');
//             setLoading(false);
//             return;
//         }

//         const fetchProduct = async () => {
//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError('API Base URL is not configured in .env.local.');
//                 setLoading(false);
//                 return;
//             }

//             // API endpoint for single product (note: custom-api vs custom/v1; use as provided)
//             const apiEndpoint = `/wp-json/custom-api/getProductBySlug/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const apiData: ApiProduct = await response.json();

//                 if (apiData && apiData.title) {
//                     // Pass contactInfo to the transformer
//                     const transformedData = transformApiData(apiData, contactInfo);
//                     setProductDetail(transformedData);
//                 } else {
//                     setError('Product not found.');
//                 }
//             } catch (err) {
//                 console.error('Error fetching product:', err);
//                 const errorMessage = err instanceof Error ? err.message : 'Failed to load product details.';
//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProduct();
//     }, [slug]);

//     if (loading) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36">
//                 <p className="text-gray-500">Loading product details...</p>
//             </section>
//         );
//     }

//     if (error || !productDetail) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error || 'Product not found.'}</p>
//             </section>
//         );
//     }

//     return (
//         <div>
//             <NewBreadCrumb
//                 title={productDetail.title} // Use the fetched product title
//                 page={productDetail.title}  // Use the fetched product title
//                 img="/dummy-image/Gemini_Generated_Image_74iw4t74iw4t74iw.png"
//                 version2={false}
//             />
//             <MainSingleSection {...productDetail} />;
//         </div>
//     )
// };

// export default ProductDetailPage;

//////////////////////////////////////////////////////////////

// // D:\mktgroup\app\product\[slug]\page.tsx

// "use client";

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import MainSingleSection from '../../components/MainSingleSection';
// import NewBreadCrumb from '@/app/components/NewBreadCrumb';
// // 1. Import Motion
// import { motion } from 'framer-motion';
// import { ProductDetailSkeleton } from '@/app/components/Skeletons';

// // ... (Interface Definitions remain same: ApiProduct, ContactInfo, ProductDetail) ...
// interface ApiProduct {
//     id: number;
//     title: string;
//     slug: string;
//     product_description: string;
//     product_image: string;
//     product_gallery_images: string[];
//     product_specification: string;
//     categories: Array<{ name: string; slug: string }>;
//     price?: number;
// }

// interface ContactInfo {
//     whatsappNumber: string;
//     emailAddress: string;
//     phoneNumber: string;
// }

// interface ProductDetail {
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
//     contactInfo: ContactInfo;
// }

// const transformApiData = (apiProduct: ApiProduct, contactInfo: ContactInfo): ProductDetail => {
//     const category = apiProduct.categories[0]?.name || 'Unknown Category';
//     const title = apiProduct.title;
//     const description = apiProduct.product_description
//         .replace(/<[^>]*>/g, '')
//         .replace(/\s+/g, ' ')
//         .trim()
//         .split('\n')[0] || '';

//     const images = apiProduct.product_gallery_images.length > 0
//         ? apiProduct.product_gallery_images
//         : [apiProduct.product_image];

//     const sizes = apiProduct.product_specification
//         ? [apiProduct.product_specification]
//         : ['500 ml', '750 ml', '1 L'];

//     const accordions = [
//         {
//             id: 'info',
//             title: 'Product Information',
//             content: 'Kills 99.9% of germs, Removes tough stains, Leaves a fresh fragrance, 10X superior cleaning power.',
//         },
//         {
//             id: 'benefits',
//             title: 'Key Benefits',
//             content: 'Powerful cleaning, Stain removal, Fresh fragrance.',
//         },
//         {
//             id: 'ingredients',
//             title: 'Ingredients',
//             content: 'Contact manufacturer for full list.',
//         },
//     ];

//     return { category, title, description, images, sizes, accordions, contactInfo };
// };

// const ProductDetailPage = () => {
//     const params = useParams();
//     const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug || '');

//     const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     const contactInfo: ContactInfo = {
//         whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+918604297055',
//         emailAddress: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'aliinshad711@gmail.com',
//         phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+918604297055',
//     };

//     useEffect(() => {
//         if (!slug) {
//             setError('Product slug is missing.');
//             setLoading(false);
//             return;
//         }

//         const fetchProduct = async () => {
//             const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
//             if (!baseUrl) {
//                 setError('API Base URL is not configured in .env.local.');
//                 setLoading(false);
//                 return;
//             }

//             const apiEndpoint = `/wp-json/custom-api/getProductBySlug/${slug}`;
//             const fullUrl = `${baseUrl}${apiEndpoint}`;

//             try {
//                 const response = await fetch(fullUrl);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const apiData: ApiProduct = await response.json();

//                 if (apiData && apiData.title) {
//                     const transformedData = transformApiData(apiData, contactInfo);
//                     setProductDetail(transformedData);
//                 } else {
//                     setError('Product not found.');
//                 }
//             } catch (err) {
//                 console.error('Error fetching product:', err);
//                 const errorMessage = err instanceof Error ? err.message : 'Failed to load product details.';
//                 setError(errorMessage);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProduct();
//     }, [slug]);

//     if (loading) {
//         return (
//             <section className="w-full pt-36">
//                 {/* Optional: You can render a Skeleton Breadcrumb here if you want */}
//                 <ProductDetailSkeleton />
//             </section>
//         );
//     }

//     if (error || !productDetail) {
//         return (
//             <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
//                 <p>{error || 'Product not found.'}</p>
//             </section>
//         );
//     }

//     return (

//         <div>
//             <NewBreadCrumb

//                 page={productDetail.title}
//                 img="/dummy-image/Gemini_Generated_Image_74iw4t74iw4t74iw.png"
//                 version2={false}
//             />
//             <MainSingleSection {...productDetail} />
//         </div >
//     )
// };

// export default ProductDetailPage;


// D:\mktgroup\app\product\[slug]\page.tsx

import { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';
import NewBreadCrumb from '@/app/components/NewBreadCrumb';
import { ProductDetailSkeleton } from '@/app/components/Skeletons';

interface ApiProduct {
    id: number;
    title: string;
    slug: string;
    product_description: string;
    product_image: string;
    product_gallery_images: string[];
    product_specification: string;
    categories: Array<{ name: string; slug: string }>;
    price?: number;
}

interface ContactInfo {
    whatsappNumber: string;
    emailAddress: string;
    phoneNumber: string;
}

interface ProductDetail {
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

const transformApiData = (apiProduct: ApiProduct, contactInfo: ContactInfo): ProductDetail => {
    const category = apiProduct.categories[0]?.name || 'Unknown Category';
    const title = apiProduct.title;
    const description = apiProduct.product_description
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .split('\n')[0] || '';

    const images = apiProduct.product_gallery_images.length > 0
        ? apiProduct.product_gallery_images
        : [apiProduct.product_image];

    const sizes = apiProduct.product_specification
        ? [apiProduct.product_specification]
        : ['500 ml', '750 ml', '1 L'];

    const accordions = [
        {
            id: 'info',
            title: 'Product Information',
            content: 'Kills 99.9% of germs, Removes tough stains, Leaves a fresh fragrance, 10X superior cleaning power.',
        },
        {
            id: 'benefits',
            title: 'Key Benefits',
            content: 'Powerful cleaning, Stain removal, Fresh fragrance.',
        },
        {
            id: 'ingredients',
            title: 'Ingredients',
            content: 'Contact manufacturer for full list.',
        },
    ];

    return { category, title, description, images, sizes, accordions, contactInfo };
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
    const apiEndpoint = `/wp-json/custom-api/getProductBySlug/${slug}`;
    const fullUrl = `${baseUrl}${apiEndpoint}`;

    try {
        const response = await fetch(fullUrl);
        if (!response.ok) throw new Error('Failed');
        const data = await response.json();
        const { meta_title, meta_description, meta_keywords, title } = data;
        return {
            title: meta_title || `${title} | MKT Group`,
            description: meta_description,
            keywords: meta_keywords,
            metadataBase: new URL(baseUrl || 'http://localhost:3000'), // FIXED: Add this
            alternates: {
                canonical: `${baseUrl}/product/${slug}`,
            },
        };
    } catch (e) {
        return {
            title: 'Product | MKT Group',
            description: 'View product details.',
            metadataBase: new URL(baseUrl || 'http://localhost:3000'), // FIXED: Add this
        };
    }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let productDetail: ProductDetail | null = null;
    let error: string | null = null;

    const formattedSlug = slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';

    const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;
    if (!slug) {
        error = 'Product slug is missing.';
    } else if (!baseUrl) {
        error = 'API Base URL is not configured in .env.local.';
    } else {
        try {
            const apiEndpoint = `/wp-json/custom-api/getProductBySlug/${slug}`;
            const fullUrl = `${baseUrl}${apiEndpoint}`;

            const response = await fetch(fullUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const apiData: ApiProduct = await response.json();

            if (apiData && apiData.title) {
                const contactInfo: ContactInfo = {
                    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+918604297055',
                    emailAddress: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'aliinshad711@gmail.com',
                    phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+918604297055',
                };
                productDetail = transformApiData(apiData, contactInfo);
            } else {
                error = 'Product not found.';
            }
        } catch (err) {
            console.error('Error fetching product:', err);
            error = err instanceof Error ? err.message : 'Failed to load product details.';
        }
    }

    if (error || !productDetail) {
        return (
            <>
                <NewBreadCrumb
                    title={formattedSlug}
                    page={formattedSlug}
                    img="/dummy-image/9b1acb49-84be-42c1-a505-f05c0037e564.webp"
                    version2={false}
                />
                <section className="w-full templateContainer px-6 py-12 text-center pt-36 text-red-600">
                    <p>{error || 'Product not found.'}</p>
                </section>
            </>
        );
    }

    return <ProductDetailClient productDetail={productDetail} />;
}