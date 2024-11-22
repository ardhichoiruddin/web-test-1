import { FC, ReactNode } from "react";

interface BackgroundGradientProps {
  children: ReactNode;
}

const BackgroundGradient: FC<BackgroundGradientProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default BackgroundGradient;
