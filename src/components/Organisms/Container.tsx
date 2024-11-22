import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[1270px] px-6 mx-auto">{children}</div>;
};

export default Container;
