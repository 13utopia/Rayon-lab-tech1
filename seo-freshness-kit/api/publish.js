import { createFeed } from "../feed.js";
import { config } from "../CONFIG.js";

const feed = createFeed(config);

function authorized(req) {
  if (process.env.NODE_ENV !== "production") return true;
  if (req.headers?.["x-vercel-cron"] === "1") return true;
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;
  return req.headers?.authorization === `Bearer ${secret}`;
}

async function pingIndexNow(urls) {
  const origin = feed.siteUrl();
  const key = config.indexNowKey;
  const payload = JSON.stringify({
    host: new URL(origin).host,
    key,
    keyLocation: `${origin}/${key}.txt`,
    urlList: urls,
  });
  const endpoints = ["https://api.indexnow.org/indexnow", "https://www.bing.com/indexnow"];
  const results = [];
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: payload,
      });
      results.push({ endpoint, ok: response.ok, status: response.status });
    } catch (err) {
      results.push({ endpoint, ok: false, error: String(err) });
    }
  }
  return results;
}

export default async function handler(req, res) {
  try {
    if (req.method && req.method !== "GET" && req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    if (!authorized(req)) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const post = feed.latest();
    const origin = feed.siteUrl();
    const listPath = config.listPath || "/updates";
    const urls = [
      `${origin}/`,
      `${origin}${listPath}`,
      `${origin}${listPath}/${post.id}`,
      `${origin}/sitemap.xml`,
    ];

    const indexNow = await pingIndexNow(urls);
    res.status(200).json({
      ok: true,
      published: post.id,
      title: post.title,
      publishedAt: post.publishedAt,
      urls,
      indexNow,
    });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Publish failed" });
  }
}
