import { ReactNode } from "react";

export default function Icon({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="hover:text-informative"
    >
      {children}
    </a>
  );
}
