import { MetadataRoute } from "next";

import getPostSitemap from "../lib/getPostSitemap";
import siteConfig from "../config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const postSiteMap = getPostSitemap();

  return [
    {
      url: `${siteConfig.url}`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}${siteConfig.path.about()}`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}${siteConfig.path.tags()}`,
      lastModified: new Date(),
    },
    ...postSiteMap,
  ];
}
