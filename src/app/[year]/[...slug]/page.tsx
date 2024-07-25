import { notFound } from "next/navigation";

import PostBody from "@/src/components/ui/PostBody";
import { findPostByYearAndSlug } from "@/src/lib/post";
import PostHeader from "@/src/components/ui/PostHeader";

export default function Page({
  params: { year, slug },
}: {
  params: { year: string; slug: string[] };
}) {
  const post = findPostByYearAndSlug(year, slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full space-y-10">
      <PostHeader
        title={post.frontMatter.title}
        date={post.frontMatter.date}
        parsedReadingTime={post.parsedReadingTime}
      />
      <PostBody content={post.content} />
    </div>
  );
}
