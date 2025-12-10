

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