import { siteConfig } from "@/lib/site";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: ["https://github.com/fajarajh00", "https://linkedin.com/in/fajar-slamet-aghafianto-24b09b379"],
    knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX", "Web Performance"]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
