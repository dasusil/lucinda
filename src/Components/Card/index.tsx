import { Lato, MuseoModerno } from "next/font/google";
import Image, { StaticImageData } from "next/image";

type Props = {
  icon: StaticImageData
  title: string;
  text: string;
  className?: string;
}

const museo = MuseoModerno({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: "300" })

function Card({ className, icon, text, title }: Props) {
  return (
    <div className={`rounded-2xl px-4 py-8 w-[30%] ${className ?? ''}`}>
      <Image src={icon} alt={title} className="w-14" />
      <p className={`${museo.className} uppercase mt-6 mb-4 tracking-wide`}>{title}</p>
      <p className={`${lato.className} w-full tracking-wide`}>{text}</p>
    </div>
  )
}

export { Card };
