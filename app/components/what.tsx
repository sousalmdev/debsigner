"use client";
import oldPh from "@/app/assets/images/Frame 13.svg";
import love from "@/app/assets/images/LVOS.svg";
import brochure from "@/app/assets/images/Frame 16.svg";
import video from "@/app/assets/images/Frame 19.svg";
import oldPhResp from "@/app/assets/images/Frame 15 resp.svg";
import loveResp from "@/app/assets/images/Frame 16 resp.svg";
import brochureResp from "@/app/assets/images/Frame 21 resp.svg";
import videoResp from "@/app/assets/images/Frame 20 resp.svg";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { oi } from "../assets/fonts/fonts";
import {
  BiSolidFilm,
  BiSolidIdCard,
  BiSolidImageAdd,
  BiSolidShoppingBag,
} from "react-icons/bi";

export const What = () => {
  return (
    <div
      id="do"
      className=" w-full p-5 flex-col flex items-center justify-center my-20"
    >
      <h1
        className={`${oi.className} text-center mb-10 text-white md:text-6xl text-3xl`}
      >
        O que faço?
      </h1>
      <div className="text-xl gap-10 w-full flex flex-col justify-center items-center">
        <Card className="rounded-md bg-center py-10 px-5 md:px-10 md:w-8/12 w-full bg-white text-debpink mb-8 md:flex-row flex-col flex items-center justify-center">
          <CardHeader
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <div className="bg-black mb-2  rounded-full p-2 flex items-center justify-center">
              <BiSolidImageAdd className="md:text-6xl text-4xl text-debpink" />
            </div>
            <h2
              className={`text-center mb-10 border-lg border-debpink text-debpink md:text-4xl text-xl font-bold ${oi.className}`}
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
              className="w-full md:gap-20 gap-5 md:flex-row flex-col-reverse"
              justify={"center"}
            >
              <p className=" md:text-4xl text-sm font-bold text-debpink w-full md:w-3/5">
                {" "}
                Você já encontrou uma foto antiga que gostaria de usar, mas está
                danificada ou desbotada? Não se preocupe, tenho a solução
                perfeita para você! Meus aplicativos de edição de imagem
                permitem que você restaure suas fotos antigas e danificadas,
                trazendo-as de volta à vida.
              </p>
              <Image
              className="hidden md:block"
                style={{ borderRadius: 10 }}
                src={oldPh.src}
                alt="old photo"
                width={350}
              
              />
                <Image
              className="block md:hidden" 
                style={{ borderRadius: 10 }}
                src={oldPhResp.src}
                alt="old photo"
                width={350}
              
              />
            </Flex>
          </CardBody>
        </Card>

        <Card className="rounded-md bg-center py-10 px-5 md:px-10 md:w-8/12 w-full bg-white text-debpink mb-8 md:flex-row flex-col flex items-center justify-center">
          <div className="bg-black mb-2 rounded-full p-2 flex md:flex-row flex-col items-center justify-center">
            <BiSolidIdCard className="md:text-6xl text-4xl text-debpink" />
          </div>

          <h2
            className={` text-center mb-10 text-debpink md:text-4xl text-xl  font-bold  ${oi.className}`}
          >
            Identidade Visual / Branding
          </h2>
          <Flex
            align={"center"}
            className="w-full md:gap-20 gap-5 md:flex-row flex-col-reverse"
            justify={"center"}
          >
            <p className=" md:text-4xl text-sm font-bold text-debpink w-full md w-full:md:w-3/5">
              {" "}
              Como uma designer gráfica, tenho a capacidade de criar conceitos
              visuais únicos que comunicam ideias de maneira eficaz e
              visualmente atraente. Minha experiência abrange a criação de
              logotipos, esquemas de cores e tipografias que refletem a
              personalidade e os valores de uma pessoa ou empresa.
            </p>
            <Image
            className="hidden md:block"
              style={{ borderRadius: 10 }}
              src={love.src}
              alt="id"
              width={350}
            />
             <Image
            className="block md:hidden"
              style={{ borderRadius: 10 }}
              src={loveResp.src}
              alt="id"
              width={350}
            />
          </Flex>
        </Card>
        <Card className="rounded-md bg-center py-10 px-5 md:px-10  md:w-8/12 w-full bg-white text-debpink mb-8 flex items-center justify-center">
          <div className="bg-black mb-2 rounded-full p-2 flex items-center justify-center">
            <BiSolidShoppingBag className="md:text-6xl text-4xl text-debpink" />
          </div>

          <h2
            className={` text-left mb-10 text-debpink md:text-4xl text-xl font-bold  ${oi.className}`}
          >
            Encartes de Lojas
          </h2>
          <Flex
            align={"center"}
            className="w-full md:gap-20 gap-5 md:flex-row flex-col-reverse"
            justify={"center"}
          >
            <p className=" md:text-4xl text-sm font-bold text-debpink w-full md:w-3/5">
              {" "}
              Transforme a experiência de compra dos seus clientes com encartes
              de loja! Como designer, eu capto a essência da sua marca e a
              traduzo em designs atraentes que chamam a atenção. Com um forte
              entendimento das tendências atuais do mercado e do comportamento
              do consumidor, eu crio encartes que não só destacam seus produtos,
              mas também contam a história da sua marca.
            </p>
            <Image
            className="hidden md:block"
              style={{ borderRadius: 10 }}
              src={brochure.src}
              alt="id"
              width={350}
            />
             <Image
            className="block md:hidden"
              style={{ borderRadius: 10 }}
              src={brochureResp.src}
              alt="id"
              width={350}
            />{" "}
          </Flex>
        </Card>
        <Card className="rounded-md bg-center py-10 px-5 md:px-10 md:w-8/12 w-full bg-white text-debpink mb-8 md:flex-row flex-col flex items-center justify-center">
          <div className="bg-black mb-2 rounded-full p-2 flex items-center justify-center">
            <BiSolidFilm className="md:text-6xl text-4xl text-debpink" />
          </div>

          <h2
            className={` text-center mb-10 text-debpink md:text-4xl text-xl font-bold  ${oi.className}`}
          >
            Edição de Vídeos
          </h2>
          <Flex
            align={"center"}
            className="w-full md:gap-20 gap-5 md:flex-row flex-col-reverse"
            justify={"center"}
          >
            <p className=" md:text-4xl text-sm font-bold text-debpink w-full md:w-3/5">
              {" "}
              Seja um vídeo promocional, um vlog pessoal ou uma produção
              cinematográfica completa, estou aqui para ajudar a transformar sua
              visão em realidade. Com dedicação, criatividade e atenção aos
              detalhes, estou comprometida em entregar resdivtados que não
              apenas atendam, mas superem suas expectativas.
            </p>
            <Image
            className="hidden md:block"
              style={{ borderRadius: 10 }}
              src={video.src}
              alt="id"
              width={350}
            />
            <Image
            className="md:hidden block"
              style={{ borderRadius: 10 }}
              src={videoResp.src}
              alt="id"
              width={350}
            />
          </Flex>
        </Card>
      </div>
    </div>
  );
};