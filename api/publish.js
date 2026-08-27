import { createFeed } from "./_lib/feed.js";
import { config } from "./_lib/CONFIG.js";

const feed = createFeed(config);

function sendJson(res, statusCode, data) {
  if (typeof res.status === 'function') {
    res.status(statusCode);
    if (typeof res.json === 'function') {
      res.json(data);
      return;
    }
  } else {
    res.statusCode = statusCode;
  }
  if (typeof res.setHeader === 'function') {
    res.setHeader("Content-Type", "application/json");
  }
  if (typeof res.end === 'function') {
    res.end(JSON.stringify(data));
  }
}

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
      sendJson(res, 405, { error: "Method not allowed" });
      return;
    }
    if (!authorized(req)) {
      sendJson(res, 401, { error: "Unauthorized" });
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
    const responsePayload = {
      ok: true,
      published: post.id,
      title: post.title,
      publishedAt: post.publishedAt,
      urls,
      indexNow,
    };
    sendJson(res, 200, responsePayload);
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Publish failed";
    sendJson(res, 500, { error: errorMsg });
  }
}
