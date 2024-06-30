import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import { sync } from "glob";
import matter from "gray-matter";
import readingTime from "reading-time";

import { FrontMatter, PostInfo } from "../types";

const BASE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export default function getAllPost(): PostInfo[] {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  const postSlugList = postPaths
    .map((path) => {
      const { data, content } = parseFrontMatter(path);
      const parsedReadingTime = Math.ceil(readingTime(content).minutes);

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

function parseFrontMatter(postPath: string) {
  const post = fs.readFileSync(postPath, "utf-8");
  const { data, content } = matter(post);

  return { data, content };
}
