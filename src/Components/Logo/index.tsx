import logo from '@Images/logo.jpeg';
import { MuseoModerno } from 'next/font/google';
import Image from "next/image";

const museo = MuseoModerno({ subsets: ['latin'], weight: '400' })

function Logo() {
  return (
    <div className={`${museo.className} flex items-center text-4xl mb-12 pt-6`}>
      <Image
        src={logo}
        alt="logo"
        className='block w-28 relative -left-6 mb-8'
      />
      <span>Descarte da Mãe Lucinda </span>
    </div>
  );
}

export { Logo };
