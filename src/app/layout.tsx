import type { Metadata } from "next";
import { Montserrat  } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Socials from "./components/socials";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "GG Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} bg-primary m-0 p-0 box-border`}>
      {/* <div id="bgSnow" className="absolute inset-0 h-full w-full"></div> */}
      {/* <div className="absolute bottom-0 left-0 transform rotate-180 opacity-50 z-0">
        <img src="./sibe-bg.png" className="bg-contain opacity-50"/>
      </div> */}
        <div className="flex justify-between flex-col relative h-full">
          <Header />
          {/* <div className="px-20 w-full pb-5" style={{ height: 'calc(100% - 230px)' }}> */}
          <div className="px-20 w-full pb-5">
          {children}
          </div>
          <div className="fixed right-0 bottom-32 flex flex-col h-full justify-between items-center px-5">
        <div className="flex-1 flex items-end">
          <Socials />
        </div>
      </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
