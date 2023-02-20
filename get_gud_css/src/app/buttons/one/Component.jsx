"use client";

import React from "react";
import "./style.css";
import { useRef } from "react";
import Link from "next/link";

function Component() {
  const ref = useRef(null);

  function handleClick(e) {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    let color = "#" + Math.floor(Math.random() * 0xffffff).toString(16);

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    ripples.style.borderColor = color;
    ref.current.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 2000);
  }

  return (
    <div className="buttons-one flex items-center justify-center">
      <Link
        href="/buttons/one"
        ref={ref}
        onClick={(e) => handleClick(e)}
        className="btn"
      >
        Awesome
      </Link>
    </div>
  );
}

export default Component;
