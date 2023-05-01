import { Footer } from "Components/Footer";
import { Logo } from "Components/Logo";
import { Navbar } from "Components/Navbar";
import { Lato, MuseoModerno } from "next/font/google";
import { Dispatch, useReducer, useState } from "react";
import { Cities, DispatchAction, locationsArray, locationsReducer } from "reducers/pontos";

type ButtonProps = {
  label: string;
  selected: boolean;
  action: DispatchAction;
  dispatchFn: Dispatch<DispatchAction>;
  setSelected: Dispatch<DispatchAction['type']>;
  className?: string;
}

const museo = MuseoModerno({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: "300" })

function Button({ label, selected, className, dispatchFn, action, setSelected }: ButtonProps) {
  return (
    <button
      data-selected={selected}
      className={`${className ?? ''} border-2 rounded-lg py-4 px-6 mr-4 mt-6 data-[selected=true]:bg-cgreen data-[selected=true]:border-transparent data-[selected=true]:text-white transition hover:bg-cgreen hover:border-transparent hover:text-white ${lato.className} tracking-wide text-base`}
      onClick={() => {
        setSelected(action.type);
        dispatchFn(action);
      }}
    >
      {label}
    </button>
  )
}

export default function Coleta() {
  const [locations, setLocations] = useReducer(locationsReducer, locationsArray);
  const [selected, setSelected] = useState('todos');

  return (
    <>
      <Navbar />
      <main className="pl-44">
        <header>
          <Logo />
        </header>

        <section className="w-11/12">
          <p className={`${museo.className} text-xl tracking-wide`}>
            Selecione sua cidade e encontre o ponto de coleta mais próximo de você!
          </p>

          <div>
            <Button
              action={{ type: Cities.Todos }}
              dispatchFn={setLocations}
              label="Todas cidades"
              selected={selected === Cities.Todos}
              setSelected={setSelected}
            />
            <Button
              action={{ type: Cities.Diadema }}
              dispatchFn={setLocations}
              label="Diadema"
              selected={selected === Cities.Diadema}
              setSelected={setSelected}
            />
            <Button
              action={{ type: Cities.SantoAndre }}
              dispatchFn={setLocations}
              label="Santo André"
              selected={selected === Cities.SantoAndre}
              setSelected={setSelected}
            />
            <Button
              action={{ type: Cities.SaoBernardo }}
              dispatchFn={setLocations}
              label="São Bernardo do Campo"
              selected={selected === Cities.SaoBernardo}
              setSelected={setSelected}
            />
            <Button
              action={{ type: Cities.SaoCaetano }}
              dispatchFn={setLocations}
              label="São Caetano do Sul"
              selected={selected === Cities.SaoCaetano}
              setSelected={setSelected}
            />
            <Button
              action={{ type: Cities.Maua }}
              dispatchFn={setLocations}
              label="Mauá"
              selected={selected === Cities.Maua}
              setSelected={setSelected}
            />
            <Button
              action={{ type: Cities.Ribeirao }}
              dispatchFn={setLocations}
              label="Ribeirão Pires"
              selected={selected === Cities.Ribeirao}
              setSelected={setSelected}
            />
          </div>

          <div className="flex flex-1 gap-8 mt-10 flex-wrap w-full">
            {locations.map(({ address, city, name, phone, site, observations }) => (
              <div className={`${lato.className} tracking-wide text-lg border-2 rounded-lg w-[30%] py-5 px-4`} key={address}>
                <p className={`${museo.className} text-xl mb-8 border-b-2 border-cgreen`}>
                  {name}
                </p>
                <p className="mb-1">{address} - <span className="capitalize">{city}</span></p>
                {site && <a href={site} target="_blank" className="my-2 lowercase">{site}</a>}
                {phone && <p className="mb-1">{phone}</p>}
                {<p className="mt-8 leading-6">{observations}</p>}
              </div>
            ))}
          </div>
        </section>
        
      </main>
      <Footer />
    </>
  )
}