import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import siteConfig from "@/src/config/siteConfig";

import Icon from "../../ui/Icon";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-32">
      <Icon href={siteConfig.author.contacts.github}>
        <FaGithub className="text-2xl" />
      </Icon>
      <div className="flex space-x-2 justify-center mt-4 mb-4">
        <div>{siteConfig.author.name}</div>
        <div> • </div>
        <div>© 2024</div>
        <div> • </div>
        <Link href="/">{siteConfig.url}</Link>
      </div>
    </footer>
  );
}
