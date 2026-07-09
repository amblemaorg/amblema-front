const https = require('https');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://amblema.org/api/';

function getJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  console.log('Generating dynamic sitemap.xml and prerender-routes.txt...');
  try {
    const schoolsData = await getJSON(baseUrl + 'schoolspage');
    const schools = schoolsData.records || [];
    
    // Fetch blog posts (page 1 with size 1000 to cover all posts)
    const blogData = await getJSON(baseUrl + 'webcontent/posts/page/1?page_size=1000');
    const posts = blogData.records || [];
    
    // 1. Generate sitemap.xml content
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://amblema.org/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://amblema.org/nosotros</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://amblema.org/padrinos</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://amblema.org/coordinadores</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://amblema.org/escuelas</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://amblema.org/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;

    // Append school detail pages
    schools.forEach((school) => {
      if (school.slug) {
        xml += `
  <url>
    <loc>https://amblema.org/escuelas/${school.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
      }
    });

    // Append blog detail pages
    posts.forEach((post) => {
      if (post.id) {
        xml += `
  <url>
    <loc>https://amblema.org/blog/post/${post.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
      }
    });

    xml += `\n</urlset>`;

    const sitemapPath = path.join(__dirname, '../src/sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);
    console.log(`Successfully generated sitemap.xml at: ${sitemapPath}`);

    const distSitemapPath = path.join(__dirname, '../dist/browser/sitemap.xml');
    if (fs.existsSync(path.dirname(distSitemapPath))) {
      fs.writeFileSync(distSitemapPath, xml);
      console.log(`Successfully copied sitemap.xml to: ${distSitemapPath}`);
    }

    // 2. Generate prerender-routes.txt content
    const staticPages = ['/', '/nosotros', '/padrinos', '/coordinadores', '/escuelas', '/blog'];
    let routes = [...staticPages];

    schools.forEach((school) => {
      if (school.slug) {
        routes.push(`/escuelas/${school.slug}`);
      }
    });

    posts.forEach((post) => {
      if (post.id) {
        routes.push(`/blog/post/${post.id}`);
      }
    });

    const routesPath = path.join(__dirname, '../prerender-routes.txt');
    fs.writeFileSync(routesPath, routes.join('\n'));
    console.log(`Successfully generated prerender-routes.txt with ${routes.length} routes at: ${routesPath}`);

  } catch (error) {
    console.error('Error generating metadata:', error);
  }
}

run();
