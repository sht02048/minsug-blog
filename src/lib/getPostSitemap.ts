import { MetadataRoute } from "next";

import getSlug from "./getSlug";
import { getAllPost } from "./post";

import pathKeys from "../config/pathKeys";
import { PostInfo } from "../config/types";
import siteConfig from "../config/siteConfig";

export default function getPostSitemap(): MetadataRoute.Sitemap {
  const allPosts = getAllPost();
  const sitemapList = allPosts.map((post: PostInfo) => {
    const { frontMatter, slug } = post;
    const { date } = frontMatter;
    const { year, month, englishTitle } = getSlug({ date, slug });
    const postUrl = pathKeys.post({ year, month, englishTitle });

    return {
      url: `${siteConfig.url}${postUrl}`,
      lastModified: date,
    };
  });

  return sitemapList;
}
