import { FC, ReactNode } from "react";

interface BackgroundGradientProps {
  children: ReactNode;
}

const BackgroundGradient: FC<BackgroundGradientProps> = ({ children }) => {
  return <section className="bg-[#09aac6]">{children}</section>;
};

export default BackgroundGradient;
