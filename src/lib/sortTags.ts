import { PostInfo, TagInfo } from "../config/types";

export default function sortTags(posts: PostInfo[]): TagInfo {
  const tagCounts = posts
    .flatMap((post) => post.frontMatter.tags)
    .reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as TagInfo);

  return Object.fromEntries(
    Object.entries(tagCounts).sort(([, countA], [, countB]) => countB - countA),
  );
}
