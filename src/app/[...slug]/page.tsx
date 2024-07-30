import { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  findPostByYearAndSlug,
  getAllPost,
  parseHeading,
} from "@/src/lib/post";
import getSlug from "@/src/lib/getSlug";
import { PostInfo } from "@/src/config/types";
import siteConfig from "@/src/config/siteConfig";
import PostBody from "@/src/components/Posts/PostBody";
import PostHeader from "@/src/components/Posts/PostHeader";
import SideTableOfContents from "@/src/components/features/SideTableOfContents";

interface Props {
  slug: string[];
}

export function generateMetadata({
  params: { slug },
}: {
  params: Props;
}): Metadata {
  const [year, month, postTitle] = slug;
  const post = findPostByYearAndSlug({ year, month, title: postTitle });

  if (!post) {
    return {};
  }

  const { frontMatter } = post;
  const { title, tags, description, date, thumbnail } = frontMatter;
  const url = `${siteConfig.url}/${year}/${slug[0]}/${slug[1]}`;
  const imageUrl = `${siteConfig.url}${thumbnail}`;

  return {
    title,
    description,
    keywords: tags,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: date.toISOString(),
      images: imageUrl,
    },
  };
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

export default function Page({ params: { slug } }: { params: Props }) {
  const [year, month, title] = slug;

  const post = findPostByYearAndSlug({ year, month, title });

  if (!post) {
    notFound();
  }

  const tableOfContents = parseHeading(post.content);

  return (
    <div className="w-full space-y-10 relative">
      <PostHeader
        title={post.frontMatter.title}
        description={post.frontMatter.description}
        date={post.frontMatter.date}
        parsedReadingTime={post.parsedReadingTime}
      />
      <PostBody content={post.content} />
      <SideTableOfContents headings={tableOfContents} />
    </div>
  );
}
