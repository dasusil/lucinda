import pontos from '@Images/coleta.png';
import home from '@Images/home.png';
import sobre from '@Images/sobre.png';
import { Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const lato = Lato({ weight: ['300', '400'], subsets: ['latin'] });

function Navbar() {

  const { pathname } = useRouter();

  return (
    <nav className={`min-h-screen capitalize fixed left-0 bg-zinc-900 rounded-r-[35px] w-28 text-white tracking-widest ${lato.className} font-light`}>
      <ul className="flex flex-col justify-center pt-10 w-full h-full my-auto text-center visible">
        <li data-active={pathname === '/'} className={`${lato.className} mb-2 w-auto text-sm data-[active=true]:bg-cgreen data-[active=true]:w-36 data-[active=true]:rounded-r-3xl hover:bg-cgreen hover:w-36 hover:rounded-r-3xl hover:cursor-pointer transition duration-300 hover:font-normal`}>
          <Link href="/" className="no-underline p-4 block">
            <Image src={home} alt="Página inicial" className="block w-8 mx-auto mb-2" />
            <span>início</span>
          </Link>
        </li>
        <li data-active={pathname === '/coleta'} className={`${lato.className} mb-2 w-auto text-sm data-[active=true]:bg-cgreen data-[active=true]:w-36 data-[active=true]:rounded-r-3xl hover:bg-cgreen hover:w-36 hover:rounded-r-3xl hover:cursor-pointer transition duration-300 hover:font-normal`}>
          <Link href="/coleta" className="no-underline p-4 block">
            <Image src={pontos} alt="Pontos de coleta" className="block w-8 mx-auto mb-2" />
            <span>coleta</span>
          </Link>
        </li>
        <li data-active={pathname === '/sobre'} className={`${lato.className} mb-2 w-auto text-sm data-[active=true]:bg-cgreen data-[active=true]:w-36 data-[active=true]:rounded-r-3xl hover:bg-cgreen hover:w-36 hover:rounded-r-3xl hover:cursor-pointer transition duration-300 hover:font-normal`}>
          <Link href="/sobre" className="no-underline p-4 block">
            <Image
              src={sobre}
              alt="Sobre o projeto e os autores"
              className="block w-8 mx-auto mb-2"
            />
            <span>sobre</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
