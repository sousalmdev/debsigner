import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { rale, abril, oi } from "./assets/fonts/fonts";
import { Who } from "./components/who";
import badLogo from "@/app/assets/images/Component 13.png";
import { Presentation } from "./components/presentation";
import { What } from "./components/what";
import { Skills } from "./components/skills";
export default function Home() {
  return (
    <div className="w-full">
      <Presentation />
      <div className="bg-white py-1 text-black">
        <h1
          className={`mb-2 md:text-6xl text-debpink font-extralight ${oi.className} text-5xl text-center`}
        >
          Atenção:
        </h1>

        <div className="flex h-auto items-center justify-center flex md:flex-row flex-col mb-20">
          <div className=" xl:w-8/12 w-11/12 flex flex-col md:flex-col xl:flex-row items-center justify-center ">
            <div className="flex-col">
              <br />
              <h2 className="font-normal  text-lg sm:mb-5 md:mb-5 xl:mb-0  sm:text-5xl w-full xl:text-left md:text-left sm:text-left text-center md:w-3/5 sm:w-4/5 xl:3/5">
                Mesmice <span className="text-debpink font-black">NÃO</span>{" "}
                aparecerá por aqui. Inovação é o propósito.
                <br />
                <br className="hidden sm:block" />{" "}
                <span className="font-black text-debpink">
                  Estejam avisados.
                </span>
              </h2>
            </div>
            <Image
              src={badLogo}
              className="xl:mt-0 sm:mt-5 md:animate-none animate-pulse"
              alt="bad"
              width={400}
              sizes="30%:200px"
            />
          </div>
        </div>
      </div>

     <What/>
     <Skills/>
      <Who />

        <h1
          className={`${oi.className} text-center mb-4 text-white md:text-6xl text-xl`}
        >
          Converse comigo!
        </h1>
        <div className="w-full flex flex-col items-center justify-center">
         <div className="w-1/2 flex items-center flex-col bg-debpink"><div>
          

            <form className="flex flex-col">
              <label htmlFor="nome">Nome:</label>
              <input
                type="text"
                placeholder="Debora V..."
                id="nome"
                name="nome"
                required
              />

              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                placeholder="debora.viana@example.com"
                id="email"
                name="email"
                required
              />

              <label htmlFor="msg">Mensagem:</label>
              <textarea id="msg" name="msg" rows={4} required></textarea>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-pink-500 hover:text-black"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        <div>
          <button className="bg-white text-black px-6 py-3 rounded-lg mr-4">
            <h2>Entre em Contato via WhatsApp:</h2>
          </button>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <i className="fa fa-whatsapp fa-3x"></i>
          </a>
          </div>
          </div>
             <footer className="text-center my-16">
      </footer>
        </div>
  
  );
}
