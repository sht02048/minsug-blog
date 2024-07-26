import { PostInfo, TagInfo } from "../config/types";

export default function sortTags(posts: PostInfo[]): TagInfo {
  const tagInfo: TagInfo = {};

  posts.forEach((post: PostInfo) => {
    const tags = post.frontMatter.tags;

    tags.forEach((tag: string) => {
      if (tagInfo[tag]) {
        tagInfo[tag] += 1;
        return;
      }

      tagInfo[tag] = 1;
    });
  });

  return tagInfo;
}
