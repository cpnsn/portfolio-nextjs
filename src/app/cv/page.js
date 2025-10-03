import Link from "next/link";
import Image from "next/image";
import QandA from "@/components/QandA";
import { apprenticeshipData } from "@/data/apprenticeship";
import ApprenticeshipCarousel from "@/components/carousels/ApprenticeshipCarousel";

export const metadata = {
  title: "CV",
  description:
    "Parcourez mon CV et découvrez mon parcours jusqu'à ma reconversion dans le développement web",
};

export default function Resume() {
  const questionsAnswers = [
    {
      question: "Pourquoi une reconversion professionnelle ?",
      answer:
        "Je souhaitais donner un nouvel élan à ma carrière, en quittant un secteur qui offrait peu de perspectives pour me tourner vers un domaine où je pourrais progresser et trouver davantage de satisfaction professionnelle. Je me suis donc mise en quête d’un métier stimulant et qui ne nécessiterait pas de longues études supplémentaires.",
    },
    {
      question: "Pourquoi le développement web ?",
      answer:
        "J’ai découvert le développement web au cours de mes recherches de reconversion. Dès mes premières lignes de code et mes premiers résultats dans le navigateur, j’ai compris que ce domaine stimulait à la fois ma curiosité et ma créativité. Les nombreuses possibilités, l’apprentissage continu et la logique nouvelle qu’il exige m’ont convaincue d’aller plus loin. J’ai confirmé ce choix en suivant la formation intensive d’Ironhack en développement full-stack, pour ensuite me spécialiser en front-end.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-beige0 to-beige1 pt-24 lg:pt-36">
      <header className="flex gap-10 mb-20 px-8 min-[768px]:px-[10%] min-[1400px]:px-[15%] min-[1600px]:px-[25%] min-[2000px]:px-[30%]">
        <div className="max-[375px]:hidden relative w-[50px] h-auto">
          <Image
            src="/icons/line-y-2.svg"
            alt="icône"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-deepPurple font-black text-3xl lg:text-5xl mb-10">
            Mon parcours
          </h1>
          <p className="max-lg:text-sm">
            De la traduction au développement web, mon parcours est celui d’un
            passage des mots au code, de l’anglais au français puis des
            spécifications techniques aux interfaces.
          </p>
          <p className="mt-4 max-lg:text-sm">
            Retrouvez ici mes expériences professionnelles et les raisons de ma
            reconversion.
          </p>
        </div>
      </header>

      <main>
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

        <div className="py-15 px-8 min-[768px]:px-[10%] min-[1400px]:px-[15%] min-[1600px]:px-[25%] min-[2000px]:px-[30%]">
          <div className="relative w-full max-w-lg lg:mb-12">
            <h2 className="text-deepPurple text-3xl lg:text-[2.5rem] font-black">
              La reconversion
            </h2>
            <Image
              className="absolute w-[50%] -ml-4 mt-2"
              src="/icons/line-title.svg"
              alt="icône"
              width={400}
              height={90}
            />
          </div>
          <QandA data={questionsAnswers} />
        </div>

        <div className="bg-brownBg py-15 px-8 min-[768px]:px-[10%] min-[1400px]:px-[15%] min-[1600px]:px-[25%] min-[2000px]:px-[30%]">
          <div className="relative w-full max-w-lg lg:mb-12">
            <h2 className="text-deepPurple text-3xl lg:text-[2.5rem] font-black">
              Le développement web
            </h2>
            <Image
              className="absolute w-[50%] -ml-4 mt-2"
              src="/icons/line-title.svg"
              alt="icône"
              width={400}
              height={90}
            />
          </div>

          <div className="relative bg-beige0 p-8 xl:w-[800px] mx-auto rounded-xl mt-20">
            <h3 className="absolute whitespace-nowrap -top-4 max-lg:left-0 text-2xl text-purple5 font-semibold">
              La formation intensive
            </h3>
            <div className="lg:flex">
              <div className="my-auto lg:whitespace-nowrap">
                <p className="text-deepPurple !font-bold">
                  Octobre - Décembre 2022
                </p>
                <p>
                  Formation intensive Développeur Full-stack <br></br>
                  Titre RNCP Niveau 6 (Bac +3)
                </p>
                <p className="text-sm mb-8">Ironahck, Paris</p>
                <Link
                  className="max-lg:absolute bottom-20 whitespace-nowrap left-1/2 -translate-x-1/2 max-lg:block text-center bg-purple2 text-beige0 py-3 lg:py-2 px-6 lg:px-8 mt-6 max-lg:rounded-r-full rounded-l-full hover:bg-purple2/80 transition-colors duration-300"
                  href="/portfolio/#ironhack"
                >
                  Voir les projets
                </Link>
                <a
                  className="max-lg:absolute bottom-5 whitespace-nowrap left-1/2 -translate-x-1/2 max-lg:block text-center lg:-ml-4 bg-deepPurple text-beige0 py-3 lg:py-2 px-6 lg:px-8 mt-4 lg:mt-6 rounded-full hover:bg-purple5 transition-colors duration-300"
                  href="https://www.credential.net/7d024616-7967-460d-9a23-b6d93bc466c7#acc.QCYSROAv"
                  target="_blank"
                >
                  Voir la certification
                </a>
              </div>
              <div className="relative w-[50px] h-auto ml-8">
                <Image
                  src="/icons/line-y-2.svg"
                  alt="icône"
                  fill
                  className="object-contain hidden lg:block"
                />
              </div>
              <div className="my-auto lg:p-8 max-lg:mb-35 text-sm">
                <p>
                  Une formation intensive de trois mois pour valider mon choix
                  de reconversion et ma décision de me spécialiser dans le
                  développement front-end, tout en découvrant le back-end.
                </p>
                <p className="mt-4 !font-medium">
                  HTML, CSS, Javascript, React <br></br> Express, Node, MongoDB,
                  Axios
                </p>
              </div>
            </div>
          </div>

          <div className="relative bg-beige0 p-8 lg:p-16 xl:w-[900px] mx-auto rounded-xl mt-14">
            <h3 className="absolute -top-4 left-0 lg:right-15 text-2xl text-purple5 font-semibold">
              L'alternance
            </h3>

            <div className="relative lg:flex justify-between">
              <Image
                className="hidden lg:block absolute -left-5 animate-bounce"
                src="/icons/react.svg"
                alt="icône"
                width={80}
                height={80}
              />
              <Image
                className="hidden lg:block w-[50%]"
                src="/icons/logos.svg"
                alt="icône"
                width={500}
                height={500}
              />
              <div className="mb-auto lg:whitespace-nowrap text-right">
                <p className="text-deepPurple !font-bold">
                  Août 2023 - Août 2025
                </p>
                <p>
                  Formation développeur d'application <br></br> JavaScript -
                  React
                </p>
                <p className="text-sm mb-8">OpenClassrooms</p>
              </div>
            </div>
            <ApprenticeshipCarousel data={apprenticeshipData} />
          </div>
        </div>

        <div className="bg-gradient-to-b from-beige0 to-orange6 py-15 px-8 lg:pb-16">
          <div className="lg:w-[900px] mx-auto lg:flex justify-between">
            <div className="shadow-sm lg:w-[48%] bg-orange6/70 max-lg:mb-8 rounded-3xl border border-white border-4 py-8 px-12">
              <h3 className="text-2xl text-deepPurple font-semibold">
                Plus d'informations
              </h3>
              <h4 className="text-sm font-bold text-deepPurple mt-10">
                Localisation
              </h4>
              <p className="mb-4 text-deepPurple">95250 Beauchamp</p>
              <h4 className="text-sm font-bold text-deepPurple">
                Je parle aussi
              </h4>
              <p className="mb-4 text-deepPurple">Anglais (niveau C1)</p>
              <h4 className="text-sm font-bold text-deepPurple">
                Je recherche
              </h4>
              <p className="mb-4 text-deepPurple">Un poste en CDI ou CDD</p>
              <h4 className="text-sm font-bold text-deepPurple">Où ça ?</h4>
              <p className="mb-4 text-deepPurple">En IDF idéalement</p>
              <h4 className="text-sm font-bold text-deepPurple">E-mail</h4>
              <p className="mb-4 text-deepPurple">contact@celinepoinson.com</p>
            </div>
            <div className="lg:w-[48%] flex flex-col justify-between">
              <div className="shadow-sm lg:h-[80%] bg-orange6/70 rounded-3xl border border-white border-4 py-8 px-8 lg:px-12">
                <div className="flex flex-wrap justify-center gap-2">
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    HTML
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    CSS
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    JavaScript
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    React
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    Next.js
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    Tailwind
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    Playwright
                  </p>
                </div>

                <h3 className="text-lg text-deepPurple font-semibold text-center mt-6 mb-2">
                  Des connaissances en
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    PHP
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    Symfony
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    Express
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    Node.js
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    MongoDB
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    Bootstrap
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    SASS
                  </p>
                </div>

                <h3 className="text-lg text-deepPurple font-semibold text-center mt-6 mb-2">
                  En cours d'apprentissage
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    TypeScript
                  </p>
                  <p className="bg-orange1 w-fit py-1 px-3 rounded-lg text-sm">
                    Vue.js
                  </p>
                </div>
              </div>
              <a
                className="shadow-sm w-[80%] mx-auto max-lg:mt-8 h-[70px] lg:h-[15%] bg-purple2 text-beige0 text-3xl font-extrabold flex items-center justify-center rounded-full hover:bg-purple5 transition-colors duration-300"
                href="mailto:contact@celinepoinson.com"
              >
                Me contacter
              </a>
            </div>
          </div>

          <div className="lg:w-[900px] mx-auto">
            <div className="relative w-full max-w-lg lg:mb-12 pt-30">
              <h2 className="text-deepPurple text-3xl lg:text-[2.5rem] font-black">
                En résumé
              </h2>
              <Image
                className="absolute w-[50%] -ml-4 mt-2"
                src="/icons/line-title.svg"
                alt="icône"
                width={400}
                height={90}
              />
            </div>
            <div className="relative w-[50px] h-auto ml-8">
              <Image
                src="/icons/line-y-2.svg"
                alt="icône"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative flex flex-wrap gap-4 text-sm lg:w-[600px] mt-10">
              <span className="bg-purple2 text-white px-6 py-1.5 rounded-full">
                2 ans d'expérience en alternance
              </span>
              <span className="bg-purple4 text-deepPurple px-6 py-1.5 rounded-full">
                Disponible immédiatement
              </span>
              <span className="bg-orange4 px-6 py-1.5 rounded-full">
                JavaScript, React, Tailwind, une GRANDE capacité d'adaptation
              </span>
              <span className="bg-deepPurple text-white px-6 py-1.5 rounded-full">
                I speak English
              </span>
              <Image
                className="hidden lg:block absolute -right-30 -top-35"
                src="/icons/arrow-4.svg"
                alt="icône"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
