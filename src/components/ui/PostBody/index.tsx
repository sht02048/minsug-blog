import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";

import Image from "../../mdx/Image";
import ExternalLink from "../../mdx/Link";

const mdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
};

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
