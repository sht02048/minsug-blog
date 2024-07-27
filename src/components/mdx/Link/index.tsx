import { ReactNode } from "react";
import Link from "../../ui/Link";

export default function MdxLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="break-words text-informative no-underline underline-offset-4 hover:underline"
    >
      {children}
    </Link>
  );
}
