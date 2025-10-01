import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import MobileOnlyCarousel from "@/components/carousels/MobileOnlyCarousel";
import DesktopMobileCarousel from "@/components/carousels/DesktopMobileCarousel";

export default function Projet({ params }) {
  const { projectId } = params;
  const allProjects = projectsData.flatMap((cat) => cat.projects);
  const project = allProjects.find((p) => p.id === projectId);
  const category = projectsData.find((cat) =>
    cat.projects.some((proj) => proj.id === projectId)
  );

  const relatedProjets = category
    ? category.projects.filter((p) => p.id !== projectId)
    : [];

  const unrelatedProjects = projectsData
    .filter((cat) => cat !== category)
    .flatMap((cat) => cat.projects.filter((p) => p.default));

  return (
    <div className="bg-gradient-to-b from-beige0 to-beige1 pt-24 lg:pt-36 pb-18">
      <header className="bg-brownBg p-8 lg:p-18 rounded-[3rem] w-[90%] xl:w-[1100px] mx-auto">
        <div className="flex flex-col text-sm">
          <div className="lg:flex justify-between">
            <div className="lg:w-[48%] xl:w-[33%] my-auto">
              <div className="relative w-full max-w-lg mb-12">
                <h1 className="text-deepPurple text-3xl lg:text-[2.5rem] font-black">
                  {project.title}
                </h1>
                <Image
                  className="absolute w-[50%] -ml-4 mt-2"
                  src="/icons/line-title.svg"
                  alt="icon"
                  width={400}
                  height={90}
                />
              </div>
              <p>{project.summary}</p>
            </div>
            <div className="lg:w-[48%] xl:w-[64%] bg-orange3 p-5 border border-white border-4 lg:rounded-tr-4xl lg:rounded-bl-4xl max-lg:mt-8 mb-[3%]">
              <Image
                className="w-full max-lg:rounded-t-2xl shadow-sm lg:rounded-tr-3xl lg:rounded-bl-3xl"
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
                quality={100}
              />
            </div>
          </div>

          <div className="lg:flex justify-between items-stretch">
            <div className="lg:w-[48%] xl:w-[33%] bg-beige0 p-10 border border-white border-4 max-lg:-mt-10 max-lg:rounded-tl-4xl rounded-tr-4xl lg:rounded-bl-4xl">
              <h2 className="text-deepPurple text-2xl mb-4">Objectif</h2>
              <p>{project.goal}</p>
              <div className="flex flex-wrap justify-center mt-8 max-lg:mb-8">
                {project.tags.slice(1).map((item, index) => (
                  <>
                    <span
                      key={index}
                      className="font-extralight text-deepPurple"
                    >
                      {item}
                    </span>
                    <Image
                      className="mx-2"
                      src="/icons/punctuation.svg"
                      alt="icon"
                      width={10}
                      height={10}
                      quality={100}
                    />
                  </>
                ))}
              </div>
            </div>
            <div className="relative lg:w-[49%] xl:w-[64%] max-lg:-mt-8 bg-orange5 lg:bg-beige0 p-10 border border-white border-4 max-lg:rounded-tr-4xl rounded-tl-4xl max-lg:rounded-bl-4xl rounded-br-4xl">
              <Image
                className="hidden lg:block absolute -left-13 -top-13 animate-bounce"
                src="/icons/react.svg"
                alt="icon"
                width={80}
                height={80}
                quality={100}
              />
              <h2 className="text-deepPurple text-2xl mb-4">Fonctionnalités</h2>
              {project.features.map((item, index) => (
                <div className="flex mb-2">
                  <Image
                    className="mx-2"
                    src="/icons/punctuation.svg"
                    alt="icon"
                    width={10}
                    height={10}
                    quality={100}
                  />
                  <span className="font-extralight" key={index}>
                    {item}
                  </span>
                </div>
              ))}
              <h2 className="text-deepPurple text-2xl mb-4 mt-6">
                Défis techniques
              </h2>
              {project.challenges.map((item, index) => (
                <div className="flex mb-2">
                  <Image
                    className="mx-2"
                    src="/icons/punctuation.svg"
                    alt="icon"
                    width={10}
                    height={10}
                    quality={100}
                  />
                  <span className="font-extralight" key={index}>
                    {item}
                  </span>
                </div>
              ))}
              {(project.link || project.github) && (
                <a
                  className="absolute max-lg:left-1/2 max-lg:-translate-x-1/2 lg:-left-20 -bottom-5 bg-purple2 text-beige0 py-2 px-10 rounded-full hover:bg-deepPurple transition-colors duration-300"
                  href={project.link ?? project.github}
                  target="_blank"
                >
                  {project.link ? "Voir le projet" : "Github"}
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="bg-gradient-to-b from-beige0 to-beige1 pt-[3%] px-[3%] rounded-t-[3rem] lg:rounded-t-[6rem]">
        <div className="flex flex-col gap-10 lg:gap-20 bg-brownBg rounded-[2.5rem] lg:rounded-[4.5rem] py-10 lg:py-25 mx-auto px-[calc(2rem-3%)] min-[1024px]:px-[7%] min-[1280px]:px-[17%] min-[2000px]:px-[27%]">
          <div>
            <div className="relative w-full max-w-lg lg:mb-12">
              <h2 className="text-deepPurple text-3xl lg:text-[2.5rem] font-black">
                Autres projets {category.formation}
              </h2>
              <Image
                className="absolute w-[50%] -ml-4 mt-2"
                src="/icons/line-title.svg"
                alt="icon"
                width={400}
                height={90}
              />
            </div>
            <MobileOnlyCarousel data={relatedProjets} />
          </div>
          <div>
            <div className="relative w-full max-w-lg lg:mb-12">
              <h2 className="text-deepPurple text-3xl lg:text-[2.5rem] font-black">
                Plus de projets
              </h2>
              <Image
                className="absolute w-[50%] -ml-4 mt-2"
                src="/icons/line-title.svg"
                alt="icon"
                width={400}
                height={90}
              />
            </div>
            <DesktopMobileCarousel data={unrelatedProjects} />
          </div>
          <div className="flex max-lg:flex-col justify-center gap-4 text-deepPurple">
            <Link
              href="/cv"
              className="flex gap-8 py-4 px-10 bg-beige0 hover:bg-beige0/30 transition duration-300 rounded-xl border border-white border-4"
            >
              <p>
                Au delà des projets <br></br>{" "}
                <span className="font-bold text-xl">Voir le CV</span>
              </p>
              <Image
                className=""
                src="/icons/more-purple.svg"
                alt="icon"
                width={50}
                height={50}
              />
            </Link>
            <Link
              href="mailto:cpoinson@hotmail.fr"
              className="flex gap-8 py-4 px-10 bg-beige0 hover:bg-beige0/30 transition duration-300 rounded-xl border border-white border-4"
            >
              <p>
                N'hésitez pas à <br></br>{" "}
                <span className="font-bold text-xl">Me contacter</span>
              </p>
              <Image
                className=""
                src="/icons/contact.svg"
                alt="icon"
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
