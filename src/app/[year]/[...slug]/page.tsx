import { notFound } from "next/navigation";

import PostBody from "@/src/components/Features/PostBody";
import PostHeader from "@/src/components/UI/PostHeader";
import { findPostByYearAndSlug } from "@/src/lib/post";

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
