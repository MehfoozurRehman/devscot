// pages/sitemap.xml.js

// List of URLs for devscot.com
const DEVSCOT_URLS = [
    'https://www.devscot.com/',
    'https://www.devscot.com/services',
    'https://www.devscot.com/projects',
    'https://www.devscot.com/about',
    'https://www.devscot.com/contact',
  ];
  
  function generateSiteMap(urls) {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--Manually set the URLs for devscot.com-->
       ${urls
         .map((url) => {
           return `
         <url>
             <loc>${url}</loc>
         </url>
       `;
         })
         .join('')}
     </urlset>
   `;
  }
  
  function SiteMap() {
    // Empty component as getServerSideProps handles everything
  }
  
  export async function getServerSideProps({ res }) {
    // We generate the XML sitemap with the URLs for devscot.com

    const sitemap = generateSiteMap(DEVSCOT_URLS);
    res.setHeader('Content-Type', 'text/xml');
    // Send the XML to the browser
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default SiteMap;
  