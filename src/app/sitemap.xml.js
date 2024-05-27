const DEVSCOT_URLS = [
  "https://devscot.com/",
  "https://devscot.com/services",
  "https://devscot.com/projects",
  "https://devscot.com/about",
  "https://devscot.com/contact",
  "https://devscot.com/projects/meetworth",
  "https://devscot.com/projects/mark",
  "https://devscot.com/projects/unitedmeal",
  "https://devscot.com/projects/sakenemaar",
  "https://devscot.com/projects/muslimbiz",
  "https://devscot.com/projects/walking",
  "https://devscot.com/projects/daltaswap",
  "https://devscot.com/projects/burns",
  "https://devscot.com/projects/healthvital",
  "https://devscot.com/projects/weekly",
  "https://devscot.com/contact?service=web",
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
         .join("")}
     </urlset>
   `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap(DEVSCOT_URLS);
  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
