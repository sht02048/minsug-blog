import { Heading } from "../config/types";

interface Props {
  headings: Heading[];
  highlightedHeadings: string[];
}

export default function getFirstHighlight({
  headings,
  highlightedHeadings,
}: Props) {
  const headingsText = headings.map((heading) => heading.link);

  for (const heading of headingsText) {
    if (highlightedHeadings.includes(heading)) {
      return heading;
    }
  }

  return headingsText[0];
}
