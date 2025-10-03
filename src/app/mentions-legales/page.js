import Image from "next/image";

export const metadata = {
    title: 'Mentions légales',
    description: 'Mentions légales | Éditeur | Hébergeur | Propriété intellectuelle'
  };

export default function Legal() {
  return (
    <div className="bg-beige0 pt-24 lg:pt-36 px-8 min-[768px]:px-[10%] min-[1280px]:px-[20%] min-[2000px]:px-[30%] min-h-screen">
      <div className="relative w-full max-w-lg lg:mb-25">
        <h1 className="text-deepPurple font-black text-4xl lg:text-5xl">
          Mentions légales
        </h1>
        <Image
          className="absolute w-[50%] -ml-6 mt-2"
          src="/icons/line-title.svg"
          alt="icône"
          width={400}
          height={90}
        />
      </div>
      <h2 className="text-deepPurple mt-12 mb-6 text-3xl lg:text-[2.5rem] font-black">
        Éditeur
      </h2>
      <div className="ml-6">
        <p className="!font-bold text-deepPurple mb-4">Céline Poinson</p>
        <p className="mb-2">contact@celinepoinson.com</p>
        <p>06 20 32 20 71</p>
      </div>

      <h2 className="text-deepPurple mt-12 mb-6 text-3xl lg:text-[2.5rem] font-black">
        Hébergeur
      </h2>
      <div className="ml-6">
        <p className="!font-bold text-deepPurple mb-4">Vercel, Inc.</p>
        <a className="font-extralight" href="https://vercel.com">
          https://vercel.com
        </a>
        <p className="mt-2">privacy@vercel.com </p>
      </div>

      <h2 className="text-deepPurple mt-12 mb-6 text-3xl lg:text-[2.5rem] font-black">
        Propriété intellectuelle
      </h2>
      <div className="ml-6">
        <p>
          L’ensemble du contenu présent sur ce site (textes, images, icônes,
          etc.) est, sauf mention contraire, la propriété exclusive de Céline
          Poinson. Toute reproduction, représentation, modification,
          publication, transmission, ou adaptation, partielle ou intégrale, est
          interdite sans l’accord préalable de l’auteur.{" "}
        </p>
        <p className="mt-4 pb-30">
          Certaines images présentes sur ce site proviennent de projets réalisés
          pour des employeurs. Ces éléments restent la propriété exclusive de
          leurs auteurs et/ou titulaires des droits respectifs. Ils sont
          reproduits ici à titre de démonstration du travail effectué et ne
          peuvent en aucun cas être utilisés, copiés ou exploités sans
          l’autorisation préalable des ayants droit.
        </p>
      </div>
    </div>
  );
}
