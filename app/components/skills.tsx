import { FigmaLogoIcon } from "@radix-ui/react-icons";
import { oi, rale } from "../assets/fonts/fonts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FiFigma } from "react-icons/fi";
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobelightroom, SiAdobepremierepro, SiCanva } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
export const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full p-5 min-h-screen flex flex-col items-center justify-center"
    >
      <h1
        className={`${oi.className} text-debpink text-center mb-4 md:md:text-6xl text-center text-xl`}
      >
        Minhas Melhores Ferramentas
      </h1>
      <p className="text-left md:w-2/5 md:text-2xl text-xl 
       text-white">
        Tenho um arsenal enorme de tecnologias e aplicativos para melhor satisfazer a necessidade de quem é cliente DebSigner. Confira abaixo minhas competências.
      </p>
      <div className="w-full flex p-5 h-1/2 items-center justify-center">
        {" "}
        <Carousel className="md:w-1/2 w-full flex items-center  self-center py-20">
          <CarouselContent className="h-fit bg-black">

            <CarouselItem className="flex flex-col w-full items-center justify-center bg-white p-10">
              <FiFigma className="text-8xl  text-debpink" />
             <br />
              <h1 className={`text-black md:text-6xl text-2xl  text-center font-bold`}>Figma</h1>
            </CarouselItem>

            <CarouselItem className="flex flex-col w-full items-center justify-center bg-white p-10">
              <SiAdobeaftereffects className="text-8xl text-yellow-600" />
             <br />
              <h1 className={`text-black md:text-6xl text-2xl text-center font-bold`}>Adobe After Effects</h1>
            </CarouselItem>

            <CarouselItem className="flex flex-col w-full items-center justify-center bg-white p-10">
              <DiPhotoshop className="text-8xl text-blue-500" />
             <br />
              <h1 className={`text-black md:text-6xl text-2xl text-center font-bold`}>Adobe Photoshop</h1>
            </CarouselItem>

            <CarouselItem className="flex flex-col w-full items-center justify-center bg-white p-10">
              <SiAdobeillustrator className="text-8xl text-yellow-800" />
             <br />
              <h1 className={`text-black md:text-6xl text-2xl text-center font-bold`}>Adobe Illustrator</h1>
            </CarouselItem> 

            <CarouselItem className="flex flex-col w-full items-center justify-center bg-white p-10">
              <SiAdobeindesign className="text-8xl text-debpink" />
             <br />
              <h1 className={`text-black md:text-6xl text-2xl text-center font-bold`}>Adobe InDesign</h1>
            </CarouselItem>

            <CarouselItem className="flex flex-col w-full items-center justify-center bg-white p-10">
              <SiAdobepremierepro className="text-8xl text-purple-400" />
             <br />
              <h1 className={`text-black md:text-6xl text-2xl text-center font-bold`}>Adobe Premiere</h1>
            </CarouselItem>

            <CarouselItem className="flex flex-col w-full items-center justify-center bg-white p-10">
              <SiCanva className="text-8xl text-green-400" />
             <br />
              <h1 className={`text-black md:text-6xl text-2xl text-center font-bold`}>Canva</h1>
            </CarouselItem>

            <CarouselItem className="flex flex-col w-full items-center justify-center bg-white p-10">
              <SiAdobelightroom className="text-8xl text-blue-700" />
             <br />
              <h1 className={`text-black md:text-6xl text-2xl text-center font-bold`}>Adobe Lightroom</h1>
            </CarouselItem>


          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
};
