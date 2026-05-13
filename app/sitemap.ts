import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://klassia.pe";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#funciones`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#precios`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#clientes`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#faq`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
