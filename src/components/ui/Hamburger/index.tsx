"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiBackspaceOutline } from "react-icons/ti";

export default function Hamburger() {
  const [shouldShowNav, setShouldShowNav] = useState(false);

  function handleClick() {
    setShouldShowNav((status) => {
      if (status) document.body.style.overflow = "auto";
      else document.body.style.overflow = "hidden";

      return !status;
    });
  }

  return (
    <>
      <button className="sm:hidden text-2xl" onClick={handleClick}>
        {shouldShowNav ? <TiBackspaceOutline /> : <RxHamburgerMenu />}
      </button>
      <div
        className={`fixed top-32 right-0 z-10 h-full w-full transform opacity-95 duration-300 ease-in-out bg-background ${shouldShowNav ? "translate-x-0" : "translate-x-full"}`}
      >
        <nav className="ml-10 text-2xl flex flex-col">
          <Link href="/tags" className="mb-5" onClick={handleClick}>
            Tags
          </Link>
          <Link href="/about" onClick={handleClick}>
            About
          </Link>
        </nav>
      </div>
    </>
  );
}
