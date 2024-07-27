import Link from "next/link";
import siteConfig from "../config/siteConfig";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-full space-y-6 mt-16 text-center sm:mt-32">
      <span className="text-9xl font-extrabold">404</span>
      <p className="text-4xl font-medium">Oops! page is not found</p>
      <p className="text-2xl">
        But, you may find other interesting articles on my blog
      </p>
      <Link
        href={siteConfig.path.home()}
        className="bg-button px-2 py-1 rounded"
      >
        Back to Blog
      </Link>
    </div>
  );
}
