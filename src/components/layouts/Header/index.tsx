import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-10">
      <div className="flex items-center">
        <Image src="/profile.png" alt="profile" />
        <div className="ml-2 font-semibold">Minsug</div>
      </div>
      <div className="font-medium">
        <button className="mr-6">Tag</button>
        <button>About</button>
      </div>
    </div>
  );
}
