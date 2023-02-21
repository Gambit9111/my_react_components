"use client";

import { useState } from "react";
import "./style.css";
import { images_array } from "../two/images";
import Image from "next/image";

type Props = {};

export default function Component({}: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const prevSlide = () => {
    const isFirstImage = currentImage === 0;
    const newIndex = isFirstImage ? images_array.length - 1 : currentImage - 1;
    setCurrentImage(newIndex);
  };

  return (
    <div className="group relative m-auto h-[780px] w-full max-w-[1400px] py-16 px-4">
      <Image
        src={images_array[currentImage].img}
        alt={images_array[currentImage].img}
        className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
      />
      {/* left icon */}
      <span
        onClick={prevSlide}
        className="absolute top-[45%] left-8 z-10 hidden rounded-full bg-orange-400/50 p-2 text-2xl group-hover:block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
      </span>
      {/* right icon */}
      <span className="absolute top-[45%] right-8 z-10 hidden rounded-full bg-orange-400/50 p-2 text-2xl group-hover:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
    </div>
  );
}
