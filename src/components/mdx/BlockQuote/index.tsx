import { PropsWithChildren } from "react";

export default function MdxBlockQuote(props: PropsWithChildren) {
  return (
    <div className="font-medium mt-6 border-l-4 pl-5 border-secondary">
      <strong>{props.children}</strong>
    </div>
  );
}
