import Image from "next/image";
import ThemeSwitch from "../../ThemeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-10">
      <div className="flex items-center">
        <Image
          priority
          width={40}
          height={40}
          src="/profile.png"
          alt="profile"
        />
        <div className="ml-2 font-semibold">Minsug</div>
      </div>
      <div className="font-medium flex items-center gap-6">
        <button className="">Tag</button>
        <button>About</button>
        <ThemeSwitch />
      </div>
    </div>
  );
}
