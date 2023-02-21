"use client";

import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

type Props = {};

export default function Component({}: Props) {
  let r1 = 50;
  let r2 = 50;

  let a1 = 0;
  let a2 = 0;

  let a1Inc: number;
  let a2Inc: number;

  let prevX: number;
  let prevY: number;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.background(30);

    r1 = p5.random(50, 100);
    r2 = p5.random(50, 100);

    a1Inc = p5.random(0.1, 5);
    a2Inc = p5.random(0.1, 5);
  };

  const draw = (p5: p5Types) => {
    p5.translate(p5.width / 2, p5.height / 2);
    p5.stroke(255);

    for (let i = 0; i < 100; i++) {
      let x1 = r1 * p5.cos(a1);
      let y1 = r1 * p5.sin(a1);

      let x2 = x1 + r2 * p5.cos(a2);
      let y2 = y1 + r2 * p5.sin(a2);

      let r = p5.map(p5.sin(p5.frameCount), -1, 1, 100, 200);
      var g = p5.map(p5.cos(p5.frameCount), -1, 1, 100, 200);
      var b = p5.map(p5.sin(p5.frameCount), -1, 1, 100, 200);

      p5.stroke(r, g, b);

      p5.line(prevX, prevY, x2, y2);

      prevX = x2;
      prevY = y2;

      a1 += a1Inc;
      a2 += a2Inc;
    }
  };

  function windowResized(p5: p5Types) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.background(30);
  }

  return (
    <>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </>
  );
}
