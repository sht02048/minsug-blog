import { getAllPost } from "../lib/post";
import PostCard from "../components/UI/PostCard";

export default function Posts() {
  const posts = getAllPost();

  return (
    <div className="mb-auto divide-y-[0.5px] w-full divide-secondary">
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
