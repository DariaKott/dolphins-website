import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.scss";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Путешествие к дельфинам",
  description: "Морской выезд к свободным дельфинам в лагуне Сатайя.",
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
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
