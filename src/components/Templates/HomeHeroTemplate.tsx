import React from "react";

import HomeHeroTItle from "../Organisms/HomeHeroTItle";
import HomeHeroSubTitle from "../Organisms/HomeHeroSubTitle";
import HomeHeroHorizontalLists from "../Organisms/HomeHeroHorizontalLists";
import Container from "../Molecules/Container";

const HomeHeroTemplate = () => {
  return (
    <div className="pt-[120px]">
      <Container>
        <div className="flex">
          <div className="max-w-[590px] w-full">
            <HomeHeroTItle />
            <HomeHeroSubTitle />
            <HomeHeroHorizontalLists
              lists={[
                {
                  title: "평균 월 120만원",
                  sub_title: "임금을 해당 국가를 기준으로 계산합니다.",
                },
                {
                  title: "최대 3회 인력교체",
                  sub_title: "막상 채용해보니 맞지 않아도 걱정하지 마세요. ",
                },
                {
                  title: "평균 3일, 최대 10일",
                  sub_title:
                    "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeHeroTemplate;
