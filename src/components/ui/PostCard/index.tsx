import Link from "next/link";

import getSlug from "@/src/lib/getSlug";
import siteConfig from "@/src/config/siteConfig";
import { FrontMatter } from "@/src/config/types";

import Tag from "../Tag";
import PublishedDate from "../PublishedDate";

export default function PostCard({
  frontMatter,
  readingTime,
  slug,
}: {
  frontMatter: FrontMatter;
  readingTime: number;
  slug: string;
}) {
  const { title, tags, date, description } = frontMatter;
  const { year, month, englishTitle } = getSlug({ date, slug });

  return (
    <div className="space-y-6 py-4 sm:py-10 sm:space-y-10">
      <Link
        href={siteConfig.path.post({ year, month, englishTitle })}
        className="sm:text-2xl text-xl"
      >
        {title}
      </Link>
      <div className="text-secondary sm:text-lg">{description}</div>
      <div className="items-center text-secondary sm:flex sm:space-x-6">
        <PublishedDate date={date} />
        <span className="ml-2 sm:ml-0">{`${readingTime} min read`}</span>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          {tags.map((tag) => (
            <Tag tagName={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
