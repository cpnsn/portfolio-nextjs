import Link from "next/link";

export default function CardLink({ href, text, color }) {
  const isExternal = href.startsWith("mailto:");

  return (
    <div>
      {isExternal ? (
        <a
          className={`${color} py-5 mt-2 rounded-xl flex justify-center text-2xl text-deepPurple font-bold`}
          href={href}
        >
          {text}
        </a>
      ) : (
        <Link
          className={`${color} py-5 mt-2 rounded-xl flex justify-center text-2xl text-deepPurple font-bold`}
          href={href}
        >
          {text}
        </Link>
      )}
    </div>
  );
}
