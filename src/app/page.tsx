import getAllPosts from "../lib/post";
import PostCard from "../components/UI/PostCard";

export default function Posts() {
  const posts = getAllPosts();

  return (
    <div className="mb-auto divide-y-[0.5px] w-full divide-secondary">
      {posts.map((post) => (
        <PostCard
          frontMatter={post.frontMatter}
          readingTime={post.parsedReadingTime}
          key={post.frontMatter.title}
        />
      ))}
    </div>
  );
}
