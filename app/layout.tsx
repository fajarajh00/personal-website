import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://fajar-portfolio.vercel.app";
const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fajar Slamet Aghafianto | Frontend Engineer",
    template: "%s | Fajar Slamet Aghafianto"
  },
  description: "Portfolio modern Fajar Slamet Aghafianto, frontend engineer yang membangun produk web cepat, elegan, dan mudah digunakan.",
  keywords: ["Frontend Engineer", "React", "Next.js", "TypeScript", "UI UX", "Portfolio"],
  authors: [{ name: "Fajar Slamet Aghafianto" }],
  creator: "Fajar Slamet Aghafianto",
  openGraph: {
    title: "Fajar Slamet Aghafianto | Frontend Engineer",
    description: "Portfolio modern dengan project, pengalaman, sertifikat, blog, dan kontak.",
    url: siteUrl,
    siteName: "Fajar Portfolio",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Fajar Portfolio" }],
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fajar Slamet Aghafianto | Frontend Engineer",
    description: "Portfolio modern dengan React, Next.js, TypeScript, dan Tailwind CSS.",
    images: ["/og.svg"]
  },
  icons: { icon: "/favicon.svg" }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
