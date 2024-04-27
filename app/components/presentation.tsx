"use client";

import Image from "next/image";
import { rale } from "../assets/fonts/fonts";
import mockups from "@/app/assets/images/Frame 22.svg";
import { motion } from "framer-motion";
export const Presentation = () => {
  return (
     <motion.div
     initial={{ opacity: 0, y: 50 }}
     transition={{ duration: 0.5 }}
    whileInView={{ opacity: 1, y: 0 }}
      
    >
      <section className="bg-white sm:min-h-screen py-24 flex sm:items-center justify-center  w-full">
      
    <div className=" w-11/12  sm:gap-12 xl:flex-row flex-col-reverse flex items-center justify-start sm:justify-around">
           <div className="flex-col">
            <h1
              className={`${rale.className} w-full sm:text-left text-center text-black text-2xl sm:text-xl md:text-3xl xl:text-7xl font-light`}
            >
              Essência e criatividade, <br />{" "}
              <span className="font-black text-debpink">
                tudo em um só lugar.
              </span>
            </h1>
            <p className="md:text-3xl text-gray-600 text-sm mt-5 md:w-4/5 w-full md:text-left font-light text-center">
              Mais que criar simples grupos de cores e figuras, somos
              direcionados a trazer emoções em formato de arte, detalhe por
              detalhe, identidade e compromisso com o que sua marca mais
              precisar!{" "}
            </p>
          </div>
       
<Image
            src={mockups}
            alt="mockups"
            className="animate-smooth sm:mt-0 mt-5"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={750}
          />

        </div>  
      </section></motion.div>
  ); 
};
