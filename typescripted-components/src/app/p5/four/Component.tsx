"use client";

import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

class Particle {
  pos: p5Types.Vector;
  vel: p5Types.Vector;
  acc: p5Types.Vector;
  alpha: number;
  r: number;
  g: number;
  b: number;

  constructor(p5: p5Types) {
    this.pos = p5.createVector(p5.width / 2, p5.height / 2);
    this.vel = p5.createVector(0, 0);
    // Create a random acceleration
    this.acc = p5.createVector(p5.random(-1, 1), p5.random(-1, 1));
    this.alpha = 255;

    this.r = p5.map(this.pos.x, 0, p5.width, 255, 0);
    this.g = p5.map(this.pos.y, 0, p5.height, 0, 255);
    this.b = p5.map(
      p5.dist(p5.width / 2, p5.height / 2, this.pos.x, this.pos.y),
      0,
      p5.width / 2,
      0,
      255
    );
  }

  update(p5: p5Types) {
    let m = p5.map(p5.sin(p5.frameCount * 6), -1, 1, 0.4, 0.6);
    this.vel.mult(m);

    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.r = p5.map(this.pos.x, 0, p5.width, 255, 0);
    this.g = p5.map(this.pos.y, 0, p5.height, 0, 255);
    this.b = p5.map(
      p5.dist(p5.width / 2, p5.height / 2, this.pos.x, this.pos.y),
      0,
      p5.width / 2,
      0,
      255
    );

    if (p5.dist(p5.width / 2, p5.height / 2, this.pos.x, this.pos.y) > 300) {
      this.vel.mult(-10);
      this.alpha -= 50;
    }
  }

  show(p5: p5Types) {
    p5.noStroke();
    p5.fill(this.r, this.g, this.b, this.alpha);
    p5.ellipse(this.pos.x, this.pos.y, 2);
  }
}

type Props = {};

export default function Component({}: Props) {
  let p: Particle;
  let particles: Particle[] = [];

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
  };

  const draw = (p5: p5Types) => {
    p5.background(30);

    for (let i = 0; i < 5; i++) {
      p = new Particle(p5);
      particles.push(p);
    }

    for (let i = 0; i < particles.length; i++) {
      if (particles[i].alpha > 0) {
        particles[i].update(p5);
        particles[i].show(p5);
      } else {
        particles.splice(i, 1);
      }
    }

    console.log(particles.length);
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
