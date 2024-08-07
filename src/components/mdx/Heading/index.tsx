import { ReactNode } from "react";
import { PiHashThin } from "react-icons/pi";

type HeadingLevel = "h1" | "h2" | "h3";

interface HeadingProps {
  id?: string;
  children?: ReactNode;
}

export default function MdxHeading(As: HeadingLevel) {
  function Heading({ id, children }: HeadingProps) {
    return (
      <a
        href={`#${id}`}
        className="group relative no-underline flex items-center mt-8 mb-4"
      >
        <As id={id}>{children}</As>
        <PiHashThin className="ml-2 text-xl hidden group-hover:block" />
      </a>
    );
  }

  Heading.displayName = As;
  return Heading;
}
