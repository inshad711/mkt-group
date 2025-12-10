

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