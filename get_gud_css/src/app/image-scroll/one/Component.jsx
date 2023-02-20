import React from "react";
import Image from "next/image";
import "./style.css";

import img1 from "../../../../public/image-scroll/one/img1.jpg";
import img2 from "../../../../public/image-scroll/one/img2.jpg";
import img3 from "../../../../public/image-scroll/one/img3.jpg";
import img4 from "../../../../public/image-scroll/one/img4.jpg";
import img5 from "../../../../public/image-scroll/one/img5.jpg";
import img6 from "../../../../public/image-scroll/one/img6.jpg";
import img7 from "../../../../public/image-scroll/one/img7.jpg";
import img8 from "../../../../public/image-scroll/one/img8.jpg";
import img9 from "../../../../public/image-scroll/one/img9.jpg";

function Component() {
  return (
    <div className="image-scroll-one">
      <div>
        <Image priority className="myImage" src={img1} alt={img1} />
        <Image priority className="myImage" src={img2} alt={img2} />
        <Image priority className="myImage" src={img3} alt={img3} />
        <Image priority className="myImage" src={img4} alt={img4} />
        <Image priority className="myImage" src={img5} alt={img5} />
        <Image priority className="myImage" src={img6} alt={img6} />
        <Image priority className="myImage" src={img7} alt={img7} />
        <Image priority className="myImage" src={img8} alt={img8} />
        <Image priority className="myImage" src={img9} alt={img9} />
      </div>
      <div>
        <Image priority className="myImage" src={img1} alt={img1} />
        <Image priority className="myImage" src={img2} alt={img2} />
        <Image priority className="myImage" src={img3} alt={img3} />
        <Image priority className="myImage" src={img4} alt={img4} />
        <Image priority className="myImage" src={img5} alt={img5} />
        <Image priority className="myImage" src={img6} alt={img6} />
        <Image priority className="myImage" src={img7} alt={img7} />
        <Image priority className="myImage" src={img8} alt={img8} />
        <Image priority className="myImage" src={img9} alt={img9} />
      </div>
    </div>
  );
}

export default Component;
