import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Flex, Heading, Button, Text, Center,ButtonGroup } from "@chakra-ui/react";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";
import { FiInstagram } from "react-icons/fi";
import { SiBehance } from "react-icons/si";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-black py-12 my-24 flex flex-col items-center justify-center"
    >
      <h1
        className={`md:text-left text-center mb-10 text-debpink font-black md:text-6xl text-3xl`}
      >
        Ei, fala comigo!
      </h1>
      <p
        className=" md:text-left text-center w-11/12 md:w-2/5 md:text-4xl text-sm 
       text-white"
      >
        Achou que ia só ver o que sei fazer para melhor atender você?{" "}
        <span className="text-xl  md:text-5xl font-black text-debpink">
          QUE NADA!
          <br />
          <br /> Aqui estão alguns veículos de contato para nos falarmos. Você
          pode escolher entre:
        </span>
      </p>
      <Flex
        marginBlock={20}
        padding={{ base: 5, md: 0 }}
        direction={{ base: "column", md: "row" }}
        gap={10}
      >
        <Card className="border-8 border-debpink text-center bg-white">
          <CardHeader className="bg-debpink text-white rounded-md">
            <Heading
              textAlign={"center"}
              justifyContent={"center"}
              size="md"
              alignItems={"center"}
              display={"flex"}
              flexDirection={"row"}
            >
              {" "}
              WhatsApp <BiLogoWhatsapp className="ml-2" />
            </Heading>
          </CardHeader>
          <CardBody>
            <Text className="font-black text-debpink">Benefícios:</Text>
            <ul className="text-left list-normal">
              <li>- Resposta quase imediata</li>
              <li>- Conversa mais longa</li>
              <li>- Facilidade de Solicitações de alteração</li>
              <li>- Ligações em casos urgentes</li>
            </ul>
          </CardBody>
          <CardFooter>
            <Button
              variant={"none"}
              className="transition-all hover:text-debpink hover:bg-black bg-debpink text-white"
              width={"80%"}
              margin={"0 auto"}
            >
              Passe o Zap!
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-6 border-debpink bg-white text-center">
          <CardHeader className="bg-debpink text-white rounded-md">
            <Heading
              justifyContent={"center"}
              size="md"
              display={"flex"}
              alignItems={"center"}
              flexDirection={"row"}
            >
              {" "}
              E-Mail <BiLogoGmail className="ml-2" />
            </Heading>
          </CardHeader>
          <CardBody>
            <Text className="font-black text-debpink">Benefícios:</Text>
            <ul className="text-left flex flex-col align-center justify-center">
              <li>- Comunicação 100% Profissional</li>
              <li>- Tabelas de precificação</li>
              <li>- Auto-Reply</li>
              <li>- Formalização</li>
            </ul>
          </CardBody>
          <CardFooter>
            <Button
              variant={"none"}
              className="transition-all hover:text-debpink hover:bg-black bg-debpink text-white"
              width={"80%"}
              margin={"0 auto"}
            >
              Já vai o mail!
            </Button>
          </CardFooter>
        </Card>
        <Card className="border-6 border-debpink bg-white">
          <CardHeader className="bg-debpink text-white rounded-md">
            <Heading textAlign={"center"} size="md">
              {" "}
             Minhas outras redes sociais:
            </Heading>
          </CardHeader>
          <CardBody className="flex flex-col items-center justify-center">
            <ButtonGroup width={'100%'} orientation="vertical" ><Button
              variant={"none"}
              className="transition-all hover:text-debpink hover:bg-black bg-debpink text-white"
              width={"80%"}
              margin={"0 auto"}
            >Veja meu LinkedIn! <LinkedInLogoIcon className="ml-2"/></Button>
              <Button
              variant={"none"}
              className="transition-all hover:text-debpink hover:bg-black bg-debpink text-white"
              width={"80%"}
              margin={"0 auto"}
            >Veja meu Behance! <SiBehance className="ml-2"/></Button>
             <Button
              variant={"none"}
              className="transition-all hover:text-debpink hover:bg-black bg-debpink text-white"
              width={"80%"}
              margin={"0 auto"}
            >Veja meu Insta! <FiInstagram className="ml-2"/></Button></ButtonGroup>
           
          </CardBody>
        
        </Card>
      </Flex>
    </section>
  );
};
