import type { StaticImageData } from "next/image";

import img1 from "../../../../../public/features/images-slider/two/img1.jpg";
import img2 from "../../../../../public/features/images-slider/two/img2.jpg";
import img3 from "../../../../../public/features/images-slider/two/img3.jpg";
import img4 from "../../../../../public/features/images-slider/two/img4.jpg";
import img5 from "../../../../../public/features/images-slider/two/img5.jpg";
import img6 from "../../../../../public/features/images-slider/two/img6.jpg";

type imges = {
    img: StaticImageData;
    id: number;
  };

export const images_array: imges[] = [
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
    {
      img: img4,
      id: 4,
    },
    {
      img: img5,
      id: 5,
    },
    {
      img: img6,
      id: 6,
    },
  ];