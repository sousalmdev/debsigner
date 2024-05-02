"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal,
  ModalBody,
  ModalHeader,
  useToast,
  Icon,
} from "@chakra-ui/react";

import { TbSend } from "react-icons/tb";

interface CustomOptions {
  to_email?: string;
  to_name?: string;
  publicKey?: string;
}

export const FormContact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      if (form.current) {
        const options: CustomOptions = {
          to_email: form.current.to_email.value,
          to_name: form.current.to_name.value,
          publicKey: "Eku1Fdhoqs81Po5C0",
        };

        await emailjs.sendForm(
          "service_glr8yco",
          "template_pztqkr8",
          form.current,
          options
        );
        toast({
          title: "Email enviado com sucesso!",
          status: "success",
          duration: 3000,
          isClosable: false,
          position: "bottom-right",
        });
        onClose();
      }
    } catch (error) {
      console.log("FAILED...", error);
      toast({
        title: "Email não enviado",
        description: "Um erro ocorreu enquanto enviávamos o email.",
        status: "error",
        duration: 3000,
        isClosable: false,
        position: "bottom-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        variant={"none"}
        className="transition-all hover:text-debpink hover:bg-black bg-debpink text-white"
        width={"80%"}
        margin={"0 auto"}
      >
        Já vai o mail!
      </Button>
      <Modal
        size={{ base: "sm", sm: "lg" }}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay backdropBlur={"8px"} />
        <ModalContent
          background={"white"}
          border={".5px solid #FF005C"}
          color={"#FF005C"}
        >
          <ModalHeader>Receba sua tabela!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form ref={form} onSubmit={sendEmail}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  _focus={{ borderColor: "#FF005C" }}
                  borderColor={"#FF005C"}
                  ref={initialRef}
                  placeholder="Coloque seu nome:"
                  name="to_name"
                  isRequired
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  _focus={{ borderColor: "#FF005C" }}
                  borderColor={"#FF005C"}
                  type="email"
                  placeholder="Coloque seu email"
                  name="to_email"
                  isRequired
                />
              </FormControl>
              <Button
                mt={10}
                backgroundColor={"#FF005C"}
                className="text-white font-bold"
                rightIcon={TbSend(Icon)}
                type="submit"
                width="100%"
                isLoading={isSubmitting}
                loadingText="Submitting..."
                colorScheme="white"
                variant="outline"
              >
                Manda aí!
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
