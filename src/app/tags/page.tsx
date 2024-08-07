import { Metadata } from "next";

import sortTags from "@/src/lib/sortTags";
import { getAllPost } from "@/src/lib/post";
import pathKeys from "@/src/config/pathKeys";
import siteConfig from "@/src/config/siteConfig";
import TagInfo from "@/src/components/Tags/TagInfo";
import PageTitle from "@/src/components/layouts/PageTitle";

export const metadata: Metadata = {
  title: "tags",
  openGraph: {
    title: "tags",
    url: `${siteConfig.url}${pathKeys.tags()}`,
    publishedTime: new Date().toISOString(),
    images: `${siteConfig.url}/qoo.png`,
  },
};

export default function Page() {
  const posts = getAllPost();
  const tagInfo = Object.entries(sortTags(posts));

  return (
    <div className="flex flex-col w-full">
      <PageTitle pageTitle="tags" />
      <div className="flex max-w-lg flex-wrap sm:mt-4 mt-2">
        {tagInfo.map(([tagName, tagCount]) => (
          <TagInfo tagName={tagName} tagCount={tagCount} key={tagName} />
        ))}
      </div>
    </div>
  );
}
