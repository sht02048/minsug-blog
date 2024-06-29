import getAllPosts from "../lib/post";
import { MAX_POST_NUMBER } from "../constants";
import PostCard from "../components/UI/PostCard";

export default function Posts() {
  const posts = getAllPosts();
  const availablePosts = posts.filter((_, index) => index <= MAX_POST_NUMBER);

  return (
    <div className="mb-auto divide-y-[0.5px] w-full divide-secondary">
      {availablePosts.map((post) => (
        <PostCard frontMatter={post.frontMatter} key={post.frontMatter.title} />
      ))}
    </div>
  );
}
