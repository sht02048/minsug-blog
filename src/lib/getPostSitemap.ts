import { MetadataRoute } from "next";

import getSlug from "./getSlug";
import sortTags from "./sortTags";
import { getAllPost } from "./post";

import pathKeys from "../config/pathKeys";
import { PostInfo } from "../config/types";
import siteConfig from "../config/siteConfig";

export default function getPostSitemap(): MetadataRoute.Sitemap {
  const allPosts = getAllPost();
  const postList = allPosts.map((post: PostInfo) => {
    const { frontMatter, slug } = post;
    const { date } = frontMatter;
    const { year, month, englishTitle } = getSlug({ date, slug });
    const postUrl = pathKeys.post({ year, month, englishTitle });

    return {
      url: `${siteConfig.url}${postUrl}`,
      lastModified: date,
    };
  });
  const tagList = Object.keys(sortTags(allPosts)).map((tag) => {
    return {
      url: `${siteConfig.url}${pathKeys.postByTags(tag)}`,
      lastModified: new Date(),
    };
  });

  return [...postList, ...tagList];
}
