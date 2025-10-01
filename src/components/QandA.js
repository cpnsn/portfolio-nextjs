"use client";

import { useState } from "react";

export default function QandA({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 w-[800px] mx-auto mt-8">
      {data.map((item, index) => (
        <div key={index} className="border border-white border-4">
          <button
            className="w-full rounded-2xl bg-gradient-to-r from-purple4 to-orange1 text-left py-6 px-12 text-xl text-deepPurple"
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          >
            {item.question}
          </button>
          {openIndex === index && (
            <div className="py-8 px-14 bg-white">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
