/**
 * Deterministic freshness feed.
 * Unique URL per publish weekday (not random reshuffles).
 * Same inputs → same posts. Safe for sitemaps and AI crawlers.
 */

function pad(n) {
  return String(n).padStart(2, "0");
}

function partsInZone(date, timeZone) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const get = (type) => fmt.formatToParts(date).find((p) => p.type === type)?.value ?? "";
  const year = Number(get("year"));
  const month = Number(get("month"));
  const day = Number(get("day"));
  const weekday = new Date(`${year}-${pad(month)}-${pad(day)}T12:00:00+05:30`).getDay();
  return { year, month, day, weekday };
}

function shiftDay(y, m, day, delta, timeZone) {
  return partsInZone(new Date(Date.UTC(y, m - 1, day + delta, 6, 0, 0)), timeZone);
}

function ymd(y, m, day) {
  return `${y}${pad(m)}${pad(day)}`;
}

function displayDate(y, m, day) {
  return new Date(Date.UTC(y, m - 1, day, 6, 0, 0)).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function timeAgo(y, m, day, now, timeZone) {
  const posted = new Date(`${y}-${pad(m)}-${pad(day)}T07:00:00+05:30`);
  const diff = Math.max(0, now.getTime() - posted.getTime());
  const hours = Math.floor(diff / 3_600_000);
  const days = Math.floor(diff / 86_400_000);
  if (hours < 6) return "Just posted";
  if (hours < 24) return `${hours} hours ago`;
  if (days === 1) return "Yesterday";
  if (days < 14) return `${days} days ago`;
  return displayDate(y, m, day);
}

export function createFeed(config) {
  const tz = config.timezone || "Asia/Kolkata";
  const weekdays = config.publishWeekdays || [2, 5];
  const prefix = config.idPrefix || "upd";
  const keep = config.postsToKeep || 40;

  function listSlots(now = new Date()) {
    const slots = [];
    let { year, month, day, weekday } = partsInZone(now, tz);
    for (let i = 0; i < 400 && slots.length < keep; i++) {
      if (weekdays.includes(weekday)) {
        slots.push({ id: `${prefix}-${ymd(year, month, day)}`, year, month, day });
      }
      const prev = shiftDay(year, month, day, -1, tz);
      year = prev.year;
      month = prev.month;
      day = prev.day;
      weekday = prev.weekday;
    }
    return slots;
  }

  function buildPost(slot, indexFromLatest, now = new Date()) {
    const cats = config.categories || ["Update"];
    const locs = config.locations || [config.city || "Yard"];
    const category = cats[indexFromLatest % cats.length];
    const location = locs[indexFromLatest % locs.length];
    const date = displayDate(slot.year, slot.month, slot.day);
    const templates = config.titleTemplates || [`{category} at {location} — {date}`];
    const title = templates[indexFromLatest % templates.length]
      .replaceAll("{category}", category)
      .replaceAll("{location}", location)
      .replaceAll("{date}", date);
    const images = config.images || [];
    const photo = images[indexFromLatest % Math.max(images.length, 1)] || "";
    const publishedAt = `${slot.year}-${pad(slot.month)}-${pad(slot.day)}T07:00:00+05:30`;

    return {
      id: slot.id,
      title,
      category,
      location,
      publishedAt,
      dateLabel: date,
      timeAgo: timeAgo(slot.year, slot.month, slot.day, now, tz),
      standard: (config.standards || [""])[indexFromLatest % (config.standards?.length || 1)],
      sizeRange: (config.sizeRanges || [""])[indexFromLatest % (config.sizeRanges?.length || 1)],
      spec: (config.specs || [""])[indexFromLatest % (config.specs?.length || 1)],
      image: photo,
      images: images.length ? [photo, images[(indexFromLatest + 1) % images.length]] : [],
      summary: `${category} inspected at ${location} on ${date}. ${config.brand} — ${config.city}.`,
      body: `${config.brand} recorded a ${category} consignment at ${location} on ${date}. Material is tagged for dispatch from ${config.city}, ${config.region}.`,
    };
  }

  function listPosts(now = new Date()) {
    return listSlots(now).map((slot, i) => buildPost(slot, i, now));
  }

  function getById(id, now = new Date()) {
    return listPosts(now).find((p) => p.id === id);
  }

  function latest(now = new Date()) {
    return listPosts(now)[0];
  }

  function siteUrl() {
    const env = typeof process !== "undefined" ? process.env.SITE_URL : "";
    return (env || config.siteUrl).replace(/\/$/, "");
  }

  return { listSlots, listPosts, getById, latest, siteUrl, config };
}
