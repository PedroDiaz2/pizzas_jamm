import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import { siteConfig } from "@/data/site-config";
import { buildRestaurantJsonLd } from "@/lib/schema";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "pizzeria en Comas",
    "delivery de pizza Comas",
    "Pizza's JAMM",
    "pizza a la piedra Lima Norte",
    "pastas Comas",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/gallery/og-cover.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}, pizzería en Comas`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/gallery/og-cover.svg"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = buildRestaurantJsonLd();

  return (
    <html
      lang="es-PE"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
