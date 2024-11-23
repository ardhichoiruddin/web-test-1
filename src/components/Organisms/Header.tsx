import { FC } from "react";
import Link from "next/link";

import WhiteLogo from "../Atoms/WhiteLogo";
import Container from "../Molecules/Container";
import Button from "../Atoms/Button";
import Dropdown from "../Molecules/Dropdown";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <Container>
        <div className="pt-3">
          <div className="flex justify-between items-center">
            <div>
              <WhiteLogo />
            </div>
            <div>
              <ul className="flex space-x-14">
                <li>
                  <Dropdown
                    label={<span className="font-bold">채용</span>}
                    lists={[
                      {
                        name: "채용",
                        path: "/",
                      },
                      {
                        name: "해외 개발자 원격 채용",
                        path: "/",
                      },
                      {
                        name: "외국인 원격 채용 (비개발 직군)",
                        path: "/",
                      },
                      {
                        name: "한국어 가능 외국인 채용",
                        path: "/",
                      },
                    ]}
                  />
                </li>
                <li>
                  <Link href={"/"} className="text-white font-bold">
                    해외 개발자 활용 서비스
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Button>
                <span className="font-bold">문의하기</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
