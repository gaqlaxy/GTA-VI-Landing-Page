import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Practice = () => {
  const heroref = useRef(null);
  const hero2ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.5,
      defaults: { ease: "power3.out", duration: 1, opacity: 1 },
    });
    tl.to(heroref.current, { x: 100 });
    // tl.to(hero2ref.current, {
    //   x: -100,
    // }),
    //   "<";
    gsap.to(hero2ref.current, {
      x: -100,
      opacity: 1,
      ease: "power3.out",
      duration: 1,
      scrollTrigger: {
        trigger: hero2ref.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
        markers: true,
      },
    });
  });

  return (
    <>
      <section className="bg-white h-screen">
        <h1
          ref={heroref}
          className="flex items-center justify-center py-70 opacity-0"
        >
          Practice Section
        </h1>
      </section>
      <section className="bg-green-400 h-screen">
        <h1
          ref={hero2ref}
          className="flex items-center justify-center py-70 opacity-0"
        >
          Section 2
        </h1>
      </section>
    </>
  );
};

export default Practice;
