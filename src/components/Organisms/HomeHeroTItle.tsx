import { FC } from "react";

interface HomeHeroTItleProps {}

const HomeHeroTItle: FC<HomeHeroTItleProps> = () => {
  return (
    <div className="text-[48px] leading-[62.4px] text-white/90 font-bold mb-6">
      <span className="block">최고의 실력을 가진</span>
      <span className="block">외국인 인재를 찾고 계신가요?</span>
    </div>
  );
};

export default HomeHeroTItle;
