import type { Metadata } from "next";

import "./tailwindcss.css";
import Header from "../components/layouts/Header";
import MainWrapper from "../components/MainWrapper";

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
        <MainWrapper>
          <Header />
          {children}
        </MainWrapper>
      </body>
    </html>
  );
}
