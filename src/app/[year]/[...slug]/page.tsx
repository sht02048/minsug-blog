import { notFound } from "next/navigation";

import PostBody from "@/src/components/ui/PostBody";
import { findPostByYearAndSlug, parseHeading } from "@/src/lib/post";
import PostHeader from "@/src/components/ui/PostHeader";
import SideTableOfContents from "@/src/components/features/SideTableOfContents";

interface Props {
  year: string;
  slug: string[];
}

export default function Page({ params: { year, slug } }: { params: Props }) {
  const post = findPostByYearAndSlug(year, slug);

  if (!post) {
    notFound();
  }

  const tableOfContents = parseHeading(post.content);

  return (
    <div className="w-full space-y-10 relative">
      <PostHeader
        title={post.frontMatter.title}
        date={post.frontMatter.date}
        parsedReadingTime={post.parsedReadingTime}
      />
      <PostBody content={post.content} />
      <SideTableOfContents headings={tableOfContents} />
    </div>
  );
}
