import Link from "next/link";
import Image from "next/image";

export default function CardProject({ item, index }) {
  return (
    <div className="flex justify-center group my-10">
      <Link className="relative w-[90%]" href={`/projet/${item.id}`}>
        <div className="w-full bg-white shadow-sm/5 overflow-hidden group-hover:opacity-65 transition-opacity duration-1000 lg:h-[375px] rounded-tr-3xl rounded-bl-3xl p-2">
          <div
            className={`rounded-tr-[1.125rem] h-fit pt-[10%] ${
              index % 2 === 0 ? "bg-purple3" : "bg-orange4"
            }`}
          >
            <div className="mx-auto shadow-sm rounded-t-2xl w-[80%] max-h-[130px] object-cover overflow-hidden group-hover:max-h-[0] transition-max-h ease-in-out duration-400">
              <Image
                className="w-full"
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
              />
            </div>
            <Image
              className="mx-auto w-[85%] -mt-2 group-hover:opacity-0 transition-all ease-in-out"
              src={`/icons/${
                index % 2 === 0
                  ? "line-card-purple.svg"
                  : "line-card-orange.svg"
              }`}
              alt="icône"
              width={100}
              height={100}
            />
            {/* <div className="hidden group-hover:flex gap-2 absolute top-10 ml-4 overflow-hidden">
              <span className="text-xs bg-orange4 rounded-full py-1 px-4">
                {item.tags[0]}
              </span>
              <span className="text-xs bg-purple3 rounded-full py-1 px-4">
                {item.year}
              </span>
            </div> */}
          </div>
          <div className="p-6 pt-14 bg-white rounded-t-[2.5rem] -mt-8">
            <h3 className="text-deepPurple font-black mb-4">{item.title}</h3>
            <p className="text-sm max-h-[100px] group-hover:max-h-[230px] group-hover:h-[230px] overflow-hidden">
              {item.summary}
            </p>
          </div>
        </div>
        {/* <div className="opacity-0 group-hover:opacity-100 whitespace-nowrap absolute left-1/2 -translate-x-1/2 bottom-6 bg-purple2 hover:bg-purple5 transition duration-300 text-white text-center text-sm font-bold py-4 w-[80%] rounded-xl">
          + d'informations
        </div>  */}

        {/* <div className="opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 bottom-6 bg-purple2 hover:-translate-y-1 hover:bg-purple5 ease-in-out transition duration-300 w-[90px] h-[40px] rounded-full flex justify-center">
          <Image
            src="/icons/more-white.svg"
            alt="icône"
            width={15}
            height={15}
          />
        </div> */}
      </Link>
    </div>
  );
}
