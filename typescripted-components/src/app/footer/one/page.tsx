import React from "react";
import Component from "./Component";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="h-screen">
      <Component />
    </div>
  );
}
