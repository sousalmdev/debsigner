"use client";

import Image from "next/image";
import { rale } from "../assets/fonts/fonts";
import mainPhoto from "@/app/assets/images/TELA PRINCIPAL.png";
import { motion } from "framer-motion";

export const Presentation = () => {
  return (
    <section className="py-20 bg-white min-h-screen flex sm:items-center justify-center  w-full">
      <motion.div
        animate={{ opacity: 0, y: 50 }}
        initial={false}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex items-center justify-around md:gap-0 gap-20"
      >
        <div className=" w-11/12 md:gap-0 gap-12 xl:flex-row flex-col-reverse flex items-center justify-start sm:justify-around">
          <div className="flex-col">
            <h1
              className={`${rale.className} w-full xl:text-left text-center text-black text-2xl sm:text-5xl md:text-5xl xl:text-7xl font-light`}
            >
              Essência e criatividade, <br />{" "}
              <span className="font-black text-debpink">
                tudo em um só lugar.
              </span>
            </h1>
            <p className="xl:text-3xl sm:text-xl md:text-3xl text-gray-500 text-base mt-5 xl:w-4/5 w-full xl:text-left font-light text-center">
              Mais que criar simples grupos de cores e figuras, somos
              direcionados a trazer emoções em formato de arte, detalhe por
              detalhe, identidade e compromisso com o que sua marca mais
              precisar!{" "}
            </p>
          </div>

          <Image
            src={mainPhoto}
            alt="mockups"
            className="sm:mt-0 mt-5"
            width={450}
            height={100}
            priority 
            quality={100}
          />
        </div>
      </motion.div>
    </section>
  );
};
