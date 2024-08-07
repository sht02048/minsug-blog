import { MDXComponents } from "mdx/types";

import MdxLink from "./Link";
import MdxImage from "./Image";
import MdxHeading from "./Heading";
import MdxBlockQuote from "./BlockQuote";

const mdxComponents: MDXComponents = {
  h1: MdxHeading("h1"),
  h2: MdxHeading("h2"),
  h3: MdxHeading("h3"),
  a: MdxLink as any,
  img: MdxImage as any,
  blockquote: MdxBlockQuote,
};

export default mdxComponents;
