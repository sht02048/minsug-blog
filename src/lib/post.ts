import fs from "fs";
import path from "path";
import { sync } from "glob";
import matter from "gray-matter";

import { FrontMatter } from "../types";

const BASE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export default function getAllPost() {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  const postSlugList = postPaths.map((path) => {
    const { data, content } = parseFrontMatter(path);

    return {
      slug: path
        .slice(path.indexOf(BASE_PATH) + BASE_PATH.length)
        .replace(".mdx", ""),
      frontMatter: data as FrontMatter,
      content,
    };
  });

  return postSlugList;
}

function parseFrontMatter(postPath: string) {
  const post = fs.readFileSync(postPath, "utf-8");
  const { data, content } = matter(post);

  return { data, content };
}
