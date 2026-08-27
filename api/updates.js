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

export default function handler(req, res) {
  if (typeof res.setHeader === 'function') {
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  }
  try {
    if (req.method && req.method !== "GET") {
      sendJson(res, 405, { error: "Method not allowed" });
      return;
    }
    const raw = req.query?.id;
    const id = Array.isArray(raw) ? raw[0] : raw;
    if (id) {
      const post = feed.getById(id);
      if (!post) {
        sendJson(res, 404, { error: "Not found" });
        return;
      }
      sendJson(res, 200, { update: post });
      return;
    }
    sendJson(res, 200, { updates: feed.listPosts() });
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Failed";
    sendJson(res, 500, { error: errorMsg });
  }
}
