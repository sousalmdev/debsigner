"use client";
import oldPh from "@/app/assets/images/oldph.svg";
import love from "@/app/assets/images/LVOS.svg";
import brochure from "@/app/assets/images/Frame 23.svg";
import video from "@/app/assets/images/Frame 24.svg";
import oldPhResp from "@/app/assets/images/Frame 15 resp.svg";
import loveResp from "@/app/assets/images/Frame 20 resp.svg";
import brochureResp from "@/app/assets/images/Frame 21 resp.svg";
import videoResp from "@/app/assets/images/Frame 16 resp.svg";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Icon,
  Flex,
} from "@chakra-ui/react";

import {
  BiSolidFilm,
  BiSolidIdCard,
  BiSolidImageAdd,
  BiSolidShoppingBag,
} from "react-icons/bi";
import { motion } from "framer-motion";

export const What = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        id="do"
        className=" min-h-screen w-11/12 flex-col flex items-center justify-center my-20"
      >
        <h1
          className={` text-center mb-10 text-black font-black sm:text-6xl text-3xl`}
        >
          O que faço?
        </h1>
        <p className="mb-10 text-center  xl:w-2/5 sm:text-2xl text-base text-gray-500">
          Antes de mais nada, preciso adiantar a vocês o que posso providenciar
          aos meus clientes, e espero que você se identifique com alguma
          necessidade, e assim poderei ajudar melhor a você.
        </p>
        <div className="text-xl gap-10 w-full flex flex-col justify-center items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {" "}
            <Card
              background={"black"}
              className="rounded-md bg-center py-10 px-5 md:px-10 2xl:w-9/12 w-full bg-black text-debpink mb-8 xl:flex-row flex-col-reverse  flex items-center justify-center"
            >
              <CardHeader
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <div className="bg-white mb-2  rounded-full p-2 flex items-center justify-center">
                  <BiSolidImageAdd className="md:text-6xl text-4xl text-debpink" />
                </div>
                <h2
                  className={`text-center mb-10 border-lg border-debpink text-white sm:text-4xl text-xl font-black `}
                >
                  Restauração de Imagens Antigas
                </h2>
              </CardHeader>
              <CardBody
                paddingInline={5}
                alignItems={"center"}
                justifyItems={"center"}
              >
                <Flex
                  align={"center"}
                  className="w-full md:gap-20 gap-5 xl:flex-row flex-col-reverse"
                  justify={"center"}
                >
                  <p className=" xl:text-left text-center md:text-4xl sm:text-2xl text-base font-base text-debpink w-full md w-full:md:w-3/5">
                    {" "}
                    Você já encontrou uma foto antiga que gostaria de usar, mas
                    está danificada ou desbotada? Não se preocupe, tenho a
                    solução perfeita para você! Meus aplicativos de edição de
                    imagem permitem que você restaure suas fotos antigas e
                    danificadas, trazendo-as de volta à vida.
                  </p>
                  <Image
                    height={400}
                    className="hidden xl:block"
                    style={{ borderRadius: 10 }}
                    src={oldPh.src}
                    alt="old photo"
                    width={400}
                  />
                  <Image
                    height={400}
                    className="block xl:hidden"
                    style={{ borderRadius: 10 }}
                    src={oldPhResp.src}
                    alt="old photo"
                    width={400}
                  />
                </Flex>
              </CardBody>
            </Card>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card
              background={"black"}
              className="rounded-md bg-center py-10 px-5 md:px-10 2xl:w-9/12 w-full bg-black text-debpink mb-8 xl:flex-row flex-col-reverse  flex items-center justify-center"
            >
              <div className="bg-white mb-2 rounded-full p-2 flex md:flex-row flex-col items-center justify-center">
                <BiSolidIdCard className="md:text-6xl text-4xl text-debpink" />
              </div>

              <h2
                className={` text-center mb-10 text-white sm:text-4xl text-xl  font-black  `}
              >
                Identidade Visual / Branding
              </h2>
              <Flex
                align={"center"}
                className="w-full md:gap-20 gap-5 xl:flex-row flex-col-reverse"
                justify={"center"}
              >
                <p className=" xl:text-left text-center md:text-4xl sm:text-2xl text-base font-base text-debpink w-full md w-full:md:w-3/5">
                  {" "}
                  Como uma designer gráfica, tenho a capacidade de criar
                  conceitos visuais únicos que comunicam ideias de maneira
                  eficaz e visualmente atraente. Minha experiência abrange a
                  criação de logotipos, esquemas de cores e tipografias que
                  refletem a personalidade e os valores de uma pessoa ou
                  empresa.
                </p>
                <Image
                  height={400}
                  className="hidden xl:block"
                  style={{ borderRadius: 10 }}
                  src={love.src}
                  alt="id"
                  width={400}
                />
                <Image
                  height={400}
                  className="block xl:hidden"
                  style={{ borderRadius: 10 }}
                  src={videoResp.src}
                  alt="id"
                  width={400}
                />
              </Flex>
            </Card>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {" "}
            <Card
              background={"black"}
              className="rounded-md bg-center py-10 px-5 md:px-10 2xl:w-9/12 w-full bg-black text-debpink mb-8 xl:flex-row flex-col-reverse  flex items-center justify-center"
            >
              <div className="bg-white mb-2 rounded-full p-2 flex items-center justify-center">
                <BiSolidShoppingBag className="md:text-6xl text-4xl text-debpink" />
              </div>

              <h2
                className={` text-left mb-10 text-white sm:text-4xl text-xl font-black  `}
              >
                Encartes de Lojas
              </h2>
              <Flex
                align={"center"}
                className="w-full md:gap-20 gap-5 xl:flex-row flex-col-reverse"
                justify={"center"}
              >
                <p className=" xl:text-left text-center md:text-4xl sm:text-2xl text-base font-base text-debpink w-full md w-full:md:w-3/5">
                  {" "}
                  Transforme a experiência de compra dos seus clientes com
                  encartes de loja! Como designer, eu capto a essência da sua
                  marca e a traduzo em designs atraentes que chamam a atenção.
                  Com um forte entendimento das tendências atuais do mercado e
                  do comportamento do consumidor, eu crio encartes que não só
                  destacam seus produtos, mas também contam a história da sua
                  marca.
                </p>
                <Image
                  height={400}
                  className="hidden xl:block"
                  style={{ borderRadius: 10 }}
                  src={brochure.src}
                  alt="id"
                  width={400}
                />
                <Image
                  height={400}
                  className="block xl:hidden"
                  style={{ borderRadius: 10 }}
                  src={brochureResp.src}
                  alt="id"
                  width={400}
                />{" "}
              </Flex>
            </Card>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card
              background={"black"}
              className="rounded-md bg-center py-10 px-2 md:px-10 2xl:w-9/12 w-full bg-black text-debpink mb-8 xl:flex-row flex-col-reverse  flex items-center justify-center"
            >
              <div className="bg-white mb-2 rounded-full p-2 flex items-center justify-center">
                <BiSolidFilm className="md:text-6xl text-4xl text-debpink" />
              </div>

              <h2
                className={` text-center mb-10 text-white sm:text-4xl text-xl font-black  `}
              >
                Edição de Vídeos
              </h2>
              <Flex
                align={"center"}
                className="w-full md:gap-20 gap-5 xl:flex-row flex-col-reverse"
                justify={"center"}
              >
                <p className=" xl:text-left text-center md:text-4xl sm:text-2xl text-base font-base text-debpink w-full md w-full:md:w-3/5">
                  {" "}
                  Seja um vídeo promocional, um vlog pessoal ou uma produção
                  cinematográfica completa, estou aqui para ajudar a transformar
                  sua visão em realidade. Com dedicação, criatividade e atenção
                  aos detalhes, estou comprometida em entregar resdivtados que
                  não apenas atendam, mas superem suas expectativas.
                </p>
                <Image
                  height={400}
                  className="hidden xl:block"
                  style={{ borderRadius: 10 }}
                  src={video.src}
                  alt="id"
                  width={400}
                />
                <Image
                  height={400}
                  className="xl:hidden block"
                  style={{ borderRadius: 10 }}
                  src={loveResp.src}
                  alt="id"
                  width={400}
                />
              </Flex>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
