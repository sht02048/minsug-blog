import Link from "next/link";
import Image from "next/image";

import pathKeys from "@/src/config/pathKeys";
import siteConfig from "@/src/config/siteConfig";

import Hamburger from "../../ui/Hamburger";
import profile from "../../../../public/qoo.png";
import ThemeSwitch from "../../features/ThemeSwitch";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <Link href={pathKeys.home()} className="flex items-center cursor-pointer">
        <Image
          priority
          width={60}
          height={60}
          src={profile}
          alt="page owner's profile image"
        />
        <div className="ml-2 font-semibold text-xl">{siteConfig.title}</div>
      </Link>
      <div className="font-medium flex items-center space-x-5">
        <div className="hidden sm:block space-x-5">
          <Link href={pathKeys.about()}>About</Link>
          <Link href={pathKeys.tags()}>Tags</Link>
        </div>
        <ThemeSwitch />
        <Hamburger />
      </div>
    </header>
  );
}
