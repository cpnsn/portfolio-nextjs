import Image from "next/image";
import CardLink from "@/components/CardLink";
import Socials from "@/components/Socials";
import { projectsData } from "@/data/projects";
import HomeCarousel from "@/components/HomeCarousel";

export default function Home() {
  const defaultProjects = projectsData.flatMap((category) =>
    category.projects.filter((p) => p.default)
  );

  return (
    <div className="bg-gradient-to-b from-beige0 to-beige1 pt-24 lg:pt-36 pb-18">
      <header className="flex mb-30 px-8 min-[1024px]:px-[10%] min-[1280px]:px-[20%] min-[2000px]:px-[30%]">
        <div className="lg:w-[70%]">
          <div className="w-fit">
            <h1 className="text-deepPurple font-black text-4xl lg:text-[2.5rem]">
              Céline Poinson <br></br>
              <span className="text-3xl lg:text-5xl mt-20 lg:whitespace-nowrap">
                Développeuse Front-end
              </span>
            </h1>
            <Image
              className="w-full my-4 lg:my-8 -ml-3"
              src="/icons/line-x-2.svg"
              alt="icon"
              width={100}
              height={100}
            />
          </div>
          <div className="w-[90%]">
            <p>
              Spécialisée en JavaScript et React, j’ai développé mes compétences
              grâce à une formation intensive en 2022, puis les ai consolidées
              au cours de deux années d’alternance.
            </p>
            <p className="my-4">
              Issue d’une reconversion professionnelle, je bénéficie aujourd’hui
              d’un parcours atypique. J’aborde les projets avec rigueur et fais
              preuve d’une forte adaptabilité.
            </p>
            <p>
              Je recherche aujourd’hui un poste en développement front-end dans
              lequel je pourrai mettre ces atouts au service d’une équipe et de
              projets innovants.
            </p>
          </div>
          <div className="lg:hidden mt-16">
            <div className="relative">
              <Image
                className="absolute -top-10 -left-5"
                src="/icons/react.svg"
                alt="icon"
                width={90}
                height={90}
              />
            </div>
            <CardLink href="/portfolio" text="Portfolio" color="bg-orange1" />
            <CardLink href="/cv" text="CV" color="bg-purple1" />
            <div className="relative">
              <Image
                className="absolute -top-10 -right-5"
                src="/icons/javascript.svg"
                alt="icon"
                width={90}
                height={90}
              />
            </div>
            <CardLink
              href="mailto:cpoinson@hotmail.fr"
              text="Contact"
              color="bg-orange1"
            />
          </div>
          <div className="flex gap-2 mt-4 lg:mt-8">
            <Socials
              href="https://github.com/cpnsn/"
              text="GitHub"
              src="/icons/github-light.svg"
              alt="Logo GitHub"
            />
            <Socials
              href="https://www.linkedin.com/in/celine-poinson/"
              text="LinkedIn"
              src="/icons/linkedin-light.svg"
              alt="Logo LinkedIn"
            />
          </div>
        </div>
        <div className="hidden lg:block relative w-[30%]">
          <Image
            className="absolute left-0 animate-bounce"
            src="/icons/react.svg"
            alt="icon"
            width={90}
            height={90}
          />
          <Image
            className="absolute right-10 top-40 hover:animate-pulse"
            src="/icons/javascript.svg"
            alt="icon"
            width={90}
            height={90}
          />
          <Image
            className="absolute bottom-0 left-20"
            src="/icons/tailwind.svg"
            alt="icon"
            width={90}
            height={90}
          />
        </div>
      </header>
      <main>
        {/* <div className="bg-brownBg lg:rounded-xl lg:w-[80%] mx-auto px-8 min-[1024px]:px-[10%] min-[1280px]:px-[20%] min-[2000px]:px-[30%]"> */}
        <div className="bg-brownBg py-12 lg:rounded-[3rem] min-[1024px]:w-[90%] min-[1280px]:w-[80%] min-[2000px]:w-[60%] mx-auto px-8 min-[1024px]:px-[5%] min-[1280px]:px-[10%] min-[2000px]:px-[10%]">
          <div className="relative w-full max-w-lg mb-12">
            <h2 className="text-deepPurple text-3xl lg:text-5xl font-black">
              Projets
            </h2>
            <Image
              className="absolute w-[50%] -ml-4 mt-2"
              src="/icons/line-title.svg"
              alt="icon"
              width={400}
              height={90}
            />
          </div>
          <div>
            <HomeCarousel data={defaultProjects} />
          </div>
        </div>
      </main>
    </div>
  );
}
