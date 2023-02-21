"use client";

import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

type Props = {};

export default function Component({}: Props) {
  let s1: p5Types.Element;
  let p1: p5Types.Element;
  let s2: p5Types.Element;
  let p2: p5Types.Element;
  let s3: p5Types.Element;
  let p3: p5Types.Element;
  let s4: p5Types.Element;
  let p4: p5Types.Element;
  let s6: p5Types.Element;
  let p6: p5Types.Element;
  let s7: p5Types.Element;
  let p7: p5Types.Element;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);

    let s1 = p5.createSlider(1, 10, 5, 1).position(20, 750);
    let p1 = p5.createP("Number of Elements").position(20, 710);

    let s2 = p5.createSlider(2, 8, 5, 1).position(200, 750);
    let p2 = p5.createP("Number of parts").position(200, 710);

    let s3 = p5.createSlider(1, 10, 5, 1).position(380, 750);
    let p3 = p5.createP("Amount of fragments").position(380, 710);

    let s4 = p5.createSlider(1, 10, 5, 1).position(20, 850);
    let p4 = p5.createP("Minimum radius").position(200, 800);

    let s6 = p5.createSlider(1, 10, 5, 1).position(200, 850);
    let p6 = p5.createP("Maximum radius").position(200, 800);

    let s7 = p5.createSlider(0.1, 1, 0.1, 0.05).position(380, 850);
    let p7 = p5.createP("Rotation speed").position(380, 800);
  };

  const draw = (p5: p5Types) => {
    p5.background(150, 50, 20, 80);

    p5.translate(p5.width / 2, p5.height / 2);

    p5.noFill();

    p5.strokeWeight(8);

    for (let n = 0; n < s1.value(); n++) {
      p5.stroke(150 + n * 20, 100 + n * 5, 50);
      p5.beginShape();
      for (let i = 0; i < 360; i += s3.value()) {
        let rad = p5.map(
          p5.sin(i * s2.value() + p5.frameCount),
          -1,
          1,
          s4.value(),
          s6.value()
        );
        let x = rad * p5.cos(i);
        let y = rad * p5.sin(i);
        p5.vertex(x, y);
      }
      p5.endShape(p5.CLOSE);
      p5.rotate(frameCount * s6.value());
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
