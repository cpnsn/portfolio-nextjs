"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

export default function HomeCarousel({ data }) {
  return (
    <Swiper
      modules={[Grid, Navigation]}
      navigation
      breakpoints={{
        0: {
          slidesPerView: 1,
          //   grid: { rows: 1 },
        },
        1024: {
          slidesPerView: 3,
          grid: { rows: 2, fill: "row" },
          slidesPerGroup: 6,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide
          key={item.id}
          className="flex justify-center my-10 overflow-hidden"
        >
          <div className="flex justify-center group">
            <Link className="relative w-[90%]" href={`/projet/${item.id}`}>
              <div className="w-full group-hover:opacity-65 transition-opacity duration-1000 lg:h-[375px] bg-white rounded-tr-3xl rounded-bl-3xl p-2">
                <div
                  className={`rounded-tr-[1.125rem] h-fit pt-[10%] ${
                    index % 2 === 0 ? "bg-purple3" : "bg-orange4"
                  }`}
                >
                  <div className="mx-auto w-[80%] max-h-[130px] object-cover overflow-hidden group-hover:max-h-[0] transition-max-h ease-in-out duration-400">
                    <Image
                      className="w-full"
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <Image
                    className="mx-auto w-[85%] -mt-2 group-hover:opacity-0 transition-all ease-in-out"
                    src={`/icons/${
                      index % 2 === 0
                        ? "line-card-purple.svg"
                        : "line-card-orange.svg"
                    }`}
                    alt="icon"
                    width={100}
                    height={100}
                  />
                  <div className="hidden group-hover:flex gap-2 absolute top-10 ml-4 overflow-hidden">
                    <span className="text-xs bg-orange4 rounded-full py-1 px-4">
                      {item.tags[0]}
                    </span>
                    <span className="text-xs bg-purple3 rounded-full py-1 px-4">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-14 bg-white rounded-t-[3rem] -mt-8">
                  <h3 className="text-deepPurple font-black mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm max-h-[100px] group-hover:max-h-[230px] group-hover:h-[230px] overflow-hidden">
                    {item.summary}
                  </p>
                </div>
              </div>
              {/* <div className="opacity-0 group-hover:opacity-100 whitespace-nowrap absolute left-1/2 -translate-x-1/2 bottom-6 bg-purple2 hover:bg-deepPurple transition duration-300 text-white text-center text-sm font-bold py-4 w-[80%] rounded-xl">
                + d'informations
              </div> */}

              {/* <div className="opacity-0 group-hover:opacity-100 whitespace-nowrap absolute left-1/2 -translate-x-1/2 bottom-6 bg-purple2 hover:-translate-y-1 ease-in-out transition delay-700 duration-300 text-white text-center text-4xl font-bold w-[90px] h-[40px] rounded-2xl flex justify-center">
                <Image
                  className=""
                  src="/icons/more-white.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
              </div> */}
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
