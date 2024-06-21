import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "../components/layouts/Header";
import MainWrapper from "../components/MainWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "minsug",
  description: "misug's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainWrapper>
          <Header />
          {children}
        </MainWrapper>
      </body>
    </html>
  );
}
