import { FrontMatter } from "@/src/types";

import Tag from "../Tag";
import PublishedDate from "../../Features/PublishedDate";

export default function PostCard({
  frontMatter,
}: {
  frontMatter: FrontMatter;
}) {
  const { title, tags, date, description } = frontMatter;

  return (
    <div className="space-y-6 py-10">
      <div className="sm:text-3xl text-xl">{title}</div>
      <div className="text-secondary sm:text-lg">{description}</div>
      <div className="sm:flex sm:space-x-6 items-center sm:text-lg text-secondary">
        <PublishedDate date={date} />
        <div className="flex space-x-4">
          {tags.map((tag) => (
            <Tag tagName={tag} key={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
