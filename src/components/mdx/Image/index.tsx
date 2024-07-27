interface Props {
  src: string;
  alt: string;
}

export default function Image({ src, alt }: Props) {
  return (
    <>
      <img src={src} alt={alt} className="mx-auto mb-0 mt-8 rounded-md" />
      {alt !== "" && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">
          {alt}
        </span>
      )}
    </>
  );
}
