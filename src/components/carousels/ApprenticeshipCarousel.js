"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ApprenticeshipCarousel({ data }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextOrPrev = () => {
    if (!swiperRef.current) return;
    if (activeIndex === 0) {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="lg:flex mb-2">
              <div>
                <h4 className="text-deepPurple font-bold text-xl">
                  {item.title}
                </h4>
                {item.content}
                <Link
                  className={`max-lg:absolute bottom-20 whitespace-nowrap left-1/2 -translate-x-1/2 max-lg:block text-center bg-purple2 text-beige0 py-3 lg:py-2 px-6 lg:px-8 mt-6 max-lg:rounded-r-full ${
                    !item.linkDiploma ? "rounded-r-full" : ""
                  } rounded-l-full hover:bg-purple2/80 transition-colors duration-300`}
                  href={item.linkProjects}
                >
                  Voir les projets
                </Link>
                {item.linkDiploma && (
                  <a
                    className="max-lg:absolute bottom-5 whitespace-nowrap left-1/2 -translate-x-1/2 max-lg:block text-center lg:-ml-4 bg-deepPurple text-beige0 py-3 lg:py-2 px-6 lg:px-8 mt-4 lg:mt-6 rounded-full hover:bg-purple5 transition-colors duration-300"
                    href={item.linkDiploma}
                    target="_blank"
                  >
                    Voir la certification
                  </a>
                )}
              </div>
              <Image
                onClick={goToNextOrPrev}
                className="max-lg:mx-auto w-[40px] h-[40px] my-auto cursor-pointer hover:animate-pulse"
                src="/icons/arrow-next.svg"
                alt="icône"
                width={100}
                height={100}
              />
              <Image
                className="hidden lg:block w-[20px] h-[300px] mx-6"
                src="/icons/line-y-2.svg"
                alt="icône"
                width={50}
                height={50}
              />
              <button
                onClick={goToNextOrPrev}
                className="max-lg:w-full max-lg:mb-35 text-deepPurple cursor-pointer font-bold text-xl lg:[writing-mode:vertical-rl] lg:rotate-180 whitespace-nowrap"
              >
                {item.btnText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
