import Link from "next/link";
import { ReactNode } from "react";

import siteConfig from "@/src/config/siteConfig";

interface Props {
  tag: string;
  children: ReactNode;
}

export default function TagLink({ tag, children }: Props) {
  const parsedTag = tag.replace(" ", "-");

  return <Link href={siteConfig.path.postByTags(parsedTag)}>{children}</Link>;
}
