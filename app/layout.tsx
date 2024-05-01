import type { Metadata, Viewport } from "next";
import { rale } from "./assets/fonts/fonts";
import "./globals.css";
import Header from "./components/header";
import { ChakraProvider } from "@chakra-ui/react";
import logofav from "@/app/assets/favicon.ico";
import Link from "next/link";
import { Footer } from "./components/footer";

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
      <Footer/>
      </ChakraProvider>
    </html>
  );
}
