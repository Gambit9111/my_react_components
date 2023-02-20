"use client";

import MenuButton from "./MenuButton";
import { useRef } from "react";
import "./style.css";

type Props = {};

export default function Component({}: Props) {
  const sideMenuRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    sideMenuRef?.current?.classList.toggle("active");
  }

  return (
    <>
      {/* Mobile screen */}
      <header className="z-10 flex h-20 w-full border-b border-black bg-white xl:hidden">
        <div className="flex w-1/2 items-center justify-center border-r border-black">
          <h2 className="text-xl font-bold uppercase tracking-tight">Logo</h2>
        </div>
        <nav className="flex w-1/2 items-center justify-center gap-6">
          {/* search logo */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3964 3.78941 12.4887 2.99921 10.4995 2.99921C8.5103 2.99921 6.60258 3.78941 5.196 5.19599C3.78942 6.60256 2.99922 8.51029 2.99922 10.4995C2.99922 12.4887 3.78942 14.3964 5.196 15.803C6.60258 17.2096 8.5103 17.9998 10.4995 17.9998C12.4887 17.9998 14.3964 17.2096 15.803 15.803Z"
              stroke="#150C07"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* world logo */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21C13.995 20.9999 15.9335 20.3372 17.511 19.116C19.0886 17.8948 20.2159 16.1843 20.716 14.253M12 21C10.005 20.9999 8.06654 20.3372 6.48898 19.116C4.91141 17.8948 3.78408 16.1843 3.284 14.253M12 21C14.485 21 16.5 16.97 16.5 12C16.5 7.03 14.485 3 12 3M12 21C9.515 21 7.5 16.97 7.5 12C7.5 7.03 9.515 3 12 3M20.716 14.253C20.901 13.533 21 12.778 21 12C21.0025 10.4521 20.6039 8.92999 19.843 7.582M20.716 14.253C18.0492 15.7314 15.0492 16.5048 12 16.5C8.838 16.5 5.867 15.685 3.284 14.253M3.284 14.253C3.09475 13.517 2.99933 12.76 3 12C3 10.395 3.42 8.887 4.157 7.582M12 3C13.5962 2.99933 15.1639 3.42336 16.5422 4.22856C17.9205 5.03377 19.0597 6.19117 19.843 7.582M12 3C10.4038 2.99933 8.83608 3.42336 7.45781 4.22856C6.07954 5.03377 4.94031 6.19117 4.157 7.582M19.843 7.582C17.6657 9.46793 14.8805 10.5041 12 10.5C9.002 10.5 6.26 9.4 4.157 7.582"
              stroke="#150C07"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {/* menu logo */}
          <MenuButton handleClick={handleClick} />
        </nav>
      </header>
      <div
        ref={sideMenuRef}
        className="sidebar-menu-one absolute top-0 h-screen bg-black xl:hidden"
      ></div>

      {/* Desktop screen */}
      <header className="hidden h-24 border-b border-black bg-white xl:flex wide:h-28">
        <div className="flex w-1/4 items-center justify-start border-r border-black px-8">
          <h2 className="text-2xl font-bold uppercase wide:text-3xl">Logo</h2>
        </div>
        <nav className="flex w-2/4 items-center justify-start gap-12 border-r border-black px-8 font-medium wide:text-lg">
          <h3>About Us</h3>
          <h3>Projects</h3>
          <h3>News</h3>
          <h3>Careers</h3>
          <h3>Contact</h3>
        </nav>
        <nav className="flex w-1/4 items-center justify-between px-8 font-medium wide:text-lg">
          <h3>Private clients</h3>
          <span className="flex gap-6 wide:gap-8">
            {/* search logo */}
            <svg
              className="wide:h-8 wide:w-8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3964 3.78941 12.4887 2.99921 10.4995 2.99921C8.5103 2.99921 6.60258 3.78941 5.196 5.19599C3.78942 6.60256 2.99922 8.51029 2.99922 10.4995C2.99922 12.4887 3.78942 14.3964 5.196 15.803C6.60258 17.2096 8.5103 17.9998 10.4995 17.9998C12.4887 17.9998 14.3964 17.2096 15.803 15.803Z"
                stroke="#150C07"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* world logo */}
            <svg
              className="wide:h-8 wide:w-8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C13.995 20.9999 15.9335 20.3372 17.511 19.116C19.0886 17.8948 20.2159 16.1843 20.716 14.253M12 21C10.005 20.9999 8.06654 20.3372 6.48898 19.116C4.91141 17.8948 3.78408 16.1843 3.284 14.253M12 21C14.485 21 16.5 16.97 16.5 12C16.5 7.03 14.485 3 12 3M12 21C9.515 21 7.5 16.97 7.5 12C7.5 7.03 9.515 3 12 3M20.716 14.253C20.901 13.533 21 12.778 21 12C21.0025 10.4521 20.6039 8.92999 19.843 7.582M20.716 14.253C18.0492 15.7314 15.0492 16.5048 12 16.5C8.838 16.5 5.867 15.685 3.284 14.253M3.284 14.253C3.09475 13.517 2.99933 12.76 3 12C3 10.395 3.42 8.887 4.157 7.582M12 3C13.5962 2.99933 15.1639 3.42336 16.5422 4.22856C17.9205 5.03377 19.0597 6.19117 19.843 7.582M12 3C10.4038 2.99933 8.83608 3.42336 7.45781 4.22856C6.07954 5.03377 4.94031 6.19117 4.157 7.582M19.843 7.582C17.6657 9.46793 14.8805 10.5041 12 10.5C9.002 10.5 6.26 9.4 4.157 7.582"
                stroke="#150C07"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </nav>
      </header>
    </>
  );
}
