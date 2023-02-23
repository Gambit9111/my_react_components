import React from "react";
import Component from "./Component";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="h-screen w-full pt-10">
      <Component />
    </main>
  );
}
