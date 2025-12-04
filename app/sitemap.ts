// // D:\mktgroup\app\sitemap.ts

// import { MetadataRoute } from "next";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const frontendUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

//   return [
//     {
//       url: `${frontendUrl}`,
//       lastModified: new Date(),
//       priority: 1.0,
//     },
//     {
//       url: `${frontendUrl}/about`,
//       lastModified: new Date(),
//       priority: 0.8,
//     },
//     {
//       url: `${frontendUrl}/category`,
//       lastModified: new Date(),
//       priority: 0.8,
//     },
//     {
//       url: `${frontendUrl}/contact`,
//       lastModified: new Date(),
//       priority: 0.9,
//     },
//   ];
// }

// D:\mktgroup\app\sitemap.ts

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

  // Fetch categories
  const categoriesApiUrl = `${siteUrl}/wp-json/custom/v1/getAllCategories`;
  const categoriesRes = await fetch(categoriesApiUrl);
  const categoriesData = await categoriesRes.json();
  const categories = categoriesData.categories || [];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${siteUrl}/category`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map(
    (cat: { slug: string }) => ({
      url: `${siteUrl}/category/${cat.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })
  );

  // Product pages
  let productPages: MetadataRoute.Sitemap = [];
  for (const cat of categories) {
    const productsApiUrl = `${siteUrl}/wp-json/custom/v1/getProductByCategory/${cat.slug}`;
    try {
      const productsRes = await fetch(productsApiUrl);
      if (productsRes.ok) {
        const productsData = await productsRes.json();
        const products = productsData.products || [];
        const catProducts = products.map((product: { slug: string }) => ({
          url: `${siteUrl}/product/${product.slug}`,
          lastModified: new Date(),
          priority: 0.6,
        }));
        productPages = [...productPages, ...catProducts];
      }
    } catch (error) {
      console.error(
        `Failed to fetch products for category ${cat.slug}:`,
        error
      );
    }
  }

  return [...staticPages, ...categoryPages, ...productPages];
}
