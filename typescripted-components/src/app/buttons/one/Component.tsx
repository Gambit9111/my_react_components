import React from "react";
import Link from "next/link";

type Props = {};

export default function Component({}: Props) {
  return (
    <>
      <Link
        href="/buttons/one"
        className="z-10 mx-auto flex items-center gap-2 font-medium"
      >
        <svg
          width="51"
          height="38"
          viewBox="0 0 51 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="19"
            cy="19"
            r="18.25"
            stroke="#150C07"
            stroke-width="1.5"
          />
          <path
            d="M50.5303 20.5303C50.8232 20.2374 50.8232 19.7626 50.5303 19.4697L45.7574 14.6967C45.4645 14.4038 44.9896 14.4038 44.6967 14.6967C44.4038 14.9896 44.4038 15.4645 44.6967 15.7574L48.9393 20L44.6967 24.2426C44.4038 24.5355 44.4038 25.0104 44.6967 25.3033C44.9896 25.5962 45.4645 25.5962 45.7574 25.3033L50.5303 20.5303ZM19 20.75H50V19.25H19V20.75Z"
            fill="#150C07"
          />
        </svg>
        Our locations
      </Link>
    </>
  );
}
