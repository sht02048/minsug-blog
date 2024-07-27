import { Metadata } from "next";
import { ReactNode } from "react";

import pathKeys from "@/src/config/pathKeys";
import siteConfig from "@/src/config/siteConfig";
import PageTitle from "@/src/components/layouts/PageTitle";

export const metadata: Metadata = {
  title: "about",
  openGraph: {
    title: "about",
    url: `${siteConfig.url}${pathKeys.about()}`,
    images: `${siteConfig.url}/avatar.jpeg`,
    type: "profile",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <PageTitle pageTitle="about" />
      {children}
    </div>
  );
}
