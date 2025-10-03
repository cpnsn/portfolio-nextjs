import Link from "next/link";
import Image from "next/image";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: '%s | Céline Poinson',
    default: 'Céline Poinson | Développeuse Front-end',
  },
    description:
    "Bienvenue sur le site de Céline Poinson, développeuse front-end spécialisée en React et Next.js.",
};

export default function RootLayout({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="fr">
      <body className={`${bricolageGrotesque.className} text-brownText`}>
        <div>
          <Nav />
          {children}
        </div>
        <footer className="bg-beige1 lg:flex flex-row-reverse pt-20 p-8 lg:py-10 text-center text-sm">
          <div className="lg:absolute flex justify-center gap-8 mb-14">
            <a
              href="https://www.linkedin.com/in/celine-poinson/"
              target="_blank"
            >
              <Image
                src="/icons/linkedin-purple.svg"
                alt="Logo LinkedIn"
                width={50}
                height={50}
              />
            </a>
            <a href="https://github.com/cpnsn/" target="_blank">
              <Image
                src="/icons/github-purple.svg"
                alt="Logo GitHub"
                width={50}
                height={50}
              />
            </a>
            {/* <Image
              src="/icons/figma-purple.svg"
              alt="Logo Figma"
              width={50}
              height={50}
            /> */}
          </div>
          <div className="mx-auto">
            <p>Tous droits réservés © Céline Poinson {currentYear}</p>
            <Image
              className="mx-auto h-4 w-auto my-2"
              src="/icons/line-x-1.svg"
              alt="icône"
              width={50}
              height={50}
            />
            <Link
              href="/mentions-legales"
              className="font-extralight hover:underline"
            >
              Mentions légales
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
