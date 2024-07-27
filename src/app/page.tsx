import { getAllPost } from "../lib/post";
import PostCard from "../components/Posts/PostCard";
import PageTitle from "../components/layouts/PageTitle";

export default function Page() {
  const posts = getAllPost();

  return (
    <div className="mb-auto divide-y-[0.5px] w-full divide-secondary">
      <PageTitle pageTitle="posts" />
      {posts.map((post) => (
        <PostCard
          frontMatter={post.frontMatter}
          readingTime={post.parsedReadingTime}
          slug={post.slug}
          key={post.frontMatter.title}
        />
      ))}
    </div>
  );
}
