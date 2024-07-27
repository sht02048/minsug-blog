import TagLink from "../TagLink";

export default function TagInfo({
  tagName,
  tagCount,
}: {
  tagName: string;
  tagCount: number;
}) {
  return (
    <TagLink tag={tagName}>
      <div className="sm:text-xl flex space-x-2 sm:my-4 mr-6 my-2">
        <div className="text-button font-medium uppercase">{tagName}</div>
        <div>{tagCount}</div>
      </div>
    </TagLink>
  );
}
