"use client";

import clsx from "clsx";
import Link from "next/link";

import { Heading } from "@/src/types";
import getFirstHighlight from "@/src/lib/getFirstHighlight";
import useHeadingsObserver from "@/src/hooks/useHeadingObserver";

export default function SideTableOfContents({
  headings,
}: {
  headings: Heading[];
}) {
  const highlightedHeadings = useHeadingsObserver("h1, h2, h3");
  const currentHighlightHeading = getFirstHighlight({
    headings,
    highlightedHeadings,
  });

  return (
    <div className="absolute -right-44 h-full top-0 hidden xl:block w-64">
      <div className=" sticky top-1/3 border-l">
        <div className="ml-4">
          <div className="mb-2 font-bold">목차</div>
          <ol className="text-xs space-y-1">
            {headings.map((heading) => {
              const headingType = heading.headingType;
              const isHighlighted = currentHighlightHeading === heading.link;
              const leftMargin =
                headingType === "h1"
                  ? ""
                  : headingType === "h2"
                    ? "ml-2"
                    : "ml-4";

              return (
                <li
                  key={heading.text}
                  className={clsx(isHighlighted && "text-button", leftMargin)}
                >
                  <Link href={heading.link}>{heading.text}</Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
