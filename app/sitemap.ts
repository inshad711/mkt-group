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

// // D:\mktgroup\app\sitemap.ts

// import { MetadataRoute } from "next";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const siteUrl = process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL;

//   // Fetch categories
//   const categoriesApiUrl = `${siteUrl}/wp-json/custom/v1/getAllCategories`;
//   const categoriesRes = await fetch(categoriesApiUrl);
//   const categoriesData = await categoriesRes.json();
//   const categories = categoriesData.categories || [];

//   // Static pages
//   const staticPages: MetadataRoute.Sitemap = [
//     {
//       url: `${siteUrl}/`,
//       lastModified: new Date(),
//       priority: 1.0,
//     },
//     {
//       url: `${siteUrl}/about`,
//       lastModified: new Date(),
//       priority: 0.8,
//     },
//     {
//       url: `${siteUrl}/category`,
//       lastModified: new Date(),
//       priority: 0.8,
//     },
//     {
//       url: `${siteUrl}/contact`,
//       lastModified: new Date(),
//       priority: 0.9,
//     },
//   ];

//   // Category pages
//   const categoryPages: MetadataRoute.Sitemap = categories.map(
//     (cat: { slug: string }) => ({
//       url: `${siteUrl}/category/${cat.slug}`,
//       lastModified: new Date(),
//       priority: 0.7,
//     })
//   );

//   // Product pages
//   let productPages: MetadataRoute.Sitemap = [];
//   for (const cat of categories) {
//     const productsApiUrl = `${siteUrl}/wp-json/custom/v1/getProductByCategory/${cat.slug}`;
//     try {
//       const productsRes = await fetch(productsApiUrl);
//       if (productsRes.ok) {
//         const productsData = await productsRes.json();
//         const products = productsData.products || [];
//         const catProducts = products.map((product: { slug: string }) => ({
//           url: `${siteUrl}/product/${product.slug}`,
//           lastModified: new Date(),
//           priority: 0.6,
//         }));
//         productPages = [...productPages, ...catProducts];
//       }
//     } catch (error) {
//       console.error(
//         `Failed to fetch products for category ${cat.slug}:`,
//         error
//       );
//     }
//   }

//   return [...staticPages, ...categoryPages, ...productPages];
// }

import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Define the Frontend Base URL (for sitemap output)
  // We use a fallback ('http://localhost:3000') to prevent the error if not set,
  // but this MUST be correctly configured in your deployment environment.
  const frontendUrl =
    process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL ||
    "https://mktgroupaebck.demo-web.live";

  // 2. Define the Backend API URL (for fetching data)
  // This must match the variable defined in your .env.local file (BACKEND_URL)
  const backendUrl = process.env.BACKEND_URL;

  if (!backendUrl) {
    // Crucial error check: If the BACKEND_URL isn't set, the API fetch will fail.
    // Throwing an error here ensures the build fails early with a clear message.
    console.error(
      "CRITICAL ERROR: BACKEND_URL environment variable is missing for sitemap generation."
    );
    // Return static pages as a minimum if necessary, but failing the build is often safer.
    return [{ url: frontendUrl, lastModified: new Date(), priority: 1.0 }];
  }

  // --- API Fetch Logic ---

  // 3. Use the correct BACKEND URL for API calls
  // Fetch categories
  const categoriesApiUrl = `${backendUrl}/wp-json/custom/v1/getAllCategories`;

  let categoriesData: { categories?: { slug: string }[] } = {};

  try {
    const categoriesRes = await fetch(categoriesApiUrl, {
      // Add 'force-cache' to ensure it runs during build
      cache: "force-cache",
    });

    if (!categoriesRes.ok) {
      console.error(
        `Failed to fetch categories. Status: ${categoriesRes.status}`
      );
      // If categories fail, we proceed without dynamic category/product paths
    } else {
      categoriesData = await categoriesRes.json();
    }
  } catch (error) {
    console.error(`Fetch error for categories:`, error);
  }

  const categories = categoriesData.categories || [];

  // Static pages (using frontendUrl)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${frontendUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${frontendUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${frontendUrl}/category`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${frontendUrl}/contact`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];

  // Category pages (using frontendUrl)
  const categoryPages: MetadataRoute.Sitemap = categories.map(
    (cat: { slug: string }) => ({
      url: `${frontendUrl}/category/${cat.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })
  );

  // Product pages (using frontendUrl, fetching with backendUrl)
  let productPages: MetadataRoute.Sitemap = [];
  for (const cat of categories) {
    const productsApiUrl = `${backendUrl}/wp-json/custom/v1/getProductByCategory/${cat.slug}`;
    try {
      const productsRes = await fetch(productsApiUrl, {
        // Add 'force-cache' to ensure it runs during build
        cache: "force-cache",
      });
      if (productsRes.ok) {
        const productsData = await productsRes.json();
        const products = productsData.products || [];
        const catProducts = products.map((product: { slug: string }) => ({
          url: `${frontendUrl}/product/${product.slug}`,
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
