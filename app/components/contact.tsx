import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Flex, Button, Text, ButtonGroup } from "@chakra-ui/react";
import { CursorArrowIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { SiBehance } from "react-icons/si";
import { rale } from "../assets/fonts/fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import { FormContact } from "./form";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gradient-to-b from-gray-950 to-gray-700 py-12 flex flex-col items-center justify-center"
    >
      <h1
        className={` text-center mb-10 text-debpink font-black md:text-6xl text-3xl`}
      >
        Ei, fala comigo!
      </h1>
      <p
        className="p-5 2xl:text-left text-center w-11/12 xl:w-2/5 sm:text-4xl text-xl 
       text-white"
      >
        Achou que ia só ver o que sei fazer para melhor atender você?{" "}
        <br className="md:hidden block" />
        <span className="text-xl  sm:text-5xl font-black text-debpink">
          QUE NADA!
          <br />
          <br /> Aqui estão alguns veículos de contato para nos falarmos. Você
          pode escolher entre:
        </span>
      </p>
      <Flex
        marginBlock={20}
        padding={{ base: 5, md: 0 }}
        direction={{ base: "column", xl: "row" }}
        gap={10}
      >
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="xl:w-auto w-11/12 border-8 border-debpink text-center bg-white">
            <CardHeader className="bg-debpink text-white rounded-md">
              <h1
                className={`flex items-center justify-center font-black text-2xl ${rale.className}`}
              >
                {" "}
                WhatsApp <BiLogoWhatsapp className="ml-2" />
              </h1>
            </CardHeader>
            <CardBody>
              <Text className="text-2xl font-black text-debpink mb-2">
                Benefícios:
              </Text>
              <ul className="text-left list-normal">
                <li>- Resposta quase imediata</li>
                <li>- Conversa mais longa</li>
                <li>- Facilidade de Solicitações de alteração</li>
                <li>- Ligações em casos urgentes</li>
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                as={Link}
                target="_blank"
                href={"https://wa.link/gxazhr"}
                variant={"none"}
                className="transition-all hover:text-debpink hover:bg-black bg-debpink text-white"
                width={"80%"}
                margin={"0 auto"}
              >
                Passe o Zap!
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {" "}
          <Card className="xl:w-auto w-11/12 border-6 border-debpink bg-white text-center">
            <CardHeader className="bg-debpink text-white rounded-md">
              <h1
                className={`flex items-center justify-center font-black text-2xl ${rale.className}`}
              >
                {" "}
                E-Mail <BiLogoGmail className="ml-2" />
              </h1>
            </CardHeader>
            <CardBody>
              <Text className="text-2xl font-black text-debpink mb-2">
                Benefícios:
              </Text>
              <ul className="text-left flex flex-col align-center justify-center">
                <li>- Comunicação 100% Profissional</li>
                <li>- Tabelas de precificação</li>
                <li>- Auto-Reply</li>
                <li>- Formalização</li>
              </ul>
            </CardBody>
            <CardFooter>
              <FormContact/>
            </CardFooter>
          </Card>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Card className="border-6 border-debpink bg-white">
            <CardHeader className="bg-debpink text-white rounded-md">
              <h1
                className={`flex items-center justify-center font-black text-2xl ${rale.className}`}
              >
                {" "}
                Outras redes sociais: <CursorArrowIcon className="ml-2" />
              </h1>
            </CardHeader>
            <CardBody className="flex flex-col items-center justify-center">
              <ButtonGroup width={"100%"} orientation="vertical">
                <Button
                  as={Link}
                  target="_blank"
                  href={
                    "https://www.linkedin.com/in/d%C3%A9bora-viana-294b20272/"
                  }
                  variant={"none"}
                  className="transition-all hover:text-debpink hover:bg-black bg-debpink text-white"
                  width={"80%"}
                  margin={"0 auto"}
                >
                  Veja meu LinkedIn! <LinkedInLogoIcon className="ml-2" />
                </Button>
                <Button
                  as={Link}
                  target="_blank"
                  href={"https://www.behance.net/dboraviana5"}
                  variant={"none"}
                  className="transition-all hover:text-debpink hover:bg-black bg-debpink text-white"
                  width={"80%"}
                  margin={"0 auto"}
                >
                  Veja meu Behance! <SiBehance className="ml-2" />
                </Button>
                <Button
                  as={Link}
                  target="_blank"
                  href={"https://www.instagram.com/thisisdeb_k/"}
                  variant={"none"}
                  className="transition-all hover:text-debpink hover:bg-black bg-debpink text-white"
                  width={"80%"}
                  margin={"0 auto"}
                >
                  Veja meu Insta! <FiInstagram className="ml-2" />
                </Button>
              </ButtonGroup>
            </CardBody>
          </Card>
        </motion.div>
      </Flex>
    </section>
  );
};
