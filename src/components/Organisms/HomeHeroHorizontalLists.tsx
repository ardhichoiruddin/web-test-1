import { FC } from "react";

interface HomeHeroHorizontalListsProps {
  lists: {
    title: string;
    sub_title: string;
  }[];
}

const HomeHeroHorizontalLists: FC<HomeHeroHorizontalListsProps> = ({
  lists,
}) => {
  return (
    <div className="-mx-[1.7rem]">
      <ul className="flex justify-start items-start">
        {lists.map((it, index) => (
          <li key={index} className="px-[1.7rem]">
            <div className="font-bold ">
              <span className="block border-t w-[129px]"></span>
              <div className="pt-2.5">
                <div className="mb-2">
                  <span className="text-[18px] text-white block leading-[27px]">
                    {it.title}
                  </span>
                </div>
                <div>
                  <span className="block text-white/80 leading-[24px]">
                    {it.sub_title}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeHeroHorizontalLists;
