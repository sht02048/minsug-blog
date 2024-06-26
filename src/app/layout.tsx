import type { Metadata } from "next";

import "./tailwindcss.css";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
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
        <MainWrapper>
          <Header />
          {children}
          <Footer />
        </MainWrapper>
      </body>
    </html>
  );
}
