export default function Page({
  params: { year, slug },
}: {
  params: { year: string; slug: string };
}) {
  return <div>{`my post ${year}`}</div>;
}
