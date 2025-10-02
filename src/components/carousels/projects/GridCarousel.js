"use client";
import Link from "next/link";
import Image from "next/image";
import CardProject from "../../CardProject";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

export default function GridCarousel({ data }) {
  return (
    <div>
      <Swiper
        modules={[Grid, Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2, fill: "row" },
            slidesPerGroup: 6,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id} className="flex justify-center my-10">
            <CardProject item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4">
        <button className="custom-prev p-3 rounded-full border border-purple2 w-[50px] h-[50px] hover:-translate-y-1 ease-in-out duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-default disabled:translate-y-0">
          <Image
            src="/icons/arrow-prev.svg"
            alt="{item.title}"
            width={30}
            height={30}
          />
        </button>
        <button className="custom-next p-3 rounded-full border border-purple2 w-[50px] h-[50px] hover:-translate-y-1 ease-in-out duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-default disabled:translate-y-0">
          <Image
            src="/icons/arrow-next.svg"
            alt="{item.title}"
            width={30}
            height={30}
          />
        </button>
      </div>
      <Link
        className="block mx-auto w-fit bg-purple2 text-beige0 py-2 px-6 mt-6 rounded-full hover:bg-purple5 transition-colors duration-300"
        href="/portfolio"
      >
        Tous les projets
      </Link>
    </div>
  );
}
