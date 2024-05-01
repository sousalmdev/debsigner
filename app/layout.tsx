import type { Metadata, Viewport } from "next";
import { rale } from "./assets/fonts/fonts";
import "./globals.css";
import Header from "./components/header";
import { ChakraProvider } from "@chakra-ui/react";
import logofav from "@/app/assets/favicon.ico";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Debsigner",
  description: "Materialize sua identidade!",
  icons: {
    shortcut: logofav.src,
    icon: logofav.src,
    apple: logofav.src,
  },
};
export const viewport: Viewport = {
  themeColor: "#FF005C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <ChakraProvider>
        <Header />
        <body
          className={` ${rale.className} flex flex-col min-h-screen bg-white w-full items-center justify-center `}
        >
          {children}
        </body>
        <footer className={`${rale.className} py-10 text-white text-center flex items-center justify-center bg-debpink w-full`}>
          <ul className="w-10/12 gap-5 flex items-center justify-evenly">
            <li className="font-normal sm:text-base text-sm">Desenvolvido por: <br />
            <Link className="font-bold underline" href={'linkedin.com/in/leosousadev'}>Leandro Sousa </Link></li>
            <li className="font-normal sm:text-base text-sm">Políticas de Privacidade <br />
            <Link className="font-bold underline" href={'/'}>Clique aqui</Link></li>
          </ul>
        </footer>

      </ChakraProvider>
    </html>
  );
}
