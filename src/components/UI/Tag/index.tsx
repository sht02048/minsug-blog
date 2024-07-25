export default function Tag({ tagName }: { tagName: string }) {
  return (
    <div className="bg-button text-white rounded-md px-1 text-xs font-light sm:px-2 sm:font-normal sm:text-base">
      {tagName}
    </div>
  );
}
