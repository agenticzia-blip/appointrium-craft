import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://appointrium-craft.lovable.app";

interface Entry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

const entries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/why-ai", changefreq: "monthly", priority: "0.7" },
  { path: "/what-is-ai-automation", changefreq: "monthly", priority: "0.7" },
  { path: "/courses", changefreq: "weekly", priority: "0.9" },
  { path: "/n8n-course", changefreq: "monthly", priority: "0.8" },
  { path: "/ai-agents-course", changefreq: "monthly", priority: "0.8" },
  { path: "/voice-agents", changefreq: "monthly", priority: "0.8" },
  { path: "/whatsapp-automation", changefreq: "monthly", priority: "0.8" },
  { path: "/live-classes", changefreq: "monthly", priority: "0.7" },
  { path: "/solution-agents", changefreq: "monthly", priority: "0.7" },
  { path: "/get-first-client", changefreq: "monthly", priority: "0.7" },
  { path: "/appoint-funnels", changefreq: "monthly", priority: "0.7" },
  { path: "/tools", changefreq: "monthly", priority: "0.6" },
  { path: "/results", changefreq: "monthly", priority: "0.7" },
  { path: "/pricing", changefreq: "weekly", priority: "0.9" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
  { path: "/student-form", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
