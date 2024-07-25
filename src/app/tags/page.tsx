import sortTags from "@/src/lib/sortTags";
import { getAllPost } from "@/src/lib/post";
import TagInfo from "@/src/components/UI/TagInfo";

export default function Tags() {
  const posts = getAllPost();
  const tagInfo = Object.entries(sortTags(posts));

  return (
    <div className="flex max-w-lg flex-wrap sm:mt-4 mt-2">
      {tagInfo.map(([tagName, tagCount]) => (
        <TagInfo tagName={tagName} tagCount={tagCount} key={tagName} />
      ))}
    </div>
  );
}
