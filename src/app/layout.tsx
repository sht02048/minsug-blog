import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";

import "../config/css/tailwind.css";
import siteConfig from "../config/siteConfig";
import MainWrapper from "../components/layouts/MainWrapper";

export const metadata: Metadata = {
  title: {
    template: "%s | minsug",
    default: siteConfig.title,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author.name }],
  referrer: "origin-when-cross-origin",
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  keywords: siteConfig.keyword,
  metadataBase: new URL(siteConfig.url),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: {
      template: "%s | minsug",
      default: siteConfig.title,
    },
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: `${siteConfig.url}/qoo.png`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <meta
        name="naver-site-verification"
        content="84e0ca3f5976ec29f5e6867794a80740841e222c"
      />
      <meta
        name="google-site-verification"
        content="VKHRLhFEBmBAiNzdQxzKhsuuJcK8egUKTA4s6LKxERg"
      />
      <body>
        <MainWrapper>{children}</MainWrapper>
        <Analytics />
      </body>
    </html>
  );
}
