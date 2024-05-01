"use client";

import Link from "next/link";
import { rale } from "../assets/fonts/fonts";
import Image from "next/image";
import logo from "@/app/assets/images/LOGO GRANDE.png";
import secLogo from "@/app/assets/images/LOGO PEQUENA.png";
import { BiChat } from "react-icons/bi";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
const Header = () => {
  return (
    <header
      className={`${rale.className} border-b border-black/20 z-50 shadow  w-full fixed top-0 py-1 left-0 flex items-center text-debpink bg-white justify-center `}
    >
      <nav className=" px-1 w-11/12 flex items-center justify-between">
        <div>
          <Link href="#">
            <Image
            priority
              quality={100}
              src={logo}
              width={300}
              className="xl:block hidden"
              alt="logo"
            />
            <Image
              quality={100}
              src={secLogo}
              width={30}
              alt="logo2"
              className="xl:hidden md:block"
            />
          </Link>
        </div>
        <ul className="xl:flex items-center md:flex hidden sm:hidden divide-x">
          <li className="px-2">
            <Link className=" font-bold md:text-lg text-smcd" href="">
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link className=" font-bold md:text-lg text-smcd" href="#do">
              Trabalhos
            </Link>
          </li>
          <li className="px-2">
            <Link className=" font-bold md:text-lg text-smcd" href="#skills">
              Habilidades
            </Link>
          </li>
          <li className="px-2">
            <Link className=" font-bold md:text-lg text-smcd" href="#about">
              Sobre
            </Link>
          </li>
          <li className=" rounded-md px-5">
            <Link
              className=" font-bold md:text-lg text-smcd bg-debpink py-2 px-4 text-white rounded-md flex items-center"
              href="#contact"
            >
              Contato <BiChat className="ml-1 text-base text-white" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="md:hidden block mr-2 bg-white border-1 border-debpink/30 p-1 rounded-md">
        <Menu isLazy>
          <MenuButton
            as={Button}
            variant={"ghost"}
            color={"debpink"}
            border={"1px solid #FF005C"}
            bg={"white"}
            rightIcon={<ChevronDownIcon />}
          >
            Navegue
          </MenuButton>
          <MenuList className="divide-y bg-white text-debpink shadow-md  gap-2 text-center rounded-md">
            <MenuItem className="p-2" as={Link} href={"#"}>
              Home
            </MenuItem>
            <MenuItem className="p-2" as={Link} href={"#do"}>
              Trabalhos
            </MenuItem>
            <MenuItem className="p-2" as={Link} href={"#skills"}>
              Ferramentas
            </MenuItem>
            <MenuItem className="p-2" as={Link} href={"#about"}>
              Quem Sou
            </MenuItem>
            <MenuItem className="p-2" as={Link} href={"#contact"}>
              Contato
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
