import { MetadataRoute } from "next";

import pathKeys from "../config/pathKeys";
import siteConfig from "../config/siteConfig";
import getPostSitemap from "../lib/getPostSitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const postSiteMap = getPostSitemap();

  return [
    {
      url: `${siteConfig.url}`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}${pathKeys.about()}`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}${pathKeys.tags()}`,
      lastModified: new Date(),
    },
    ...postSiteMap,
  ];
}
