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
                priority
                className="myImage"
                id={`slide-${image.id}`}
                src={image.img}
                alt={`img${image.id}`}
              />
            );
          })}

          {/* <Image
            priority
            className="myImage"
            id="slide-1"
            src={img1}
            alt="img1"
          />
          <Image
            priority
            className="myImage"
            id="slide-2"
            src={img2}
            alt="img2"
          />
          <Image
            priority
            className="myImage"
            id="slide-3"
            src={img3}
            alt="img3"
          /> */}
        </div>
        <div className="slider-nav">
          {images_array.map((image) => {
            return (
              <a
                onClick={() => toggleClass(image.id)}
                href={`#slide-${image.id}`}
                className={showSlide === image.id ? "active" : ""}
              />
            );
          })}

          {/* //   {showSlide === 1 ? (
        //     <a
        //       onClick={() => toggleClass(1)}
        //       href="#slide-1"
        //       className="active"
        //     />
        //   ) : (
        //     <a onClick={() => toggleClass(1)} href="#slide-1" />
        //   )}

        //   {showSlide === 2 ? (
        //     <a
        //       onClick={() => toggleClass(2)}
        //       href="#slide-2"
        //       className="active"
        //     />
        //   ) : (
        //     <a onClick={() => toggleClass(2)} href="#slide-2" />
        //   )}

        //   {showSlide === 3 ? (
        //     <a
        //       onClick={() => toggleClass(3)}
        //       href="#slide-3"
        //       className="active"
        //     />
        //   ) : (
        //     <a onClick={() => toggleClass(3)} href="#slide-1" />
        //   )} */}
        </div>
      </div>
    </section>
  );
}
