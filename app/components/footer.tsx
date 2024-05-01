import Link from "next/link"
import { rale } from "../assets/fonts/fonts"

export const Footer = () => {
  return (
    <footer
          className={`${rale.className} py-10 text-white text-center flex items-center justify-center bg-debpink w-full`}
        >
          <ul className="w-10/12 gap-5 flex items-center justify-evenly">
            <li className="font-normal sm:text-base text-sm">
              Desenvolvido por: <br />
              <Link
                className="font-bold underline"
                href={"linkedin.com/in/leosousadev"}
              >
                Leandro Sousa{" "}
              </Link>
            </li>
            <li className="font-normal sm:text-base text-sm">
              Políticas de Privacidade <br />
              <Link className="font-bold underline" href={"/"}>
                Clique aqui
              </Link>
            </li>
          </ul>
        </footer>
  )
}
