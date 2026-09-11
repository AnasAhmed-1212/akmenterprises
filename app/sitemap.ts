import type { MetadataRoute } from "next";
import { siteUrl } from "./site-data";

const publicPages = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/sesame-seeds", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/yellow-maize", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/origin", changeFrequency: "yearly", priority: 0.7 },
  { path: "/quality", changeFrequency: "yearly", priority: 0.8 },
  { path: "/global-reach", changeFrequency: "yearly", priority: 0.7 },
  { path: "/export-documentation", changeFrequency: "yearly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPages.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
