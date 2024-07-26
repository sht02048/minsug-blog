import { ReactNode } from "react";

export default function Link({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href: string;
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
    >
      {children}
    </a>
  );
}
