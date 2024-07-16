import fs from "fs";
import dayjs from "dayjs";
import { sync } from "glob";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BASE_PATH, POSTS_PATH } from "../constants";

import { FrontMatter, PostInfo } from "../types";

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

export function findPostByYearAndSlug(year: string, slug: string[]) {
  const slugs = "/" + [year, ...slug].join("/");
  const posts = getAllPost();
  return posts.find((post) => post.slug === slugs);
}
