import { FigmaLogoIcon } from "@radix-ui/react-icons";
import { rale } from "../assets/fonts/fonts";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FiFigma } from "react-icons/fi";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiCanva,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { motion } from "framer-motion";
export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full py-20 px-7  flex flex-col items-center justify-center"
    >
     <h1
        className={` text-center mb-10 text-black font-black md:text-6xl text-3xl`}
      >
        Minhas Melhores Ferramentas
      </h1>
     <br /> 
      <p
        className="md:text-left text-center md:w-2/5 md:text-2xl text-base 
       text-gray-500"
      >
        Tenho um arsenal enorme de tecnologias e aplicativos para melhor
        satisfazer a necessidade de quem é cliente DebSigner. Confira abaixo
        minhas competências.
      </p>
      <div className="md:w-11/12 w-full flex p-5 h-1/2 items-center justify-center">
        {" "}
      <Carousel className="md:w-1/2 w-full flex items-center  self-center py-10 md:py-20">
          <CarouselContent className="  m-0 bg-black">
            <CarouselItem className="border-debpink border-8 flex flex-col w-full items-center justify-center bg-black p-2 md:p-5">
              <FiFigma className="md:text-8xl text-7xl  text-debpink" />
              <br />
              <h1
                className={`text-white md:text-6xl text-2xl  text-center font-bold`}
              >
                Figma
              </h1>
             <br /> <p className="text-center font-semibold text-debpink md:text-2xl text-sm md:w-11/12 w-full self-center">
                Uma ferramenta de design colaborativa baseada na web, amplamente
                usada para criar interfaces de usuário, protótipos e designs
                interativos. É popular entre designers e equipes de
                desenvolvimento.
              </p>
            </CarouselItem>

            <CarouselItem className="border-debpink border-8 flex flex-col w-full items-center justify-center bg-black p-2 md:p-5">
              <SiAdobeaftereffects className="md:text-8xl text-7xl text-yellow-600" />
              <br />
              <h1
                className={`text-white md:text-6xl text-2xl text-center font-bold`}
              >
                Adobe After Effects
              </h1>
             <br /> <p className="text-center font-semibold text-debpink md:text-2xl text-sm md:w-11/12 w-full self-center">
                Um software de pós-produção usado para criar efeitos visuais,
                animações e composições em vídeos e filmes. É amplamente
                utilizado na indústria cinematográfica e de produção de vídeo.
              </p>
            </CarouselItem>

            <CarouselItem className="border-debpink border-8 flex flex-col w-full items-center justify-center bg-black p-2 md:p-5">
              <DiPhotoshop className="md:text-8xl text-7xl text-blue-500" />
              <br />
              <h1
                className={`text-white md:text-6xl text-2xl text-center font-bold`}
              >
                Adobe Photoshop
              </h1>
             <br /> <p className="text-center font-semibold text-debpink md:text-2xl text-sm md:w-11/12 w-full self-center">
                O software de edição de imagens mais conhecido e usado no mundo.
                Ele permite a manipulação de fotos, criação de gráficos e
                designs, e é uma ferramenta essencial para designers e
                fotógrafos.
              </p>
            </CarouselItem>

            <CarouselItem className="border-debpink border-8 flex flex-col w-full items-center justify-center bg-black p-2 md:p-5">
              <SiAdobeillustrator className="md:text-8xl text-7xl text-yellow-800" />
              <br />
              <h1
                className={`text-white md:text-6xl text-2xl text-center font-bold`}
              >
                Adobe Illustrator
              </h1>
             <br /> <p className="text-center font-semibold text-debpink md:text-2xl text-sm md:w-11/12 w-full self-center">
                Um programa de design vetorial usado para criar ilustrações,
                logotipos, ícones e gráficos escaláveis. É popular entre
                designers gráficos e artistas digitais.
              </p>
            </CarouselItem>

            <CarouselItem className="border-debpink border-8 flex flex-col w-full items-center justify-center bg-black p-2 md:p-5">
              <SiAdobeindesign className="md:text-8xl text-7xl text-debpink" />
              <br />
              <h1
                className={`text-white md:text-6xl text-2xl text-center font-bold`}
              >
                Adobe InDesign
              </h1>
             <br /> <p className="text-center font-semibold text-debpink md:text-2xl text-sm md:w-11/12 w-full self-center">
                Uma ferramenta de layout e design usada para criar layouts de
                impressão, como revistas, livros e folhetos. É especialmente
                útil para designers editoriais e profissionais de publicação.
              </p>
            </CarouselItem>

            <CarouselItem className="border-debpink border-8 flex flex-col w-full items-center justify-center bg-black p-2 md:p-5">
              <SiAdobepremierepro className="md:text-8xl text-7xl text-purple-400" />
              <br />
              <h1
                className={`text-white md:text-6xl text-2xl text-center font-bold`}
              >
                Adobe Premiere
              </h1>
             <br /> <p className="text-center font-semibold text-debpink md:text-2xl text-sm md:w-11/12 w-full self-center">
                {" "}
                Um software de edição de vídeo usado para criar filmes, vídeos
                promocionais e conteúdo para a web. É amplamente utilizado por
                cineastas e editores de vídeo profissionais.
              </p>
            </CarouselItem>

            <CarouselItem className="border-debpink border-8 flex flex-col w-full items-center justify-center bg-black p-2 md:p-5">
              <SiCanva className="md:text-8xl text-7xl text-green-400" />
              <br />
              <h1
                className={`text-white md:text-6xl text-2xl text-center font-bold`}
              >
                Canva
              </h1>
             <br /> <p className="text-center font-semibold text-debpink md:text-2xl text-sm md:w-11/12 w-full self-center">
                Uma plataforma de design gráfico online que permite criar
                facilmente gráficos, cartazes, mídia social e outros materiais
                visuais. É popular entre empreendedores, blogueiros e pequenas
                empresas.
              </p>
            </CarouselItem>

            <CarouselItem className="border-debpink border-8 flex flex-col w-full items-center justify-center bg-black p-2 md:p-5">
              <SiAdobelightroom className="md:text-8xl text-7xl text-blue-700" />
              <br />
              <h1
                className={`text-white md:text-6xl text-2xl text-center font-bold`}
              >
                Adobe Lightroom
              </h1>
             <br /> <p className="text-center font-semibold text-debpink md:text-2xl text-sm md:w-11/12 w-full self-center">
                Um aplicativo de edição de fotos usado por fotógrafos para
                ajustar cores, exposição e outros aspectos das imagens. É
                especialmente útil para organizar e aprimorar fotos em lotes.
                use esses textos
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
      
    </section>
  );
};
