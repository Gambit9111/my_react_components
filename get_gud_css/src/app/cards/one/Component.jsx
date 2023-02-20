"use client";

import Image from "next/image";
import { useRef } from "react";

import profileImage from "../../../../public/profile-cards/one/profile.jpg";

import svg1 from "../../../../public/profile-cards/one/envelope.svg";
import svg2 from "../../../../public/profile-cards/one/link.svg";
import svg3 from "../../../../public/profile-cards/one/smile.svg";

import "./style.css";

function Component() {
  const cardRef = useRef(null);
  const toggleRef = useRef(null);

  function handleClick() {
    cardRef.current.classList.toggle("active");
  }

  return (
    <div ref={cardRef} className="profile-cards-one mb-40">
      <div className="user">
        <div className="imgBx">
          <Image
            priority
            className="myImage"
            src={profileImage}
            alt={profileImage}
          />
        </div>
        <div className="content">
          <h2>
            Someone Famous <br /> <span>Product Designer</span>
          </h2>
        </div>
        <span
          onClick={() => handleClick()}
          ref={toggleRef}
          className="toggle"
        ></span>
      </div>
      <ul className="contact">
        <li className="li1">
          <a href="#">
            <div className="iconBx">
              <Image className="w-8" src={svg1} alt={svg1} />
            </div>
            <p>someone@email.com</p>
          </a>
        </li>
        <li className="li2">
          <a href="#">
            <div className="iconBx">
              <Image className="w-8" src={svg2} alt={svg2} />
            </div>
            <p>someone@email.com</p>
          </a>
        </li>
        <li className="li3">
          <a href="#">
            <div className="iconBx">
              <Image className="w-8" src={svg3} alt={svg3} />
            </div>
            <p>someone@email.com</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Component;
