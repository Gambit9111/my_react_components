import React from "react";
import Component from "./Component";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex h-screen items-center justify-center">
      <Component />
    </main>
  );
}
