"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import CardProject from "../../CardProject";
import { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function MobileOnlyCarousel({ data }) {
  const carouselId = useId();
  const prevClass = `custom-prev-${carouselId}`;
  const nextClass = `custom-next-${carouselId}`;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return isMobile ? (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((project, index) => (
          <SwiperSlide key={project.id} className="flex justify-center my-10">
            <CardProject item={project} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-4">
        <button
          className={`${prevClass} custom-prev p-3 rounded-full border border-purple2 w-[50px] h-[50px] hover:-translate-y-1 ease-in-out duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-default disabled:translate-y-0`}
        >
          <Image
            className=""
            src="/icons/arrow-prev.svg"
            alt="{item.title}"
            width={30}
            height={30}
          />
        </button>
        <button
          className={`${nextClass} custom-next p-3 rounded-full border border-purple2 w-[50px] h-[50px] hover:-translate-y-1 ease-in-out duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-default disabled:translate-y-0`}
        >
          <Image
            className=""
            src="/icons/arrow-next.svg"
            alt="{item.title}"
            width={30}
            height={30}
          />
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap w-full">
      {data.map((project, index) => (
        <div
          key={project.id}
          className="flex justify-center mb-10 w-[48%] lg:w-[33.3%]"
        >
          <CardProject item={project} index={index} />
        </div>
      ))}
    </div>
  );
}
