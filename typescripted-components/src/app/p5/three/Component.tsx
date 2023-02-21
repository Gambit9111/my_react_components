"use client";

import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

type Props = {};

export default function Component({}: Props) {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(
      canvasParentRef
    );
    p5.angleMode(p5.DEGREES);
  };

  const draw = (p5: p5Types) => {
    p5.background(30);

    p5.noFill();
    p5.stroke(255);

    let x = p5.sin(p5.frameCount * 2) * 50;
    let y = p5.cos(p5.frameCount) * 50;
    let z = p5.sin(p5.frameCount * 4) * 50;

    p5.translate(x, y, z);

    p5.rotateX(p5.frameCount);
    p5.rotateY(p5.frameCount / 2);
    p5.rotateZ(p5.frameCount / 4);

    for (let i = 0; i < 360; i++) {
      p5.push();
      let r = p5.map(p5.sin(i + p5.frameCount), -1, 1, 200, 50);
      let g = p5.map(p5.sin(i + p5.frameCount / 3), -1, 1, 50, 200);
      let b = p5.map(p5.cos(i + p5.frameCount / 7), -1, 1, 200, 50);

      p5.stroke(r, g, b);

      p5.rotateY(i / 2);

      p5.ellipse(0, 0, 200, 200, 50);

      p5.pop();
    }
  };

  function windowResized(p5: p5Types) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  return (
    <>
      <Sketch setup={setup} draw={draw} windowResized={windowResized} />
    </>
  );
}
