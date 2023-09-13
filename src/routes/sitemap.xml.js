import { getSiteMapData } from './sitemapData'; // Replace with your sitemap data generation function
import { get } from '@sveltejs/kit/http';


// Import any necessary modules or data sources
// For example, if you have a list of pages in a data.js file:
// import { pages } from './data.js';

// Replace this with your actual data source or logic to fetch pages
const pages = [
  { slug: '', changefreq: 'daily', priority: '1.0' }, // Homepage
  { slug: 'products/indoor-led', changefreq: 'weekly', priority: '0.8' },
  { slug: 'products/led-panel', changefreq: 'weekly', priority: '0.8' },
  { slug: 'products/outdoor-led', changefreq: 'weekly', priority: '0.8' },
  { slug: 'products/virtual-production', changefreq: 'weekly', priority: '0.8' },
  { slug: 'products/virtual-production-india', changefreq: 'weekly', priority: '0.8' },
  // Add more pages and their metadata here
];

export async function getSiteMapData() {
  // Generate the sitemap data dynamically
  const sitemapEntries = pages.map((page) => {
    return `
      <url>
        <loc>https://pixelitlabs.in/${page.slug}</loc>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `;
  });

  return sitemapEntries.join('\n');
}


// Import necessary modules


export async function get() {
  // Path to your sitemap.xml file within the public folder
  const sitemapPath = 'public/sitemap.xml';

  // Read the sitemap.xml file
  const response = await get(sitemapPath);

  if (response.status === 200) {
    // Set the appropriate headers for serving XML
    const headers = {
      'Content-Type': 'application/xml',
    };

    return {
      body: response.body,
      headers,
    };
  }

  // Return a 404 response if the sitemap.xml file is not found
  return {
    status: 404,
    body: 'Not Found',
  };
}

