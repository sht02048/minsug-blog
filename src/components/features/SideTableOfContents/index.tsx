"use client";

import clsx from "clsx";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdVerticalAlignTop } from "react-icons/md";

import { Heading } from "@/src/config/types";
import getFirstHighlight from "@/src/lib/getFirstHighlight";
import useHeadingsObserver from "@/src/hooks/useHeadingObserver";
import pathKeys from "@/src/config/pathKeys";

export default function SideTableOfContents({
  headings,
}: {
  headings: Heading[];
}) {
  const { activeIdList, tempId } = useHeadingsObserver("h1, h2, h3");
  const currentHighlightHeading =
    tempId ||
    getFirstHighlight({
      headings,
      highlightedHeadings: activeIdList,
    });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="absolute -right-52 h-full top-0 hidden xl:block w-64">
      <div className="sticky top-1/3 ">
        <div className="pl-4 border-l">
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
        <div className="mt-6 text-xl flex space-x-4">
          <Link href={pathKeys.home()}>
            <IoHomeOutline />
          </Link>
          <button onClick={scrollToTop}>
            <MdVerticalAlignTop />
          </button>
        </div>
      </div>
    </div>
  );
}
