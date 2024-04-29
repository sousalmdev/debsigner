import { Card,CardBody,CardFooter,CardHeader } from "@chakra-ui/card"
import { Flex,Heading,Button,Text } from "@chakra-ui/react"
import { BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi"

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
       Achou que ia só ver o que sei fazer para melhor atender você? <span className="text-xl  md:text-5xl font-black text-debpink">QUE NADA!
      <br /><br /> Aqui estão alguns veículos de contato para nos falarmos. Você pode escolher entre:</span>
      </p>
      <Flex marginBlock={20} padding={{base:5,md:0}} direction={{base:'column',md:'row'}} gap={10}>
  <Card className="text-center bg-white">
    <CardHeader>
      <Heading size='md' alignItems={'center'} display={'flex'} flexDirection={'row'}> WhatsApp <BiLogoWhatsapp className="ml-2"/></Heading>
    </CardHeader>
    <CardBody>
      <Text className="font-black text-debpink">Benefícios:</Text>
      <ul>
        <li>Resposta quase imediata</li>
        <li>Conversa mais longa</li>
        <li>Facilidade de Solicitações de alteração</li>
        <li>Ligações em casos urgentes</li>
      </ul>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card className="bg-white">
    <CardHeader>
      <Heading size='md' display={'flex'} alignItems={'center'} flexDirection={'row'}> E-Mail <BiLogoGmail/></Heading>
    </CardHeader>
    <CardBody>
      <Text>Benefícios</Text>
      <ul>
        <li>Comunicação 100% Profissional</li>
        <li>Tabelas de precificação enviadas automaticamente.</li>
        <li>Resposta imediata</li>
        <li>Formalização também via e-mail</li>
      </ul>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
  <Card className="bg-white">
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
</Flex>
      </section>
  )
}
