import React from "react";
import Component from "./Component";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="mx-[20%] my-[10%]">
      <Component />
    </main>
  );
}
