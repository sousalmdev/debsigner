import Image from "next/image";
import { abril, oi, rale } from "../assets/fonts/fonts";
import mockups from "@/app/assets/images/Component 9.svg";
export const Presentation = () => {
  return (
    <section className="bg-black sm:min-h-screen py-24 flex sm:items-center justify-center  w-full">
      <div className=" w-11/12  sm:gap-12 xl:flex-row flex-col flex items-center justify-start sm:justify-between">
        <div className="flex-col">
          <h1
            className={`${rale.className} w-full sm:text-left text-center text-debpink text-2xl sm:text-xl md:text-3xl xl:text-5xl font-normal`}
          >
            Já teve a vontade de ver sua essência estampada nos seus produtos?
          </h1>
          <br />
          <h2
            className={` ${oi.className} w-fit p-2  xl:bg-white text-white xl:text-black text-4xl md:text-left text-center md:text-6xl sm:text-5xl  xl:text-6xl`}
          >
            Eu posso te ajudar com isso.
          </h2>

          <br />
          <h3 className="w-full sm:text-4xl font-bold sm:text-left text-center  text-debpink">
            <span className="underline">
              {" "}
              Arrasta aí pra baixo que você vai descobrir como
            </span>
            !
          </h3>
        </div>
        <Image
          src={mockups}
          alt="mockups"
          className="animate-smooth sm:mt-0 sm:ml-0 ml-5 mt-5"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={750}
          quality={100}
        />
      </div>{" "}
    </section>
  );
};
