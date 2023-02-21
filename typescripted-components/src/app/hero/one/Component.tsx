import React from "react";
import CtaButton from "@/app/buttons/one/Component";

type Props = {};

export default function Component({}: Props) {
  return (
    <section className="relative flex h-[50%] max-w-sm flex-col border-t border-black px-3 pt-9">
      <h3 className="z-10 font-medium">- Title Title</h3>
      <h1 className="z-10 pr-16 text-4xl font-extrabold leading-9">
        Our mission is to construct a better future
      </h1>
      <p className="z-10 pt-4 pr-8 pb-4 text-sm">
        We are the premier construction company with a simple purpose: to
        construct a better future. The company is known for shaping skylines and
        delivering iconic projects around the world
      </p>
      <span className="absolute top-0 right-0 z-0 h-[85%] w-3/4 border-b border-black bg-gray-400" />
      <CtaButton />
    </section>
  );
}
