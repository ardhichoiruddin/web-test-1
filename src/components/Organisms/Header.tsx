import { FC } from "react";

import WhiteLogo from "../Atoms/WhiteLogo";
import Container from "./Container";
import Button from "../Atoms/Button";

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
