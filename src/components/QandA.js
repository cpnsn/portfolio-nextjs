"use client";

import Image from "next/image";
import { useState } from "react";

export default function QandA({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 lg:w-[800px] mx-auto mt-8">
      {data.map((item, index) => (
        <div key={index} className="border rounded-2xl border-white border-4">
          <button
            className="w-full flex justify-between cursor-pointer rounded-2xl bg-gradient-to-r from-purple4 to-orange1 text-left py-6 px-8 lg:px-12 lg:text-xl text-deepPurple"
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          >
            {item.question}
            <Image
              src="/icons/arrow-down.svg"
              alt="{item.title}"
              width={30}
              height={30}
              className={`transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="py-8 px-8 lg:px-14 bg-white text-sm lg:text-base">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
