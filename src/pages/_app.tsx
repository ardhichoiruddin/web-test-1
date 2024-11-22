import "@/styles/globals.css";
import "../../public/assets/iconmoon/index.css";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Poppins } from "next/font/google";

const poppinsFont = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "900"],
  subsets: ["latin"],
});

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component?.getLayout ?? ((page) => page);
  return (
    <div className={poppinsFont.className}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
