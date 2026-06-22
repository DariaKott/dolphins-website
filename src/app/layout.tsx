import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.scss";

type RootLayoutProps = {
  children: ReactNode;
};

const title = "Путешествие к дельфинам — морской выезд в лагуну Сатайя";
const description =
  "Морской выезд в Египет к свободным дельфинам в лагуне Сатайя. Телесные практики, акватерапия, яхта ATLANTY и глубокий опыт контакта с морем и собой.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const basePath = process.env.GITHUB_PAGES === "true" ? "/dolphins-website" : "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "дельфины",
    "лагуна Сатайя",
    "морской выезд",
    "Египет",
    "телесные практики",
    "акватерапия",
    "ретрит",
    "путешествие на яхте",
    "путешествие к дельфинам",
    "тематические путешествия",
    "тематический туризм",
    "плавание с дельфинами",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Путешествие к дельфинам",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Путешествие к дельфинам — лагуна Сатайя",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,

    images: [
      {
        url: "/og-image.webp",
        alt: "Путешествие к дельфинам — лагуна Сатайя",
      },
    ],
  },
  icons: {
    icon: `${basePath}/icon.svg`,
  },
};

const cormorant = Cormorant({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  adjustFontFallback: false,
  fallback: ["Georgia", "serif"],
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
