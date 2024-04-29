import type { Metadata } from "next";
import { rale } from "./assets/fonts/fonts";
import "./globals.css";
import Header from "./components/header";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Debsigner",
  description: "Materialize sua identidade!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <html lang="en" className="scroll-smooth">
       <ChakraProvider> <Header />
      <body
        className={` ${rale.className} flex flex-col min-h-screen bg-white w-full items-center justify-center `}
      >
        {children}
      </body>
    </ChakraProvider></html>
  );
}
