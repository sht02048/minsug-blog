import Link from "next/link";
import Image from "next/image";

import siteConfig from "@/src/config/siteConfig";

import Hamburger from "../../ui/Hamburger";
import profile from "../../../../public/profile.png";
import ThemeSwitch from "../../features/ThemeSwitch";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <Link
        href={siteConfig.path.home()}
        className="flex items-center cursor-pointer"
      >
        <Image
          priority
          width={40}
          height={40}
          src={profile}
          alt="page owner's profile image"
        />
        <div className="hidden sm:block ml-2 font-semibold">
          {siteConfig.title}
        </div>
      </Link>
      <div className="font-medium flex items-center space-x-5">
        <div className="hidden sm:block space-x-5">
          <Link href={siteConfig.path.about()}>About</Link>
          <Link href={siteConfig.path.tags()}>Tags</Link>
        </div>
        <ThemeSwitch />
        <Hamburger />
      </div>
    </header>
  );
}
