import PostHeader from "@/src/components/UI/PostHeader";
import { getPostDetail, translateToPostPath } from "@/src/lib/post";

export default function Page({
  params: { year, month, slug },
}: {
  params: { year: string; month: string; slug: string };
}) {
  const postPath = translateToPostPath({ year, month, slug });
  const { data, parsedReadingTime } = getPostDetail(postPath);

  return (
    <div className="w-full divide-y-2">
      <PostHeader
        title={data.title}
        date={data.date}
        parsedReadingTime={parsedReadingTime}
      />
    </div>
  );
}
