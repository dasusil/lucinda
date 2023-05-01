import atencao from "@Images/atencao.png";
import lixo from '@Images/lixo.png';
import logistica from '@Images/logistica.png';
import logo from '@Images/logo.jpeg';
import reciclagem from '@Images/reciclagem-secao.png';
import slide2 from '@Images/slide2.png';
import slide3 from '@Images/slide3.jpg';
import slide4 from '@Images/slide4.jpg';
import slide5 from '@Images/slide5.jpg';
import { Card } from "Components/Card";
import { Footer } from "Components/Footer";
import { Logo } from "Components/Logo";
import { Navbar } from 'Components/Navbar';
import { SocialMedia } from "Components/SocialMedia";
import { Lato, MuseoModerno } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import reclycling from "@Images/Reclycling.png";
import trash from "@Images/Trash.png";
import customer from "@Images/Customer.png";
import bag from "@Images/Bag.png";
import truck from "@Images/Truck.png";
import industria from "@Images/Industria.png";

const museo = MuseoModerno({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: "300" })

export default function Home() {

  return (
    <>
      <Navbar />

      <main className="pl-44">
        <header>
          <div className='flex flex-1 relative h-[600px]'>
            <div className='w-2/4 h-full rounded-r-[50px] bg-white z-10 pr-12 border-r-2 border-transparent'> 
              <Logo />
              <h1 className={`${museo.className} tracking-widest capitalize mb-2 text-5xl`}>
                pense diferente!
              </h1>
              <h2 className={`${museo.className} tracking-widest capitalize text-5xl`}>
                faça diferente!
              </h2>

              <p className={`${lato.className} tracking-wide mt-8 w-5/6 text-lg mb-12`}>
              Em plena era da tecnologia e sustentabilidade, não há nada melhor do que agir com consciência e descartar nossos resíduos eletrônicos de forma adequada.
              </p>

              <button
                className={`${museo.className} bg-white px-10 py-4 capitalize text-lg rounded-lg border-2 tracking-wide mb-10 transition hover:bg-cgreen hover:border-transparent`}
                onClick={() => {
                  document.getElementById('lixo')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                recicle conosco
              </button>

              <SocialMedia / >
            </div>
            <div className='absolute right-0 w-3/5 h-full -z-0'>
              <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showThumbs={false}
              >
                <div className='h-[600px] relative'>
                  <Image src={slide4} alt="Imagem 1" fill className='block h-full' />
                </div>
                <div className='h-[600px] relative'>
                  <Image src={slide2} alt="Imagem 2" fill className='block h-full' />
                </div>
                <div className='h-[600px] relative'>
                  <Image src={slide3} alt="Imagem 3" fill className='block h-full' />
                </div>
                <div className='h-[600px] relative'>
                  <Image src={slide5} alt="Imagem 4" fill className='block h-full' />
                </div>
              </Carousel>
            </div>
          </div>
        </header>

        <section id="lixo" className="mt-80 w-11/12 mx-auto">
          <div className="flex items-center">
            <Image src={lixo} alt="O que é lixo eletrônico" className="w-2/4 relative -left-10" />
            <div className="w-2/4">
              <h1 className={`${museo.className} text-4xl tracking-wide`}>
                Mas, afinal, o que é lixo eletrônico?
              </h1>
              <h2 className={`${museo.className} text-xl text-cgreen mb-10`}>
                Vem com a gente e entenda melhor sobre esse termo
              </h2>
              
              <p className={`${lato.className} text-lg tracking-wide`}>
                O lixo eletrônico consiste em equipamentos como, por exemplo, computadores, celulares e tablets que por estarem obsoletos, quebrados, com defeito ou por outros motivos necessitam ser descartados.
              </p>
              <p className={`${lato.className} text-lg tracking-wide`}>
                Para o descarte correto do lixo eletrônico é realizado a sua categorização baseado em seu tamanho e aplicação para a definição do processo de reciclagem e transporte.
              </p>
            </div>
          </div>

          <p className={`${museo.className} tracking-wide mt-24 text-2xl text-cgreen`}>
            O lixo eletrônico pode ser classificado em:
          </p>
          
          <div className="flex flex-1 gap-12 mt-16">
            <div className="w-[30%]">
              <p className={`${museo.className} text-3xl tracking-wide mb-8 border-b-2 pb-3 capitalize`}>
                1. grandes
              </p>
              <p className={`${lato.className} text-base tracking-wide`}>
                Geladeiras, freezers, máquinas de lavar, fogões, ar condicionado, micro-ondas, televisores de grande porte etc.
              </p>
            </div>
            
            <div className="w-[30%]">
              <p className={`${museo.className} text-3xl tracking-wide mb-8 border-b-2 pb-3 capitalize`}>
                2. pequenos
              </p>
              <p className={`${lato.className} text-base tracking-wide`}>
                Torradeiras, batedeiras, aspiradores de pó, ventiladores, mixers, secadores de cabelo, ferramentas elétricas, calculadoras, câmeras digitais, rádios, etc.

              </p>
            </div>

            <div className="w-[30%]">
              <p className={`${museo.className} text-3xl tracking-wide mb-8 border-b-2 pb-3 capitalize`}>
                3. informática
              </p>
              <p className={`${lato.className} text-base tracking-wide`}>
                Computadores, tablets, notebooks, celulares, impressoras, monitores e outros.
              </p>
            </div>

            <div className="w-[30%]">
              <p className={`${museo.className} text-3xl tracking-wide mb-8 border-b-2 pb-3 capitalize`}>
                4. pilhas
              </p>
              <p className={`${lato.className} text-base tracking-wide`}>
               Pilhas modelos AA, AAA, recarregáveis, baterias portáteis de 9 V, etc.
              </p>
            </div>
          </div>

          <div className="flex flex-1 mt-20 items-center gap-16">
            <Image src={atencao} alt="Atenção" className="w-96" />
            <p className={`${museo.className} text-lg tracking-wide w-2/5 leading-6`}>
              Os equipamentos elétricos e eletrônicos possuem diversos componentes tóxicos em suas estruturas. Se descartados incorretamente, esses residuos tóxicos podem contaminar o solo e os lencóis freáticos, colocando em risco a saúde pública.
            </p>
          </div>
        </section>

        <section className="mt-80 w-11/12 mx-auto">
          <h1 className={`${museo.className} text-4xl tracking-wide`}>
            Logística reversa
          </h1>
          <p className={`${lato.className} text-lg tracking-wide w-2/5 inline-block mr-16`}>
            A logistica reversa é um conjunto de procedimentos e meios para recolher e dar encaminhamento pós-venda ou pós-consumo ao setor empresarial, para reaproveitamento ou definição correta de resíduos.
          </p>
          <Image src={logistica} alt="Logística reversa" className="w-3/6 inline-block" />
          
          <p className={`${museo.className} text-2xl mt-48 mb-12 text-cgreen`}>
            O ciclo da logística reversa é composto por 6 etapas:
          </p>
          
          <div className="flex flex-1 gap-4 flex-wrap">
            <Card
              className="bg-cgreen"
              icon={industria}
              title="1. indústria"
              text="Os produtos são produzidos e embalados de forma reciclavel com a matéria-prima da etapa 6"
            />

            <Card
              className="border-2 bg-white"
              icon={truck}
              title="2. Distribuição"
              text="As empresas distribuem os produtos para o comércio, instruindo os varejistas sobre o modelo sustentável de logística"
            />
            <Card
              className="bg-cblue"
              icon={bag}
              title="3. Varejo e lojas"
              text="Já nos estabelecimentos, os produtos são vendidos para os consumidores, os orientando do descarte reciclável"
            />
            <Card
              className="bg-cpink"
              icon={customer}
              title="4. Consumidor"
              text="Os produtos são utilizados pelos consumidores, que depois os descartam de maneira correta. O descarte pode ser efetuado tanto em centros de coletas, bem como, em alguns casos, na loja em que se comprou o produto"
            />
            <Card
              className="bg-cpeach"
              icon={trash}
              title="5. Coleta e seleção"
              text="Com o descarte, os coletores fazem a seleção dos produtos, validando-os para a reciclagem"
            />
            <Card
              className="border-2 bg-white"
              icon={reclycling}
              title="6. Reciclagem"
              text="Todo o material coletado é transformado em matéria-prima para novas embalagens e produtos"
            />
          </div>
        </section>

        <section className="mt-80 w-11/12 mx-auto">
          <h1 className={`${museo.className} text-4xl tracking-wide`}>
            Reciclagem
          </h1>
          <h2 className={`${museo.className} text-xl text-[#88B342] mb-10 tracking-wide`}>
            Agora vamos entender o que é reciclagem e sua importância
          </h2>
          <div className={`flex items-center tracking-wide ${lato.className} text-lg`}>
            <Image src={reciclagem} alt="Reciclagem" className="w-2/4" />
            <div className="w-2/4">
              <p className="leading-5">
                Reciclagem é o processo de transformar materiais usados em novos produtos, evitando que esses materiais sejam descartados no meio ambiente. Esses materiais podem incluir papel, plástico, vidro, metais e outros.
              </p>
              <p className="mt-3 leading-5">
                Reciclar lixo eletrônico é uma das formas de evitar que esses materiais parem em aterros sanitários e poluam o meio ambiente com os metais pesados presentes em sua composição como, por exemplo, chumbo, mercúrio e cádmio que são prejudiciais à saúde.
              </p>
            </div>
          </div>

          <p className={`${museo.className} text-2xl mt-24 mb-12 text-[#88b342]`}>
            Benefícios da reciclagem de lixo eletrônico
          </p>

          <div className="flex flex-1 gap-12 mt-16">
            <div className="w-1/3">
              <p className={`${museo.className} text-3xl tracking-wide mb-8 border-b-2 pb-3 capitalize`}>
                1. redução em aterros
              </p>
              <p className={`${lato.className} text-base tracking-wide`}>
                A reciclagem dos lixos eletrônicos possibilita a redução do volume desses materiais nos aterros.
              </p>
            </div>
            
            <div className="w-1/3">
              <p className={`${museo.className} text-3xl tracking-wide mb-8 border-b-2 pb-3 capitalize`}>
                2. recuperação de materiais
              </p>
              <p className={`${lato.className} text-base tracking-wide`}>
                Maior recuperação de materiais valiosos que tem recurso finito.
              </p>
            </div>

            <div className="w-1/3">
              <p className={`${museo.className} text-3xl tracking-wide mb-8 border-b-2 pb-3 capitalize`}>
                3. geração de empregos
              </p>
              <p className={`${lato.className} text-base tracking-wide`}>
                Devido a recuperação de materiais são gerados empregos nas áreas de coleta, desmontagem, separação e recuperação de matériais.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
