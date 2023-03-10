import "../../../app/globals.css";
import Link from "next/link";

export interface IHeader extends React.ComponentPropsWithoutRef<"header"> {}

export default function Header({ className, ...headerProps }: IHeader) {
  return (
    <header
      {...headerProps}
      className={`flex w-full flex-row justify-between ${className}`}
    >
      <div className="m-5 space-x-5">
        <Link className="hover:underline" href="/">
          About
        </Link>
        <Link className="hover:underline" href="/">
          Store
        </Link>
      </div>
      <div className="m-5 space-x-5">
        <Link className="hidden hover:underline sm:inline" href="/">
          Gmail
        </Link>
        <Link className="hidden hover:underline sm:inline" href="/">
          Images
        </Link>
        <button className="border-1 rounded bg-blue-500 p-2 px-4 text-white sm:px-6">
          Sign In
        </button>
      </div>
    </header>
  );
}
