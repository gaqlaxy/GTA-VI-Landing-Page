import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    text: "Section 1 (Pinned and Visible)",
    color: "bg-amber-300",
  },
  {
    text: "Section 2 (Slides in and overlaps section 1)",
    color: "bg-green-300",
  },
  {
    text: "Section 3 (Slides in and overlaps section 2)",
    color: "bg-red-400",
  },
  {
    text: "Section 4 (Slides in and overlaps section 3)",
    color: "bg-purple-600",
  },
];

const Practice = () => {
  const sectionsRef = useRef([]);

  useGSAP(() => {
    sectionsRef.current.slice(0, -1).forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        pin: true,
        pinSpacing: false,
        markers: true,
      });
    });

    ScrollTrigger.refresh();
  });

  return (
    <>
      {sections.map(({ text, color }, index) => (
        <section
          key={text}
          ref={(element) => (sectionsRef.current[index] = element)}
          className={`${color} relative z-10`}
          style={{ zIndex: index + 1 }}
        >
          <h1 className="h-screen flex items-center justify-center px-6 text-center text-6xl font-bold tracking-tight">
            {text}
          </h1>
        </section>
      ))}
    </>
  );
};

export default Practice;
