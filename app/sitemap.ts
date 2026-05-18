import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://klassia.lat";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#diferencia`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#herramientas`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#proctoring`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#vocacional`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#cta`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/demo`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
