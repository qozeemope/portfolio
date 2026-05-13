"use client";

import { TypeAnimation } from "react-type-animation";

export default function HeroTitle() {
  return (
    <h3
      className="
        mt-4
        text-2xl
        md:text-3xl
        font-black
        text-text-secondary
      "
    >
      <TypeAnimation
        sequence={[
          "Full Stack Developer",
          2000,

          "Backend Engineer",
          2000,

          "Frontend Developer",
          2000,

          "Avid Reader",
          2000,

          "Software Engineer",
          2000,
        ]}
        cursor={true}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
    </h3>
  );
}