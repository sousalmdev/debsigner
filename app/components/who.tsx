import debinha from "@/app/assets/images/debinha.png";
import Image from "next/image";

export const Who = () => {
  return (
    <div className="min-h-screen py-20 flex flex-col items-center">
      <h1
        className={` text-center mb-4 text-black font-black md:text-6xl text-3xl`}
      >
        Quem sou?
      </h1>
      <p className="xl:text-left text-center xl:hidden block xl:w-2/5 sm:text-2xl text-base text-gray-500 w-11/12  p-4">
        Agora, além de conhecerem a marca Debsigner, vocês irão conhecer a
        pessoa por trás da marca, juro que sou legal :)
      </p>
      <div
        id="about"
        className=" xl:flex-row flex-col-reverse flex items-center justify-around  "
      >
        <p className="xl:text-left text-center sm:text-3xl text-base xl:w-2/5 w-11/12 xl:mt-0 mt-5 text-black">
          Olá,{" "}
          <span className="text-debpink font-black">
            eu sou Débora Viana Rodrigues
          </span>
          , designer gráfica brasileira, apaixonada por arte desde pequena, e
          também sempre gostei de canalizar essa paixão por meio de edições,
          casualmente. Agora, profissionalmente, estou em compromisso com a
          arte, com a identidade visual dos meus clientes, e uso essa arte como
          uma forma de me aproximar com meu público.
        </p>

        <Image
          quality={100}
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
