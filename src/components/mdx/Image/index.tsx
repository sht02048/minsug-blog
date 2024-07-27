import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

export default function MdxImage({ src, alt }: Props) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="mx-auto mb-0 mt-8 rounded-md"
        priority
      />
      {alt !== "" && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">
          {alt}
        </span>
      )}
    </>
  );
}
