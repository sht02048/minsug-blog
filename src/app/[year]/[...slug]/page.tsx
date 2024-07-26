import { notFound } from "next/navigation";

import { PostInfo } from "@/src/types";
import getSlug from "@/src/lib/getSlug";
import PostBody from "@/src/components/ui/PostBody";
import PostHeader from "@/src/components/ui/PostHeader";
import {
  findPostByYearAndSlug,
  getAllPost,
  parseHeading,
} from "@/src/lib/post";
import SideTableOfContents from "@/src/components/features/SideTableOfContents";

interface Props {
  year: string;
  slug: string[];
}

export function generateStaticParams() {
  const posts = getAllPost();

  return posts.map((post: PostInfo) => {
    const slug = post.slug;
    const { date } = post.frontMatter;
    const { year, month, englishTitle } = getSlug({ date, slug });

    return { year, slug: [month, englishTitle] };
  });
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
