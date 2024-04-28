import { motion } from "framer-motion";
import debinha from "@/app/assets/images/Group 18.svg";
import Image from "next/image";

export const Who = () => {
  return (
    <div className="">
      <h1
        className={` text-center mb-4 text-black font-black md:text-6xl text-3xl`}
      >
        Quem sou?
      </h1>
      <div
        id="who"
        className=" md:flex-row flex-col-reverse flex items-center justify-around py-10 "
      >

          <p className="md:text-3xl text-base md:w-2/5 w-11/12 text-black">
            Olá,{" "}
            <span className="text-debpink font-black">
              eu sou Débora Viana Rodrigues
            </span>
            , designer gráfica brasileira, apaixonada por arte desde pequena, e
            também sempre gostei de canalizar essa paixão por meio de edições,
            casualmente. Agora, profissionalmente, estou em compromisso com a
            arte, com a identidade visual dos meus clientes, e uso essa arte
            como uma forma de me aproximar com meu público.
          </p>
         
          <Image
            quality={100}
            priority={true}
            src={debinha.src}
            alt="bibinho"
            width={700}
            height={100}
            className="md:mb-0 mb-10"
          />
      </div>
    </div>
  );
};
