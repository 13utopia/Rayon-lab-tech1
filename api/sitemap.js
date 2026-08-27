import { createFeed } from "./_lib/feed.js";
import { config } from "./_lib/CONFIG.js";

const feed = createFeed(config);

function esc(v) {
  return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default function handler(_req, res) {
  try {
    const origin = feed.siteUrl();
    const posts = feed.listPosts();
    const today = new Date().toISOString().slice(0, 10);
    const listPath = config.listPath || "/updates";
    const fresh = posts[0]?.publishedAt.slice(0, 10) ?? today;

    const staticUrls = (config.staticPaths || [{ path: "/", changefreq: "weekly", priority: "1.0" }]).map((item) => {
      const lastmod = item.path === "/" || item.path === listPath ? fresh : today;
      return `  <url>
    <loc>${esc(origin + item.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
    });

    const listUrl = `  <url>
    <loc>${esc(origin + listPath)}</loc>
    <lastmod>${fresh}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;

    const postUrls = posts.map(
      (p) => `  <url>
    <loc>${esc(`${origin}${listPath}/${p.id}`)}</loc>
    <lastmod>${p.publishedAt.slice(0, 10)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
    );

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.join("\n")}
${listUrl}
${postUrls.join("\n")}
</urlset>
`;
    if (typeof res.setHeader === 'function') {
      res.setHeader("Content-Type", "application/xml; charset=utf-8");
      res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
    }
    if (typeof res.status === 'function') {
      res.status(200);
      if (typeof res.send === 'function') {
        res.send(xml);
        return;
      }
    } else {
      res.statusCode = 200;
    }
    if (typeof res.end === 'function') {
      res.end(xml);
    }
  } catch (err) {
    if (typeof res.status === 'function') {
      res.status(500);
      if (typeof res.send === 'function') {
        res.send("sitemap error");
        return;
      }
    } else {
      res.statusCode = 500;
    }
    if (typeof res.end === 'function') {
      res.end("sitemap error");
    }
  }
}
