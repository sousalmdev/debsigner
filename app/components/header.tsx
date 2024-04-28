import Link from 'next/link';
import { rale } from '../assets/fonts/fonts';
import Image from 'next/image';
import logo from "@/app/assets/images/Component 8.svg"
import secLogo from '@/app/assets/images/Component 8 copy.svg'
import { BiChat, BiPhone, BiPhoneCall } from 'react-icons/bi';

const Header = () => {
  return (
    <header className={`${rale.className} border-b border-black/20 z-50 shadow  w-full fixed top-0 py-1 left-0 flex items-center text-debpink bg-white justify-center `}>
      <nav className=' w-11/12 flex items-center justify-between'>
        <div>
          <Link href="#"><Image quality={100} priority={true} src={logo} width={300} className='sm:block hidden' alt='logo' />
          <Image quality={100} priority={true} src={secLogo} width={200} alt='logo2' className='sm:hidden block' /></Link>
        </div>
        <ul className='xl:flex items-center sm:flex hidden divide-x'>
          <li className='px-2'><Link className=' font-bold md:text-lg text-smcd' href="">Home</Link></li>
          <li className='px-2'><Link className=' font-bold md:text-lg text-smcd' href="#do">Trabalhos</Link></li>
          <li className='px-2'><Link className=' font-bold md:text-lg text-smcd' href="#skills">Habilidades</Link></li>
          <li className='px-2'><Link className=' font-bold md:text-lg text-smcd' href="#about">Sobre</Link></li>
          <li className=' rounded-md px-5'><Link className=' font-bold md:text-lg text-smcd bg-debpink py-2 px-4 text-white rounded-md flex items-center' href="#wa-me">Contato  <BiChat className='ml-1 text-base text-white'/></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
