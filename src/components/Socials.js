import Image from "next/image";

export default function Socials({ href, text, src, alt }) {
  return (
    <div className="max-lg:flex-1">
      <a
        className="flex justify-center bg-deepPurple text-beige0 py-2 px-8 rounded-sm lg:min-w-[150px] hover:bg-purple2 transition-colors duration-300"
        href={href}
      >
        <span className="hidden lg:inline font-bold text-lg">{text}</span>
        <span className="inline lg:hidden">
          <Image src={src} alt={alt} width={50} height={50} />
        </span>
      </a>
    </div>
  );
}
