import Link from "next/link";
import { FrontMatter } from "@/src/types";

import Tag from "../Tag";
import PublishedDate from "../../Features/PublishedDate";

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

  const year = date.getFullYear();
  const month = date.getMonth();
  const englishTitle = slug.split("/")[3];

  return (
    <div className="space-y-6 py-10">
      <Link
        href={`/${year}/${month}/${englishTitle}`}
        className="sm:text-2xl text-xl"
      >
        {title}
      </Link>
      <div className="text-secondary sm:text-lg">{description}</div>
      <div className="sm:flex sm:space-x-6 items-center text-secondary">
        <PublishedDate date={date} />
        <span>{`${readingTime} min read`}</span>
        <div className="flex space-x-4">
          {tags.map((tag) => (
            <Tag tagName={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
