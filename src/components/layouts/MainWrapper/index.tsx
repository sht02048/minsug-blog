"use client";

import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import Header from "../Header";
import Footer from "../Footer";

export default function MainWrapper({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" {...props} defaultTheme="dark">
      <div className="max-w-3xl xl:max-w-5xl mx-auto px-4 sm:px-0 h-screen flex flex-col justify-between">
        <div className="mb-auto">
          <Header />
          <div className="flex flex-col sm:flex-row">{children}</div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
