import terra from '@Images/terra.jpg';
import { Footer } from "Components/Footer";
import { Logo } from "Components/Logo";
import { Navbar } from "Components/Navbar";
import { SocialMedia } from 'Components/SocialMedia';
import { Lato, MuseoModerno } from 'next/font/google';
import Image from "next/image";

const museo = MuseoModerno({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: "300" })

export default function Sobre() {
  return (
    <>
      <Navbar />
      <main className="pl-44">
        <header>
          <Logo />
        </header>
        <section className='w-11/12 mt-12'>
          <div className='flex flex-1 items-center gap-12'>
            <Image src={terra} alt="conheça o projeto" className='w-2/5 rounded-full' />
            <div className='w-2/4'>
              <h1 className={`${museo.className} text-4xl mb-4`}>Conheça o projeto</h1>
              <p className={`${lato.className} text-lg mb-4`}>
              Criado em 2022, o Descarte da Mãe Lucinda busca promover a educação ambiental e incentivar a população a adotar práticas mais sustentáveis de consumo e descarte de eletrônicos. 
              </p>
              <p className={`${lato.className} text-lg mb-8`}>
                Por meio da disseminação de informações úteis e educativas sobre o tema, a iniciativa busca contribuir para a redução dos impactos negativos do lixo eletrônico na saúde pública e no meio ambiente, além de fomentar a construção de uma sociedade mais consciente e responsável em relação ao descarte de resíduos eletrônicos.
              </p>  
              <a href='mailto:descartecorreto-maelucinda@hotmail.com' className= {`${lato.className} text-lg mb-8 block underline`}>
                  descartecorreto-maelucinda@hotmail.com
              </a>
              <SocialMedia /> 
            </div>
          </div>
        
    
        </section>
      </main>
      <Footer />
    </>
  )
}
