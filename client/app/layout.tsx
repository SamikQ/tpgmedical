import "./index.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin", "cyrillic"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tpgmedical.group"),
  title: {
    default: "Технолоджі Проджект Груп",
    template: "%s | Технолоджі Проджект Груп",
  },
  description: "Технологічне проектування медичних закладів",
  alternates: {
    canonical: "/",
    languages: {
      uk: "/uk",
      en: "/en",
    },
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
