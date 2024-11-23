import type { ReactElement } from "react";

import MainLayout from "@/components/Templates/MainLayout";
import Home from "@/components/Pages/Home";

const HomeIndex = () => {
  return (
    <>
      <Home />
    </>
  );
};

HomeIndex.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default HomeIndex;
