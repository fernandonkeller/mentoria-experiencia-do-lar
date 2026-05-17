import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: `${siteConfig.shortName} | Apresentação, inscrição e pagamento`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.shortName,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.siteUrl,
    images: [siteConfig.hero.image],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.shortName,
    description: siteConfig.description,
    images: [siteConfig.hero.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
