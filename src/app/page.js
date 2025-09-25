import Link from "next/link";
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
        <div className="bg-brownBg lg:mb-30 py-18 lg:rounded-[3rem] min-[1024px]:w-[90%] min-[1280px]:w-[80%] min-[2000px]:w-[60%] mx-auto px-8 min-[1024px]:px-[5%] min-[1280px]:px-[10%] min-[2000px]:px-[10%]">
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

        <div className="bg-purple1 lg:my-60 relative py-15 min-[1400px]:py-20 2xl:py-30 lg:rounded-[3rem] min-[1024px]:w-[90%] min-[1280px]:w-[80%] min-[2000px]:w-[60%] mx-auto px-8 min-[1024px]:px-[5%] min-[1280px]:px-[10%] min-[2000px]:px-[10%]">
          <div className="relative w-full max-w-lg mb-12">
            <h2 className="text-deepPurple text-3xl lg:text-5xl font-black">
              Formation, expérience professionnelle
            </h2>
            <Image
              className="absolute w-[50%] -ml-4 mt-2"
              src="/icons/line-title.svg"
              alt="icon"
              width={400}
              height={90}
            />
          </div>
          <Link href="/cv">
            <Image
              className="lg:absolute lg:w-[35%] lg:rotate-10 top-1/2 lg:-translate-y-1/2 right-[10%] shadow-sm rounded-3xl border border-4 border-brownBg hover:opacity-90"
              src="/images/cv.png"
              alt="icon"
              width={400}
              height={90}
            />
          </Link>
          <Link
            className="block absolute left-1/2 translate-x-[-50%] -bottom-4 mx-auto w-fit bg-purple2 text-beige0 py-2 px-10 mt-6 rounded-full hover:bg-deepPurple transition-colors duration-300"
            href="/cv"
          >
            Voir le CV
          </Link>
        </div>

        <Image
          className="hidden lg:block w-full -mb-5"
          src="/icons/section-purple.svg"
          alt="icon"
          width={400}
          height={90}
        />
        <div className="bg-orange5 py-30 px-8">
          <div className="hidden lg:flex gap-30 justify-center align-center mb-20">
            <Image src="/icons/react.svg" alt="icon" width={90} height={90} />
            <Image
              className="animate-bounce"
              src="/icons/javascript.svg"
              alt="icon"
              width={90}
              height={90}
            />
            <Image
              src="/icons/tailwind.svg"
              alt="icon"
              width={90}
              height={90}
            />
          </div>
          <h2 className="text-deepPurple text-3xl lg:text-5xl font-black text-center">
            Mon profil vous intéresse ?
          </h2>
          <div className="flex justify-center items-end mt-6">
            <Image
              className="hidden lg:block w-[200px]"
              src="/icons/arrow-1.svg"
              alt="icon"
              width={90}
              height={90}
            />
            <Image
              className="lg:hidden w-[50px]"
              src="/icons/arrow-1-mobile.svg"
              alt="icon"
              width={90}
              height={90}
            />
            <a
              className="h-fit mx-6 bg-purple2 text-beige0 font-bold text-lg py-2 px-6 mt-6 rounded-full hover:bg-deepPurple transition-colors duration-300"
              href="mailto:cpoinson@hotmail.fr"
            >
              Me contacter
            </a>
            <Image
              className="hidden lg:block w-[200px] scale-x-[-1]"
              src="/icons/arrow-1.svg"
              alt="icon"
              width={90}
              height={90}
            />
            <Image
              className="lg:hidden w-[50px] scale-x-[-1]"
              src="/icons/arrow-1-mobile.svg"
              alt="icon"
              width={90}
              height={90}
            />
          </div>
          <Image
            className="lg:hidden mx-auto mt-20 animate-bounce"
            src="/icons/react.svg"
            alt="icon"
            width={90}
            height={90}
          />
        </div>
      </main>
    </div>
  );
}
