/**
 * Copy to CONFIG.js (or paste values into env) and edit per client.
 * Never commit real secrets. INDEXNOW_KEY must match the public .txt filename.
 */
export const config = {
  siteUrl: "https://client-domain.com",
  brand: "Client Company Pvt Ltd",
  city: "Ahmedabad",
  region: "Gujarat",
  timezone: "Asia/Kolkata",
  /** 0=Sun … 6=Sat. Default Tue + Fri. */
  publishWeekdays: [2, 5],
  idPrefix: "upd",
  listPath: "/updates",
  postsToKeep: 40,
  phone: "+91 9000000000",
  email: "sales@client-domain.com",

  categories: ["Product Line A", "Product Line B", "Product Line C"],
  locations: ["Main Yard", "Dispatch Hub", "Plant"],
  standards: ["IS / ISO applicable", "Factory tested"],
  sizeRanges: ["Size range 1", "Size range 2"],
  specs: ["Spec 1", "Spec 2"],
  images: ["/images/updates/01.webp", "/images/updates/02.webp"],

  /** Extra sitemap URLs besides listPath and each post. */
  staticPaths: [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/products", changefreq: "weekly", priority: "0.9" },
    { path: "/contact", changefreq: "monthly", priority: "0.8" },
  ],

  titleTemplates: [
    "{category} ready stock at {location} — {date}",
    "Inspected {category} received at {location} ({date})",
    "{category} dispatch cleared QC — {location}, {date}",
  ],

  indexNowKey: "REPLACE_WITH_32_CHAR_HEX",
};
