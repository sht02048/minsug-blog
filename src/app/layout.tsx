import type { Metadata } from "next";

import "../config/tailwind.css";
import MainWrapper from "../components/Features/MainWrapper";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <MainWrapper>{children}</MainWrapper>
      </body>
    </html>
  );
}
