/**
 * SEO Freshness Kit configuration for Rayon Lab Tech
 */
export const config = {
  siteUrl: "https://rayonlabtech.in",
  brand: "Rayon Lab Tech",
  city: "Ahmedabad",
  region: "Gujarat",
  timezone: "Asia/Kolkata",
  /** 0=Sun … 6=Sat. Default Tue + Fri. */
  publishWeekdays: [2, 5],
  idPrefix: "upd",
  listPath: "/updates",
  postsToKeep: 40,
  phone: "+91 9909030607",
  email: "Rltsales@rayonlabtech.in",

  categories: [
    "Laboratory Furniture",
    "Laboratory Fume Hood",
    "Anti Vibration Table",
    "Fume Spot Extractor",
    "Exhaust Blower & Scrubber",
    "Stainless Steel Furniture",
    "Lab Working Table",
    "Island Table",
    "Chemical Storage Cabinet"
  ],
  locations: [
    "Dev Aditya Industrial Park",
    "Ahmedabad Facility",
    "Daskroi Plant",
    "Dispatch Hub Ahmedabad",
    "Assembly Yard"
  ],
  standards: [
    "SEFA Compliant & ISO Standard",
    "Factory Quality Inspected",
    "Chemical & Corrosion Resistant Tested",
    "Heavy Duty GI & SS Build"
  ],
  sizeRanges: [
    "Custom Laboratory Dimensions",
    "Standard 1200mm - 3600mm Modular Units",
    "Standing Height (900mm) / Sitting Height (750mm)"
  ],
  specs: [
    "GI Epoxy Powder Coated / Black Granite Worktop",
    "SS 304/316 High Grade Stainless Steel",
    "PP Chemical Sinks & Safety Faucets",
    "Fume Containment & Centrifugal Exhaust Setup"
  ],
  images: [
    "/seo_images/seo_10.png",
    "/seo_images/seo_11.png",
    "/seo_images/seo_12.png",
    "/seo_images/seo_13.png",
    "/seo_images/seo_14.png",
    "/seo_images/seo_15.png",
    "/seo_images/seo_16.png",
    "/seo_images/seo_17.png",
    "/seo_images/seo_20.png",
    "/seo_images/seo_21.png",
    "/seo_images/seo_23.png",
    "/seo_images/seo_24.png",
    "/seo_images/seo_25.png"
  ],

  /** Extra sitemap URLs besides listPath and each post. */
  staticPaths: [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/about-us", changefreq: "monthly", priority: "0.8" },
    { path: "/updates", changefreq: "daily", priority: "0.9" },
    { path: "/portfolio", changefreq: "monthly", priority: "0.7" },
    { path: "/gallery", changefreq: "monthly", priority: "0.7" },
    { path: "/clients", changefreq: "monthly", priority: "0.7" },
    { path: "/contact-us", changefreq: "monthly", priority: "0.8" },
    { path: "/products/laboratory-furniture", changefreq: "weekly", priority: "0.9" },
    { path: "/products/laboratory-fume-hood", changefreq: "weekly", priority: "0.9" },
    { path: "/products/anti-vibration-table", changefreq: "weekly", priority: "0.9" },
    { path: "/products/fume-spot-extractor", changefreq: "weekly", priority: "0.9" },
    { path: "/products/exhaust-blower-scrubber", changefreq: "weekly", priority: "0.9" },
    { path: "/products/stainless-steel-furniture", changefreq: "weekly", priority: "0.9" }
  ],

  titleTemplates: [
    "{category} ready stock inspected at {location} — {date}",
    "New {category} installation batch at {location} ({date})",
    "{category} dispatch cleared QC at {location}, {date}",
    "Modular {category} consignment received at {location} — {date}"
  ],

  indexNowKey: "e7d4a2b9c3f14e85906d281a7b45f3c9",
};
