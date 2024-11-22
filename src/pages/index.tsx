import type { ReactElement } from "react";

import Button from "@/components/Atoms/Button";
import Container from "@/components/Organisms/Container";
import MainLayout from "@/components/Templates/MainLayout";

const HomeIndex = () => {
  return <></>;
};

HomeIndex.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomeIndex;
