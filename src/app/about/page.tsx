import Image from "next/image";
import avatar from "../../../public/avatar.png";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col items-center space-y-4 sm:mr-10 mr-0 mb-4 mt-10">
        <div className="rounded-full overflow-hidden w-52 h-52 flex items-center justify-center">
          <Image src={avatar} alt="picture of the blog owner" priority />
        </div>
        <div className="text-center space-y-2 text-secondary">
          <div className="text-2xl font-semibold text-primary">채민석</div>
          <div>FrontEnd Engineer</div>
          <div>Seoul, Korea</div>
        </div>
      </div>
      <div className="space-y-4 mt-6 sm:mt-14">
        <p>안녕하세요! 자바스크립트를 좋아하는 채민석이라고 합니다.</p>
        <p className="break-keep">
          문제를 정의하고 해결하는 것에 관심이 많습니다. 작동 원리를 깊게
          이해하는 것이 효율적인 코드를 짤 수 있는 가장 빠른 지름길이라고
          생각합니다.
        </p>
        <p>
          맛있는 음식을 먹는 것을 즐기지만 그 중 제일 좋아하는 음식은
          스시입니다.
        </p>
        <p>프롬 소프트웨어 게임을 좋아하지만 잘하지는 못합니다.</p>
      </div>
    </div>
  );
}
