"use client";
import "./globals.css";
import Header from "./components/header";
import useIsMobile from "./utils/useIsMobile";
import RightSideBar from "./components/rightSideBar";
import { MobileContext } from "./utils/useIsMobile";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MobileContext.Provider value={useIsMobile()}>
          <body className="bg-primary m-0 p-0 box-border">
            <div className="flex justify-between relative h-screen overflow-x-hidden">
              <Header />     
              <div className="w-full overflow-y-auto overflow-x-hidden lg:pl-20 lg:pr-28 px-10 pt-16">
               {children}
              </div>
              <RightSideBar />
            </div>
          </body>
      </MobileContext.Provider>
    </html>
  );
}
