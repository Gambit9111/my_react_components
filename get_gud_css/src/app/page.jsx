import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <h1 className="pt-10 text-center text-2xl">
        Hello, welcome to styles factory
      </h1>
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <Link
          className="rounded border-2 border-white bg-black px-5 py-1 text-white"
          href="/login-forms/one"
        >
          Login-forms-1
        </Link>
        <Link
          className="rounded border-2 border-white bg-black px-5 py-1 text-white"
          href="/image-scroll/one"
        >
          Image-scroll-1
        </Link>
        <Link
          className="rounded border-2 border-white bg-black px-5 py-1 text-white"
          href="/buttons/one"
        >
          Buttons-1
        </Link>
        <Link
          className="rounded border-2 border-white bg-black px-5 py-1 text-white"
          href="/buttons/two"
        >
          Buttons-2
        </Link>
        <Link
          className="rounded border-2 border-white bg-black px-5 py-1 text-white"
          href="/cards/one"
        >
          Cards-1
        </Link>
        <Link
          className="rounded border-2 border-white bg-black px-5 py-1 text-white"
          href="/cards/two"
        >
          Cards-2
        </Link>
        <Link
          className="rounded border-2 border-white bg-black px-5 py-1 text-white"
          href="/cards/three"
        >
          Cards-3
        </Link>
        <Link
          className="rounded border-2 border-white bg-black px-5 py-1 text-white"
          href="/features/one"
        >
          Features-1
        </Link>
        <Link
          className="rounded border-2 border-white bg-black px-5 py-1 text-white"
          href="/features/two"
        >
          Features-2
        </Link>
      </div>
    </main>
  );
}
