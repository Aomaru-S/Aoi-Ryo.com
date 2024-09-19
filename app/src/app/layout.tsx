import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BurgerMenu from "@/components/burger-menu";

export const metadata: Metadata = {
  title: "Aoi-Ryo.com",
  description: "さいきょうむてきのフルスタックエンジニアに俺はなる！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <BurgerMenu />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
