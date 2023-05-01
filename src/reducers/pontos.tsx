import { ClassificationType } from "typescript";

export type Locations = {
  city: Cities;
  name: string;
  address: string;
  observations: string;
  site?: string;
  phone?: string;
}[]

export type DispatchAction = {
  type: Cities
};

export enum Cities {
  Todos = 'todos',
  Diadema = 'diadema',
  SantoAndre = 'santo andré',
  SaoBernardo = 'são bernardo',
  SaoCaetano = 'são caetano',
  Maua = 'mauá',
  Ribeirao = 'ribeirão'
}

export const locationsArray: Locations = [
  {
    city: Cities.Diadema,
    name: "Ecotechno Logística Reversa",
    address: "Rua Tupinambás, 750 - Conceição",
    site: "https://ecotechno.com.br",
    observations: "Recebemos itens de informática (desktops, notebooks, monitores LED e LCD, impressoras, periféricos e outros eletroeletrônicos).",
  },
  {
    city: Cities.Diadema, 
    name: "Loja Claro FW Telefonia",
    address:"Pc Presidente Castelo Branco, 335 - 09911-130",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.Diadema,
    name: "Loja Claro FW Telefonia - Serraria",
    address: "Av Afonso Monteiro Da Cruz, 1150 - Loja 26 - Serraria - 09980-550",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.Diadema,
    name: "Loja Claro LS Shopping Praça Da Moça",
    address: "Rua Manoel Da Nobrega, 712 - Loja 302/303 - Centro - 09910-720",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.Diadema,
    name: "Lojas Vivo",
    address: "Rua São Judas Tadeu, 78 - Centro - 09911-100",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.Diadema,
    name: "Loja Vivo Shopping Praça da Moça",
    address: "Rua Manoel Da Nobrega, 712 - Centro - 09910-720",
    observations: "Recebemos monitores, televisores de tubo, LCD e LED,computadores desktops, notebooks, periféricos, tablets, impressoras, celulares.",
  },
  {
    city: Cities.Diadema,
    name:"Magazine Luiza",
    address: "Av São Jose, 212 - Sem Bairro - 09910-380",
    observations: "Sem observações",
  },
  {
    city: Cities.Diadema,
    name:" Magazine Luiza Shopping Praça da Moça",
    address: "Rua Manoel Da Nobrega, 712 - Centro - 09910-720",
    observations: "Sem observações",
  },
  {
    city: Cities.Diadema,
    name: "Recicle Digital",
    address: "Rua Joaquim Nabuco, 116 - Centro - 09912-040",
    site: "https://www.recicledigital.com.br/",
    observations: "Recebemos computadores, monitores, notebooks, tablets, celulares, impressoras, copiadoras, scanners, câmeras de segurança, nobreaks, estabilizadores de energia, transformadores, aparelhos de fax, aparelhos telefônicos, fios e cabos elétricos, eletrodomésticos em geral",
  },
  {
    city: Cities.Diadema,
    name: "União Sucata Digital",
    address: "Rua Bebedouro - Centro - 09920-230",
    site:"https://www.uniaosucatadigital.com.br/",
    observations: "Recebemos monitores de LCD, celulares, acessórios, mídias, PABX, modems, MP3 players, iPods, netbooks, roteadores, smartphones, teclados, computadores, notebooks, periféricos, tablets, impressoras, celulares, secretárias eletrônicas, fax, telefonia, placas de circuito integrado, reatores, fios e cabos de energia, equipamentos de rede e outros.",
  },
  {
    city: Cities.Diadema,
    name: "WF Sucata Digital",
    address: "Av Afonso Monteiro Da Cruz, 835 - Serraria, Diadema - SP, 09980-550",
    site: "https://wfsucatadigital.com.br/#o-que-doar",
    observations: "Recebemos lixo eletroeletrônico, de informática, sobras industriais, automação e sucatas diversas.",
  },
  {
    city: Cities.SantoAndre,
    name: "ABC Lixo",
    address: "Rua Armando Mazo, 148 - Jardim Rina - 09271-660",
    site: "https://abclixoeletronico.com.br/",
    phone:"(11) 94737-9866",
    observations: "Recebemos computadores, monitores, celulares e baterias",
  },
  {
    city: Cities.SantoAndre,
    name: "Hiper Santo André P. Barreto",
    address: "Av Pereira Barreto, 2920 - Sem Complemento - Jardim Paraiso -09190-210",
    observations: "Sem observações",
  },
  {
    city: Cities.SantoAndre,
    name: "Império Logística Reversa",
    address:"Av Industrial, 2621 - Campestre - 09080-511",
    phone: "(11) 4991-3234 / (11) 94278-9282",
    observations: "Recebemos celulares, baterias, notebook, HD etc.",
  },
  {
    city: Cities.SantoAndre,
    name: "Loja Claro Fw Telefonia",
    address: "Rua Alvares De Azevedo, 99 - Loja 67 - Centro - 09020-140",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SantoAndre,
    name: "Loja Claro Fw Telefonia",
    address: "Av Industrial, 600 - Loja 38 - Jardim - 09080-510",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SantoAndre,
    name: "Loja Claro Fw Telefonia",
    address: "Av Pereira Barreto, 42 - Euc N 516/517 Shopping Abc - Paraiso - 09190-210",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral",
  },
  {
    city: Cities.SantoAndre,
    name: "Loja Claro Ls Shopping Gran Plaza",
    address: "Av Industrial, 600 - Loja 318, Térreo - Shopping Grand Plaza - Jardim - Santo André - SP, 09080-500",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
    },
  {
    city: Cities.SantoAndre,
    name: "Loja Claro Predio Administrativo",
    address: "Av Jose Caballero, 171 - Sem Complemento - Vila Bastos - 90402-100",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SantoAndre,
    name: "Loja Claro Rreparo Facil - Vila Homero Thon",
    address: "Rua Giovanni Battista Pirelli, 155 - Loja 176 - Vila Homero Thon - 09111-340",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SantoAndre,  
    name: "Loja Vivo Grand Plaza Shopping",
    address: "Av Industrial, 600 - Loja 35/36 - Jardim - 09080-500",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SantoAndre, 
    name: "Loja Vivo Shopping Santo André",
    address: "Rua Alvares De Azevedo, 99 - Loja 48 E 49 A - Centro - 09020-140",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral. ",
  },
  {
    city: Cities.SantoAndre, 
    name: "Loja Vivo Shopping ABC",
    address: "AV Pereira Barreto, 42 - Loja 54/55 - Térreo - Paraiso - 09190-210",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral."
  },
  {
    city: Cities.SantoAndre, 
    name: "Magazine Luiza S.A",
    address: "Rua General Glicério, 145 - Sem Complemento - Sem Bairro - 09015-190",
    observations: "Sem observações",
  },
  {
    city: Cities.SantoAndre,
    name: "Oito Elementos Sustentabilidade",
    address: "Av da Saudade, 370 - Vila Assunção - 09030-030",
    site: "https://oitoelementos.org.br/",
    phone: "(11) 2324-6298",
    observations: "Sem observações",
  },
  {
    city: Cities.SantoAndre,
    name: "3 R Reciclagem De Eletrônicos",
    address: "Rua Holanda, 04 Parque das Nações - 09210-050",
    site: "https://www.3r.eco.br/",
    phone: "(11)3110-0321",
    observations: "Recebemos desktops, notebooks, teclados, mouses, monitores LCD, HD externo, celulares, tablets etc.",
  },
  {
    city: Cities.SantoAndre,
    name: "Terra – Descarte E Reciclagem De Eletrônicos",
    address: "Av Industrial, 493 - Jardim - 09080-510",
    site: "https://terrareciclagem.com.br/",
    phone: "(11) 95770-1964",
    observations: " Recebemmos cComputadores, CPUs, impressoras Todos os equipamentos de telefonia, monitores etc.",
  },
  {
    city: Cities.SantoAndre,
    name: "Space Recycle",
    address: "Rua Santo Antônio, 100 - Jardim Santo Antônio - 09240-070",
    site: "http://spacerecycle.com.br/",
    phone: "(11) 91011-9093",
    observations: "Recebemos computador, monitor, mouse, HD, teclado, carregador e baterias.",
  },
  {
    city: Cities.SantoAndre,
    name: "Sucata Digital",
    address: "Av São Paulo, 479 - Cidade São Jorge - 09111-410",
    site: "https://sucatadigital.com.br/unidade-de-sao-paulo/",
    phone: "(11) 95768-2368",
    observations: "Recebemos monitor, CPU, teclado, celulares, notebook, mouse etc.",
  },
  {
    city: Cities.SaoBernardo,
    name: "Global Susten",
    address: "Rua Nossa Sra. de Fátima, 12 - Vila Alves Dias - 09851-580",
    site: "https://globalsusten.com/",
    phone: "(11) 95444-0181",
    observations: "Recebemos computadores, CPUs, notebooks, tablets, celulares, monitores etc.",
  },
  {
    city: Cities.SaoBernardo,
    name: "Loja Claro Flex Cell",
    address: "Av. Rotary, 624 Piso L1 - Centro - 09721-000",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SaoBernardo, 
    name: "Loja Claro Ls Sp Golden",
    address: "Av Kennedy, 700 Parque São Diogo - 09726-901",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SaoBernardo, 
    name: "Loja Claro Ls Sp Metropole",
    address: "Pç Samuel Sabatini, 200 - Loja 137 - Centro - 09750-902",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral. "
  },
  {
    city: Cities.SaoBernardo, 
    name: "Loja Claro Rreparo Facil - Centro - Sao Bernardo Do Campo",
    address: "Rua Marechal Deodoro, 1205 - Loja 09 A - Centro - 09710-012",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral. ",
  },
  {
    city: Cities.SaoBernardo, 
    name: "Loja Vivo Golden Square Shopping",
    address: "Av Kennedy, 700 - Loja Euc 351 - Piso 3 - Jardim Do Mar - 09726-253",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SaoBernardo, 
    name: "Loja Vivo Shopping Metrópole",
    address: "Pç Samuel Sabatini, 200 - Loja 78 - Centro - 09750-700",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SaoBernardo, 
    name: "Loja Vivo São Bernardo Plaza",
    address: "Av Rotary, 624 - Loja 1078 - Piso L1 - Centro - 09721-0000",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SaoBernardo, 
    name: "Magazine Luiza S.A",
    address: "Rua Marechal Deodoro, 952 - Centro - 09710-001",
    observations: "Sem observações",
  },
  {
    city: Cities.SaoBernardo, 
    name: "Magazine Luiza S.A Plaza Shopping",
    address: "Avenida Rotary, 624 - Centro - 09721-000",
    observations: "Sem observações",
  },
  {
    city: Cities.SaoBernardo, 
    name: "Recycare Sucata Digital",
    address: "Estrada Galvão Bueno, 10165 - Batistini - 09842-080",
    site: "https://www.recycare.com.br/",
    phone: "(11) 99911-1334",
    observations: "Recebemos monitores, notebooks, tablets, celulares etc. ",
  },
  {
    city: Cities.SaoCaetano,
    name: "Carrefour",
    address: "Rua Aquidabã, 301 - Fundação - 09520-180",
    observations: "Sem observações",
  },
  {
    city: Cities.SaoCaetano,
    name: "Loja Claro Ls Park Shopping São Caetano",
    address: "Alameda Terracota, 545 - Loja 1076 - Cerâmica - 09531-190",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SaoCaetano,
    name: "Loja Vivo Park Shopping São Caetano",
    address: "Alameda Terracota, 545 - Loja Luc 1009 - Cerâmica - 09531-190",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.SaoCaetano,
    name: "Magazine Luiza S.A",
    address: "Rua Manoel Coelho, 300 - Sem Complemento - Sem Bairro - 09510-100",
    observations: "Sem observações",
  },
  {
    city: Cities.SaoCaetano,
    name: "Prefeitura",
    address: "Avenida Fernando Simonsen, S/N - Sem Bairro - 09500-001 A 09599-999",
    observations: "Sem observações",
  },
  {
    city: Cities.SaoCaetano,
    name: "Saesa",
    address: "Avenida Antonio Prado, 307 - Sem Complemento - Centro - 09521-005",
    observations: "Recebemos celulares, câmeras fotográficas, pilhas e etc.",
  },
  {
    city: Cities.SaoCaetano,
    name: "Se Eletrônica",
    address: " Rua Dos Diamantes, 102 - Prosperidade, São Caetano Do Sul - SP - 09550-450",
    site: "https://sucataeletronica.net.br/",
    phone: "(11) 5083-3864 / (11) 93311-3647",
    observations: "Recebemos celulares, câmeras fotográficas, pilhas e etc.",
  },
  {
    city: Cities.Maua,
    name: "Ecoponto Jardim Vila Feital",
    address: "Rua José Pedro Corrêa, s/n",
    observations: "Sem observações",
  },
  {
    city: Cities.Maua,
    name: "Ecoponto Jardim Itapeva",
    address: "Rua Luiz Pacolla, próx ao nº21 - Jd Itapeva",
    observations: "Sem observações",
  },
  {
    city: Cities.Maua,
    name: "Ecoponto Vila Noêmia",
    address: "Av Papa João XXIII altura do numero 1413 (ao lado do pátio de veículos)",
    observations: "Sem observações",
  },
  {
    city: Cities.Maua,
    name: "Ecoponto Jardim Zaira",
    address: "Av Guerino Stella próx. Ao nº 357. - Jd Zaira",
    observations: "Sem observações",
  },
  {
    city: Cities.Maua,
    name: "Ecoponto Jardim Zaira 4",
    address: "Av Jesuíno Nicomédio dos Santos, na esquina com Sebastião Antônio da Silva",
    observations: "Sem observações",
  },
  {
    city: Cities.Maua,
    name: "Loja Claro Flex Cell – Centro Mauá",
    address: "Av Governador Mario Covas Junior (Vl F N Morelli), 1 - 148/150 - Centro - 09390-040",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.Maua,
    name: "Loja Claro LS",
    address: "Av Governador Mario Covas Junior, 77 - Shopping Mauá Plaza, Loja 01 - Centro - 09390-040 ",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.Maua,
    name: "Loja Vivo Mauá Plaza Shopping",
    address: "Av Governador Mario Covas Junior, 1 – Loja 100/102 Centro - 09390-040",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.Maua,
    name: "Loja Vivo",
    address: "Rua Faustino Pereira Rito, 21 – Centro – 09310-100",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.Maua,
    name: "Magazine Luiz S.A",
    address: "Av Governador Mario Covas Junior, 1 - Sem Complemento - Sem Bairro - 09390-040",
    observations: "Sem observações",
  },
  {
    city: Cities.Maua,
    name: "Magazine Luiz S.A",
    address: "Av Barao De Maua, 122 - Sem Complemento - Sem Bairro - 09310-000",
    observations: "Sem observações",
  },
  {
    city: Cities.Maua,
    name: "Vertas",
    address: "Rua Rosa Kasinski, 1109 - Capuava - 09380-128 ",
    observations: "Sem observações",
  },
  {
    city: Cities.Ribeirao,
    name: "Loja Vivo",
    address: "Rua Do Comercio, 136 - Centro - Ribeirão Pires - 09400-200",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },
  {
    city: Cities.Ribeirao,
    name: "Loja Claro Relojoaria Big Ben",
    address: "Rua Do Comercio, 127 - Box 01 E 03 - Bairro Centro - SP, 09400-200",
    observations: "Recebemos celulares, carregadores, fones de ouvido, pilhas, baterias e produtos de telefonia em geral.",
  },


]




export function locationsReducer(state: Locations, action: DispatchAction): Locations {
  
  switch(action.type) {
    case Cities.Diadema:
      return locationsArray.filter((actualState) => actualState.city === Cities.Diadema);
    case Cities.SantoAndre:
      return locationsArray.filter((actualState) => actualState.city === Cities.SantoAndre);
    case Cities.SaoBernardo:
      return locationsArray.filter((actualState) => actualState.city === Cities.SaoBernardo);
    case Cities.SaoCaetano:
      return locationsArray.filter((actualState) => actualState.city === Cities.SaoCaetano);
    case Cities.Maua:
      return locationsArray.filter((actualState) => actualState.city === Cities.Maua);
    case Cities.Ribeirao:
      return locationsArray.filter((actualState) => actualState.city === Cities.Ribeirao);  
    default:
      return locationsArray;
  }
}