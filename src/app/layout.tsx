import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "../config/tailwind.css";
import MainWrapper from "../components/layouts/MainWrapper";

export const metadata: Metadata = {
  title: "minsug",
  description: "minsug's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <MainWrapper>{children}</MainWrapper>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
