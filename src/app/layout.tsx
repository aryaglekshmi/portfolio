"use client";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import PageTransition from "./components/pageTransition";
import useIsMobile from "./utils/useIsMobile";
import RightSideBar from "./components/rightSideBar";
import { MobileContext } from "./utils/useIsMobile";
import { PathContext, urlPath } from "./utils/PathContext";

const jetBrains = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrainsMono",
  display:'swap',
  adjustFontFallback:false
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MobileContext.Provider value={useIsMobile()}>
        <PathContext.Provider value={urlPath()}>
          <body
            className={`${jetBrains.variable} bg-primary m-0 p-0 box-border`}
          >
            <div className="flex justify-between relative h-screen overflow-xcd-hidden">
              <Header />
              <div className="w-full overflow-y-auto overflow-x-hidden h-full lg:pl-20 lg:pr-28 px-10 ">
                <PageTransition>{children}</PageTransition>
              </div>
              <RightSideBar />
            </div>
          </body>
        </PathContext.Provider>
      </MobileContext.Provider>
    </html>
  );
}
