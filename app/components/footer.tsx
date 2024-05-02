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
              <Link className="font-bold underline" href={"https://www.gov.br/mdh/pt-br/acesso-a-informacao/politica-de-privacidade#:~:text=A%20LGPD%20pro%C3%ADbe%20a%20pr%C3%A1tica,exerc%C3%ADcio%20dos%20direitos%20do%20titular.&text=As%20organiza%C3%A7%C3%B5es%20devem%20adotar%20medidas,n%C3%A3o%20autorizados%2C%20perdas%20e%20danos.&text=Assim%20como%20direitos%2C%20voc%C3%AA%20tamb%C3%A9m,utilizar%20um%20servi%C3%A7o%20do%20MDHC."}>
                Clique aqui
              </Link>
            </li>
          </ul>
        </footer>
  )
}
