import type { Metadata } from "next";
import { Montserrat  } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

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
      <body className={`${montserrat.variable} bg-light w-screen h-screen m-0 p-0`}>
        <div className="flex justify-between flex-col relative m-auto">
          <Header />
          <div className="px-20">
          {children}
          </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
