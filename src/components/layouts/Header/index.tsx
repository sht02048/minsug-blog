import Link from "next/link";
import Image from "next/image";

import Hamburger from "../../UI/Hamburger";
import ThemeSwitch from "../../Features/ThemeSwitch";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <Link href="/" className="flex items-center cursor-pointer">
        <Image
          priority
          width={40}
          height={40}
          src="/profile.png"
          alt="profile"
        />
        <div className="hidden sm:block ml-2 font-semibold">Minsug</div>
      </Link>
      <div className="font-medium flex items-center space-x-5">
        <div className="hidden sm:block space-x-5">
          <Link href="/about">About</Link>
          <Link href="/tags">Tags</Link>
        </div>
        <ThemeSwitch />
        <Hamburger />
      </div>
    </header>
  );
}
