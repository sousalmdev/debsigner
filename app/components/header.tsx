import Link from 'next/link';
import { abril,  rale } from '../assets/fonts/fonts';
import Image from 'next/image';
import logo from "@/app/assets/images/Component 8.svg"
import secLogo from '@/app/assets/images/Component 8 copy.svg'

const Header = () => {
  return (
    <header className={`${rale.className} border-b border-white/30 z-50  w-full fixed top-0 py-1 left-0 flex items-center text-debpink bg-black justify-center `}>
      <nav className=' w-11/12 flex items-center justify-between'>
        <div>
          <Link href="#"><Image src={logo} width={300} className='sm:block hidden' alt='logo' />
          <Image src={secLogo} width={200} alt='logo2' className='sm:hidden block' /></Link>
        </div>
        <ul className='xl:flex sm:flex hidden divide-x'>
          <li className='px-2'><Link className=' font-bold md:text-lg text-smcd' href="#who">Home</Link></li>
          <li className='px-2'><Link className=' font-bold md:text-lg text-smcd' href="#do">Trabalhos</Link></li>
          <li className='px-2'><Link className=' font-bold md:text-lg text-smcd' href="#skills">Habilidades</Link></li>
          <li className='px-2'><Link className=' font-bold md:text-lg text-smcd' href="#wa-me">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
