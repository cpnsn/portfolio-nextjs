import Link from "next/link";
import Image from "next/image";
import QandA from "@/components/QandA";

export default function Resume() {
  const questionsAnswers = [
    {
      question: "Pourquoi une reconversion professionnelle ?",
      answer:
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis hendrerit orci. Etiam lobortis libero eget iaculis placerat. Proin commodo ut orci congue volutpat. Morbi interdum vehicula erat, a pharetra ex aliquet ut. Proin tempus quam id quam condimentum, non mollis purus facilisis. Donec eget diam nec leo pulvinar egestas ac a augue. Integer quis pharetra ligula. Cras at diam placerat, euismod erat ac, venenatis turpis. Maecenas luctus tincidunt consectetur. Quisque feugiat sapien nec libero dapibus, ut tristique eros placerat.",
    },
    {
      question: "Pourquoi le développement web ?",
      answer:
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis hendrerit orci. Etiam lobortis libero eget iaculis placerat. Proin commodo ut orci congue volutpat. Morbi interdum vehicula erat, a pharetra ex aliquet ut. Proin tempus quam id quam condimentum, non mollis purus facilisis. Donec eget diam nec leo pulvinar egestas ac a augue. Integer quis pharetra ligula. Cras at diam placerat, euismod erat ac, venenatis turpis. Maecenas luctus tincidunt consectetur. Quisque feugiat sapien nec libero dapibus, ut tristique eros placerat.",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-beige0 to-beige1 pt-24 lg:pt-36">
      <header className="flex gap-10 mb-20 px-8 min-[1024px]:px-[10%] min-[1280px]:px-[25%] min-[2000px]:px-[30%]">
        <div className="relative w-[50px] h-auto">
          <Image
            src="/icons/line-y-2.svg"
            alt="icon"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-deepPurple font-black text-3xl lg:text-5xl mb-10">
            Mon parcours
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis hendrerit orci. Etiam lobortis libero eget iaculis
            placerat. Proin commodo ut orci congue volutpat. Morbi interdum
            vehicula erat, a pharetra ex aliquet ut. Proin tempus quam id quam
            condimentum, non mollis purus facilisis. Donec eget diam nec leo
            pulvinar egestas ac a augue. Integer quis pharetra ligula. Cras at
            diam placerat, euismod erat ac, venenatis turpis. Maecenas luctus
            tincidunt consectetur. Quisque feugiat sapien nec libero dapibus, ut
            tristique eros placerat.
          </p>
        </div>
      </header>

      <main>
        <div className="text-right whitespace-nowrap px-8 min-[1024px]:px-[10%] min-[1280px]:px-[25%] min-[2000px]:px-[30%]">
          <p className="text-deepPurple !font-bold">2012-2013</p>
          <p>Première année de licence LLCE anglais</p>
          <p className="text-sm">Université de Cergy-Pontoise</p>
        </div>

        <div className="relative bg-orange5 my-16 py-15 px-8 min-[1024px]:px-[10%] min-[1280px]:px-[25%] min-[2000px]:px-[30%]">
          <h2 className="absolute -top-5 text-2xl">
            Premières expériences en entreprise
          </h2>
          <div className="flex">
            <div className="my-auto whitespace-nowrap">
              <p className="text-deepPurple !font-bold">Étés 2013 à 2018 </p>
              <p>Aide à l’administration des ventes à l’export</p>
              <p className="text-sm">Pandrol, Colombes</p>
            </div>
            <div className="relative w-[50px] h-auto ml-8">
              <Image
                src="/icons/line-y-2.svg"
                alt="icon"
                fill
                className="object-contain"
              />
            </div>
            <p className="bg-beige0/60 my-auto p-8 rounded-r-xl w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              sagittis hendrerit orci. Etiam lobortis libero eget iaculis
              placerat. Proin commodo ut orci congue volutpat. Morbi interdum
              vehicula erat
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 px-8 min-[1024px]:px-[10%] min-[1280px]:px-[25%] min-[2000px]:px-[30%]">
          <h2 className="text-2xl">
            La Licence en Langues <br></br> Étrangères Appliquées
          </h2>
          <div className="text-right whitespace-nowrap">
            <p className="text-deepPurple !font-bold">2012-2013</p>
            <p>Première année de licence LLCE anglais</p>
            <p className="text-sm">Université de Cergy-Pontoise</p>
          </div>
          <Image
            src="/icons/arrow-2.svg"
            alt="icon"
            width={300}
            height={300}
            className="mx-auto"
          />
          <div className="my-auto whitespace-nowrap">
            <p className="text-deepPurple !font-bold">Étés 2013 à 2018 </p>
            <p>Aide à l’administration des ventes à l’export</p>
            <p className="text-sm">Pandrol, Colombes</p>
          </div>
          <Image
            src="/icons/arrow-3.svg"
            alt="icon"
            width={300}
            height={300}
            className="mx-auto"
          />
          <div className="text-right whitespace-nowrap">
            <p className="text-deepPurple !font-bold">2012-2013</p>
            <p>Première année de licence LLCE anglais</p>
            <p className="text-sm">Université de Cergy-Pontoise</p>
          </div>
        </div>

        <div className="relative bg-orange5 my-16 py-15 px-8 min-[1024px]:px-[10%] min-[1280px]:px-[25%] min-[2000px]:px-[30%]">
          <h2 className="absolute -top-5 text-2xl">La traduction</h2>
          <div className="flex flex-col gap-20">
            <div className="my-auto whitespace-nowrap">
              <p className="text-deepPurple !font-bold">Étés 2013 à 2018 </p>
              <p>Aide à l’administration des ventes à l’export</p>
              <p className="text-sm">Pandrol, Colombes</p>
            </div>
            <div className="flex">
              <p className="bg-beige0/60 my-auto p-8 rounded-r-xl w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis hendrerit orci. Etiam lobortis libero eget iaculis
                placerat. Proin commodo ut orci congue volutpat. Morbi interdum
                vehicula erat
              </p>
              <div className="relative w-[50px] h-auto mr-8">
                <Image
                  src="/icons/line-y-2.svg"
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-right my-auto whitespace-nowrap">
                <p className="text-deepPurple !font-bold">Étés 2013 à 2018 </p>
                <p>Aide à l’administration des ventes à l’export</p>
                <p className="text-sm">Pandrol, Colombes</p>
              </div>
            </div>
            <div className="flex">
              <div className="my-auto whitespace-nowrap">
                <p className="text-deepPurple !font-bold">Étés 2013 à 2018 </p>
                <p>Aide à l’administration des ventes à l’export</p>
                <p className="text-sm">Pandrol, Colombes</p>
              </div>
              <div className="relative w-[50px] h-auto ml-8">
                <Image
                  src="/icons/line-y-2.svg"
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="bg-beige0/60 my-auto p-8 rounded-r-xl w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis hendrerit orci. Etiam lobortis libero eget iaculis
                placerat. Proin commodo ut orci congue volutpat. Morbi interdum
                vehicula erat
              </p>
            </div>
          </div>
        </div>

        <div className="my-16 py-15 px-8 min-[1024px]:px-[10%] min-[1280px]:px-[25%] min-[2000px]:px-[30%]">
          <h2 className="text-2xl">La reconversion</h2>
          <QandA data={questionsAnswers} />
        </div>

        <div className="bg-brownBg my-16 py-15 px-8 min-[1024px]:px-[10%] min-[1280px]:px-[25%] min-[2000px]:px-[30%]">
          <h2 className="text-2xl">Le développement web</h2>

          <div className="relative bg-beige0 p-8 w-[800px] mx-auto rounded-xl mt-8">
            <h3 className="absolute -top-2">Le bootcamp</h3>
            <div className="flex ">
              <div className="my-auto whitespace-nowrap">
                <p className="text-deepPurple !font-bold">Étés 2013 à 2018 </p>
                <p>Aide à l’administration des ventes à l’export</p>
                <p className="text-sm mb-8">Pandrol, Colombes</p>
                <Link
                  className="bg-purple2 text-beige0 py-2 px-8 mt-6 rounded-l-full hover:bg-purple2/80 transition-colors duration-300"
                  href="/"
                >
                  Voir les projets
                </Link>
                <a
                  className="-ml-4 bg-deepPurple text-beige0 py-2 px-8 mt-6 rounded-full hover:bg-purple5 transition-colors duration-300"
                  href="/example.com"
                >
                  Voir la certification
                </a>
              </div>
              <div className="relative w-[50px] h-auto ml-8">
                <Image
                  src="/icons/line-y-2.svg"
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="my-auto p-8 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis hendrerit orci. Etiam lobortis libero eget iaculis
                placerat. Proin commodo ut orci congue volutpat. Morbi interdum
                vehicula erat
              </p>
            </div>
          </div>

          <div className="relative bg-beige0 p-16 w-[900px] mx-auto rounded-xl mt-14">
            <h3 className="absolute -top-2 right-12">
              OpenClassrooms et l'alternance
            </h3>

            <div className="relative flex justify-between">
              <Image
                className="absolute -left-5 animate-bounce"
                src="/icons/react.svg"
                alt="icon"
                width={80}
                height={80}
              />
              <Image
                className="w-[50%]"
                src="/icons/logos.svg"
                alt="icon"
                width={500}
                height={500}
              />
              <div className="mb-auto whitespace-nowrap text-right">
                <p className="text-deepPurple !font-bold">
                  Août 2023 - Août 2025
                </p>
                <p>
                  Formation développeur d'application <br></br> Javascript -
                  React
                </p>
                <p className="text-sm mb-8">OpenClassrooms</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <h4 className="text-deepPurple font-bold text-xl">
                  La formation
                </h4>
                <p className="text-sm mt-4 mb-8 w-[80%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  sagittis hendrerit orci. Etiam lobortis libero eget iaculis
                  placerat. Proin commodo ut orci congue volutpat. Morbi
                  interdum vehicula erat
                </p>
                <Link
                  className="bg-purple2 text-beige0 py-2 px-8 mt-6 rounded-l-full hover:bg-purple2/80 transition-colors duration-300"
                  href="/"
                >
                  Voir les projets
                </Link>
                <a
                  className="-ml-4 bg-deepPurple text-beige0 py-2 px-8 mt-6 rounded-full hover:bg-purple5 transition-colors duration-300"
                  href="/example.com"
                >
                  Voir la certification
                </a>
              </div>
              <div className="relative w-[50px] h-auto ml-8">
                <Image
                  src="/icons/line-y-2.svg"
                  alt="icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-deepPurple font-bold text-xl [writing-mode:vertical-rl] rotate-180 m-auto whitespace-nowrap">
                L'alternance
              </h4>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-beige0 to-orange6 px-8 min-[1024px]:px-[10%] min-[1280px]:px-[25%] min-[2000px]:px-[30%] pb-16">
          <div className="flex justify-between">
            <div className="w-[48%] bg-orange6 rounded-3xl border border-white border-4 text-deepPurple py-8 px-12">
              <h3 className="text-2xl mb-8">+ d'informations</h3>
              <h4>Localisation</h4>
              <p className="text-lg mb-4">95250 Beauchamp</p>
              <h4>Je parle aussi</h4>
              <p className="text-lg mb-4">Anglais (niveau C1)</p>
              <h4>Je recherche</h4>
              <p className="text-lg mb-4">Un poste en CDI ou CDD</p>
              <h4>Où ça ?</h4>
              <p className="text-lg mb-4">En IDF idéalement</p>
            </div>
            <div className="w-[48%] flex flex-col justify-between">
              <div className="h-[80%] bg-orange6 rounded-3xl border border-white border-4 text-deepPurple py-8 px-12">
                <h3 className="text-2xl mb-8">+ d'informations</h3>
                <h4>Localisation</h4>
                <p className="text-lg mb-4">95250 Beauchamp</p>
                <h4>Je parle aussi</h4>
                <p className="text-lg mb-4">Anglais (niveau C1)</p>
              </div>
              <a
                className="h-[17%] bg-purple2 text-beige0 text-3xl font-extrabold flex items-center justify-center rounded-full hover:bg-deepPurple transition-colors duration-300"
                href="/example.com"
              >
                Me contacter
              </a>
            </div>
          </div>

          <div className="">
            <h2 className="text-2xl pt-30 mb-8">En résumé</h2>
            <div className="relative w-[50px] h-auto ml-8">
              <Image
                src="/icons/line-y-2.svg"
                alt="icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative flex flex-wrap gap-4 w-[600px]">
              <span className="bg-purple2 text-white px-6 py-1.5 rounded-full">
                2 ans d'expérience en alternance
              </span>
              <span className="bg-purple4 text-deepPurple px-6 py-1.5 rounded-full">
                Disponible immédiatement
              </span>
              <span className="bg-orange4 px-6 py-1.5 rounded-full">
                Javascript, React, Tailwind, une GRANDE capacité d'adaptation
              </span>
              <span className="bg-deepPurple text-white px-6 py-1.5 rounded-full">
                I speak English
              </span>
              <Image
                className="absolute -right-30 -top-35"
                src="/icons/arrow-4.svg"
                alt="icon"
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
