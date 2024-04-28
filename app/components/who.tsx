import { motion } from "framer-motion";



export const Who = () => {
  return (
    <div id="who" className=" flex-col flex items-center justify-center py-10 ">
      <h1 className={` text-center mb-4 text-black font-black md:text-6xl text-3xl`}>
        Quem sou?
      </h1>
      <motion.div initial={{ opacity: 0, y: 50 }}
     transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-center flex items-center justify-center"
    >
      <p className="md:text-3xl text-base md:w-3/5 w-11/12 text-black">
        Olá,{" "}
        <span className="text-debpink font-black">
          eu sou Débora Viana Rodrigues
        </span>
        , designer gráfica brasileira, apaixonada por arte desde pequena, e
        também sempre gostei de canalizar essa paixão por meio de edições,
        casualmente. Agora, profissionalmente, estou em compromisso com a arte,
        com a identidade visual dos meus clientes, e uso essa arte como uma
        forma de me aproximar com meu público.
      </p></motion.div>
    </div>
  );
};
