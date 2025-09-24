import Link from "next/link";

export default function CardLink({ href, text, color }) {
  const isExternal = href.startsWith("mailto:");

  return (
    <div>
      {isExternal ? (
        <a
          className={`${color} py-10 mt-4 rounded-sm flex justify-center text-3xl font-black`}
          href={href}
        >
          {text}
        </a>
      ) : (
        <Link
          className={`${color} py-10 mt-4 rounded-sm flex justify-center text-3xl font-black`}
          href={href}
        >
          {text}
        </Link>
      )}
    </div>
  );
}
