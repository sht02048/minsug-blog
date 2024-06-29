"use client";

import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import PageTitle from "../../layouts/PageTitle";

export default function MainWrapper({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" {...props}>
      <div className="max-w-3xl xl:max-w-5xl mx-auto px-4 sm:px-0 h-screen flex flex-col justify-between">
        <div className="mb-auto">
          <Header />
          <PageTitle />
          <div className="flex flex-col sm:flex-row">{children}</div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
