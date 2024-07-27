"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { type ThemeProviderProps } from "next-themes/dist/types";

import getPageTitle from "@/src/lib/getPageTitle";

import Header from "../Header";
import Footer from "../Footer";
import PageTitle from "../PageTitle";

export default function MainWrapper({
  children,
  ...props
}: ThemeProviderProps) {
  const pathName = usePathname();
  const pageTitle = getPageTitle(pathName);
  const isPost = pathName.split("/").length > 3;

  return (
    <ThemeProvider attribute="class" {...props} defaultTheme="dark">
      <div className="max-w-3xl xl:max-w-5xl mx-auto px-4 sm:px-0 h-screen flex flex-col justify-between">
        <div className="mb-auto">
          <Header />
          {!isPost && <PageTitle pageTitle={pageTitle} />}
          <div className="flex flex-col sm:flex-row">{children}</div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
