# IDE agent: integrate SEO Freshness Kit (do not improvise)

You are a coding agent. This file is the spec. Follow it in order.

The kit is the folder named `seo-freshness-kit` already inside THIS website repo. Do not look for any other project. If that folder is missing, STOP and tell the human to copy the folder in first.

## 0. What you are building

A **weekday update feed** (default Tuesday + Friday):

- List URL: `/updates/`
- Post URL: `/updates/{id}/` where id looks like `upd-20260826`
- Same slot always produces the same id (deterministic)
- Sitemap lists every post with `<lastmod>`
- Cron (or WP-cron + real crontab) calls a publish URL that pings IndexNow
- `/llms.txt` exists
- Do not copy example/demo phone, address, or brand. Use THIS website’s existing company details.

Forbidden:

- Hourly cron
- Random titles that change every request
- Query-string-only posts (`?id=` as the only URL)
- Leaving a static `sitemap.xml` that shadows the dynamic sitemap
- Mixing WordPress plugin files into a Vite `api/` folder

---

## 1. Detect stack (exactly one)

Look at the repo:

| Evidence | Stack |
|----------|--------|
| `wp-config.php` OR `wp-content/plugins` | **A WordPress** |
| `vercel.json` and NO `wp-config.php` | **B Vercel/Node** |
| PHP files, no WordPress | **C PHP standalone** |

If two match, prefer WordPress. If none match, ASK the human.

Then do **only** that path.

---

## 2A. WordPress

### Copy

From the kit:

```
seo-freshness-kit/wordpress/seo-freshness/
```

To:

```
wp-content/plugins/seo-freshness/
```

The file `wp-content/plugins/seo-freshness/seo-freshness.php` MUST exist.

If `wp-content` is missing, you are not in a WordPress repo — go back to step 1.

### Do not

- Copy the whole `seo-freshness-kit` into plugins
- Copy `api/*.js` into WordPress
- Change the post type slug away from `updates` unless the client already uses `/updates/` for something else (then ASK)

### After copy

1. If WP-CLI exists, run:
   - `wp plugin activate seo-freshness`
   - `wp rewrite flush`
2. If no WP-CLI, tell the human: **Plugins → Installed Plugins → Activate “SEO Freshness Feed”**, then **Settings → Permalinks → Save**.
3. Open or create `wp-content/plugins/seo-freshness/README-CLIENT.txt` with:
   - Settings path: Settings → SEO Freshness
   - Cron: `curl -sS "https://THEIR_DOMAIN/wp-json/seo-freshness/v1/publish?key=THEIR_SECRET"`
   - Health: `https://THEIR_DOMAIN/wp-json/seo-freshness/v1/health`
4. If you know brand/city/phone from the existing site, put them into the plugin settings (option `sf_settings`) so NAP matches the rest of the site. Do not invent a phone number.
5. Hit publish once (WP-CLI or document the admin button).

### Theme

Do not edit the theme unless `/updates/` 404s after permalink flush. Plugin already has archive + single templates.

---

## 2B. Vercel / Node (Vite, Next, similar)

### Copy files

Create `api/` at project root if missing.

Copy:

| From kit | To project |
|----------|------------|
| `feed.js` | `api/_lib/feed.js` |
| `CONFIG.example.js` | `api/_lib/CONFIG.js` |
| `api/updates.js` | `api/updates.js` |
| `api/sitemap.js` | `api/sitemap.js` |
| `api/publish.js` | `api/publish.js` |

Then **edit imports** in the three handlers so they say:

```js
import { createFeed } from "./_lib/feed.js";
import { config } from "./_lib/CONFIG.js";
```

### CONFIG.js

Replace every placeholder:

- `siteUrl` = this client’s production URL (no trailing slash)
- `brand`, `city`, `region`, `phone`, `email` from the existing site (footer/contact). Never Navkar’s.
- `categories` / `locations` = this client’s products and places
- `staticPaths` = this client’s real routes (`/`, `/about`, `/contact`, `/products` if they exist)
- `indexNowKey` = 32 hex chars. Create `public/{THAT_KEY}.txt` whose **file contents are only the key**.

### vercel.json

Merge, do not wipe:

```json
{
  "crons": [{ "path": "/api/publish", "schedule": "30 1 * * 2,5" }],
  "rewrites": [{ "source": "/sitemap.xml", "destination": "/api/sitemap" }]
}
```

If a rewrite already sends all routes to `index.html`, keep it **after** the sitemap rewrite.

Add env `SITE_URL` in a `.env.example` (not real secrets).

### Frontend

- List page at `/updates` fetching `GET /api/updates`
- Detail page at `/updates/:id` fetching `GET /api/updates?id=`
- Use `client/fetch-updates.js` and `client/schema.js`
- Each detail page: unique `<title>`, meta description, canonical, BlogPosting JSON-LD
- List page: ItemList JSON-LD

If the app uses React Router / Wouter / Next, add those two routes in the **existing** router. Do not create a second app.

### Cleanup

Delete `public/sitemap.xml` if it is a static file.

Copy `public/llms.txt.template` → `public/llms.txt` and fill this client’s facts.

Update `robots.txt`: Allow `/`, AI bots (GPTBot, ClaudeBot, PerplexityBot), `Sitemap: {siteUrl}/sitemap.xml`.

---

## 2C. PHP standalone

Copy **all of** `php-standalone/` (must include `feed.php`).

`config.example.php` → `config.php`.

Cron: `curl "https://DOMAIN/publish.php?key=SECRET"`

Pretty URLs via included `.htaccess`.

---

## 3. Verification (you must run or attempt)

Record PASS/FAIL:

1. Stack chosen (A/B/C)
2. No Navkar NAP on this client
3. List URL 200
4. Detail URL 200
5. Sitemap XML contains the detail URL
6. `/llms.txt` is text, not HTML
7. Publish URL returns JSON ok true
8. IndexNow key URL returns the key
9. Cron line written for the human

Print that table at the end of your reply to the human.

If WordPress 404 on `/updates/`: flush permalinks, then retest.

---

## 4. Tell the human (always)

- They must set a **real server cron** (cPanel / Vercel cron already in vercel.json)
- They must add the site to Google Search Console and submit sitemap
- Google Business Profile name/address/phone must match the site
