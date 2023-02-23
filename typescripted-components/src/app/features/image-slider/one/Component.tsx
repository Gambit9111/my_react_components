"use client";

import React from "react";
import Image from "next/image";
import img1 from "../../../../../public/features/images-slider/one/img1.avif";
import img2 from "../../../../../public/features/images-slider/one/img2.avif";
import img3 from "../../../../../public/features/images-slider/one/img3.avif";
import "./style.css";
import { useState } from "react";
import type { StaticImageData } from "next/image";

type Props = {};

type imges = {
  img: StaticImageData;
  id: number;
};

const images_array: imges[] = [
  {
    img: img1,
    id: 1,
  },
  {
    img: img2,
    id: 2,
  },
  {
    img: img3,
    id: 3,
  },
];

export default function Component({}: Props) {
  const [showSlide, setShowSlide] = useState(1);

  const toggleClass = (id: number) => {
    setShowSlide(id);
  };
  console.log(showSlide);

  return (
    <section className="features-image-slider-one p-8">
      <div className="slider-wrapper relative mx-auto max-w-[48rem]">
        <div className="slider">
          {images_array.map((image) => {
            return (
              <Image
                key={image.id}
                priority
                className="myImage"
                id={`slide-${image.id}`}
                src={image.img}
                alt={`img${image.id}`}
              />
            );
          })}
        </div>
        <div className="slider-nav">
          {images_array.map((image) => {
            return (
              <a
                key={image.id}
                onClick={() => toggleClass(image.id)}
                href={`#slide-${image.id}`}
                className={showSlide === image.id ? "active" : ""}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
