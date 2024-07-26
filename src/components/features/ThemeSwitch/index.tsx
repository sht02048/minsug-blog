"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { Theme } from "@/src/config/constants";

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return <CgDarkMode className="text-xl" />;

  function handleClick() {
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);
  }

  return (
    <button onClick={handleClick} className="text-xl">
      {theme === Theme.Dark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
}
