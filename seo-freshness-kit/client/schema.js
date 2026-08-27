/** JSON-LD for list + post pages. Insert as <script type="application/ld+json">. */

export function itemListJsonLd({ siteUrl, brand, listPath, posts }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${brand} updates`,
    itemListElement: posts.slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteUrl}${listPath}/${p.id}`,
      name: p.title,
    })),
  };
}

export function blogPostingJsonLd({ siteUrl, brand, listPath, post }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: post.image ? `${siteUrl}${post.image}` : undefined,
    description: post.summary,
    author: { "@type": "Organization", name: brand },
    publisher: { "@type": "Organization", name: brand },
    mainEntityOfPage: `${siteUrl}${listPath}/${post.id}`,
  };
}
