import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import mdxComponents from "../../mdx";

export default function PostBody({ content }: { content: string }) {
  return (
    <div className="prose dark:prose-invert w-full max-w-3xl mx-auto">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm, remarkBreaks],
            rehypePlugins: [rehypePrettyCode, rehypeSlug],
          },
        }}
        components={mdxComponents}
      />
    </div>
  );
}
