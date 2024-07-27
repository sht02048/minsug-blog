import Link from "next/link";
import { ReactNode } from "react";

import pathKeys from "@/src/config/pathKeys";

interface Props {
  tag: string;
  children: ReactNode;
}

export default function TagLink({ tag, children }: Props) {
  const parsedTag = tag.replace(" ", "-");

  return <Link href={pathKeys.postByTags(parsedTag)}>{children}</Link>;
}
