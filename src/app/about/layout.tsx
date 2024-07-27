import { ReactNode } from "react";
import PageTitle from "@/src/components/layouts/PageTitle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <PageTitle pageTitle="about" />
      {children}
    </div>
  );
}
