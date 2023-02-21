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

    p5.rotateX(60);

    p5.noFill();
    p5.stroke(255);

    for (let i = 0; i < 50; i++) {
      let r = p5.map(p5.sin(p5.frameCount / 2), -1, 1, 100, 200);
      var g = p5.map(i, 0, 50, 100, 200);
      var b = p5.map(p5.cos(p5.frameCount), -1, 1, 200, 100);

      p5.stroke(r, g, b);

      p5.rotate(p5.frameCount * 0.02);

      p5.beginShape();
      for (let j = 0; j < 370; j += 60) {
        let rad = i * 3;
        let x = rad * p5.cos(j);
        let y = rad * p5.sin(j);
        let z = p5.sin(p5.frameCount * 2 + i * 5) * 50;

        p5.vertex(x, y, z);
      }
      p5.endShape();
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
