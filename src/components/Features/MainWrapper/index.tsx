"use client";

import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function MainWrapper({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" {...props}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </ThemeProvider>
  );
}
