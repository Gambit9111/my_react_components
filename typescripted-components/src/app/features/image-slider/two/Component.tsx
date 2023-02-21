"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import "./style.css";
import { images_array } from "./images";

type Props = {};

export default function Component({}: Props) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="features-image-slider-two"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel"
      >
        {images_array.map((image) => (
          <motion.div key={image.id} className="item">
            <Image className="myImage" src={image.img} alt={image.id} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
