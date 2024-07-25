import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import Icon from "../../../../ui/Icon";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-32">
      <Icon href="https://github.com/sht02048">
        <FaGithub className="text-2xl" />
      </Icon>
      <div className="flex space-x-2 justify-center mt-4 mb-4">
        <div>Minsug</div>
        <div> • </div>
        <div>© 2024</div>
        <div> • </div>
        <Link href="/">https://minsug.dev</Link>
      </div>
    </footer>
  );
}
