'use client'
import Image from "next/image";
import { Who } from "./components/who";
import badLogo from "@/app/assets/images/Component 13.png";
import { Presentation } from "./components/presentation";
import { What } from "./components/what";
import { Skills } from "./components/skills";
import { motion } from "framer-motion";
import { Contact } from "./components/contact";


export default function Home() {

  return (
    
    <div className="w-full">
     
        < Presentation />
<motion.div initial={{ opacity: 0, y: 50 }}
     transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    >

 
      <div className="bg-black py-1 text-white">
        <h1
          className={`mb-2 md:text-6xl text-debpink font-black text-5xl text-center`}
        >
          Atenção:
        </h1>

        <div className="flex h-auto items-center justify-center flex md:flex-row flex-col mb-20">
          <div className=" xl:w-8/12 w-11/12 flex flex-col md:flex-col xl:flex-row items-center justify-center ">
            <div className="flex-col">
              <br />
              <h2 className="font-extralight  text-lg sm:mb-5 md:mb-5 xl:mb-0  sm:text-5xl w-full xl:text-left md:text-left sm:text-left text-center md:w-3/5 sm:w-4/5 xl:3/5">
                Mesmice <span className="text-debpink font-black">NÃO</span>{" "}
                aparecerá por aqui. Inovação é o propósito.
                <br />
                <br className="md:hidden " />{" "}
                <span className="md:mt-0 mt-5 font-black text-debpink">
                  Plágio, uso indevido de informações e usurpação de identidade visual são infrações, não me solicite para isso.
                </span>
              </h2>
            </div>
          

            <Image
              src={badLogo}
              className="md:mt-0 mt-12 md:animate-none animate-pulse"
              alt="bad"
              width={400}
              sizes="30%:200px"
            />
          </div>
        </div>
      </div>
  </motion.div>
  <motion.div initial={{ opacity: 0, y: 50 }}
     transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    >
      <What /></motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }}
     transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    >
      <Skills /></motion.div>
      <motion.div initial={{ opacity: 0, y: 50 }}
     transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    ><Who /></motion.div>
 <motion.div initial={{ opacity: 0, y: 50 }}
     transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    ><Contact/></motion.div>
      <footer className="text-center my-16"></footer>
    </div>
  );
}
