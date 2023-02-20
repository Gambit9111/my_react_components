import React from "react";

function MenuButton() {
  const buttonOne = document.querySelector(".button-one");
  return (
    <button
      onClick={() => {
        const isOpened = buttonOne.getAttribute("aria-expanded");
        if (isOpened === "false") {
          buttonOne.setAttribute("aria-expanded", "true");
        } else {
          buttonOne.setAttribute("aria-expanded", "false");
        }
      }}
      className="button-one"
      aria-controls="primary-navigation"
      aria-expanded="false"
    >
      <svg fill="#333" className="hamburger" viewBox="0 0 100 100" width="50">
        <rect
          className="line top"
          width="80"
          height="10"
          x="10"
          y="25"
          rx="5"
        ></rect>
        <rect
          rx="5"
          className="line middle"
          width="80"
          height="10"
          x="10"
          y="45"
        ></rect>
        <rect
          rx={5}
          className="line bottom"
          width="80"
          height="10"
          x="10"
          y="65"
        ></rect>
      </svg>
    </button>
  );
}

export default MenuButton;
