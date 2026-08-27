import { createFeed } from "../feed.js";
import { config } from "../CONFIG.js";

const feed = createFeed(config);

export default function handler(req, res) {
  res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=3600");
  try {
    if (req.method && req.method !== "GET") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    const raw = req.query?.id;
    const id = Array.isArray(raw) ? raw[0] : raw;
    if (id) {
      const post = feed.getById(id);
      if (!post) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.status(200).json({ update: post });
      return;
    }
    res.status(200).json({ updates: feed.listPosts() });
  } catch (err) {
    res.status(500).json({ error: err instanceof Error ? err.message : "Failed" });
  }
}
