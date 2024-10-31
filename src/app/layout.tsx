"use client";
import "./globals.css";
import Header from "./components/header";
import RightSideBar from "./components/rightSideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <body className="bg-primary m-0 p-0 box-border">
            <div className="flex justify-between relative h-screen overflow-x-hidden">
              <Header />     
              <div className="w-full overflow-y-auto overflow-x-hidden lg:pl-20 lg:pr-28 px-10 pt-16 mb-8">
               {children}
              </div>
              <RightSideBar />
            </div>
          </body>
    </html>
  );
}
