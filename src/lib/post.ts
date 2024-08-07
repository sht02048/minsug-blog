import fs from "fs";
import dayjs from "dayjs";
import { sync } from "glob";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BASE_PATH, POSTS_PATH } from "../config/constants";

import { FrontMatter, PostInfo, Heading } from "../config/types";

export function getAllPost(): PostInfo[] {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  const postSlugList = postPaths
    .map((path) => {
      const { data, content, parsedReadingTime } = getPostDetail(path);

      return {
        slug: path
          .slice(path.indexOf(BASE_PATH) + BASE_PATH.length)
          .replace(".mdx", ""),
        frontMatter: data as FrontMatter,
        content,
        parsedReadingTime,
      };
    })
    .sort((a, b) => {
      const previousPostDate = dayjs(a.frontMatter.date);
      const nextPostDate = dayjs(b.frontMatter.date);
      return previousPostDate.isAfter(nextPostDate) ? -1 : 1;
    });

  return postSlugList;
}

export function getPostDetail(postPath: string) {
  const post = fs.readFileSync(postPath, "utf-8");
  const { data, content } = matter(post);
  const parsedReadingTime = Math.ceil(readingTime(content).minutes);

  return { data, content, parsedReadingTime };
}

export function findPostByYearAndSlug({
  year,
  month,
  title,
}: {
  year: string;
  month: string;
  title: string;
}) {
  const slugs = "/" + [year, month, title].join("/");
  const posts = getAllPost();

  return posts.find((post) => post.slug === slugs);
}

export function parseHeading(content: string): Heading[] {
  const regex = /^(#{1,3}) (.*)$/gim;
  const headingList = content.match(regex)?.map((heading: string) => {
    const text = heading.replace(/#{1,3} /, "").trim();
    const link =
      "#" +
      text
        .replace(/[\[\]:!@#$/%^&*()+=,.?]/g, "")
        .replace(/\s+/g, "-")
        .toLowerCase();

    const indent = (heading.match(/#/g)?.length || 1) - 1;
    const headingType = indent === 0 ? "h1" : indent === 1 ? "h2" : "h3";

    return { text, link, headingType };
  });

  return headingList || [];
}

export function getPostByTags(tag: string): PostInfo[] {
  const allPosts = getAllPost();
  const postByTags = allPosts.filter((post) =>
    post.frontMatter.tags.includes(tag),
  );

  return postByTags;
}
