import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.scss";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Dolphins Yacht Experience",
  description: "A structured landing page foundation for a yacht experience.",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
