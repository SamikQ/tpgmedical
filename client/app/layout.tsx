import "./index.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Технологічне проектування медзакладів ➛ Технолоджі Проджект Груп",
  description:
    "Замовити технологічне проектування медичних закладів ➛ Послуги з проектування за вигідними цінами ✓ ТОВ «ТЕХНОЛОДЖИ ПРОДЖЕКТ ГРУП»",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10"> {children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
