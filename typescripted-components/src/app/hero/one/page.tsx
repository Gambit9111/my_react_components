import React from "react";
import Component from "./Component";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <Component />
    </main>
  );
}
