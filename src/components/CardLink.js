import Link from "next/link";

export default function CardLink({ href, text, color }) {
  const isExternal = href.startsWith("mailto:");

  return (
    <div>
      {isExternal ? (
        <a
          className={`${color} py-6 mt-2 rounded-lg flex justify-center text-3xl text-deepPurple font-black`}
          href={href}
        >
          {text}
        </a>
      ) : (
        <Link
          className={`${color} py-6 mt-2 rounded-lg flex justify-center text-3xl text-deepPurple font-black`}
          href={href}
        >
          {text}
        </Link>
      )}
    </div>
  );
}
