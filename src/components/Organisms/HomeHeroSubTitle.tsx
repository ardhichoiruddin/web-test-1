import { FC } from "react";

const HomeHeroSubTitle: FC = () => {
  return (
    <div className="text-[24px] font-bold mb-16">
      <div className="mb-8  text-white/90 leading-[34px]">
        <span className="block">법률 및 인사관리 부담없이</span>
        <span className="block">1주일 이내에 원격으로 채용해보세요.</span>
      </div>
      <div>
        <span
          className="block underline underline-offset-4 leading-[27px]  text-white"
          style={{ textDecorationThickness: 1 }}
        >
          개발자가 필요하신가요?
        </span>
      </div>
    </div>
  );
};

export default HomeHeroSubTitle;
