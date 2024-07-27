import { Metadata } from "next";

import siteConfig from "@/src/config/siteConfig";
import PostCard from "@/src/components/Posts/PostCard";
import PageTitle from "@/src/components/layouts/PageTitle";
import { getAllPost, getPostByTags } from "@/src/lib/post";

interface Props {
  tag: string;
}

export function generateMetadata({
  params: { tag },
}: {
  params: Props;
}): Metadata {
  const url = `${siteConfig.url}${siteConfig.path.postByTags(tag)}`;

  return {
    title: tag,
    openGraph: {
      title: tag,
      url,
    },
  };
}

export function generateStaticParams() {
  const posts = getAllPost();
  const tagsSet = new Set();
  const tagList: { tag: string }[] = [];
  posts.forEach((post) => {
    const { tags } = post.frontMatter;

    tags.forEach((tag) => {
      if (tagsSet.has(tag)) return;

      tagsSet.add(tag);
      tagList.push({ tag });
    });
  });

  return tagList;
}

export default function Page({ params: { tag } }: { params: Props }) {
  const parsedTag = tag.replace("-", " ");
  const postByTags = getPostByTags(parsedTag);

  return (
    <div className="flex flex-col w-full">
      <PageTitle pageTitle={parsedTag} />
      {postByTags.map((post) => (
        <PostCard
          frontMatter={post.frontMatter}
          readingTime={post.parsedReadingTime}
          slug={post.slug}
          key={post.frontMatter.title}
        />
      ))}
    </div>
  );
}
