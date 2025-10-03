import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import MobileOnlyCarousel from "@/components/carousels/projects/MobileOnlyCarousel";

export const metadata = {
  title: 'Portfolio',
  description: 'Parcourez mon portfolio et découvrez les projets sur lesquels j\'ai eu l\'occasion de travailler'
};

export default function Portfolio() {
  const projectsByCategory = projectsData.map((category) => category);

  return (
    <div className="bg-brownBg pt-24 lg:pt-36">
      <header className="sticky top-24 lg:top-36 mx-8 sm:mx-auto mb-15 lg:mb-36 lg:flex items-center sm:max-w-[500px] lg:max-w-[700px] bg-beige0 max-sm:mt-10 py-8 px-8 lg:px-18 rounded-xl border border-white border-4">
        <h1 className="lg:w-[50%] text-center absolute -top-6 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:relative text-deepPurple font-black text-4xl lg:text-5xl">
          Projets
        </h1>
        <Image
          className="hidden lg:block h-[300px]"
          src="/icons/line-y-1.svg"
          alt="icône"
          width={100}
          height={100}
        />
        <div className="text-sm lg:w-[50%]">
          <p className="mb-4">
            Découvrez une sélection de projets qui ont marqué mon parcours :
            d&apos;abord quelques réalisations full-stack, puis de nombreux projets
            front-end qui m&apos;ont permis de consolider mes compétences.
          </p>
          <p>
            HTML, CSS, JavaScript, React.js, Next.js, PHP, Symfony, Tailwind…
            autant de technologies mises en pratique au fil de ces expériences.
          </p>
        </div>
        <Image
          className="absolute max-lg:-top-10 lg:bottom-10 -left-5 lg:left-10 animate-bounce"
          src="/icons/react.svg"
          alt="icône"
          width={70}
          height={70}
        />
        <Image
          className="hidden lg:block absolute top-10 left-[35%]"
          src="/icons/javascript.svg"
          alt="icône"
          width={60}
          height={60}
        />
      </header>

      <main className="z-10 relative bg-gradient-to-b from-beige0 to-beige1 pt-[3%] px-[3%] rounded-t-[3rem] lg:rounded-t-[6rem]">
        <div className="flex flex-col gap-10 lg:gap-20 bg-brownBg rounded-[2.5rem] lg:rounded-[4.5rem] py-10 lg:py-25 mx-auto px-[calc(2rem-3%)] min-[1024px]:px-[7%] min-[1280px]:px-[17%] min-[2000px]:px-[27%]">
          {projectsByCategory.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <div className="relative w-full max-w-lg sm:mb-12">
                <h2 className="text-deepPurple mt-8 text-3xl lg:text-[2.5rem] font-black">
                  {cat.formation}
                </h2>
                <Image
                  className="absolute w-[50%] -ml-4 mt-2"
                  src="/icons/line-title.svg"
                  alt="icône"
                  width={400}
                  height={90}
                />
              </div>
              <MobileOnlyCarousel data={cat.projects} />
            </div>
          ))}
          <div className="flex max-lg:flex-col justify-center gap-4 text-deepPurple">
            <Link
              href="/cv"
              className="max-w-[330px] max-lg:mx-auto flex gap-8 py-4 px-10 bg-beige0 hover:bg-beige0/70 transition duration-300 rounded-xl border border-white border-4"
            >
              <p>
                Au-delà des projets <br></br>{" "}
                <span className="font-bold text-xl">Voir le CV</span>
              </p>
              <Image
                src="/icons/more-purple.svg"
                alt="icône"
                width={50}
                height={50}
              />
            </Link>
            <Link
              href="mailto:contact@celinepoinson.com"
              className="max-w-[330px] max-lg:mx-auto flex gap-8 py-4 px-10 bg-beige0 hover:bg-beige0/70 transition duration-300 rounded-xl border border-white border-4"
            >
              <p>
                N&apos;hésitez pas à <br></br>{" "}
                <span className="font-bold text-xl">Me contacter</span>
              </p>
              <Image
                src="/icons/contact.svg"
                alt="icône"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
