import "./style.css";

import Image from "next/image";
import Link from "next/link";

import codingImage from "../../../../public/cards/three/coding.png";
import creativityImage from "../../../../public/cards/three/creativity.png";
import rocketImage from "../../../../public/cards/three/rocket.png";

export default function Component() {
  return (
    <div className="cards-three">
      <div className="card">
        <div className="lines"></div>
        <div className="imgBx">
          <Image className="myImage" src={codingImage} alt="coding" />
        </div>
        <div className="content">
          <div className="details">
            <h2>Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link className="myLink" href="/cards/three">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="lines"></div>
        <div className="imgBx">
          <Image
            className="myImage"
            src={creativityImage}
            alt="creativityImage"
          />
        </div>
        <div className="content">
          <div className="details">
            <h2>Development</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link className="myLink" href="/cards/three">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="lines"></div>
        <div className="imgBx">
          <Image className="myImage" src={rocketImage} alt="rocketImage" />
        </div>
        <div className="content">
          <div className="details">
            <h2>Launch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link className="myLink" href="/cards/three">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
