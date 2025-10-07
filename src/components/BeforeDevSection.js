"use client";

import Image from "next/image";
import { useState } from "react";

export default function BeforeDevSection() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <div
        onClick={() => setVisible(false)}
        className={`bg-orange5 mt-16 py-16 lg:py-30 text-center cursor-pointer transition-all duration-700 ease-in-out
          ${
            visible
              ? "opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-10 pointer-events-none"
          }`}
      >
        <h2 className="text-deepPurple text-3xl lg:text-[2.5rem] font-black">
          2012 - 2022
        </h2>
        <p className="text-lg">Avant le développement web</p>
        <Image
          src="/icons/arrow-down.svg"
          alt="icône"
          width={30}
          height={30}
          className="mx-auto mt-8 animate-bounce"
        />
      </div>

      <div
        className={`transition-all duration-700 ease-in-out
          ${
            visible
              ? "hidden opacity-0 -translate-y-10 pointer-events-none"
              : "opacity-100 translate-y-0"
          }`}
      >
        <div className="text-right lg:whitespace-nowrap px-8 min-[768px]:px-[10%] min-[1400px]:px-[15%] min-[1600px]:px-[25%] min-[2000px]:px-[30%]">
          <p className="text-deepPurple !font-bold">2012-2013</p>
          <p>Première année de licence LLCE anglais</p>
          <p className="text-sm">Université de Cergy-Pontoise</p>
        </div>
        <div className="relative bg-orange5 mt-16 py-16 lg:py-30 px-8 min-[768px]:px-[10%] min-[1400px]:px-[15%] min-[1600px]:px-[25%] min-[2000px]:px-[30%]">
          <div className="relative w-full max-w-lg lg:mb-12">
            <h2 className="text-deepPurple text-3xl lg:text-[2.5rem] font-black">
              Premières expériences <br></br> en entreprise
            </h2>
            <Image
              className="absolute w-[50%] -ml-4 mt-2"
              src="/icons/line-title.svg"
              alt="icône"
              width={400}
              height={90}
            />
          </div>
          <div className="lg:flex mt-10">
            <div className="my-auto lg:whitespace-nowrap">
              <p className="text-deepPurple !font-bold">Étés 2013 à 2018 </p>
              <p>Aide à l’administration des ventes à l’export</p>
              <p className="text-sm">Pandrol, Colombes</p>
            </div>
            <div className="relative w-[50px] h-auto ml-8 -mr-4">
              <Image
                src="/icons/line-y-2.svg"
                alt="icône"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 lg:mt-0 bg-beige1/60 my-auto p-8 lg:pr-12 lg:rounded-r-4xl max-lg:w-screen relative max-lg:left-1/2 max-lg:-translate-x-1/2 lg:w-full text-sm text-deepPurple">
              Enregistrement de commandes, <br></br>suivi des paiements,{" "}
              traductions techniques
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-16 lg:mt-30 gap-10 px-8 min-[768px]:px-[10%] min-[1400px]:px-[15%] min-[1600px]:px-[25%] min-[2000px]:px-[30%]">
          <div className="relative w-full max-w-lg lg:mb-12">
            <h2 className="text-deepPurple text-3xl lg:text-[2.5rem] font-black">
              La Licence en Langues <br></br> Étrangères Appliquées
            </h2>
            <Image
              className="absolute w-[50%] -ml-4 mt-2"
              src="/icons/line-title.svg"
              alt="icône"
              width={400}
              height={90}
            />
          </div>
          <div className="text-right lg:whitespace-nowrap">
            <p className="text-deepPurple !font-bold">2013-2016</p>
            <p>Licence LEA Anglais / Espagnol</p>
            <p className="text-sm">Université de Cergy-Pontoise</p>
          </div>
          <Image
            src="/icons/arrow-2.svg"
            alt="icône"
            width={300}
            height={300}
            className="ml-auto lg:mx-auto max-lg:w-[200px]"
          />
          <div className="my-auto lg:whitespace-nowrap">
            <p className="text-deepPurple !font-bold">
              Septembre - Décembre 2015
            </p>
            <p>Erasmus</p>
            <p className="text-sm">Université de Wexford, Irlande</p>
          </div>
          <Image
            src="/icons/arrow-3.svg"
            alt="icône"
            width={300}
            height={300}
            className="lg:mx-auto max-lg:w-[200px]"
          />
          <div className="text-right lg:whitespace-nowrap">
            <p className="text-deepPurple !font-bold">Juin - Juillet 2016</p>
            <p>Stage de fin de licence</p>
            <p className="text-sm">Husqvarna France, Gennevilliers</p>
          </div>
        </div>

        <div className="relative bg-orange5 mt-16 py-16 lg:py-30 px-8 min-[768px]:px-[10%] min-[1400px]:px-[15%] min-[1600px]:px-[25%] min-[2000px]:px-[30%]">
          <div className="relative w-full max-w-lg lg:mb-12">
            <h2 className="text-deepPurple text-3xl lg:text-[2.5rem] font-black">
              La traduction
            </h2>
            <Image
              className="absolute w-[50%] -ml-4 mt-2"
              src="/icons/line-title.svg"
              alt="icône"
              width={400}
              height={90}
            />
          </div>
          <div className="flex flex-col gap-20 mt-15">
            <div className="my-auto lg:whitespace-nowrap">
              <p className="text-deepPurple !font-bold">2017 - 2019</p>
              <p>
                Master Traduction Économique et Juridique <br></br> Anglais /
                Espagnol
              </p>
              <p className="text-sm">Université de Cergy-Pontoise</p>
            </div>
            <div className="flex flex-col flex-col-reverse lg:flex-row">
              <p className="bg-beige1/60 my-auto p-8 lg:pl-12 lg:rounded-l-4xl max-lg:w-screen relative max-lg:left-1/2 max-lg:-translate-x-1/2 lg:w-full text-sm text-deepPurple mt-4 lg:mt-0">
                Réalisation de traductions assermentées pour des particuliers,
                des entreprises et des juristes, ou requises par la justice :
                traductions juridiques, gestion de projet, accueil des clients
              </p>
              <div className="relative w-[50px] h-auto mr-8 -ml-4">
                <Image
                  src="/icons/line-y-2.svg"
                  alt="icône"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-right my-auto lg:whitespace-nowrap">
                <p className="text-deepPurple !font-bold">
                  Avril 2019 - Avril 2021
                </p>
                <p>Traductrice juridique</p>
                <p className="text-sm">
                  Cabinet Fields Juris Traducteur, Paris
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="my-auto lg:whitespace-nowrap">
                <p className="text-deepPurple !font-bold">
                  Mai 2021 - Mai 2022
                </p>
                <p>Traductrice freelance</p>
                <p className="text-sm">Beauchamp</p>
              </div>
              <div className="relative w-[50px] h-auto ml-8 -mr-4">
                <Image
                  src="/icons/line-y-2.svg"
                  alt="icône"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="bg-beige1/60 mt-4 lg:mt-0 my-auto p-8 lg:pr-12 lg:rounded-r-4xl max-lg:w-screen relative max-lg:left-1/2 max-lg:-translate-x-1/2 lg:w-full text-sm text-deepPurple">
                Traductions et relectures juridiques et techniques de l’anglais
                vers le français : <br></br> attestations, contrats, revues
                médicales, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
