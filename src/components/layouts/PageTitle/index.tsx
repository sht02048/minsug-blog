"use client";

import { usePathname } from "next/navigation";
import getPageTitle from "@/src/lib/getPageTitle";

export default function PageTitle() {
  const pathName = usePathname();
  const pageTitle = getPageTitle(pathName);

  return (
    <div className="border-b border-primary mb-10">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {pageTitle}
        </h1>
      </div>
    </div>
  );
}
